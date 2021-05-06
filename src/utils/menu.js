const menu = [
  {
    name: 'Leap Protocol',
    sublinks: [
      { 
        name: 'PancakeSwap',
        link: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x153aaf397d37a20Efa9dc46e4cBa42583cB0007A',
        description: 'PancakeSwap Decentralized Exchange'
      },
      { 
        name: 'Smart Contract',
        link: 'https://bscscan.com/address/0x153aaf397d37a20Efa9dc46e4cBa42583cB0007A#code',
        description: 'Leap Protocol Smart Contract Address',
      },
      { 
        name: 'Leap Token',
        link: 'https://bscscan.com/token/0x153aaf397d37a20Efa9dc46e4cBa42583cB0007A',
        description: 'Leap Token Address',
      },
      {
        name: 'White Paper',
        link: '/paper',
      }
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Discord', link: 'https://discord.gg/KFgS9QsTCg' },
      { name: 'Twitter', link: 'https://twitter.com/LeapProtocol' },
      { name: 'Reddit', link: 'https://www.reddit.com/r/LeapProtocol' },
      { name: 'Telegram', link: 'https://t.me/LeapNow' },
    ],
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'FAQ',
        link: '/faq',
      }
    ],
  },
]

module.exports = menu
