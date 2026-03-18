import{q as f,j as a,r as j,g as q,R as M,u as U,L as K,a as V,b as L,N as Y}from"./index-C57_0k_w.js";const Q=f.div`
  width: 100%;
  background-color: #ff7043;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  bottom: 0;
  position: absolute;
  -webkit-user-select: none;
  user-select: none;
`,X=f.div`
  color: #ffff;
  font-size: 1rem;
  margin: 0.3rem;
  display: flex;
`,Z=f.div`
  color: #ffff;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
`,F=()=>{const e="https://linkedin.com/in/rodrigo-vilemen/";return a.jsxs(Q,{children:[a.jsx(X,{children:"Desenvolvido por:"}),a.jsx(Z,{onClick:()=>window.open(e,"_blank"),children:"Rodrigo Vilemen"})]})},ee={},z=e=>{let t;const o=new Set,n=(b,y)=>{const S=typeof b=="function"?b(t):b;if(!Object.is(S,t)){const p=t;t=y??(typeof S!="object"||S===null)?S:Object.assign({},t,S),o.forEach(x=>x(t,p))}},s=()=>t,g={setState:n,getState:s,getInitialState:()=>d,subscribe:b=>(o.add(b),()=>o.delete(b)),destroy:()=>{(ee?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},d=t=e(n,s,g);return g},te=e=>e?z(e):z;var A={exports:{}},N={},O={exports:{}},G={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=j;function re(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var oe=typeof Object.is=="function"?Object.is:re,ne=_.useState,se=_.useEffect,ie=_.useLayoutEffect,ae=_.useDebugValue;function ce(e,t){var o=t(),n=ne({inst:{value:o,getSnapshot:t}}),s=n[0].inst,r=n[1];return ie(function(){s.value=o,s.getSnapshot=t,T(s)&&r({inst:s})},[e,o,t]),se(function(){return T(s)&&r({inst:s}),e(function(){T(s)&&r({inst:s})})},[e]),ae(o),o}function T(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!oe(e,o)}catch{return!0}}function le(e,t){return t()}var ue=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?le:ce;G.useSyncExternalStore=_.useSyncExternalStore!==void 0?_.useSyncExternalStore:ue;O.exports=G;var de=O.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=j,fe=de;function me(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var he=typeof Object.is=="function"?Object.is:me,pe=fe.useSyncExternalStore,ge=I.useRef,ve=I.useEffect,be=I.useMemo,xe=I.useDebugValue;N.useSyncExternalStoreWithSelector=function(e,t,o,n,s){var r=ge(null);if(r.current===null){var h={hasValue:!1,value:null};r.current=h}else h=r.current;r=be(function(){function g(p){if(!d){if(d=!0,b=p,p=n(p),s!==void 0&&h.hasValue){var x=h.value;if(s(x,p))return y=x}return y=p}if(x=y,he(b,p))return x;var u=n(p);return s!==void 0&&s(x,u)?(b=p,x):(b=p,y=u)}var d=!1,b,y,S=o===void 0?null:o;return[function(){return g(t())},S===null?void 0:function(){return g(S())}]},[t,o,n,s]);var i=pe(e,r[0],r[1]);return ve(function(){h.hasValue=!0,h.value=i},[i]),xe(i),i};A.exports=N;var Se=A.exports;const ye=q(Se),J={},{useDebugValue:we}=M,{useSyncExternalStoreWithSelector:je}=ye;let D=!1;const Ee=e=>e;function Re(e,t=Ee,o){(J?"production":void 0)!=="production"&&o&&!D&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),D=!0);const n=je(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,o);return we(n),n}const H=e=>{(J?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?te(e):e,o=(n,s)=>Re(t,n,s);return Object.assign(o,t),o},_e=e=>e?H(e):H,ke={};function B(e,t){let o;try{o=e()}catch{return}return{getItem:s=>{var r;const h=g=>g===null?null:JSON.parse(g,void 0),i=(r=o.getItem(s))!=null?r:null;return i instanceof Promise?i.then(h):h(i)},setItem:(s,r)=>o.setItem(s,JSON.stringify(r,void 0)),removeItem:s=>o.removeItem(s)}}const k=e=>t=>{try{const o=e(t);return o instanceof Promise?o:{then(n){return k(n)(o)},catch(n){return this}}}catch(o){return{then(n){return this},catch(n){return k(n)(o)}}}},Ce=(e,t)=>(o,n,s)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:c=>c,version:0,merge:(c,v)=>({...v,...c}),...t},h=!1;const i=new Set,g=new Set;let d;try{d=r.getStorage()}catch{}if(!d)return e((...c)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),o(...c)},n,s);const b=k(r.serialize),y=()=>{const c=r.partialize({...n()});let v;const l=b({state:c,version:r.version}).then(w=>d.setItem(r.name,w)).catch(w=>{v=w});if(v)throw v;return l},S=s.setState;s.setState=(c,v)=>{S(c,v),y()};const p=e((...c)=>{o(...c),y()},n,s);let x;const u=()=>{var c;if(!d)return;h=!1,i.forEach(l=>l(n()));const v=((c=r.onRehydrateStorage)==null?void 0:c.call(r,n()))||void 0;return k(d.getItem.bind(d))(r.name).then(l=>{if(l)return r.deserialize(l)}).then(l=>{if(l)if(typeof l.version=="number"&&l.version!==r.version){if(r.migrate)return r.migrate(l.state,l.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return l.state}).then(l=>{var w;return x=r.merge(l,(w=n())!=null?w:p),o(x,!0),y()}).then(()=>{v==null||v(x,void 0),h=!0,g.forEach(l=>l(x))}).catch(l=>{v==null||v(void 0,l)})};return s.persist={setOptions:c=>{r={...r,...c},c.getStorage&&(d=c.getStorage())},clearStorage:()=>{d==null||d.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>u(),hasHydrated:()=>h,onHydrate:c=>(i.add(c),()=>{i.delete(c)}),onFinishHydration:c=>(g.add(c),()=>{g.delete(c)})},u(),x||p},Ie=(e,t)=>(o,n,s)=>{let r={storage:B(()=>localStorage),partialize:u=>u,version:0,merge:(u,c)=>({...c,...u}),...t},h=!1;const i=new Set,g=new Set;let d=r.storage;if(!d)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),o(...u)},n,s);const b=()=>{const u=r.partialize({...n()});return d.setItem(r.name,{state:u,version:r.version})},y=s.setState;s.setState=(u,c)=>{y(u,c),b()};const S=e((...u)=>{o(...u),b()},n,s);s.getInitialState=()=>S;let p;const x=()=>{var u,c;if(!d)return;h=!1,i.forEach(l=>{var w;return l((w=n())!=null?w:S)});const v=((c=r.onRehydrateStorage)==null?void 0:c.call(r,(u=n())!=null?u:S))||void 0;return k(d.getItem.bind(d))(r.name).then(l=>{if(l)if(typeof l.version=="number"&&l.version!==r.version){if(r.migrate)return[!0,r.migrate(l.state,l.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,l.state];return[!1,void 0]}).then(l=>{var w;const[m,E]=l;if(p=r.merge(E,(w=n())!=null?w:S),o(p,!0),m)return b()}).then(()=>{v==null||v(p,void 0),p=n(),h=!0,g.forEach(l=>l(p))}).catch(l=>{v==null||v(void 0,l)})};return s.persist={setOptions:u=>{r={...r,...u},u.storage&&(d=u.storage)},clearStorage:()=>{d==null||d.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>x(),hasHydrated:()=>h,onHydrate:u=>(i.add(u),()=>{i.delete(u)}),onFinishHydration:u=>(g.add(u),()=>{g.delete(u)})},r.skipHydration||x(),p||S},Le=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((ke?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Ce(e,t)):Ie(e,t),Te=Le,ze=e=>({repositories:[],username:"",searchTerm:"",setRepositories:t=>e({repositories:t}),setUsername:t=>e({username:t}),setSearchTerm:t=>e({searchTerm:t}),clearRepositories:()=>e({repositories:[],searchTerm:""})}),R=_e()(Te(ze,{name:"repository-storage",storage:B(()=>localStorage),partialize:e=>({repositories:e.repositories,username:e.username})})),De=f.div`
  width: 100%;
  height: 100%;
  background-color: #282a36;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,He=f.h1`
  color: #ffff;
  padding: 0 1rem;
`,$e=f.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
  position: relative;
`,Pe=f.div`
  position: relative;
  margin-right: 1rem;
`,Ue=f.input`
  width: 12rem;
  height: 2rem;
  color: #ffff;
  padding-left: 0.5rem;
  border: 2px solid #ff7043;
  border-radius: 6px;
  background-color: transparent;
  ::placeholder {
    color: #ff7043;
  }
  &:focus {
    outline: none;
    border-color: #ff8942;
  }
`,$=f.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #212529;
  border: 2px solid #ff7043;
  border-top: none;
  border-radius: 0 0 6px 6px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`,P=f.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #292e32;
  }
`,Fe=f.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.5rem;
`,Ae=f.span`
  color: #ffff;
  font-size: 0.9rem;
`,Ne=f.button`
  width: 5rem;
  height: 2rem;
  color: #ffff;
  background-color: #ff7043;
  border-radius: 6px;
  border: 1px solid #ff7043;
  cursor: pointer;
  transition:
    background-color 0.2s,
    opacity 0.2s;

  &:hover:not(:disabled) {
    background-color: #ff8942;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Oe=f.div`
  font-size: 1rem;
  color: red;
  margin-top: 0.5rem;
`;function Ge(e,t){const[o,n]=j.useState(e);return j.useEffect(()=>{const s=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(s)}},[e,t]),o}const Je=()=>{const[e,t]=j.useState(""),[o,n]=j.useState([]),[s,r]=j.useState(!1),[h,i]=j.useState(!1),[g,d]=j.useState(!1),[b,y]=j.useState(!1),S=U(),p=R(m=>m.setRepositories),x=R(m=>m.setUsername),u=Ge(e,300),c=j.useRef(null);j.useEffect(()=>{const m=E=>{c.current&&!c.current.contains(E.target)&&r(!1)};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[]),j.useEffect(()=>{(async()=>{if(u.trim().length<2){n([]);return}y(!0);try{const E=await fetch(`https://api.github.com/search/users?q=${u}&per_page=10`);if(E.ok){const C=await E.json();n(C.items||[])}else n([])}catch{n([])}finally{y(!1)}})()},[u]);const v=async m=>{const E=m||e;if(E.trim()){i(!0),d(!1),r(!1);try{const C=await fetch(`https://api.github.com/users/${E}/repos`);if(!C.ok)throw new Error("User not found");const W=await C.json();p(W),x(E),S("/repositories")}catch{d(!0)}finally{i(!1)}}},l=m=>{m.key==="Enter"&&v()},w=m=>{t(m.login),r(!1),v(m.login)};return a.jsxs(De,{children:[a.jsx(He,{children:"Lista de Repositórios:"}),a.jsxs($e,{ref:c,children:[a.jsxs(Pe,{children:[a.jsx(Ue,{maxLength:64,onKeyPress:l,placeholder:"Digite o usuário do Github",value:e,onChange:m=>{t(m.target.value),d(!1),r(!0)},onFocus:()=>r(!0),"aria-label":"Nome de usuário do GitHub",autoComplete:"off"}),s&&e.trim().length>=2&&(b?a.jsx($,{children:a.jsx(P,{children:"Carregando..."})}):o.length>0?a.jsx($,{children:o.map(m=>a.jsxs(P,{onClick:()=>w(m),children:[a.jsx(Fe,{src:m.avatar_url,alt:m.login}),a.jsx(Ae,{children:m.login})]},m.id))}):null)]}),a.jsx(Ne,{type:"button",onClick:()=>v(),disabled:!e.trim()||h,children:h?"Buscando...":"Pesquisar"})]}),g&&a.jsx(Oe,{children:"Usuário não encontrado"}),a.jsx(F,{})]})},Be=f.div`
  width: 100%;
  min-height: 100%;
  background-color: #282a36;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
`,We=f.h1`
  color: #ffff;
  -webkit-user-select: none;
  user-select: none;
`,qe=f.div`
  width: 90vw;
  max-width: 800px;
  margin-top: 1rem;
  background-color: transparent;
  border: 2px solid #ff7043;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 60vh;
  padding: 1rem;
`,Me=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ke=f.div`
  background-color: #212529;
  border: 1px solid #343a40;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border-color: #ff7043;
  }
`,Ve=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Ye=f.h3`
  color: #ff7043;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`,Qe=f.span`
  display: flex;
  align-items: center;
  color: #ced4da;
  font-size: 0.85rem;
`,Xe=f.p`
  color: #878a99;
  font-size: 0.9rem;
  margin-top: 0.75rem;
  line-height: 1.4;
`,Ze=f(K)`
  width: 5rem;
  background: linear-gradient(
    178.8deg,
    #ff7043 47.41%,
    #cc5935 65.18%,
    #994227 90.84%
  );
  text-transform: uppercase;
  font-weight: bold;
  color: #ffff;
  height: 2rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`,et=f.input`
  width: 100%;
  max-width: 300px;
  height: 2rem;
  background-color: transparent;
  border: 2px solid #ff7043;
  border-radius: 6px;
  margin-top: 1rem;
  padding: 0 0.75rem;
  color: #ffff;
  font-size: 0.9rem;

  ::placeholder {
    color: #ff7043;
  }

  &:focus {
    outline: none;
    border-color: #ff8942;
  }
`,tt=f.p`
  color: #878a99;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
`,rt={JavaScript:"#f1e05a",TypeScript:"#3178c6",Python:"#3572A5",Java:"#b07219","C++":"#f34b7d",C:"#555555","C#":"#178600",Ruby:"#701516",Go:"#00ADD8",Rust:"#dea584",PHP:"#4F5D95",Swift:"#F05138",Kotlin:"#A97BFF",Dart:"#00B4AB",HTML:"#e34c26",CSS:"#563d7c",Shell:"#89e051"};function ot(e){return e&&rt[e]||"#878a99"}const nt=()=>{const e=U(),t=R(i=>i.repositories),o=R(i=>i.searchTerm),n=R(i=>i.setSearchTerm),s=R(i=>i.clearRepositories);j.useEffect(()=>{t.length===0&&e("/")},[t,e]);const r=t.filter(i=>i.name.toLowerCase().includes(o.toLowerCase())),h=()=>{s()};return a.jsxs(Be,{children:[a.jsx(We,{children:"Repositórios:"}),a.jsx(et,{type:"text",placeholder:"Pesquise aqui",value:o,onChange:i=>n(i.target.value),"aria-label":"Pesquisar repositórios"}),a.jsx(qe,{children:r.length===0?a.jsx(tt,{children:"Nenhum repositório encontrado"}):a.jsx(Me,{children:r.map(i=>a.jsxs(Ke,{onClick:()=>{var g;return(g=window.open(i.html_url,"_blank"))==null?void 0:g.focus()},children:[a.jsxs(Ve,{children:[a.jsx(Ye,{children:i.name}),i.language&&a.jsxs(Qe,{children:[a.jsx("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",backgroundColor:ot(i.language),marginRight:"6px"}}),i.language]})]}),i.description&&a.jsx(Xe,{children:i.description})]},i.id))})}),a.jsx(Ze,{onClick:h,to:"/",children:"Voltar"}),a.jsx(F,{})]})};function it(){return a.jsxs(V,{children:[a.jsx(L,{path:"/",element:a.jsx(Je,{})}),a.jsx(L,{path:"/repositories",element:a.jsx(nt,{})}),a.jsx(L,{path:"*",element:a.jsx(Y,{to:"/"})})]})}export{it as default};
