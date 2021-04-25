import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'
import Wizard from '../components/wizard'
import Wizard2 from '../components/wizard2'
import ProtocolData from '../components/protocolData'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardFade, CardNoise, StyledExternalLink } from '../components/utils'

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  /* max-width: 1200px; */
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  opacity: 0.2;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-height: 1220px;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 8rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
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

const StyledBannerImage = styled(Img)`
  width: 100%;
  height: 90%;
  min-width: 260px;
  max-width: 720px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledProductImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 220px;
  max-width: 220px;
  background-color: none;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
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

const StyledHeroImage = styled(Img)`
  width: 75vw;
  height: 360px;
  /* max-width: 960px; */
  background-color: none;
  border-radius: 12px;
  margin-top: 1rem;
  @media (max-width: 960px) {
    width: auto;
    height: 360px;
  }
`

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 6rem 0 1rem 0;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
    p {
      max-width: 450px;
    }
    h1 {
      max-width: 450px;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const MiniNewInfo = styled(Link)`
  transform: rotate(-2deg) scale(0.98);
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  height: 500px;
  transition: transform 0.3s ease;
  will-change: transform;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  :hover {
    transform: rotate(-1deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
  @media (max-width: 960px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
    transform: rotate(-2deg);
  }
`

const NewPill = styled.span`
  float: left;
  color: ${({ theme }) => theme.invertedTextColor};
  background: ${({ theme }) => theme.newPill};
  padding: 0.15rem 0.75rem;
  border-radius: 0.5em;
  text-align: center;
  margin: 0;
  margin-right: 1rem;
  font-weight: 400;
`

const LinkTitle = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      newYear: file(relativePath: { eq: "newyear.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      banner: file(relativePath: { eq: "Banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      swap: file(relativePath: { eq: "swap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socks: file(relativePath: { eq: "socks.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sybil: file(relativePath: { eq: "sybil.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tokenlists: file(relativePath: { eq: "tokenlists.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discord: file(relativePath: { eq: "discord.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      telegram: file(relativePath: { eq: "telegram.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reddit: file(relativePath: { eq: "reddit.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discourse: file(relativePath: { eq: "discourse.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thin: file(relativePath: { eq: "Leap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        <CardNoise />
        <CardBGImage isDark={isDark} />
        <CardFade />
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'Community driven fair token initiative'}
      />
      <StyledBody>
        <StyledTitle>
          {/*<StyledImgSection>
            <MiniNewInfo to="">
               <div style={{ display: 'flex', alignItems: 'center' }}>
                <NewPill>Announcing Uniswap V3</NewPill>
                More details ↗
              </div>
              <StyledHeroImage style={{position:"initial"}} fadeIn={false} fluid={data.thin.childImageSharp.fluid} />
            </MiniNewInfo>
          </StyledImgSection> */}
          <StyledBodyTitle>Community-Driven Fair Token Initiative</StyledBodyTitle>
          <StyledBodySubTitle style={{ marginBottom: '3rem' }}>
          <p>Guaranteed transparency and fairness for all users.</p>
          <p>LEAP is about the community; LEAP is about YOU.</p> 
          </StyledBodySubTitle>

          <StyledItemRow>
            <Button
              style={{
                background: `linear-gradient(128.17deg, #BD00FF -14.78%, #FF1F8A 110.05%)`,
                color: 'white',
                fontSize: '20px'
              }}
              to="/presales"
              as={Link}
            >
              Take the LEAP
            </Button>
            <Button
              outlined
              to="/paper"
              as={Link}
              style={{
                fontSize: '20px'
              }}
            >
              White Paper
            </Button>
            <Button
              outlined
              to="/faq"
              as={Link}
              style={{
                fontSize: '20px'
              }}
            >
              FAQ
            </Button>
            <Button
              outlined
              to="/presales"
              as={Link}
              style={{
                fontSize: '20px'
              }}
            >
              Presales
            </Button>
          </StyledItemRow>
        </StyledTitle>
        <ProtocolData />
        <ProductsSection data={data} props={props} />
        <DeveloperSection data={data} props={props} />
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const StyledSectionTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'GT Haptik Regular';
  margin-top: 8rem;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
    text-align: left;
  }
`

const DeveloperSection = props => {
  return (
    <>
      <StyledSectionTitle>Disclaimer</StyledSectionTitle>
      <StyledBodySubText style={{fontSize:"15px"}}>
       All Content shared on this website is for information purpose only and, 
       thus, should not be considered as financial advice. 
       Trading/Investing is risky and you should never invest more than you can afford to lose.
       Cryptocurrencies are risky. Never invest more than you can afford to lose. 
       Always seek professional advice before making any investment.
       You alone assume the sole responsibility of evaluating the merits and
       risks associated with the use of any information or other 
       Content on the Site before making any decisions based on such 
       information or other Content.
      </StyledBodySubText>
    </>
  )
}

const ProductsSection = props => {
  return (
    <>
      {/* <StyledSectionTitle>A suite of tools for a tokenized world.</StyledSectionTitle>
      <StyledBodySubText>
        We build state of the art open source apps to access the Uniswap protocol and contribute to the world of
        decentralized finance.
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://socks.uniswap.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.socks.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://info.uniswap.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.info.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://app.uniswap.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.swap.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://tokenlists.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.tokenlists.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://sybil.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.sybil.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow> */}

      <StyledSectionTitle>We advocate FAIR PLAY</StyledSectionTitle>
      {/* <StyledBodySubText>
        Check out the <Link to="/docs/v2/">documentation</Link>, the{' '}
        <Link to="/docs/v2/javascript-SDK/quick-start/">quick start</Link> or a guide below to integrate your project
        with thousands of tokens and billions in liquidity.
      </StyledBodySubText> */}
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard />
      </StyledSectionFlex>

      <StyledSectionTitle>Road Map</StyledSectionTitle>
      <StyledBodySubText>
        Every LEAP is a story, a journey, an united effort by the community.      
      </StyledBodySubText>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard2 />
      </StyledSectionFlex>

      {/* <StyledItemRow>
        <StyledExternalLink href={'https://discord.gg/FCfyBSbCU5'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.discord.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://twitter.com/Uniswap'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.twitter.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://gov.uniswap.org/'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.discourse.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://www.reddit.com/r/Uniswap'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.reddit.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink>
          Q2 2021
          <p>-Fair Presales</p>
          <p>-PancakeSwap listing</p>
          <p>-Listing (i.e. CoinGecko, CoinMarketCap)</p>
          <p>-Revamp website</p>
          <p>-Update whitepaper</p>
          <p>-Full-scale marketing campaign</p>
          <p>-Initiate charity initiatives</p>
        </StyledExternalLink>
        <StyledExternalLink>
          Q3 2021
          <p>-Listing to exchange (i.e. Coinbase, Binance)</p>
          <p>-Setup of a base for LEAPers in Singapore </p>
          <p>-Expand core team to include a dedicated legal, finance & charity arm</p>
          <p>-Expand charity initiatives through community</p>
          <p>-R&D & Implementation of NFT</p>
        </StyledExternalLink>
        <StyledExternalLink>
          Q4 2021
         <p>-Become a globally recognise charity institution</p>
         <p>-Incorporate charity into the core of LEAP</p>
         <p>-Full-on incorporation of various dApps including NFT & DeFi</p>
        </StyledExternalLink>
      </StyledItemRow> */}

      <StyledSectionTitle>Join Us</StyledSectionTitle>
      <StyledBodySubText>
        LEAP Protocol is a community driven token initiative that advocates fairness to all by ensuring a global fair launch, and automatic farming & burning during each trade. Join us and take the LEAP now.      
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://discord.gg/KFgS9QsTCg'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.discord.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={''} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.twitter.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://t.me/LeapNow'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.telegram.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://www.reddit.com/r/LeapProtocol/ '} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.reddit.childImageSharp.fluid} />
        </StyledExternalLink>
        </StyledItemRow>
    </>
  )
}
