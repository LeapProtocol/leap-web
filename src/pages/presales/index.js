import React, { useState, useEffect } from 'react';
import { TextField, Grid, Card, CardContent, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';

import { Button } from '../../components/button'
import Leap from '../../contracts/Leap.json';
import { ethers, Contract , utils} from 'ethers';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useDarkMode } from '../../contexts/Application'
import styled from 'styled-components'
import Layout from '../../layouts'
import SEO from '../../components/seo'
import Countdown from '../../components/countdown';

let provider = undefined;
let signer = undefined;
let leap = undefined;
let web3 = undefined;

const useCardStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 8rem;
  margin-bottom: 2rem;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 960px) {
    margin-bottom: 1rem;
    padding: 2rem;
    padding-bottom: 4rem;
  }
`
const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  /* margin: 3rem 0 4rem 0; */
  margin: 0 auto;
  margin-bottom: 6rem;
  @media (max-width: 960px) {
    margin: 0 auto;
    /* margin: 3rem 0 1rem 0; */
    /* margin-bottom: 4rem; */
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 100px;
  margin: 4rem auto;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'GT Haptik Regular';
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }
  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`

const StyledBodySubTitle = styled.h2`
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  text-align: center;
  line-height: 160%;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem;
  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const App = props => {
  const isDark = useDarkMode();
  const [connection, setConnection] = useState(false);
  const [signerAddress, setSignerAddress] = useState(undefined);

  const [totalContribution, setTotalContribution] = useState(0);
  const [chainID, setChainID] = useState(undefined);

  const [allowBuy, setAllowBuy] = useState(false);
  const [presalesStart, setPresalesStart] = useState(false);
  const [presalesEnd, setPresalesEnd] = useState(false);
  const [capReached, setCapReached] = useState(false);
  const [indvCap, setIndvCap] = useState(false);

  // beneficiary's stats
  const [beneficiary, setBeneficiary] = useState(undefined);
  const [beneContributed, setBeneContributed] = useState(0);
  const [beneTokensAmount, setBeneTokensAmount] = useState(0);
  
  const [contribution, setContribution] = useState(0);
  const [valBeneficiary, setValBeneficiary] = useState(false);
  const [valContribution, setValContribution] = useState(false);

  const [buyButtonLoading, setBuyButtonLoading] = useState(false);
  const [refundButtonLoading, setRefundButtonLoading] = useState(false);
  const [withdrawButtonLoading, setWithdrawButtonLoading] = useState(false);

  const [txnLink, setTxnLink] = useState(undefined);
  const [txnHash, setTxnHash] = useState(undefined);

  // current wallet's stats
  const [contributed, setContributed] = useState(0);
  const [tokensAmount, setTokenAmounts] = useState(0);

  const cardClasses = useCardStyles();

  useEffect(() => {
    const load = setInterval(async () => {
      if (provider !== undefined) {
        const _chainID = (await provider.getNetwork())["chainId"];
        signer = provider.getSigner();
        const _address = await signer.getAddress();
        setSignerAddress(_address);

        if (_chainID === 97 || _chainID === 56){
          setConnection(true);
          
          if (leap === undefined) {
            leap = new Contract(
              Leap.networks[_chainID].address,
              Leap.abi,
              signer
            )
          }

          let _tokensAmount = await leap.getTokens(_address);
          _tokensAmount = utils.formatUnits(_tokensAmount, 9);

          let _contributed = await leap.getContribution(_address);
          _contributed = utils.formatEther(_contributed);

          let _totalContribution = await leap.weiRaised();
          _totalContribution = utils.formatEther(_totalContribution);

          const _presalesStart = await leap.getPresalesStarted();
          const _presalesEnd = await leap.getPresalesEnded();
          const _capReached = await leap.capReached();

          const _allowBuy = _presalesStart && !_presalesEnd;

          setTokenAmounts(_tokensAmount);
          setContributed(_contributed);
          setTotalContribution(_totalContribution);
          setPresalesStart(_presalesStart);
          setPresalesEnd(_presalesEnd);
          setAllowBuy(_allowBuy);
          setCapReached(_capReached);
          setConnection(true);
        } else {
          setConnection(false);
        }

      } else {
        setConnection(false);
      }
    }, 1000);

    return () => clearInterval(load);
  }, []);

  const getProvider = async (e) => {

    if (connection) {
      web3.clearCachedProvider();
    }

    let providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            // mainnet: https://bsc-dataseed.binance.org/
            // testnet: https://data-seed-prebsc-1-s1.binance.org:8545/
            56: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
          },
          network: 'binance',
          chainId: 56,
          infuraId: "1212",
        }
      }
    };

    const web3Modal = new Web3Modal({
      network: "binance",
      cacheProvider: false, 
      providerOptions, 
    });

    let _provider = await web3Modal.connect();
    web3 = web3Modal;
    provider = new ethers.providers.Web3Provider(_provider, "any");
    const _chainID = (await provider.getNetwork())["chainId"];
    signer = provider.getSigner();

    setChainID(_chainID);

  };

  const buyPresalesTokens = async (e) => {
    e.preventDefault();
    setBuyButtonLoading(true);
    const tx = await leap.buyPresalesTokens_f5J(beneficiary, {gasLimit: 500000, value: contribution});
    await tx.wait();

    let txLink;
    if (chainID === 97) {
      txLink = "https://testnet.bscscan.com/tx/" + tx.hash;
    } else if (chainID === 56) {
      txLink = "https://bscscan.com/tx/" + tx.hash;
    }

    let _tokensAmount = await leap.getTokens(beneficiary);
    _tokensAmount = utils.formatUnits(_tokensAmount, 9);

    let _contributed = await leap.getContribution(beneficiary);
    _contributed = utils.formatEther(_contributed);
    
    setBeneContributed(_contributed);
    setBeneTokensAmount(_tokensAmount);
    setTxnHash(tx.hash);
    setTxnLink(txLink);
    setBuyButtonLoading(false);
  }

  const withdrawPresalesTokens = async (e) => {
    e.preventDefault();
    setWithdrawButtonLoading(true);
    const tx = await leap.withdrawPresalesTokens_j21Y(beneficiary, {gasLimit: 500000});
    await tx.wait();

    let txLink;
    if (chainID === 97) {
      txLink = "https://testnet.bscscan.com/tx/" + tx.hash;
    } else if (chainID === 56) {
      txLink = "https://bscscan.com/tx/" + tx.hash;
    }

    setTxnHash(tx.hash);
    setTxnLink(txLink);
    setWithdrawButtonLoading(false);
  }

  const refundCapNotReached = async (e) => {
    e.preventDefault();
    setRefundButtonLoading(true);
    const tx = await leap.refund_cdB(beneficiary, {gasLimit: 500000});
    await tx.wait();

    let _tokensAmount = await leap.getTokens(beneficiary);
    _tokensAmount = utils.formatUnits(_tokensAmount, 9);

    let _contributed = await leap.getContribution(beneficiary);
    _contributed = utils.formatEther(_contributed);
    
    setBeneContributed(_contributed);
    setBeneTokensAmount(_tokensAmount);    

    let txLink;
    if (chainID === 97) {
      txLink = "https://testnet.bscscan.com/tx/" + tx.hash;
    } else if (chainID === 56) {
      txLink = "https://bscscan.com/tx/" + tx.hash;
    }

    setTxnHash(tx.hash);
    setTxnLink(txLink);
    setRefundButtonLoading(false);
  }

  const handleBeneficiary = async (e) => {
    let _beneficiary = e.target.value;

    const valid = utils.isAddress(_beneficiary);
    try {
      if (valid) {
        _beneficiary = utils.getAddress(_beneficiary);

        let _tokensAmount = await leap.getTokens(_beneficiary);
        _tokensAmount = utils.formatUnits(_tokensAmount, 9);

        let _contributed = await leap.getContribution(_beneficiary);
        _contributed = utils.formatEther(_contributed);
        
        setBeneContributed(_contributed);
        setBeneTokensAmount(_tokensAmount);
        setValBeneficiary(true);
        setBeneficiary(_beneficiary);
      } else {
        setValBeneficiary(false);
        setBeneficiary(0);
      }
    } catch {
      setValBeneficiary(false);
      setBeneficiary(0);
    }
  }

  const handleContribution = async (e) => {
    let _contribution = e.target.value;
    try {
      if (_contribution <= 0 || _contribution > 0.5) {
        setValContribution(false);
        setContribution(0);
        setIndvCap(false);
      } else {
        let _contributed = await leap.getContribution(beneficiary);
        _contributed = utils.formatEther(_contributed);
        const _individualCap = parseFloat(_contribution) + parseFloat(_contributed);
        if (_individualCap > 0.5) {
          setIndvCap(true);
        } else {
          setIndvCap(false);
        }
        _contribution = utils.parseEther(_contribution);
        
        setValContribution(true);
        setContribution(_contribution);
      }
    } catch {
      setValContribution(false);
      setContribution(0);
      setIndvCap(false);
    }
  }
  
  return (
    <Layout path={props.location.pathname}>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'A fully decentralized protocol for automated liquidity provision on Ethereum'}
      />

      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Presales</StyledBodyTitle>
          <Countdown date='2021-04-30T03:24:00'/>
        </StyledTitle>

        <Button
          style={{
            background: `#f5feff`,
            fontSize: '20px',
            color: '#00b4ce'
          }}
          onClick={getProvider}
        >
          {connection ? signerAddress :"Connect to Web3"}
        </Button>

        {(!presalesStart && connection) ? <Alert variant="outlined" severity="warning">Presales has not started</Alert> : " "}
        {presalesEnd ? <Alert variant="outlined" severity="warning">Presales has already ended</Alert> : " "}
        <br></br>
        <Alert variant="outlined" severity="info" fullWidth={true}>{"Current total contribution: " + totalContribution + "/50 BNB"}</Alert>

        <br></br>
        <Grid>
          <TextField
              onChange={handleBeneficiary}
              label="Beneficiary Address"
              placeholder="Enter a valid BNB address"
              variant="outlined"
              fullWidth={true}
          />

          <TextField
            onChange={handleContribution}
            label="Amount to Contribute (BNB)"
            placeholder="MAX: 0.5 BNB per address (cumulative)"
            variant="outlined"
            fullWidth={true}
            disabled={presalesEnd}
          />
        </Grid>
        <br></br>

        {indvCap ? <Alert severity="error">This transaction will fail because you exceeded individual limit. Enter a lower amount</Alert> : " "}

        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {buyButtonLoading ? 
            <CircularProgress/> : 
            <Button
              outlined
              disabled={!valContribution || !valBeneficiary || !allowBuy || !connection}
              onClick={buyPresalesTokens}
              style={{
                fontSize: '20px'
              }}
            >
              Buy Tokens
            </Button>
          }
          {" "}
          {withdrawButtonLoading ?
            <CircularProgress/> :
            <Button
              outlined
              disabled={!(presalesEnd && capReached) || !valBeneficiary || !connection}
              onClick={withdrawPresalesTokens}
              style={{
                fontSize: '20px'
              }}
            >
              Withdraw
            </Button>
          }
          {" "}
          {refundButtonLoading ?
            <CircularProgress/> :
            <Button
              outlined
              disabled={!(presalesEnd && !capReached) || !valBeneficiary || !connection}
              onClick={refundCapNotReached}
              style={{
                fontSize: '20px'
              }}
            >
              Refund
            </Button>
          }   
        </Grid>

        <br></br>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Card className={cardClasses.root}>
            <CardContent>
              <Typography className={cardClasses.title} color="textSecondary" gutterBottom>
                Your stats
              </Typography>
              <Typography variant="body2" component="p">
                  Tokens bought: {tokensAmount}
              </Typography>
              <Typography variant="body2" component="p">
                  BNB contributed: {contributed}
              </Typography>
            </CardContent>
          </Card>

          <Card className={cardClasses.root}>
            <CardContent>
              <Typography className={cardClasses.title} color="textSecondary" gutterBottom>
                {"Beneficiary's stat"}
              </Typography>
              <Typography variant="body2" component="p">
                  Tokens bought: {beneTokensAmount}
              </Typography>
              <Typography variant="body2" component="p">
                  BNB contributed: {beneContributed}
              </Typography>
            </CardContent>
          </Card>

        </Grid>

        {txnHash ? <Alert severity="info">{"Verify you transaction here"} {<a href={txnLink}>{txnHash}</a>}</Alert> : " "}

      </StyledBody>

    </Layout>
  );
}

export default App;
