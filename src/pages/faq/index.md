---
title: FAQ
---

<Info>Didn't find an answer? Join the <a href="https://discord.gg/FCfyBSbCU5">community Discord</a> to get support</Info>

# What is Uniswap?

Uniswap is a protocol for creating liquidity and trading ERC-20 tokens on [Ethereum](https://ethereum.org/en/what-is-ethereum/). It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading. Where it makes tradeoffs decentralization, censorship resistance, and security are prioritized. Uniswap is open-source software licensed under GPL.

If you want to dive into details check out the [docs](/docs/v2/).

# How do I use Uniswap?

First you'll need an [Ethereum Wallet](https://ethereum.org/en/wallets/) and some [ETH](https://ethereum.org/en/get-eth/). Once completed, head over to the [app](http://app.uniswap.org/) to start using the protocol to provide liquidity or swap tokens. Remember that each transaction on Ethereum costs ETH (this is called the ["gas fee"](https://www.youtube.com/watch?v=AJvzNICwcwc&feature=emb_title) and it's paid to miners to keep the network running).

# How does Uniswap work?

Uniswap is an [automated liquidity protocol](https://ethereum.org/en/get-eth/#dex). In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with eachother. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function `x*y=k` to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and updates those reserves every single time someone trades. Because the reserves are automated rebalanced a Uniswap pool can always be used to buy or sell a token without required a counterparty on the other side of your trade.

For a more in depth description. Check out the [How Uniswap works](/docs/v2/protocol-overview/how-uniswap-works/) from the documentation.

# Why does my transaction cost X?

Ethereum requires gas to execute each transaction. You can also check ETH gas station for the current prices required to complete transactions. Creating a Uniswap pool is a slightly costlier transaction because you are executing a more complex smart contract. Read more about how gas works in ethereum.

# My swap failed with code "EXPIRED", what happened?

If a swap takes more than 20 minutes to execute, the router is programmed to fail the transaction. This is to protect the user from extreme swings in prices that can occur while the transaction is pending. If this happens, your tokens will still be in your wallet, but the gas fees paid are not recoverable. To keep this from happening, use a high enough gas price to have your transaction mined in under 20 minutes. This usually falls under "Standard" or "Fast" in most gas price calculators.

# Why should we trust LEAP dev?
You shouldn’t trust us. Instead, you should trust the Smart Contract which will be published on bscscan (BSC blockchain explorer). We will hold AMA sessions and explain how the code works, and how everything is secure.

# Why Presales?
We need to raise a 50 BNB (for 200m LEAP) in order to provide liquidity to PancakeSwap. We choose to crowdfund this 50 BNB instead letting someone sponsor us directly as letting someone sponsor us directly would mean that the sponsor will own 200m (20%) of LEAP. Instead, by crowdfunding this 50 BNB, each wallet is limited to 0.5 BNB, 1m (0.1%) of LEAP. This minimized the risk of whales dumping.

# How can we be sure that the 100 BNB will not be stolen by dev?
You will be able to participate in the ICO by interacting directly with the smart contract via bscscan. The 50 BNB sent to LEAP smart contract will not be accessible in any way by the dev other than using it for LP or refunding (if crowdfund target is not reached). In future AMA sessions, we will walk you through the smart contract on how this is done.

# Uniswap tools and resources

[https://github.com/Uniswap/universe](https://github.com/Uniswap/universe)
