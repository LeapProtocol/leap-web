(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{W63o:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("vOnD").default.div.withConfig({displayName:"bg__StyledBG",componentId:"sc-1udbr6w-0"})(["position:fixed;z-index:-1;top:0;left:0;width:100%;overflow:hidden;background-color:",";-webkit-transform:translate3d(0,0,0);height:-webkit-fill-available;opacity:1;background:",";opacity:0.15;user-select:none;pointer-events:none;"],(function(e){return e.theme.backgroundColor}),(function(e){var t=e.theme;return"radial-gradient(50% 50% at 50% 50%, "+t.colors.link+" 0%, "+t.backgroundColor+" 100%)"}));t.a=function(){return r.a.createElement(n,null)}},ZXdF:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("vOnD"),r=Object(i.css)(["padding:0.35rem 0.85rem;text-decoration:none;border-radius:12px;display:inline-block;transform:scale(0.98);transition:transform 0.25s ease;box-sizing:border-box;font-weight:600;font-size:1.125rem;cursor:pointer;width:fit-content;@media (max-width:960px){text-align:center;text-decoration:none;padding:0.25rem 1rem;}@media (max-width:640px){width:100%;padding:0.85rem 0.85rem;}:hover{transform:scale(1);}background-color:",";color:",";border:",";"],(function(e){var t=e.outlined,a=e.theme;return t?"none":a.textColor}),(function(e){var t=e.outlined,a=e.theme;return t?a.textColor:a.invertedTextColor}),(function(e){var t=e.outlined,a=e.theme;return t?"1px solid "+a.buttonBorder:"initial"})),n=i.default.a.withConfig({displayName:"button__Button",componentId:"sc-6ugqc8-0"})(["",";"],r);t.b=n},bwBB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var i,r=a("zLVn"),n=(a("q1tI"),a("7ljp")),o=a("aArQ"),l=a("ZXdF"),c=a("W63o"),s={},b=(i="Title",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),u={_frontmatter:s},h=o.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(h,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c.a,{mdxType:"BG"}),Object(n.b)("div",{style:{maxWidth:"650px",margin:"0px auto"}},Object(n.b)(b,{mdxType:"Title"},"Uniswap V2 Bug Bounty"),Object(n.b)("center",null,Object(n.b)(l.b,{href:"mailto:contact@uniswap.org",mdxType:"Button"},"Submit a report")),Object(n.b)("br",null),Object(n.b)("br",null),Object(n.b)("h1",{id:"overview",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#overview","aria-label":"overview permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Overview"),Object(n.b)("p",null,"Open source, on-chain protocols benefit from community member participation in testing and debugging the smart contracts. As the launch of version 2 of the Uniswap protocol (“Uniswap V2”) approaches, it is beneficial to formalize the program incentivizing those dedicated security engineers who can help make Uniswap V2 safer (the “Program”). The Program will bolster the professional audits and formal verification Uniswap V2 has undergone."),Object(n.b)("h1",{id:"scope",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#scope","aria-label":"scope permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Scope"),Object(n.b)("p",null,"This Program is limited to the vulnerabilities affecting Uniswap V2 in the following contracts:"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-core"},"Uniswap Core")," ",Object(n.b)("br",null),"\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery"},"Periphery Contracts")),Object(n.b)("p",null,"For purposes of the Program, bugs in Periphery Contracts will be considered less severe than those found in Uniswap V2 Core."),Object(n.b)("p",null,"The following are not within the scope of the Program:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The example contracts and the contracts in the test folder for the Periphery Contracts link set forth above; "),Object(n.b)("li",{parentName:"ul"},"Any contract removed from the list of contracts in the Periphery Contracts link set forth above (such list may change from time to time without notice); "),Object(n.b)("li",{parentName:"ul"},"Bugs in any third party contract or platform that interacts with Uniswap V2;"),Object(n.b)("li",{parentName:"ul"},"Vulnerabilities already reported and/or discovered in contracts built by third parties on Uniswap V2; and"),Object(n.b)("li",{parentName:"ul"},"Any already-reported bugs.")),Object(n.b)("p",null,"Vulnerabilities contingent upon the occurrence of any of the following activities also are outside the scope of this Program:"),Object(n.b)("p",null,"Front end bugs;"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"DDOS attack;"),Object(n.b)("li",{parentName:"ul"},"Spamming;"),Object(n.b)("li",{parentName:"ul"},"Automated tools; and"),Object(n.b)("li",{parentName:"ul"},"Compromising or misusing third party systems or services.")),Object(n.b)("h1",{id:"program-rewards",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#program-rewards","aria-label":"program rewards permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(n.b)("strong",{parentName:"h1"},"Program Rewards")),Object(n.b)("p",null,"Severity of bugs will be assessed under the ",Object(n.b)("a",{parentName:"p",href:"https://www.first.org/cvss/calculator/3.0"},"CVSS Risk Rating")," scale, as follows:   "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Critical (9.0-10.0): Up to $40,000"),Object(n.b)("li",{parentName:"ul"},"High (7.0-8.9): Up to $10,000"),Object(n.b)("li",{parentName:"ul"},"Medium (4.0-6.9): Up to $2,000"),Object(n.b)("li",{parentName:"ul"},"Low (0.1-3.9): Up to $1,000")),Object(n.b)("p",null,"In addition to assessing severity, rewards will be considered based on the impact of the discovered vulnerability as well as the level of difficulty in discovering such vulnerability."),Object(n.b)("p",null,"Prior to the deployment of Uniswap V2 to the Ethereum mainnet, which is expected to occur in May 2020, successful bug reporters will receive a 20% bonus on their bounty pay out. This is to incentivize hackers to come forward before launch. "),Object(n.b)("h1",{id:"disclosure",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#disclosure","aria-label":"disclosure permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(n.b)("strong",{parentName:"h1"},"Disclosure")),Object(n.b)("p",null,"Any vulnerability or bug discovered must be reported only to the following email: ",Object(n.b)("a",{parentName:"p",href:"mailto:contact@uniswap.org"},"contact@uniswap.org"),"; must not be disclosed publicly; must not be disclosed to any other person, entity or email address prior to disclosure to the ",Object(n.b)("a",{parentName:"p",href:"mailto:contact@uniswap.org"},"contact@uniswap.org")," email; and must not be disclosed in any way other than to the ",Object(n.b)("a",{parentName:"p",href:"mailto:contact@uniswap.org"},"contact@uniswap.org")," email.  In addition, disclosure to ",Object(n.b)("a",{parentName:"p",href:"mailto:contact@uniswap.org"},"contact@uniswap.org")," must be made promptly following discovery of the vulnerability.\nPlease include as much information about the vulnerability as possible, including:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The conditions on which reproducing the bug is contingent."),Object(n.b)("li",{parentName:"ul"},"The steps needed to reproduce the bug or, preferably, a proof of concept."),Object(n.b)("li",{parentName:"ul"},"The potential implications of the vulnerability being abused.")),Object(n.b)("p",null,"A detailed report of a vulnerability increases the likelihood of a reward and may increase the reward amount. "),Object(n.b)("p",null,"Anyone who reports a unique, previously-unreported vulnerability that results in a change to the code or a configuration change and who keeps such vulnerability confidential until it has been resolved by our engineers will be recognized publicly for their contribution, if agreed."),Object(n.b)("h1",{id:"eligibility",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#eligibility","aria-label":"eligibility permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(n.b)("strong",{parentName:"h1"},"Eligibility")),Object(n.b)("p",null,"To be eligible for a reward under this Program, you must:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Discover a previously unreported, non-public vulnerability that would result in a loss of or a lock on any ERC-20 token on Uniswap V2 (but not on any third party platform interacting with Uniswap V2) and that is within the scope of this Program."),Object(n.b)("li",{parentName:"ul"},"Be the first to disclose the unique vulnerability to ",Object(n.b)("a",{parentName:"li",href:"mailto:contact@uniswap.org"},"contact@uniswap.org"),", in compliance with the disclosure requirements above. "),Object(n.b)("li",{parentName:"ul"},"Provide sufficient information to enable our engineers to reproduce and fix the vulnerability."),Object(n.b)("li",{parentName:"ul"},"Not engage in any unlawful conduct when disclosing the bug to ",Object(n.b)("a",{parentName:"li",href:"mailto:contact@uniswap.org"},"contact@uniswap.org"),", including through threats, demands or any other coercive tactics."),Object(n.b)("li",{parentName:"ul"},"Not exploit the vulnerability in any way, including through making it public or by obtaining a profit (other than a reward under this Program)."),Object(n.b)("li",{parentName:"ul"},"Make a good faith effort to avoid privacy violations, destruction of data, interruption or degradation of Uniswap V2."),Object(n.b)("li",{parentName:"ul"},"Submit only one vulnerability per submission, unless you need to chain vulnerabilities to provide impact regarding any of the vulnerabilities."),Object(n.b)("li",{parentName:"ul"},"Not submit a vulnerability caused by an underlying issue that is the same as an issue on which a reward has been paid under this Program."),Object(n.b)("li",{parentName:"ul"},"Be at least 18 years of age."),Object(n.b)("li",{parentName:"ul"},"Not be subject to US sanctions or reside in a US-embargoed country."),Object(n.b)("li",{parentName:"ul"},"Not be one of our current or former employees, vendors, or contractors or an employee of any of those vendors or contractors."),Object(n.b)("li",{parentName:"ul"},"Comply with all the eligibility requirements of the Program.")),Object(n.b)("h1",{id:"other-terms",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#other-terms","aria-label":"other terms permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(n.b)("strong",{parentName:"h1"},"Other Terms")),Object(n.b)("p",null,"All reward decisions, including eligibility for and amounts of the rewards and the manner in which such rewards will be paid, are made at our sole discretion.  "),Object(n.b)("p",null,"The terms and conditions of this Program may be altered at any time."),Object(n.b)("br",null),Object(n.b)("br",null),Object(n.b)("br",null)))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-bug-bounty-mdx-89c4a23c978ecd1da302.js.map