(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{cMh8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("aArQ"),r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=s("Link"),p=s("Github"),h={_frontmatter:r},l=i.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(l,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-are-prices-determined",style:{position:"relative"}},Object(o.b)("a",{parentName:"h1",href:"#how-are-prices-determined","aria-label":"how are prices determined permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How are prices determined?"),Object(o.b)("p",null,"As we learned in ",Object(o.b)("a",{parentName:"p",href:"/docs/v2/protocol-overview"},"Protocol Overview"),", each pair on Uniswap is actually underpinned by a liquidity pool. Liquidity pools are smart contracts that hold balances of two unique tokens and enforces rules around depositing and withdrawing them. The primary rule is the ",Object(o.b)("a",{parentName:"p",href:"/docs/v2/protocol-overview/glossary#constant-product-formula"},"constant product formula"),". When a token is withdrawn (bought), a proportional amount must be deposited (sold) to maintain the constant. The ratio of tokens in the pool, in combination with the constant product formula, ultimately determine the price that a swap executes at."),Object(o.b)("h1",{id:"how-uniswap-handles-prices",style:{position:"relative"}},Object(o.b)("a",{parentName:"h1",href:"#how-uniswap-handles-prices","aria-label":"how uniswap handles prices permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How Uniswap handles prices"),Object(o.b)("p",null,"In Uniswap V1, trades are always executed at the “best possible” price, calculated at execution time. Somewhat confusingly, this calculation is actually accomplished with one of two different formulas, depending on whether the trade specifies an exact ",Object(o.b)("em",{parentName:"p"},"input")," or ",Object(o.b)("em",{parentName:"p"},"output")," amount. Functionally, the difference between these two functions is miniscule, but the very existence of a difference increases conceptual complexity. Initial attempts to support both functions in V2 proved inelegant, and the decision was made to ",Object(o.b)("strong",{parentName:"p"},"not provide any pricing functions in the core"),". Instead, pairs directly check whether the invariant was satisfied (accounting for fees) after every trade. This means that rather than relying on a pricing function to ",Object(o.b)("em",{parentName:"p"},"also")," enforce the invariant, V2 pairs simply and transparently ensure their own safety, a nice separation of concerns. One downstream benefit is that V2 pairs will more naturally support other flavors of trades which may emerge, (e.g. trading to a specific price at execution time)."),Object(o.b)("p",null,"At a high level, in Uniswap V2, ",Object(o.b)("em",{parentName:"p"},"trades must be priced in the periphery"),". The good news is that the ",Object(o.b)(c,{to:"/docs/v2/smart-contracts/library",mdxType:"Link"},"library")," provides a variety of functions designed to make this quite simple, and all swapping functions in the ",Object(o.b)(c,{to:"/docs/v2/smart-contracts/library",mdxType:"Link"},"router")," are designed with this in mind."),Object(o.b)("h1",{id:"pricing-trades",style:{position:"relative"}},Object(o.b)("a",{parentName:"h1",href:"#pricing-trades","aria-label":"pricing trades permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Pricing Trades"),Object(o.b)("p",null,"When swapping tokens on Uniswap, it’s common to want to receive as many output tokens as possible for an ",Object(o.b)("em",{parentName:"p"},"exact input amount"),", or to pay as few input tokens as possible for an ",Object(o.b)("em",{parentName:"p"},"exact output amount"),". In order to calculate these amounts, a contract must look up the ",Object(o.b)("em",{parentName:"p"},"current reserves")," of a pair, in order to understand what the current price is. However, it is ",Object(o.b)("em",{parentName:"p"},"not safe to perform this lookup and rely on the results without access to an external price"),"."),Object(o.b)("p",null,"Say a smart contract naively wants to send 10 DAI to the DAI/WETH pair and receive as much WETH as it can get, given the current reserve ratio. If, when called, the naive smart contract simply looks up the current price and executes the trade, it is ",Object(o.b)("em",{parentName:"p"},"vulnerable to front-running and will likely suffer an economic loss"),". To see why, consider a malicious actor who sees this transaction before it is confirmed. They could execute a swap which dramatically changes the DAI/WETH price immediately before the naive swap goes through, wait for the naive swap to execute at a bad rate, and then swap to change the price back to what it was before the naive swap. This attack is fairly cheap and low-risk, and can typically be performed for a profit."),Object(o.b)("p",null,"To prevent these types of attacks, it’s vital to submit swaps ",Object(o.b)("em",{parentName:"p"},"that have access to knowledge about the “fair” price their swap should execute at"),". In other words, swaps need access to an ",Object(o.b)("em",{parentName:"p"},"oracle"),", to be sure that the best execution they can get from Uniswap is close enough to what the oracle considers the “true” price. While this may sound complicated, the oracle can be as simple as an ",Object(o.b)("em",{parentName:"p"},"off-chain observation of the current market price of a pair"),". Because of arbitrage, it’s typically the case that the ratio of the intra-block reserves of a pair is close to the “true” market price. So, if a user submits a trade with this knowledge in mind, they can ensure that the losses due to front-running are tightly bounded. This is how, for example, the Uniswap frontend ensure trade safety. It calculates the optimal input/output amounts given observed intra-block prices, and uses the router to perform the swap, which guarantees the swap will execute at a rate no less that ",Object(o.b)("inlineCode",{parentName:"p"},"x"),"% worse than the observed intra-block rate, where ",Object(o.b)("inlineCode",{parentName:"p"},"x")," is a user-specified slippage tolerance (0.5% by default)."),Object(o.b)("p",null,"There are, of course, other options for oracles, including ",Object(o.b)(c,{to:"/docs/v2/core-concepts/oracles",mdxType:"Link"},"native Uniswap V2 oracles"),"."),Object(o.b)("h2",{id:"exact-input",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#exact-input","aria-label":"exact input permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Exact Input"),Object(o.b)("p",null,"If you’d like to send an exact amount of input tokens in exchange for as many output tokens as possible, you’ll want to use ",Object(o.b)(c,{to:"/docs/v2/smart-contracts/router02/#getamountsout",mdxType:"Link"},"getAmountsOut"),". The equivalent SDK function is ",Object(o.b)(c,{to:"/docs/v2/SDK/pair/#getoutputamount",mdxType:"Link"},"getOutputAmount"),", or ",Object(o.b)(c,{to:"/docs/v2/SDK/trade/#minimumamountout-since-204",mdxType:"Link"},"minimumAmountOut")," for slippage calculations."),Object(o.b)("h2",{id:"exact-output",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#exact-output","aria-label":"exact output permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Exact Output"),Object(o.b)("p",null,"If you’d like to receive an exact amount of output tokens for as few input tokens as possible, you’ll want to use ",Object(o.b)(c,{to:"/docs/v2/smart-contracts/router02/#getamountsin",mdxType:"Link"},"getAmountsIn"),". The equivalent SDK function is ",Object(o.b)(c,{to:"/docs/v2/SDK/pair/#getinputamount",mdxType:"Link"},"getInputAmount"),", or ",Object(o.b)(c,{to:"/docs/v2/SDK/trade/#maximumamountin-since-204",mdxType:"Link"},"maximumAmountIn")," for slippage calculations."),Object(o.b)("h2",{id:"swap-to-price",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#swap-to-price","aria-label":"swap to price permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Swap to Price"),Object(o.b)("p",null,"For this more advanced use case, see ",Object(o.b)(p,{href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol",mdxType:"Github"},"ExampleSwapToPrice.sol"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-03-advanced-topics-02-pricing-md-3fc3d2728f8ec2c85dbc.js.map