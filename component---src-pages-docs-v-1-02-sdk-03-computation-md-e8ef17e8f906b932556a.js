(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{nJKD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n,r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("aArQ"),s={},l=(n="Link",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:s},o=c.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(o,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"getmarketdetails",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#getmarketdetails","aria-label":"getmarketdetails permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"getMarketDetails"),Object(i.b)("p",null,"This function computes market details for the passed reserves data. Markets are defined as ETH","<",">","ERC20, ERC20","<",">","ETH, or ERC20","<",">","ERC20 pairs, where the first currency is the input and the second is the output. Reserves must be specified for both the input and output currency."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the case of ETH, ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," should be passed as the reserves data. ",Object(i.b)(l,{to:"/docs/v1/SDK/data/#getttokenreserves",mdxType:"Link"},Object(i.b)("inlineCode",{parentName:"p"},"getTokenReserves")),"formatted ERC20 reserves, or the requisite data can be fetched manually and passed in.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rates are calculated to 18 decimal places of precision."))),Object(i.b)("h2",{id:"function-signature",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#function-signature","aria-label":"function signature permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Function Signature"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"export function getMarketDetails(\n  optionalReservesInput: OptionalReserves,\n  optionalReservesOutput: OptionalReserves\n): MarketDetails\n")),Object(i.b)("h2",{id:"input-parameters",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#input-parameters","aria-label":"input parameters permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Input Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Parameter"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"optionalReservesInput"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"OptionalReserves")),Object(i.b)("td",{parentName:"tr",align:"left"},"Reserves data for the input currency.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"optionalReservesOutput"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"OptionalReserves")),Object(i.b)("td",{parentName:"tr",align:"left"},"Reserves data for the output currency.")))),Object(i.b)("h2",{id:"example-usage",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#example-usage","aria-label":"example usage permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Example Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const reserves: ChainIdOrProvider = await getTokenReserves(tokenAddress)\n\nconst marketDetails: MarketDetails = getMarketDetails(undefined, reserves) // ETH<>ERC20\n\n/*\n{\n  // market type\n  tradeType: 'ETH_TO_TOKEN',\n\n  // dummy ETH reserves\n  inputReserves: {\n    token: {\n      chainId: 1,\n      address: 'ETH',\n      decimals: 18\n    }\n  },\n\n  // normalized token reserves\n  outputReserves: <NormalizedReserves>,\n\n  // market rate calculated to 18 decimals of precision\n  marketRate: {\n    rate: <BigNumber>,        // x output / 1 input\n    rateInverted: <BigNumber> // x input / 1 output\n  }\n}\n*/\n")),Object(i.b)("h1",{id:"gettradedetails",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#gettradedetails","aria-label":"gettradedetails permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"getTradeDetails"),Object(i.b)("p",null,"This function computes trade details for the passed market data."),Object(i.b)("p",null,"-This function throws an error if the passed ","_","tradeAmount is greater than the amount of ETH/tokens in the relevant Uniswap exchange."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Trade amounts must be passed in non-decimal form ","(","where e.g. 1 ETH is represented as 1000000000000000000 wei",")",".")),Object(i.b)("h2",{id:"function-signature-1",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#function-signature-1","aria-label":"function signature 1 permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Function Signature"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"export function getTradeDetails(\n  tradeExact: TRADE_EXACT,\n  _tradeAmount: BigNumberish,\n  marketDetails: MarketDetails\n): TradeDetails\n")),Object(i.b)("h2",{id:"input-parameters-1",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#input-parameters-1","aria-label":"input parameters 1 permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Input Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Parameter"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"tradeExact"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"TRADE_EXACT")),Object(i.b)("td",{parentName:"tr",align:"left"},"Whether either the input or the output currency is the exact amount.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"_","tradeAmount"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"BigNumberish")),Object(i.b)("td",{parentName:"tr",align:"left"},"The amount to buy/sell ","(","of the output/input currency, depending on tradeExact",")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"marketDetails"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"MarketDetails")),Object(i.b)("td",{parentName:"tr",align:"left"},"Market details.")))),Object(i.b)("h2",{id:"example-usage-1",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#example-usage-1","aria-label":"example usage 1 permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Example Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const _purchaseAmount: BigNumber = new BigNumber('2.5')\nconst _decimals: number = 18\nconst tradeAmount: BigNumber = _purchaseAmount.multipliedBy(10 ** _decimals)\nconst marketDetails: MarketDetails = getMarketDetails(undefined, reserves) // ETH<>ERC20\n\n// buy exactly 2.5 of an 18 decimal ERC20 with ETH\nconst tradeDetails: TradeDetails = getTradeDetails(TRADE_EXACT.OUTPUT, tradeAmount, marketDetails)\n\n/*\n{\n  marketDetailsPre: <MarketDetails>,\n\n  marketDetailsPost: <MarketDetails>,\n\n  tradeType: 'ETH_TO_TOKEN',\n\n  tradeExact: 'OUTPUT',\n\n  inputAmount: {\n    token: <Token>,\n    amount: <BigNumber>\n  },\n\n  outputAmount: {\n    token: <Token>,\n    amount: <BigNumber>\n  },\n\n  // execution rate calculated to 18 decimals of precision\n  executionRate: {\n    rate: <BigNumber>         // x output / 1 input\n    rateInverted: <BigNumber> // x input / 1 output\n  },\n\n  // slippage between the pre- and post-trade market rates, in basis points, calculated to 18 decimals of precision\n  marketRateSlippage: <BigNumber>,\n\n  // slippage between the execution and pre-trade market rate, in basis points, calculated to 18 decimals of precision\n  executionRateSlippage: <BigNumber>\n}\n*/\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-1-02-sdk-03-computation-md-e8ef17e8f906b932556a.js.map