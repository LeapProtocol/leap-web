(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{ZdTG:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var n,i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("aArQ"),c={},s=(n="Github",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={_frontmatter:c},p=o.a;function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(p,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To build a price oracle on Uniswap V2, you must first understand the\nrequirements for your use case. Once you understand the kind of price\naverage you require, it is a matter of storing the cumulative price\nvariable from the pair as often as necessary, and computing\nthe average price using two or more observations of the\ncumulative price variables."),Object(r.b)("h1",{id:"understanding-requirements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#understanding-requirements","aria-label":"understanding requirements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Understanding requirements"),Object(r.b)("p",null,"To understand your requirements, you should first research the answer to the\nfollowing questions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Is data freshness important?\nI.e.: must the price average include the current price?"),Object(r.b)("li",{parentName:"ul"},"Are recent prices more important than historical prices?\nI.e.: is the current price given more weight than historical prices?")),Object(r.b)("p",null,"Note your answers for the following discussion."),Object(r.b)("h1",{id:"oracle-strategies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#oracle-strategies","aria-label":"oracle strategies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Oracle Strategies"),Object(r.b)("h2",{id:"fixed-windows",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#fixed-windows","aria-label":"fixed windows permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Fixed windows"),Object(r.b)("p",null,"In the case where data freshness is not important and recent prices\nare weighted equally with historical prices, it is enough to\nstore the cumulative price once per period (e.g. once per 24 hours.)"),Object(r.b)("p",null,"Computing the average price over these data points gives you ‘fixed windows’,\nwhich can be updated after the lapse of each period. We wrote\nan example oracle of this kind\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleOracleSimple.sol"},"here"),"."),Object(r.b)(s,{href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleOracleSimple.sol",mdxType:"Github"},"ExampleOracleSimple.sol"),Object(r.b)("p",null,"This example does not limit the maximum size of the fixed window, i.e.\nit only requires that the window size is greater than 1 period (e.g. 24 hours)."),Object(r.b)("h2",{id:"moving-averages",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#moving-averages","aria-label":"moving averages permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Moving averages"),Object(r.b)("p",null,"In the case where data freshness is important, you can use a sliding\nwindow in which the cumulative price variable is measured more often\nthan once per period."),Object(r.b)("p",null,"There are at least\n",Object(r.b)("a",{parentName:"p",href:"https://www.investopedia.com/terms/m/movingaverage.asp#types-of-moving-averages"},"two kinds of moving averages"),"\nthat you can compute using the Uniswap cumulative price variable."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.investopedia.com/terms/s/sma.asp"},"Simple moving averages"),"\ngive equal weight to each price measurement. We have built\nan example of a sliding window oracle\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol"},"here"),"."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.investopedia.com/terms/e/ema.asp"},"Exponential moving averages"),"\ngive more weight to the most recent price measurements. We do not yet have an example written for this type of oracle."),Object(r.b)("p",null,"You may wish to use exponential moving averages where recent prices\nare more important than historical prices, e.g. in case of liquidations. However, note that\nputting more weight on recent prices makes the oracle cheaper to manipulate\nthan weighting all price measurements equally."),Object(r.b)("h2",{id:"computing-average-prices",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#computing-average-prices","aria-label":"computing average prices permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Computing average prices"),Object(r.b)("p",null,"To compute the average price given two cumulative price observations, take the difference between\nthe cumulative price at the beginning and end of the period, and\ndivide by the elapsed time between them in seconds. This will produce a\n",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fixed-point_arithmetic#Notation"},"fixed point unsigned Q112x112"),"\nnumber that represents the price of one asset relative to the other. This number is represented as a ",Object(r.b)("inlineCode",{parentName:"p"},"uint224")," where\nthe upper 112 bits represent the integer amount, and the lower 112 bits represent the fractional amount."),Object(r.b)("p",null,"Pairs contain both ",Object(r.b)("inlineCode",{parentName:"p"},"price0CumulativeLast")," and ",Object(r.b)("inlineCode",{parentName:"p"},"price1CumulativeLast"),", which are ratios of reserves\nof ",Object(r.b)("inlineCode",{parentName:"p"},"token1"),"/",Object(r.b)("inlineCode",{parentName:"p"},"token0")," and ",Object(r.b)("inlineCode",{parentName:"p"},"token0"),"/",Object(r.b)("inlineCode",{parentName:"p"},"token1")," respectively. I.e. the price of ",Object(r.b)("inlineCode",{parentName:"p"},"token0")," is expressed in terms of\n",Object(r.b)("inlineCode",{parentName:"p"},"token1"),"/",Object(r.b)("inlineCode",{parentName:"p"},"token0"),", while the price of ",Object(r.b)("inlineCode",{parentName:"p"},"token1")," is expressed in terms of ",Object(r.b)("inlineCode",{parentName:"p"},"token0"),"/",Object(r.b)("inlineCode",{parentName:"p"},"token1"),"."),Object(r.b)("h1",{id:"getting-the-latest-cumulative-price",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#getting-the-latest-cumulative-price","aria-label":"getting the latest cumulative price permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Getting the latest cumulative price"),Object(r.b)("p",null,"If you wish to compute the average price between a historical price cumulative observation and the current cumulative\nprice, you should use the cumulative price values from the current block. If the cumulative price has not been updated\nin the current block, e.g. because there has not been any liquidity event (",Object(r.b)("inlineCode",{parentName:"p"},"mint"),"/",Object(r.b)("inlineCode",{parentName:"p"},"burn"),"/",Object(r.b)("inlineCode",{parentName:"p"},"swap"),") on the pair in the current\nblock, you can compute the cumulative price counterfactually."),Object(r.b)("p",null,"We provide a library for use in oracle contracts that has the method\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/libraries/UniswapV2OracleLibrary.sol#L16"},Object(r.b)("inlineCode",{parentName:"a"},"UniswapV2OracleLibrary#currentCumulativePrices")),"\nfor getting the cumulative price as of the current block.\nThe current cumulative price returned by this method is computed ",Object(r.b)("em",{parentName:"p"},"counterfactually"),", meaning it requires no call to\nthe relative gas-expensive ",Object(r.b)("inlineCode",{parentName:"p"},"#sync")," method on the pair.\nIt is correct regardless of whether a swap has already executed in the current block."),Object(r.b)("h1",{id:"notes-on-overflow",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#notes-on-overflow","aria-label":"notes on overflow permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Notes on overflow"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"UniswapV2Pair")," cumulative price variables are designed to eventually overflow,\ni.e. ",Object(r.b)("inlineCode",{parentName:"p"},"price0CumulativeLast")," and ",Object(r.b)("inlineCode",{parentName:"p"},"price1CumulativeLast")," and ",Object(r.b)("inlineCode",{parentName:"p"},"blockTimestampLast")," will overflow through 0."),Object(r.b)("p",null,"This should not pose an issue to your oracle design, as the price average computation is concerned with differences\n(i.e. subtraction) between two separate observations of a cumulative price variable.\nSubtracting between two cumulative price values will result in a number that fits within the range of ",Object(r.b)("inlineCode",{parentName:"p"},"uint256")," as long\nas the observations are made for periods of max ",Object(r.b)("inlineCode",{parentName:"p"},"2^32")," seconds, or ~136 years."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"blockTimestampLast")," is stored only in a ",Object(r.b)("inlineCode",{parentName:"p"},"uint32"),". For the same reason as described above, the pair can save a\nstorage slot, and many SSTORES over the life of the pair, by storing only ",Object(r.b)("inlineCode",{parentName:"p"},"block.timestamp % uint32(-1)"),".\nThis is feasible because the pair is only concerned with the time that elapses between each liquidity event when updating\nthe cumulative prices, which is always expected to be less than ",Object(r.b)("inlineCode",{parentName:"p"},"2^32")," seconds."),Object(r.b)("p",null,"When computing time elapsed within your own oracle, you can simply store the ",Object(r.b)("inlineCode",{parentName:"p"},"block.timestamp")," of your observations\nas ",Object(r.b)("inlineCode",{parentName:"p"},"uint256"),", and avoid dealing with overflow math for computing the time elapsed between observations. This is how the\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol"},"ExampleSlidingWindowOracle"),"\nhandles observation timestamps."),Object(r.b)(s,{href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol",mdxType:"Github"},"ExampleSlidingWindowOracle"),Object(r.b)("h2",{id:"integrating-the-oracle",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#integrating-the-oracle","aria-label":"integrating the oracle permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Integrating the oracle"),Object(r.b)("p",null,"To integrate an oracle into your contracts, you must ensure the oracle’s observations of the cumulative price variable\nare kept up to date.\nAs long as your oracle is up to date, you can depend on it to produce average prices.\nThe process of keeping your oracle up to date is called ‘maintenance’."),Object(r.b)("h2",{id:"oracle-maintenance",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#oracle-maintenance","aria-label":"oracle maintenance permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Oracle maintenance"),Object(r.b)("p",null,"In order to measure average prices over a period, the oracle must have a way\nof referencing the cumulative price at the start and end of a period.\nThe recommended way of doing this is by storing these prices in the oracle contract,\nand calling the oracle frequently enough to store the latest cumulative price."),Object(r.b)("p",null,"Reliable oracle maintenance is a difficult task,\nand can become a point of failure in times of congestion.\nInstead, consider building this functionality directly into the\ncritical calls of your own smart contracts, or incentivize oracle\nmaintenance calls by other parties."),Object(r.b)("h2",{id:"no-maintenance-option",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#no-maintenance-option","aria-label":"no maintenance option permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"No-maintenance option"),Object(r.b)("p",null,"It is possible to avoid regularly storing this cumulative price at the\nstart of the period by utilizing storage proofs. However, this approach has limitations,\nespecially in regard to gas cost and maximum length of the time period over which the average price can be measured.\nIf you wish to try this approach, you can follow\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/Keydonix/uniswap-oracle/"},"this repository by Keydonix"),"."),Object(r.b)(s,{href:"https://github.com/Keydonix/uniswap-oracle",mdxType:"Github"},"Keydonix: on-chain trustless and censorship resistant oracle"),Object(r.b)("p",null,"Keydonix has developed a general purpose price feed oracle built on Uniswap v2 that supports arbitrary time windows (up to 256 blocks) and doesn’t require any active maintenance."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-06-smart-contract-integration-04-building-an-oracle-md-2f87a359c290e0579072.js.map