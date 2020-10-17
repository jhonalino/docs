(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(176)),o={title:"Code"},c={unversionedId:"api-contract/start/code",id:"api-contract/start/code",isDocsHomePage:!1,title:"Code",description:"The CodePromise class allows the developer to manage calls to code deployment. In itself, it is easy to use for code deployment and it generally the first step, especially in cases where an existing codeHash is not available -",source:"@site/docs/api-contract/start/code.md",slug:"/api-contract/start/code",permalink:"/docs/api-contract/start/code",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/code.md",version:"current",sidebar:"reference",previous:{title:"Basics",permalink:"/docs/api-contract/start/basics"},next:{title:"Blueprint",permalink:"/docs/api-contract/start/blueprint"}},s=[{value:"Create a blueprint",id:"create-a-blueprint",children:[]},{value:"Use the blueprint",id:"use-the-blueprint",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CodePromise")," class allows the developer to manage calls to code deployment. In itself, it is easy to use for code deployment and it generally the first step, especially in cases where an existing ",Object(i.b)("inlineCode",{parentName:"p"},"codeHash")," is not available -"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { ApiPromise } from '@polkadot/api';\nimport { CodePromise } from '@polkadot/api-contracts';\n\n...\n// Construct the API as per the API sections\n// (as in all examples, this connects to a local chain)\nconst api = await ApiPromise.create();\n\n// Construct our Code helper. The ABI is an Abi object, a string or the raw\n// data (after JSON.parse). Here the wasm is either a hex string (0x prefixed),\n// an Uint8Array or a Node.js Buffer object\nconst code = new CodePromise(api, abi, wasm);\n\n// Deploy the WASM, retrieve a Blueprint\n...\n")),Object(i.b)("p",null,"It is important to understand that the interfaces provided here are higher-level helpers, so some assumptions are made to make subsequent use easier. In the case of the ",Object(i.b)("inlineCode",{parentName:"p"},"CodePromise")," class this is quite visible. While a ",Object(i.b)("inlineCode",{parentName:"p"},"contracts.putCode")," is independent of any ABIs, for out helpers we always assume that the developer does have access to the ABI right at the start. This means that when code is deployed a Blueprint can be created with the correct ABI (and subsequent deployments can, once again, create a Contract with an attached ABI)."),Object(i.b)("p",null,"The helpers are there to help and make development easier by integrating the parts, nothing would stop a developer from making ",Object(i.b)("inlineCode",{parentName:"p"},"putCode")," or ",Object(i.b)("inlineCode",{parentName:"p"},"instantiate")," calls themselves."),Object(i.b)("h2",{id:"create-a-blueprint"},"Create a blueprint"),Object(i.b)("p",null,"After we have the initial structure above, the next step would be to actually deploy the code and retrieve a ",Object(i.b)("inlineCode",{parentName:"p"},"BlueprintPromise")," from the result. Building on the above example -"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Deploy the WASM, retrieve a Blueprint\nlet blueprint;\n\n// createBlueprint is a normal submittable, so use signAndSend\n// with an known Alice keypair (as per the API samples)\nconst unsub = await code\n  .createBlueprint()\n  .signAndSend(alicePair, (result) => {\n    if (result.status.isInBlock || result.status.isFinalized) {\n      // here we have an additional field in the result, containing the blueprint\n      blueprint = result.blueprint;\n      unsub();\n    }\n  })\n")),Object(i.b)("p",null,"As noted above the ",Object(i.b)("inlineCode",{parentName:"p"},"createBlueprint")," helper on the ",Object(i.b)("inlineCode",{parentName:"p"},"Code")," interface is a normal submittable, although it is enhanced to return an actual ",Object(i.b)("inlineCode",{parentName:"p"},"Blueprint")," based on the ",Object(i.b)("inlineCode",{parentName:"p"},"codeHash")," retrieved. Internally it sends a ",Object(i.b)("inlineCode",{parentName:"p"},"putCode")," and will listen for the correct emitted events. Based on the results and events (and the input ABI) it will subsequently create a helper object that can be used to deploy contracts."),Object(i.b)("h2",{id:"use-the-blueprint"},"Use the blueprint"),Object(i.b)("p",null,"After we have deployed the WASM on-chain, next we can use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-contract/start/blueprint"}),"Blueprint result to deploy")," a contract on-chain."))}p.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);