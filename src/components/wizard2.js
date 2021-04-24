import React, { useState } from 'react'
import InlineCard2 from './inlineCard2'

import styled from 'styled-components'

const links = [
  {
    name: 'Developers',
    sublinks: [
      {
        title: 'Q2 2021',
        // link: '/docs/v2/smart-contract-integration/trading-from-a-smart-contract/',
        description: '- Fair Presales \n- PancakeSwap listing \n- Listing (i.e. CoinGecko, CoinMarketCap) \n- Revamp website \n- Update whitepaper \n- Full-scale marketing campaign \n-Initiate charity initiatives',
        tag: 'reference',
        icon: '🗓️'
      },
      {
        title: 'Q3 2021',
        // link: '/docs/v2/smart-contract-integration/providing-liquidity/',
        description: '- Listing to exchange (i.e. Coinbase, Binance) \n- Setup of a base for LEAPers in Singapore \n- Expand core team to include a dedicated legal, finance & charity arm \n- Expand charity initiatives through community \n- R&D & Implementation of NFT',
        tag: 'tutorial',
        icon: '🗓️'
      },
      {
        title: 'Q4 2021',
        // link: '/docs/v2/core-concepts/flash-swaps/',
        description: '- Become a globally recognise charity institution \n- Incorporate charity into the core of LEAP \n- Full-on incorporation of various dApps including NFT & DeFi',
        tag: 'guide',
        icon: '🗓️'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  max-width: 1080px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  margin-left:4px
  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Wizard2 = () => {
  const [currentCategory] = useState('Developers')

  return (
    <StyledWizard>
      <CardWrapper>
        {links
          .filter(category => {
            return category.name === currentCategory
          })
          .map(category => {
            return category.sublinks.map((sublink, i) => {
              return (
                <InlineCard2
                  key={i}
                  title={sublink.title}
                  desc={sublink.description}
                  desc2 = {sublink.description2}
                  to={sublink.link}
                  tag={sublink.tag}
                  icon={sublink.icon}
                />
              )
            })
          })}
      </CardWrapper>
    </StyledWizard>
  )
}

export default Wizard2
