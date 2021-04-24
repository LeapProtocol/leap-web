(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"0Bi/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var n,o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("aArQ"),i={},c=(n="Link",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),d={_frontmatter:i},h=s.a;function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(h,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Looking for a ",Object(r.b)(c,{to:"/docs/v2/javascript-SDK/quick-start",mdxType:"Link"},"quickstart"),"?"),Object(r.b)("p",null,"While the SDK is fully self-contained, there are two cases where it needs ",Object(r.b)("em",{parentName:"p"},"on-chain data")," to function.\nThis guide will detail both of these cases, and offer some strategies that you can use to fetch this data."),Object(r.b)("h1",{id:"case-1-tokens",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#case-1-tokens","aria-label":"case 1 tokens permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Case 1: Tokens"),Object(r.b)("p",null,"Unsurprisingly, the SDK needs some notion of an ERC-20 token to be able to function. This immediately raises the question of ",Object(r.b)("em",{parentName:"p"},"where data about tokens comes from"),"."),Object(r.b)("p",null,"As an example, let’s try to represent DAI in a format the SDK can work with. To do so, we need at least 3 pieces of data: a ",Object(r.b)("strong",{parentName:"p"},"chainId"),", a ",Object(r.b)("strong",{parentName:"p"},"token address"),", and how many ",Object(r.b)("strong",{parentName:"p"},"decimals")," the token has. We also may be interested in the ",Object(r.b)("strong",{parentName:"p"},"symbol")," and/or ",Object(r.b)("strong",{parentName:"p"},"name")," of the token."),Object(r.b)("h2",{id:"identifying-data",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#identifying-data","aria-label":"identifying data permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Identifying Data"),Object(r.b)("p",null,"The first two pieces of data — ",Object(r.b)("strong",{parentName:"p"},"chainId")," and ",Object(r.b)("strong",{parentName:"p"},"token address")," — must be provided by us. Thinking about it, this makes sense, as there’s really no other way to unambiguously identify a token."),Object(r.b)("p",null,"So, in the case of DAI, we know that the ",Object(r.b)("strong",{parentName:"p"},"chainId")," is ",Object(r.b)("inlineCode",{parentName:"p"},"1")," (we’re on mainnet), and the ",Object(r.b)("strong",{parentName:"p"},"token address")," is ",Object(r.b)("inlineCode",{parentName:"p"},"0x6B175474E89094C44Da98b954EedeAC495271d0F"),". Note that it’s very important to externally verify token addresses. Don’t use addresses from sources you don’t trust!"),Object(r.b)("h2",{id:"required-data",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#required-data","aria-label":"required data permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Required Data"),Object(r.b)("p",null,"The next piece of data we need is ",Object(r.b)("strong",{parentName:"p"},"decimals"),"."),Object(r.b)("h3",{id:"provided-by-the-user",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#provided-by-the-user","aria-label":"provided by the user permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Provided by the User"),Object(r.b)("p",null,"One option here is to simply pass in the correct value, which we may know is ",Object(r.b)("inlineCode",{parentName:"p"},"18"),". At this point, we’re ready to represent DAI as a ",Object(r.b)(c,{to:"/docs/v2/SDK/token",mdxType:"Link"},"Token"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token } from '@uniswap/sdk'\n\nconst chainId = ChainId.MAINNET\nconst tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // must be checksummed\nconst decimals = 18\n\nconst DAI = new Token(chainId, tokenAddress, decimals)\n")),Object(r.b)("p",null,"If we don’t know or don’t want to hardcode the value, we could look it up ourselves via any method of retrieving on-chain data in a function that looks something like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId } from '@uniswap/sdk'\n\nasync function getDecimals(chainId: ChainId, tokenAddress: string): Promise<number> {\n  // implementation details\n}\n")),Object(r.b)("h3",{id:"fetched-by-the-sdk",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#fetched-by-the-sdk","aria-label":"fetched by the sdk permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Fetched by the SDK"),Object(r.b)("p",null,"If we don’t want to provide or look up the value ourselves, we can ask the SDK to look it up for us with ",Object(r.b)(c,{to:"/docs/v2/SDK/fetcher#fetchtokendata",mdxType:"Link"},"Fetcher.fetchTokenData"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, Fetcher } from '@uniswap/sdk'\n\nconst chainId = ChainId.MAINNET\nconst tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // must be checksummed\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst DAI: Token = await Fetcher.fetchTokenData(chainId, tokenAddress)\n")),Object(r.b)("p",null,"By default, this method will use the ",Object(r.b)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/providers/#providers-getDefaultProvider"},"default provider defined by ethers.js"),".\nIf you’re already using ethers.js in your application, you may pass in your provider as a 3rd argument.\nIf you’re using another library, you’ll have to fetch the data separately."),Object(r.b)("h2",{id:"optional-data",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#optional-data","aria-label":"optional data permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Optional Data"),Object(r.b)("p",null,"Finally, we can talk about ",Object(r.b)("strong",{parentName:"p"},"symbol")," and ",Object(r.b)("strong",{parentName:"p"},"name"),". Because these fields aren’t used anywhere in the SDK itself, they’re optional, and can be provided if you want to use them in your application. However, the SDK will not fetch them for you, so you’ll have to provide them:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token } from '@uniswap/sdk'\n\nconst DAI = new Token(\n  ChainId.MAINNET,\n  '0x6B175474E89094C44Da98b954EedeAC495271d0F',\n  18,\n  'DAI',\n  'Dai Stablecoin'\n)\n")),Object(r.b)("p",null,"or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, Fetcher } from '@uniswap/sdk'\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst DAI = await Fetcher.fetchTokenData(\n  ChainId.MAINNET,\n  '0x6B175474E89094C44Da98b954EedeAC495271d0F',\n  undefined,\n  'DAI',\n  'Dai Stablecoin'\n)\n")),Object(r.b)("h1",{id:"case-2-pairs",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#case-2-pairs","aria-label":"case 2 pairs permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Case 2: Pairs"),Object(r.b)("p",null,"Now that we’ve explored how to define a token, let’s talk about pairs. To read more about what Uniswap pairs are, see ",Object(r.b)(c,{to:"/docs/v2/smart-contracts/pair",mdxType:"Link"},"Pair"),"."),Object(r.b)("p",null,"As an example, let’s try to represent the DAI-WETH pair."),Object(r.b)("h2",{id:"identifying-data-1",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#identifying-data-1","aria-label":"identifying data 1 permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Identifying Data"),Object(r.b)("p",null,"Each pair consists of two tokens (see previous section). Note that WETH used by the router is ",Object(r.b)(c,{to:"/docs/v2/SDK/other-exports/#weth",mdxType:"Link"},"exported by the SDK"),"."),Object(r.b)("h2",{id:"required-data-1",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#required-data-1","aria-label":"required data 1 permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Required Data"),Object(r.b)("p",null,"The data we need is the ",Object(r.b)("em",{parentName:"p"},"reserves")," of the pair. To read more about reserves, see ",Object(r.b)(c,{to:"/docs/v2/smart-contracts/pair#getreserves",mdxType:"Link"},"getReserves"),"."),Object(r.b)("h3",{id:"provided-by-the-user-1",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#provided-by-the-user-1","aria-label":"provided by the user 1 permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Provided by the User"),Object(r.b)("p",null,"One option here is to simply pass in values which we’ve fetched ourselves to create a ",Object(r.b)(c,{to:"/docs/v2/SDK/pair",mdxType:"Link"},"Pair"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH, Pair, TokenAmount } from '@uniswap/sdk'\n\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\nasync function getPair(): Promise<Pair> {\n  const pairAddress = Pair.getAddress(DAI, WETH[DAI.chainId])\n\n  const reserves = [/* use pairAddress to fetch reserves here */]\n  const [reserve0, reserve1] = reserves\n\n  const tokens = [DAI, WETH[DAI.chainId]]\n  const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]]\n\n  const pair = new Pair(new TokenAmount(token0, reserve0), new TokenAmount(token1, reserve1))\n  return pair\n}\n")),Object(r.b)("p",null,"Note that these values can change as frequently as every block, and should be kept up-to-date."),Object(r.b)("h3",{id:"fetched-by-the-sdk-1",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#fetched-by-the-sdk-1","aria-label":"fetched by the sdk 1 permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Fetched by the SDK"),Object(r.b)("p",null,"If we don’t want to look up the value ourselves, we can ask the SDK to look them up for us with ",Object(r.b)(c,{to:"/docs/v2/SDK/fetcher#fetchpairdata",mdxType:"Link"},"Fetcher.fetchPairData"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH, Fetcher } from '@uniswap/sdk'\n\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])\n")),Object(r.b)("p",null,"By default, this method will use the ",Object(r.b)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/providers/#providers-getDefaultProvider"},"default provider defined by ethers.js"),". If you’re already using ethers.js in your application, you may pass in your provider as a 3rd argument. If you’re using another library, you’ll have to fetch the data separately."),Object(r.b)("p",null,"Note that these values can change as frequently as every block, and should be kept up-to-date."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-05-javascript-sdk-02-fetching-data-md-67dfb0e6c89c4c50b442.js.map