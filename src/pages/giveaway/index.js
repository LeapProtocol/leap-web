import React, { useState, useEffect } from 'react';
import { TextField, Grid, Card, CardContent, CircularProgress, Dialog, List, ListItem, ListItemText, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import styled from 'styled-components'
import Layout from '../../layouts'
import SEO from '../../components/seo'
import { useDarkMode } from '../../contexts/Application'
import * as queryString from "query-string";
import Countdown from '../../components/countdown';
import { Button } from '../../components/button'
import { Link } from 'gatsby';


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


function SimpleDialog(props) {
  const { setShowDialog, showDialog, signerAddress, getProvider, setCopied } = props;
  const bscscanLink = "https://bscscan.com/address/" + signerAddress;

  const handleGetProvider = () => {
    setShowDialog(false);
    getProvider();
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(signerAddress);
    setCopied(true);
  }

  return (
    <Dialog onClose={() => setShowDialog(false)} aria-labelledby="simple-dialog-title" open={showDialog}>
      <List>
      <ListItem button>
          <ListItemText primary="Copy address" onClick={copyToClipboard}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="View on bscscan" onClick={() => window.open(bscscanLink)}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Change provider" onClick={handleGetProvider}/>
        </ListItem>
      </List>
    </Dialog>
  );
}

const App = props => {

  const [isDark] = useDarkMode();

  const theme = createMuiTheme({
    palette: {
      type: isDark ? "dark" : "light",
    }
  });
  
  const parsed = queryString.parse(props.location.search);
  const telegramLink = "https://t.me/PinkAvocadoBot?start=" + parsed.code;
  const airdropEndDate = Date.UTC(2021, 4, 31, 15, 0, 0);

  return (
    <Layout path={props.location.pathname}>
      <SEO
        title="Presales"
        path={props.location.pathname}
        description={'Leap Protocol presales will start 2nd May, 1am GMT+0'}
      />

      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>CONGRATULATIONS</StyledBodyTitle>

          <StyledBodySubTitle style={{ textAlign: "center"}}>
            You are now in line to win
          </StyledBodySubTitle>
          <StyledBodyTitle>10 BNB</StyledBodyTitle>

          <StyledBodySubTitle style={{ textAlign: "center"}}>
            <p>Claim Your Airdrop in</p>
            <Countdown date={airdropEndDate}/>
            <p>Get 500 LEAP tokens for free by simply clicking the button below to start participating in our giveaway!</p>
            {/* <a href={telegramLink} target="_blank" rel="noopener noreferrer">Telegram Link Here</a> */}

            <Button
              style={{
                background: `linear-gradient(128.17deg, #00ce81 -14.78%, #00b4ce 110.05%)`,
                color: 'white',
                fontSize: '30px'
              }}
              to={telegramLink}
              as={Link}
              target="_blank"
            >
              CLAIM MY SPOT
            </Button>
          </StyledBodySubTitle>
        </StyledTitle>

        <p>*Telegram required to start Giveaway Bot</p>
        <p>*Remember to update your BSC address via Giveaway Bot</p>
        <p>*Share to earn more participation chances</p>

      </StyledBody>

    </Layout>
  );
}

export default App;
