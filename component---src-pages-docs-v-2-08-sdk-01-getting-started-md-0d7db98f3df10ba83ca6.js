(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"9Ag7":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));var a,i=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("aArQ"),s={},c=(a="Link",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:s},d=r.a;function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(d,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The pages that follow contain technical reference information on the Uniswap SDK.\nLooking for a ",Object(o.b)(c,{to:"/docs/v2/javascript-SDK/quick-start",mdxType:"Link"},"quickstart")," instead?\nYou may also want to jump into a ",Object(o.b)(c,{to:"/docs/v2/javascript-SDK/fetching-data",mdxType:"Link"},"guide"),",\nwhich offers a friendlier introduction to the SDK!"),Object(o.b)("p",null,"The SDK is written in TypeScript, has a robust test suite, performs arbitrary precision arithmetic,\nand supports rounding to significant digits or fixed decimal places.\nThe principal exports of the SDK are ",Object(o.b)("em",{parentName:"p"},"entities"),": classes that contain initialization and validation checks,\nnecessary data fields, and helper functions."),Object(o.b)("p",null,"An important concept in the SDK is ",Object(o.b)("em",{parentName:"p"},"fractions"),". Because Solidity performs integer math, care must be taken in\nnon-EVM environments to faithfully replicate the actual computation carried out on-chain.\nThe first concern here is to ensure that an overflow-safe integer implementation is used.\nIdeally, the SDK would be able to use native ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"},"BigInt"),"s.\nHowever, until support becomes more widespread, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/GoogleChromeLabs/jsbi"},"JSBI")," objects are used instead,\nwith the idea that once BigInts proliferate, this dependency can be compiled away.\nThe second concern is precision loss due to, for example, chained price ratio calculations.\nTo address this issue, all math operations are performed as fraction operations, ensuring arbitrary precision up\nuntil the point that values are rounded for display purposes, or truncated to fit inside a fixed bit width."),Object(o.b)("p",null,"The SDK works for all chains on which the ",Object(o.b)(c,{to:"/docs/v2/smart-contracts/factory#address",mdxType:"Link"},"factory")," is deployed."),Object(o.b)("h2",{id:"code",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#code","aria-label":"code permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Code"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-sdk"},"source code is available on GitHub"),"."),Object(o.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(o.b)("p",null,"The SDK declares its dependencies as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-sdk/blob/v2/package.json#L33"},"peer dependencies"),".\nThis is for two reasons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"prevent installation of unused dependencies (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"@ethersproject/providers")," and ",Object(o.b)("inlineCode",{parentName:"li"},"@ethersproject/contracts"),", only used in ",Object(o.b)("a",{parentName:"li",href:"/docs/v2/SDK/fetcher"},Object(o.b)("inlineCode",{parentName:"a"},"Fetcher")),")"),Object(o.b)("li",{parentName:"ul"},"prevent duplicate ",Object(o.b)("inlineCode",{parentName:"li"},"@ethersproject")," dependencies with conflicting versions")),Object(o.b)("p",null,"However, this means you must install these dependencies alongside the SDK, if you do not already have them installed."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-08-sdk-01-getting-started-md-0d7db98f3df10ba83ca6.js.map