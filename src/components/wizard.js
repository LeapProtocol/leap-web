import React, { useState } from 'react'
import InlineCard from './inlineCard'

import styled from 'styled-components'


const links = [
  {
    name: 'Developers',
    sublinks: [
      {
        title: 'Automatic Farming',
        // link: '/docs/v2/smart-contract-integration/trading-from-a-smart-contract/',
        description: ' 10% of every transaction is redistributed to all token holders excluding Liquidity Pool. This prevents price of LEAP from decreasing.',
        tag: 'reference',
        icon: 'autofarming.png',
        isIconImage:true
      },
      {
        title: 'Automatic Burn',
        // link: '/docs/v2/smart-contract-integration/providing-liquidity/',
        description: '10% of total supply is allocated to the burn address 0x0000000000000000000000000000000000000000. Token redistributed to this is automatically burned.',
        tag: 'tutorial',
        icon: 'burner.png',
        isIconImage:true
      },

      {
        title: 'Charity',
        // link: '/docs/v2/core-concepts/flash-swaps/',
        description: 'Approx. 0.4% of every transaction gets redistributed to the charity address 0x0000000000000000000000000000000000000002. The LEAP community will decide how tokens redistributed to this address will be used',
        tag: 'guide',
        icon: 'charity.png',
        isIconImage:true
      },
      {
        title: 'Fair Launch',
        // link: '/docs/v2/core-concepts/oracles/',
        description: 'Presales and PancakeSwap listing time and date is broadcasted publicly. Nobody has additional advantage.',
        icon: 'fairlaunch.png',
        isIconImage:true
      },
      {
        title: 'Anti-Rug',
        // link: '/docs/v2/core-concepts/oracles/',
        description: 'Presales - Contribution capped at 0.5 BNB, 2 million LEAP token per wallet address.',
        description2:'PancakeSwap - Transaction limit of 1 million LEAP per transaction is applied for T+1. This prevents whales from owning huge percentage of LEAP.',
        icon: 'antirug.png',
        isIconImage:true
      },
      {
        title: 'Liquidity Pool',
        // link: '/docs/v2/core-concepts/oracles/',
        description: '60% of total supply is allocated to Liquidity pool along with all funds raised during Presales',
        description2: "Liquidity Pool is locked in LEAP's smart contract which can be verified by the public.",
        icon: 'liquiditypool.png',
        isIconImage:true
      }
    ]
  },
  {
    name: 'Traders',
    sublinks: [
      {
        title: 'Using the interface',
        link: '/docs/v2/user-guide/',
        description: 'The comprehensive web app user guide.',
        tag: 'tutorial'
      },
      {
        title: 'Glossary',
        link: '/docs/v2/protocol-overview/glossary',
        description: 'An overview of the terms used in these docs and on the interface',
        tag: 'reference'
      },
      {
        title: 'Understanding prices',
        link: '/docs/v2/swaps/pricing/',
        description: 'How the interface calculates prices for swaps.',
        tag: 'guide'
      }
    ]
  },
  {
    name: 'Liquidity',
    sublinks: [
      {
        title: 'Anatomy of a Uniswap Pool',
        link: '/docs/v2/pools',
        description: 'An overview of what a Uniswap liquidity pool.'
      },
      {
        title: 'Understanding Liquidity Returns',
        link: '/docs/v2/pools/understanding-returns',
        description: 'Udnerstand the economics of your returns.'
      }
    ]
  },
  {
    name: 'Tokens',
    sublinks: [
      {
        title: 'Core Concepts',
        link: '/docs/v2/protocol-overview',
        description: 'A high level technical overview of the Uniswap protocol.'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  max-width: 988px;
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

const Wizard = () => {
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
                <InlineCard
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

export default Wizard
