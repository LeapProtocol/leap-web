(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{M80l:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a("zLVn"),n=(a("q1tI"),a("7ljp")),r=a("aArQ"),c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=o("Info"),l=o("Link"),h={_frontmatter:c},d=r.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(d,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"Info"},"Uniswap V1, while still fully functional, is no longer under active development. Looking for ",Object(n.b)(l,{to:"/docs/v2/",mdxType:"Link"},"V2 documentation"),"?"),Object(n.b)("h1",{id:"formalized-model",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#formalized-model","aria-label":"formalized model permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Formalized Model"),Object(n.b)("p",null,"Uniswap liquidity pools are autonomous and use the Constant Product Market Maker ","(",Object(n.b)("inlineCode",{parentName:"p"},"x * y = k"),")",". This model was formalized and the smart contract implementation passed a lightweight formal verification."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf"},"Formalized Specification")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/runtimeverification/verified-smart-contracts/tree/uniswap/uniswap/results"},"Lightweight Verification"))),Object(n.b)("h2",{id:"create-exchange",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#create-exchange","aria-label":"create exchange permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Create Exchange"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"createExchange")," function is used to deploy exchange contracts for ERC20 tokens that do not yet have one."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"factory.methods.createExchange(tokenAddress).send()\n")),Object(n.b)("p",null,"Once an exchange is created the address can be retrieved with ",Object(n.b)("a",{parentName:"p",href:"../connect-to-uniswap/#get-exchange-address"},Object(n.b)("inlineCode",{parentName:"a"},"getExchange")),"."),Object(n.b)("h2",{id:"exchange-reserves",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#exchange-reserves","aria-label":"exchange reserves permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Exchange Reserves"),Object(n.b)("p",null,"Each exchange contract holds a liquidity reserve of ETH and its associated ERC20 token."),Object(n.b)("h3",{id:"eth-reserve",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#eth-reserve","aria-label":"eth reserve permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"ETH Reserve"),Object(n.b)("p",null,"The ETH reserve associated with an ERC20 token exchange is the ETH balance of the exchange smart contract."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"const ethReserve = web3.eth.getBalance(exchangeAddress)\n")),Object(n.b)("h3",{id:"erc20-reserve",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#erc20-reserve","aria-label":"erc20 reserve permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"ERC20 Reserve"),Object(n.b)("p",null,"The ERC20 reserve associated with an ERC20 token exchange is the ERC20 balance of the exchange smart contract."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"const tokenReserve = tokenContract.methods.balanceOf(exchangeAddress)\n")),Object(n.b)("h2",{id:"add-liquidity",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#add-liquidity","aria-label":"add liquidity permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Add Liquidity"),Object(n.b)("p",null,"Anyone who wants can join a Uniswap liquidity pool by calling the ",Object(n.b)("inlineCode",{parentName:"p"},"addLiquidity")," function."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"exchange.methods.addLiquidity(min_liquidity, max_tokens, deadline).send({ value: ethAmount })\n")),Object(n.b)("p",null,"Adding liquidity requires depositing an equivalent ",Object(n.b)("strong",{parentName:"p"},"value")," of ETH and ERC20 tokens into the ERC20 token’s associated exchange contract."),Object(n.b)("p",null,"The first liquidity provider to join a pool sets the initial exchange rate by depositing what they believe to be an equivalent value of ETH and ERC20 tokens. If this ratio is off, arbitrage traders will bring the prices to equilibrium at the expense of the initial liquidity provider."),Object(n.b)("p",null,"All future liquidity providers deposit ETH and ERC20’s using the exchange rate at the moment of their deposit. If the exchange rate is bad there is a profitable arbitrage opportunity that will correct the price."),Object(n.b)("h3",{id:"parameters",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#parameters","aria-label":"parameters permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Parameters"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"ethAmount")," sent to ",Object(n.b)("inlineCode",{parentName:"p"},"addLiquidity")," is the exact amount of ETH that will be deposited into the liquidity reserves. It should be 50% of the total value a liquidity provider wishes to deposit into the reserves."),Object(n.b)("p",null,"Since liquidity providers must deposit at the current exchange rate, the Uniswap smart contracts use ",Object(n.b)("inlineCode",{parentName:"p"},"ethAmount")," to determine the amount of ERC20 tokens that must be deposited. This token amount is the remaining 50% of total value a liquidity provider wishes to deposit. Since exchange rate can change between when a transaction is signed and when it is executed on Ethereum, ",Object(n.b)("inlineCode",{parentName:"p"},"max_tokens")," is used to bound the amount this rate can fluctuate. For the first liquidity provider, ",Object(n.b)("inlineCode",{parentName:"p"},"max_tokens")," is the exact amount of tokens deposited."),Object(n.b)("p",null,"Liquidity tokens are minted to track the relative proportion of total reserves that each liquidity provider has contributed. ",Object(n.b)("inlineCode",{parentName:"p"},"min_liquidity")," is used in combination with ",Object(n.b)("inlineCode",{parentName:"p"},"max_tokens")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ethAmount")," to bound the rate at which liquidity tokens are minted. For the first liquidity provider, ",Object(n.b)("inlineCode",{parentName:"p"},"min_liquidity")," does not do anything and can be set to 0."),Object(n.b)("p",null,"Transaction ",Object(n.b)("inlineCode",{parentName:"p"},"deadline")," is used to set a time after which a transaction can no longer be executed. This limits the “free option” problem, where Ethereum miners can hold signed transactions and execute them based off market movements."),Object(n.b)("h2",{id:"remove-liquidity",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#remove-liquidity","aria-label":"remove liquidity permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Remove Liquidity"),Object(n.b)("p",null,"Liquidity providers use the ",Object(n.b)("inlineCode",{parentName:"p"},"removeLiquidity")," function to withdraw their portion of the reserves."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"exchange.methods.removeLiquidity(amount, min_eth, min_tokens, deadline).send()\n")),Object(n.b)("p",null,"Liquidity is withdrawn at the same ratio as the reserves at the time of withdrawal. If the exchange rate is bad there is a profitable arbitrage opportunity that will correct the price."),Object(n.b)("h3",{id:"parameters-1",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#parameters-1","aria-label":"parameters 1 permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Parameters"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"amount")," specifies the number of liquidity tokens that will be burned. Dividing this amount by the total liquidity token supply gives the percentage of both the ETH and ER20 reserves the provider is withdrawing."),Object(n.b)("p",null,"Since exchange rate can change between when a transaction is signed and when it is executed on Ethereum, ",Object(n.b)("inlineCode",{parentName:"p"},"min_eth")," and ",Object(n.b)("inlineCode",{parentName:"p"},"min_tokens")," are used to bound the amount this rate can fluctuate."),Object(n.b)("p",null,"Same as in ",Object(n.b)("inlineCode",{parentName:"p"},"addLiquidity"),", ",Object(n.b)("inlineCode",{parentName:"p"},"deadline")," is used to set a time after which a transaction can no longer be executed."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-1-01-frontend-integration-02-pool-liquidity-md-08c5374b39dc7f6840f8.js.map