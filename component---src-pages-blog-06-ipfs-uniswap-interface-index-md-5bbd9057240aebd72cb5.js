(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"6LFv":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return h}));var n=t("zLVn"),i=(t("q1tI"),t("7ljp")),s=t("aArQ"),r={},c={_frontmatter:r},o=s.a;function h(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(o,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tldr",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#tldr","aria-label":"tldr permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"TL;DR"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In an effort to continue decentralizing, we have created a mechanism for the community to host the Uniswap Interface"),Object(i.b)("li",{parentName:"ul"},"The open-source ",Object(i.b)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-interface"},"Uniswap Interface")," built by our team and\ncommunity is ",Object(i.b)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-interface/releases"},"automatically deployed")," daily to IPFS"),Object(i.b)("li",{parentName:"ul"},"Community members can pin the IPFS hashes to ensure availability"),Object(i.b)("li",{parentName:"ul"},"We use IPNS + DNSLink to point ",Object(i.b)("inlineCode",{parentName:"li"},"/ipns/app.uniswap.org")," to the latest ",Object(i.b)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-interface/releases"},"IPFS release")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://app.uniswap.org"},"app.uniswap.org")," is now served exclusively from the latest\n",Object(i.b)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-interface/releases"},"IPFS release"),", however any IPFS gateway can be used directly"),Object(i.b)("li",{parentName:"ul"},"The URL ",Object(i.b)("a",{parentName:"li",href:"https://uniswap.exchange"},"uniswap.exchange")," now forwards to ",Object(i.b)("a",{parentName:"li",href:"https://app.uniswap.org"},"app.uniswap.org")),Object(i.b)("li",{parentName:"ul"},"The ENS contenthash for ",Object(i.b)("inlineCode",{parentName:"li"},"uniswap.eth")," now points to the latest IPFS release allowing the URL ",Object(i.b)("a",{parentName:"li",href:"https://uniswap.eth.link/"},"uniswap.eth.link")," to be used")),Object(i.b)("h2",{id:"interfaces-and-decentralization",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#interfaces-and-decentralization","aria-label":"interfaces and decentralization permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Interfaces and decentralization"),Object(i.b)("p",null,"The Uniswap ",Object(i.b)("strong",{parentName:"p"},"protocol")," is trustless and decentralized because it lives entirely on-chain.\nAnyone running an Ethereum node can interact with the contracts directly which will perform as programmed for as long as Ethereum exists.\nHowever, not everyone wants to run a node. Instead, many users choose to interact with Uniswap through web interfaces,\ntrade aggregators, wallets, or other DAPPs that have integrated Uniswap natively in their smart contracts."),Object(i.b)("p",null,"When using an interface, users should verify the transactions they sign match the transaction presented by the interface.\nHowever, it is not always easy to do this. This is why it is important to use reputable interfaces.\nWe’re thrilled to see a growing ecosystem of high-quality interfaces for Uniswap, including Argent, 1inch, Rainbow,\nParaswap, Zerion, Instadapp, and many more."),Object(i.b)("p",null,"Open source interfaces (including many of the above) allow users to verify the code they are interacting with does what\nit claims. If a user runs the code locally, they can make transactions with confidence. However, as soon as the code\nis hosted, ",Object(i.b)("strong",{parentName:"p"},"it is difficult for users to verify the website they are interacting has not been modified"),"."),Object(i.b)("p",null,"This is one of the problem that IPFS ",Object(i.b)("a",{parentName:"p",href:"https://blog.cloudflare.com/e2e-integrity/"},"aims to solve"),"."),Object(i.b)("h2",{id:"what-we-did",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#what-we-did","aria-label":"what we did permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What we did"),Object(i.b)("p",null,"Our team has always cared about decentralization, security, and accessibility. This is why we built an\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-interface"},"open-source interface")," for Uniswap that the community can directly run,\nverify and build upon. We’ve just taken another step forward by decentralizing the hosting of the Uniswap Interface using IPFS."),Object(i.b)("p",null,"Using ",Object(i.b)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),", the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-interface"},"Uniswap Interface"),"\nis now deployed at least once per day to IPFS. Each release is automatically ",Object(i.b)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/persistence/"},"pinned"),"\nusing ",Object(i.b)("a",{parentName:"p",href:"https://pinata.cloud"},"pinata.cloud"),", a free IPFS pinning service.\nThe IPFS releases can be found ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-interface/releases"},"on GitHub"),"."),Object(i.b)("p",null,"This means the Uniswap Interface can now be accessed via IPFS directly, through a gateway such as ",Object(i.b)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipns/app.uniswap.org/"},"cloudflare-ipfs.com"),", or by an ",Object(i.b)("em",{parentName:"p"},"alias")," to the Cloudflare gateway at ",Object(i.b)("a",{parentName:"p",href:"https://app.uniswap.org"},"app.uniswap.org"),"."),Object(i.b)("p",null,"The domain uniswap.exchange is now redirected to app.uniswap.org, which is an alias to the Cloudflare IPFS gateway that serves the Uniswap Interface from IPFS."),Object(i.b)("h2",{id:"how-we-did-it",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#how-we-did-it","aria-label":"how we did it permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How we did it"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"app.uniswap.org")," subdomain is given a CNAME record pointing at ",Object(i.b)("inlineCode",{parentName:"p"},"cloudflare-ipfs.com"),"."),Object(i.b)("p",null,"When a user visits the domain ",Object(i.b)("inlineCode",{parentName:"p"},"app.uniswap.org"),", the browser first looks up the DNS record and finds a CNAME to ",Object(i.b)("inlineCode",{parentName:"p"},"cloudflare-ipfs.com"),".\nThe server at ",Object(i.b)("inlineCode",{parentName:"p"},"cloudflare-ipfs.com"),", i.e. Cloudflare’s IPFS gateway, looks up the\n",Object(i.b)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/dnslink/"},"DNSLink record")," for the subdomain.\nThat TXT record contains the IPFS hash of the latest release."),Object(i.b)("p",null,"Cloudflare’s IPFS gateway then fetches the content using the IPFS protocol and serves the interface to your browser via HTTPS."),Object(i.b)("h2",{id:"some-changes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#some-changes","aria-label":"some changes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Some changes"),Object(i.b)("p",null,"Because IPFS gateways will not default to serving ",Object(i.b)("inlineCode",{parentName:"p"},"/index.html")," as is expected by many single page applications, the Uniswap Interface uses a “hash” based router."),Object(i.b)("p",null,"This means that links that contain paths, such as ",Object(i.b)("a",{parentName:"p",href:"https://app.uniswap.org"},"app.uniswap.org/swap")," will no longer work, but ",Object(i.b)("a",{parentName:"p",href:"https://app.uniswap.org/#/swap"},"app.uniswap.org/#/pool")," will work."),Object(i.b)("h2",{id:"security-unicorn",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#security-unicorn","aria-label":"security unicorn permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Security Unicorn"),Object(i.b)("p",null,"Some settings on the Uniswap Interface use localstorage, which is shared across users in some IPFS gateways."),Object(i.b)("p",null,"When using an IPFS gateway and referencing an IPFS hash or IPNS name by the ",Object(i.b)("em",{parentName:"p"},"path"),"\n(e.g. ",Object(i.b)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipfs/QmdJApBwfsGua9vKnMbswGFGA4y5Kj2VNNPhvcsc8NC7iA/"},"cloudflare-ipfs.com/ipfs/QmdJApBwfsGua9v…/"),")\nrather than the ",Object(i.b)("em",{parentName:"p"},"subdomain"),"\n(e.g. ",Object(i.b)("a",{parentName:"p",href:"https://bafybeig6hsm6lj74ertjf7hghsj2zrkzzpec5iyrt57vxiwxqltmgeeokm.cf-ipfs.com/"},"bafybeig6hsm…cf-ipfs.com"),"),\nother sites accessed from the same IPFS gateway can view and change your settings in the Uniswap Interface."),Object(i.b)("p",null,"To avoid this possibility, you can use the subdomain format of IPFS gateway URLs, which are contained in\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-interface/releases"},"every release")," along with the path format."),Object(i.b)("h2",{id:"verifying-a-build",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#verifying-a-build","aria-label":"verifying a build permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Verifying a build"),Object(i.b)("p",null,"You can check what build you are being served from Cloudflare’s IPFS gateway by looking at your browser’s network console for the response headers sent directly from Cloudflare’s IPFS gateway."),Object(i.b)("p",null,"Cloudflare’s gateway uses the IPFS hash of the deployment in the ",Object(i.b)("inlineCode",{parentName:"p"},"etag")," header, and reports the resolved IPNS path in the ",Object(i.b)("inlineCode",{parentName:"p"},"x-ipfs-path")," header."),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1200px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/b946a3d34f58abc279ebed9d40bfcac4/49ee2/verifying-build.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.99999999999999%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLklEQVQ4y52UWW/aUBSEyQMvICUvlUJYVLxhwPsKXgADTau0lao2f6D//09M59yGpYQ8pEifbGPf0Zxz5t7W9vk34sdfiB6f4ex+KjziBjEmEwtxHGOz2ZAGm6ZBs92iqmrkeY6iKBBFEYIgONL6MC9wOy1JgbaxIEu0tRS24yNNYgommM/nFJ/Atm3MZjN1NQxDYZrmP7T4wzVM08Buv8d6vVbUVYUsXyAIIyV+EDsIC5Zlce3NDV5BQV3XlVBZlkfRxbJATlzXO4odnJ0E33A4Ho9Vn5IkQZZlCs/3Vbni8N2C4lCGIQ5Xq5VCmu56PvkPh/LBlhMVwbqu0XDCRVGiKGtU9RpTDscw9PcJ1vWLK9Uz67hYFgpXHbbbbVxDSk6YwV6vh263i06nc7ze3d1iNBr9FTubthI8H/s59nTG0hjg5RKmNUF/MMRDv6/okcFwBE2+vXR4GUxB58vU97BJIrjaR/jMpD0cwHi4h9nvwejdq+fEZunso1QjSHZbl+GUP0Ww8Ob4XhXYpQm+FAt8XubYcefs+fwpI3mGpzxF7LlwOHmJ1NxxToLnDuVZttuaJa+I9DLkgoALIw7JZ2xsy8REBsRMTl6w2JrW6zydBOM0hSdbjf3U5R0XmDJd3muahjGRUs8rfNOh6zpoqhIL7pQ0DJHzVEnoUg6LMIp5ysRIs1xFytBPebwqKD1cOlP8aFZ4qktS4St3yrcVA57RdRAynyEiih9OnsPaP1rgyXeFqv7KAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"verifying build",title:"verifying build",src:"/static/b946a3d34f58abc279ebed9d40bfcac4/c1b63/verifying-build.png",srcSet:["/static/b946a3d34f58abc279ebed9d40bfcac4/5a46d/verifying-build.png 300w","/static/b946a3d34f58abc279ebed9d40bfcac4/0a47e/verifying-build.png 600w","/static/b946a3d34f58abc279ebed9d40bfcac4/c1b63/verifying-build.png 1200w","/static/b946a3d34f58abc279ebed9d40bfcac4/49ee2/verifying-build.png 1618w"],sizes:"(max-width: 1200px) 100vw, 1200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(i.b)("h2",{id:"how-you-can-help",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#how-you-can-help","aria-label":"how you can help permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How you can help"),Object(i.b)("p",null,"To keep the Uniswap Interface available, you can pin the hash of the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-interface/releases/latest"},"latest release"),"."),Object(i.b)("p",null,"If this sort of work sounds cool to you, we’re hiring! ",Object(i.b)("a",{parentName:"p",href:"mailto:contact@uniswap.org"},"Shoot us a message!")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-06-ipfs-uniswap-interface-index-md-5bbd9057240aebd72cb5.js.map