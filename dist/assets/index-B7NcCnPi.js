import{r as d,a as je,u as F,L as N,b as ge,N as J,R as ve,c as A,d as we,B as ye}from"./vendor-IChC6b9k.js";import{a as ke}from"./utils-C0Zqfgkc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&o(w)}).observe(document,{childList:!0,subtree:!0});function f(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(m){if(m.ep)return;m.ep=!0;const h=f(m);fetch(m.href,h)}})();var xe={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne=d,Ce=Symbol.for("react.element"),Se=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Me=Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ze={key:!0,ref:!0,__self:!0,__source:!0};function ue(g,t,f){var o,m={},h=null,w=null;f!==void 0&&(h=""+f),t.key!==void 0&&(h=""+t.key),t.ref!==void 0&&(w=t.ref);for(o in t)Le.call(t,o)&&!ze.hasOwnProperty(o)&&(m[o]=t[o]);if(g&&g.defaultProps)for(o in t=g.defaultProps,t)m[o]===void 0&&(m[o]=t[o]);return{$$typeof:Ce,type:g,key:h,ref:w,props:m,_owner:Me.current}}U.Fragment=Se;U.jsx=ue;U.jsxs=ue;xe.exports=U;var e=xe.exports,fe,Q=je;fe=Q.createRoot,Q.hydrateRoot;const L=ke.create({baseURL:"http://localhost:5000/api"}),be=d.createContext(null);function De({children:g}){const[t,f]=d.useState(null),[o,m]=d.useState(null),[h,w]=d.useState(null),[x,b]=d.useState(!0);d.useEffect(()=>{(async()=>{const n=localStorage.getItem("token");if(n){f(n);const l=localStorage.getItem("userData");if(l)try{const s=JSON.parse(l);w(s),b(!1)}catch(s){console.error("Error parsing cached user data:",s),localStorage.removeItem("userData")}try{const s=JSON.parse(atob(n.split(".")[1]));m(s.role||null),L.defaults.headers.common.Authorization=`Bearer ${n}`;const i=await L.get("/auth/profile");w(i.data),localStorage.setItem("userData",JSON.stringify(i.data))}catch(s){console.error("Error fetching user data:",s),m(null),w(null),localStorage.removeItem("token"),localStorage.removeItem("userData"),f(null)}}b(!1)})()},[]);const k=async(v,n)=>{const s=(await L.post("/auth/login",{email:v,password:n})).data.token;localStorage.setItem("token",s),f(s);try{const i=JSON.parse(atob(s.split(".")[1]));m(i.role||null),L.defaults.headers.common.Authorization=`Bearer ${s}`;const j=await L.get("/auth/profile");w(j.data),localStorage.setItem("userData",JSON.stringify(j.data))}catch(i){console.error("Error during login:",i),m(null),w(null),localStorage.removeItem("userData")}},u=()=>{localStorage.removeItem("token"),localStorage.removeItem("userData"),f(null),m(null),w(null),delete L.defaults.headers.common.Authorization},r=async v=>{try{const n=await L.put("/auth/profile",v);return w(n.data),n.data}catch(n){throw console.error("Error updating user:",n),n}},a=d.useMemo(()=>({token:t,role:o,user:h,loading:x,login:k,logout:u,updateUser:r}),[t,o,h,x]);return e.jsx(be.Provider,{value:a,children:g})}function P(){return d.useContext(be)}const Ie=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),e.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]}),Ae=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 3v18h18"}),e.jsx("path",{d:"m19 9-5 5-4-4-3 3"})]}),Be=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Pe=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),We=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})}),X=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]}),Te=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),Re=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M8 2v4"}),e.jsx("path",{d:"M16 2v4"}),e.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),e.jsx("path",{d:"M3 10h18"})]}),$e=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),e.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]});function Ee(){const{token:g}=P(),t=F(),f=()=>{t(g?"/dashboard":"/register")},o=[{icon:e.jsx(Ie,{}),title:"Smart Reminders",description:"Never miss a renewal with intelligent notifications delivered at the perfect time."},{icon:e.jsx(Ae,{}),title:"Cost Analytics",description:"Visualize your spending patterns and identify opportunities to save money."},{icon:e.jsx(Be,{}),title:"Team Collaboration",description:"Share subscription management with your team and assign roles easily."},{icon:e.jsx(Pe,{}),title:"Secure Payments",description:"Enterprise-grade security for all your payment information and data."}],m=[{value:"10K+",label:"Active Users"},{value:"₹2M+",label:"Money Saved"},{value:"99.9%",label:"Uptime"},{value:"4.9",label:"User Rating"}],h=[{number:"01",icon:e.jsx(Te,{}),title:"Connect",description:"Link your subscriptions in seconds with our easy import tools."},{number:"02",icon:e.jsx(Re,{}),title:"Track",description:"Monitor renewal dates and costs in one beautiful dashboard."},{number:"03",icon:e.jsx($e,{}),title:"Save",description:"Get alerts before renewals and optimize your spending."}],w=[{name:"Free",price:"₹0",period:"forever",description:"Perfect for getting started",features:["Up to 5 subscriptions","Basic reminders","Email notifications","Mobile app access"],cta:"Get Started",popular:!1},{name:"Pro",price:"₹699",period:"per month",description:"Best for professionals",features:["Unlimited subscriptions","Advanced analytics","SMS reminders","Team collaboration","API access","Priority support"],cta:"Start Free Trial",popular:!0},{name:"Enterprise",price:"₹3999",period:"per month",description:"For large organizations",features:["Everything in Pro","SSO & SAML","Custom integrations","Dedicated support","SLA guarantee","Audit logs"],cta:"Contact Sales",popular:!1}];return e.jsxs("div",{className:"home-page",children:[e.jsxs("section",{className:"hero-section",children:[e.jsxs("div",{className:"hero-bg-effects",children:[e.jsx("div",{className:"hero-orb orb-1"}),e.jsx("div",{className:"hero-orb orb-2"}),e.jsx("div",{className:"hero-orb orb-3"})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-badge",children:[e.jsx("span",{className:"badge-icon",children:"✨"}),e.jsx("span",{children:"Trusted by 10,000+ teams worldwide"})]}),e.jsxs("h1",{className:"hero-title",children:["Never Miss a"," ",e.jsx("span",{className:"gradient-text",children:"Renewal"})," ","Again"]}),e.jsx("p",{className:"hero-subtitle",children:"Track all your SaaS subscriptions, get smart renewal reminders, and save money with intelligent analytics. The subscription management platform that pays for itself."}),e.jsxs("div",{className:"hero-cta",children:[e.jsxs("button",{onClick:f,className:"btn btn-primary btn-lg",children:["Get Started Free",e.jsx(X,{})]}),e.jsx(N,{to:"/login",className:"btn btn-secondary btn-lg",children:"Try Demo"})]}),e.jsx("div",{className:"hero-trust",children:e.jsx("p",{children:"No credit card required • 14-day free trial • Cancel anytime"})})]})})]}),e.jsx("section",{className:"features-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header text-center",children:[e.jsx("h2",{className:"section-title",children:"Everything You Need"}),e.jsx("p",{className:"section-subtitle",children:"Powerful features to help you take control of your subscriptions"})]}),e.jsx("div",{className:"features-grid",children:o.map((x,b)=>e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:x.icon}),e.jsx("h3",{className:"feature-title",children:x.title}),e.jsx("p",{className:"feature-description",children:x.description})]},b))})]})}),e.jsx("section",{className:"stats-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"stats-grid",children:m.map((x,b)=>e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:x.value}),e.jsx("div",{className:"stat-label",children:x.label})]},b))})})}),e.jsx("section",{className:"how-it-works-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header text-center",children:[e.jsx("h2",{className:"section-title",children:"How It Works"}),e.jsx("p",{className:"section-subtitle",children:"Get started in minutes, not hours"})]}),e.jsx("div",{className:"steps-grid",children:h.map((x,b)=>e.jsxs("div",{className:"step-card",children:[e.jsx("div",{className:"step-number",children:x.number}),e.jsx("div",{className:"step-icon",children:x.icon}),e.jsx("h3",{className:"step-title",children:x.title}),e.jsx("p",{className:"step-description",children:x.description})]},b))})]})}),e.jsx("section",{className:"pricing-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header text-center",children:[e.jsx("h2",{className:"section-title",children:"Simple, Transparent Pricing"}),e.jsx("p",{className:"section-subtitle",children:"Choose the plan that fits your needs"})]}),e.jsx("div",{className:"pricing-grid",children:w.map((x,b)=>e.jsxs("div",{className:`pricing-card ${x.popular?"popular":""}`,children:[x.popular&&e.jsx("div",{className:"popular-badge",children:"Most Popular"}),e.jsxs("div",{className:"pricing-header",children:[e.jsx("h3",{className:"pricing-name",children:x.name}),e.jsxs("div",{className:"pricing-price",children:[e.jsx("span",{className:"price",children:x.price}),e.jsxs("span",{className:"period",children:["/",x.period]})]}),e.jsx("p",{className:"pricing-description",children:x.description})]}),e.jsx("ul",{className:"pricing-features",children:x.features.map((k,u)=>e.jsxs("li",{children:[e.jsx(We,{}),k]},u))}),e.jsx(N,{to:"/register",className:`btn ${x.popular?"btn-primary":"btn-secondary"} btn-lg`,style:{width:"100%"},children:x.cta})]},b))})]})}),e.jsx("section",{className:"cta-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cta-card",children:[e.jsx("h2",{className:"cta-title",children:"Ready to Take Control?"}),e.jsx("p",{className:"cta-subtitle",children:"Join thousands of users who have saved money and reduced subscription headaches."}),e.jsxs("button",{onClick:f,className:"btn btn-primary btn-lg",children:["Start Managing Today",e.jsx(X,{})]})]})})}),e.jsx("footer",{className:"footer",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsx("span",{className:"nav-brand gradient-text",children:"RenewSense"}),e.jsx("p",{children:"Smart subscription management for modern teams."})]}),e.jsxs("div",{className:"footer-links",children:[e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"Product"}),e.jsx("a",{href:"#features",children:"Features"}),e.jsx("a",{href:"#pricing",children:"Pricing"}),e.jsx("a",{href:"#",children:"Integrations"}),e.jsx("a",{href:"#",children:"API"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"Company"}),e.jsx("a",{href:"#",children:"About"}),e.jsx("a",{href:"#",children:"Blog"}),e.jsx("a",{href:"#",children:"Careers"}),e.jsx("a",{href:"#",children:"Contact"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"Legal"}),e.jsx("a",{href:"#",children:"Privacy"}),e.jsx("a",{href:"#",children:"Terms"}),e.jsx("a",{href:"#",children:"Security"})]})]})]}),e.jsx("div",{className:"footer-bottom",children:e.jsx("p",{children:"© 2026 RenewSense. All rights reserved."})})]})}),e.jsx("style",{children:`
        .home-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 6rem 0;
        }

        .hero-bg-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -200px;
          right: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          bottom: -100px;
          left: -100px;
          animation-delay: -4s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          top: 50%;
          left: 30%;
          animation-delay: -2s;
          opacity: 0.2;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .badge-icon {
          font-size: 1rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .hero-trust {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        /* Features Section */
        .features-section {
          padding: 6rem 0;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 1rem;
          color: #3b82f6;
          margin-bottom: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Stats Section */
        .stats-section {
          padding: 4rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-item .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-item .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* How It Works Section */
        .how-it-works-section {
          padding: 6rem 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
        }

        .steps-grid::before {
          content: '';
          position: absolute;
          top: 60px;
          left: 20%;
          right: 20%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          z-index: 0;
        }

        .step-card {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .step-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .step-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          color: #3b82f6;
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .step-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Pricing Section */
        .pricing-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .pricing-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
        }

        .pricing-card.popular {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.05);
          transform: scale(1.05);
        }

        .pricing-card.popular:hover {
          border-color: rgba(59, 130, 246, 0.7);
          transform: scale(1.05) translateY(-4px);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 1rem;
          border-radius: 9999px;
        }

        .pricing-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .pricing-price {
          margin-bottom: 0.5rem;
        }

        .pricing-price .price {
          font-size: 3rem;
          font-weight: 800;
        }

        .pricing-price .period {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .pricing-description {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .pricing-features li svg {
          color: var(--success);
          flex-shrink: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 4rem 0;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 2rem;
          padding: 4rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          color: var(--text-secondary);
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Footer */
        .footer {
          padding: 4rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand p {
          color: var(--text-secondary);
          margin-top: 1rem;
          max-width: 300px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .footer-column h4 {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .footer-column a {
          display: block;
          color: var(--text-secondary);
          padding: 0.35rem 0;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .footer-column a:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .steps-grid {
            grid-template-columns: 1fr;
          }
          
          .steps-grid::before {
            display: none;
          }
          
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          
          .pricing-card.popular {
            transform: none;
          }
          
          .pricing-card.popular:hover {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .cta-card {
            padding: 2rem;
          }
          
          .cta-title {
            font-size: 1.75rem;
          }
        }
      `})]})}const Fe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),Ue=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),He=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),Oe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}),e.jsx("path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}),e.jsx("path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}),e.jsx("line",{x1:"2",x2:"22",y1:"2",y2:"22"})]}),Ye=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]});function Ve(){const[g,t]=d.useState(""),[f,o]=d.useState(""),[m,h]=d.useState(!1),[w,x]=d.useState(!1),[b,k]=d.useState(""),[u,r]=d.useState(!1),a=F(),{login:v}=P(),n=async l=>{var s,i,j,c;if(l.preventDefault(),k(""),!g||!f){k("Email and password are required");return}if(!/^\S+@\S+\.\S+$/.test(g)){k("Enter a valid email");return}r(!0);try{await v(g,f),a("/dashboard")}catch(y){if((i=(s=y.response)==null?void 0:s.data)!=null&&i.notVerified){a("/register",{state:{email:g,requireOtp:!0}});return}k(((c=(j=y.response)==null?void 0:j.data)==null?void 0:c.message)||"Invalid credentials")}finally{r(!1)}};return e.jsxs("div",{className:"auth-page",children:[e.jsxs("div",{className:"auth-bg-effects",children:[e.jsx("div",{className:"auth-orb orb-1"}),e.jsx("div",{className:"auth-orb orb-2"})]}),e.jsxs("div",{className:"auth-container",children:[e.jsx("div",{className:"auth-branding",children:e.jsxs("div",{className:"branding-content",children:[e.jsx(N,{to:"/",className:"branding-logo",children:e.jsx("span",{className:"gradient-text",children:"RenewSense"})}),e.jsx("h1",{className:"branding-title",children:"Welcome back"}),e.jsx("p",{className:"branding-subtitle",children:"Sign in to continue managing your subscriptions and never miss a renewal again."}),e.jsxs("div",{className:"branding-features",children:[e.jsxs("div",{className:"branding-feature",children:[e.jsx("div",{className:"feature-dot"}),e.jsx("span",{children:"Track unlimited subscriptions"})]}),e.jsxs("div",{className:"branding-feature",children:[e.jsx("div",{className:"feature-dot"}),e.jsx("span",{children:"Smart renewal reminders"})]}),e.jsxs("div",{className:"branding-feature",children:[e.jsx("div",{className:"feature-dot"}),e.jsx("span",{children:"Detailed cost analytics"})]})]})]})}),e.jsx("div",{className:"auth-form-wrapper",children:e.jsxs("div",{className:"auth-card",children:[e.jsxs("div",{className:"auth-card-header",children:[e.jsx("h2",{className:"auth-card-title",children:"Sign In"}),e.jsx("p",{className:"auth-card-subtitle",children:"Enter your credentials to access your account"})]}),b&&e.jsxs("div",{className:"alert alert-error",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),e.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),b]}),e.jsxs("form",{onSubmit:n,className:"auth-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("span",{className:"input-icon",children:e.jsx(Fe,{})}),e.jsx("input",{type:"email",placeholder:"you@example.com",value:g,onChange:l=>t(l.target.value),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("span",{className:"input-icon",children:e.jsx(Ue,{})}),e.jsx("input",{type:m?"text":"password",placeholder:"Enter your password",value:f,onChange:l=>o(l.target.value),className:"form-input with-icon"}),e.jsx("button",{type:"button",className:"password-toggle",onClick:()=>h(!m),children:m?e.jsx(Oe,{}):e.jsx(He,{})})]})]}),e.jsxs("div",{className:"form-options",children:[e.jsxs("label",{className:"checkbox-wrapper",children:[e.jsx("input",{type:"checkbox",checked:w,onChange:l=>x(l.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{className:"checkbox-label",children:"Remember me"})]}),e.jsx(N,{to:"/forgot-password",className:"forgot-link",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg submit-btn",disabled:u,children:u?e.jsx("span",{className:"spinner"}):e.jsxs(e.Fragment,{children:["Sign In",e.jsx(Ye,{})]})})]}),e.jsx("div",{className:"auth-divider",children:e.jsx("span",{children:"or continue with"})}),e.jsxs("div",{className:"social-login",children:[e.jsxs("button",{className:"social-btn google",children:[e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:[e.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Google"]}),e.jsxs("button",{className:"social-btn github",children:[e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:e.jsx("path",{fill:"currentColor",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]})]}),e.jsxs("p",{className:"auth-footer-text",children:["Don't have an account?"," ",e.jsx(N,{to:"/register",className:"auth-link",children:"Create one now"})]})]})})]}),e.jsx("style",{children:`
        .auth-page {
          min-height: 100vh;
          display: flex;
          position: relative;
          overflow: hidden;
        }

        .auth-bg-effects {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .auth-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -200px;
          right: -200px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          bottom: -200px;
          left: -200px;
        }

        .auth-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Branding Side */
        .auth-branding {
          display: flex;
          align-items: center;
          padding: 3rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05));
        }

        .branding-content {
          max-width: 480px;
        }

        .branding-logo {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 3rem;
          display: inline-block;
        }

        .branding-logo span {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .branding-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .branding-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .branding-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .branding-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e2e8f0;
          font-size: 0.95rem;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
        }

        /* Form Side */
        .auth-form-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2.5rem;
        }

        .auth-card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-card-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .auth-card-subtitle {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 3rem;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .password-toggle:hover {
          color: #94a3b8;
        }

        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .checkbox-wrapper input {
          display: none;
        }

        .checkbox-custom {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .checkbox-wrapper input:checked + .checkbox-custom {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
        }

        .checkbox-wrapper input:checked + .checkbox-custom::after {
          content: '';
          width: 5px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label {
          color: #94a3b8;
        }

        .forgot-link {
          color: #3b82f6;
          font-weight: 500;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
          color: #64748b;
          font-size: 0.875rem;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #e2e8f0;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .auth-footer-text {
          text-align: center;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .auth-link {
          color: #3b82f6;
          font-weight: 600;
        }

        .auth-link:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .auth-container {
            grid-template-columns: 1fr;
          }

          .auth-branding {
            display: none;
          }

          .auth-form-wrapper {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 1.5rem;
          }

          .social-login {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const qe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Ge=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),_e=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),Ze=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),Je=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}),e.jsx("path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}),e.jsx("path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}),e.jsx("line",{x1:"2",x2:"22",y1:"2",y2:"22"})]}),Qe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]});function Xe(){var B,Y;const g=ge(),[t,f]=d.useState({name:"",email:"",password:""}),[o,m]=d.useState(!1),[h,w]=d.useState(!1),[x,b]=d.useState(""),[k,u]=d.useState(""),[r,a]=d.useState(!1),[v,n]=d.useState((B=g.state)!=null&&B.requireOtp?2:1),[l,s]=d.useState(""),[i,j]=d.useState(((Y=g.state)==null?void 0:Y.email)||""),c=F(),y=(S,I)=>{f({...t,[S]:I})},D=(S=>{let I=0;return S.length>=8&&I++,/[A-Z]/.test(S)&&I++,/[0-9]/.test(S)&&I++,/[^A-Za-z0-9]/.test(S)&&I++,I})(t.password),p=["Weak","Fair","Good","Strong"],C=["#f43f5e","#f59e0b","#3b82f6","#10b981"],M=async S=>{var I,$,V,q,G,_,Z;if(S.preventDefault(),b(""),u(""),v===1){if(!t.name||!t.email||!t.password){b("All fields are required");return}if(!/^\S+@\S+\.\S+$/.test(t.email)){b("Enter a valid email");return}if(t.password.length<6){b("Password must be at least 6 characters");return}if(!h){b("Please agree to the terms and conditions");return}a(!0);try{await L.post("/auth/register",{name:t.name,email:t.email,password:t.password}),u("Account created successfully! Please check your email for the OTP."),j(t.email),setTimeout(()=>{u(""),n(2)},1500)}catch(R){((I=R.response)==null?void 0:I.status)===200&&((V=($=R.response)==null?void 0:$.data)==null?void 0:V.message)==="OTP resent for existing unverified account"?(u("OTP resent to existing account."),j(t.email),setTimeout(()=>{u(""),n(2)},1500)):b(((G=(q=R.response)==null?void 0:q.data)==null?void 0:G.message)||"Could not create account. Please try again.")}finally{a(!1)}}else{if(!l){b("Please enter the OTP");return}a(!0);try{await L.post("/auth/verify-otp",{email:i,otp:l}),u("Email verified successfully!"),setTimeout(()=>c("/login"),1500)}catch(R){b(((Z=(_=R.response)==null?void 0:_.data)==null?void 0:Z.message)||"Invalid or expired OTP")}finally{a(!1)}}},W=async()=>{var S,I;try{await L.post("/auth/resend-otp",{email:i}),u("A new OTP has been sent to your email"),b("")}catch($){b(((I=(S=$.response)==null?void 0:S.data)==null?void 0:I.message)||"Failed to resend OTP"),u("")}};return e.jsxs("div",{className:"auth-page",children:[e.jsxs("div",{className:"auth-bg-effects",children:[e.jsx("div",{className:"auth-orb orb-1"}),e.jsx("div",{className:"auth-orb orb-2"})]}),e.jsxs("div",{className:"auth-container",children:[e.jsx("div",{className:"auth-branding",children:e.jsxs("div",{className:"branding-content",children:[e.jsx(N,{to:"/",className:"branding-logo",children:e.jsx("span",{className:"gradient-text",children:"RenewSense"})}),e.jsx("h1",{className:"branding-title",children:"Start your journey"}),e.jsx("p",{className:"branding-subtitle",children:"Create an account and join thousands of users who save money on their subscriptions every day."}),e.jsxs("div",{className:"branding-features",children:[e.jsxs("div",{className:"branding-feature",children:[e.jsx("div",{className:"feature-dot"}),e.jsx("span",{children:"Free 14-day trial"})]}),e.jsxs("div",{className:"branding-feature",children:[e.jsx("div",{className:"feature-dot"}),e.jsx("span",{children:"No credit card required"})]}),e.jsxs("div",{className:"branding-feature",children:[e.jsx("div",{className:"feature-dot"}),e.jsx("span",{children:"Cancel anytime"})]})]})]})}),e.jsx("div",{className:"auth-form-wrapper",children:e.jsxs("div",{className:"auth-card",children:[e.jsxs("div",{className:"auth-card-header",children:[e.jsx("h2",{className:"auth-card-title",children:v===1?"Create Account":"Verify Email"}),e.jsx("p",{className:"auth-card-subtitle",children:v===1?"Fill in your details to get started":`Enter the OTP sent to ${i}`})]}),x&&e.jsxs("div",{className:"alert alert-error",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),e.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),x]}),k&&e.jsxs("div",{className:"alert alert-success",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"m9 11 3 3L22 4"})]}),k]}),e.jsxs("form",{onSubmit:M,className:"auth-form",children:[v===1?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("span",{className:"input-icon",children:e.jsx(qe,{})}),e.jsx("input",{type:"text",placeholder:"John Doe",value:t.name,onChange:S=>y("name",S.target.value),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("span",{className:"input-icon",children:e.jsx(Ge,{})}),e.jsx("input",{type:"email",placeholder:"you@example.com",value:t.email,onChange:S=>y("email",S.target.value),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("span",{className:"input-icon",children:e.jsx(_e,{})}),e.jsx("input",{type:o?"text":"password",placeholder:"Create a strong password",value:t.password,onChange:S=>y("password",S.target.value),className:"form-input with-icon"}),e.jsx("button",{type:"button",className:"password-toggle",onClick:()=>m(!o),children:o?e.jsx(Je,{}):e.jsx(Ze,{})})]}),t.password&&e.jsxs("div",{className:"password-strength",children:[e.jsx("div",{className:"strength-bars",children:[1,2,3,4].map(S=>e.jsx("div",{className:`strength-bar ${D>=S?"active":""}`,style:{backgroundColor:D>=S?C[D-1]:"rgba(255,255,255,0.1)"}},S))}),e.jsx("span",{className:"strength-label",style:{color:C[D-1]},children:p[D-1]})]})]}),e.jsx("div",{className:"form-group",children:e.jsxs("label",{className:"checkbox-wrapper terms-checkbox",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:S=>w(S.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsxs("span",{className:"checkbox-label",children:["I agree to the"," ",e.jsx(N,{to:"/terms",className:"auth-link",children:"Terms of Service"})," ","and"," ",e.jsx(N,{to:"/privacy",className:"auth-link",children:"Privacy Policy"})]})]})})]}):e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"One Time Password (OTP)"}),e.jsx("div",{className:"input-wrapper",children:e.jsx("input",{type:"text",placeholder:"Enter 6-digit OTP",value:l,onChange:S=>s(S.target.value),className:"form-input",maxLength:6,style:{letterSpacing:"8px",textAlign:"center",fontSize:"1.25rem"}})}),e.jsx("div",{style:{marginTop:"1rem",textAlign:"center"},children:e.jsx("button",{type:"button",onClick:W,className:"auth-link",style:{background:"none",border:"none",cursor:"pointer"},children:"Resend OTP"})})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg submit-btn",disabled:r,children:r?e.jsx("span",{className:"spinner"}):e.jsxs(e.Fragment,{children:[v===1?"Create Account":"Verify Email",e.jsx(Qe,{})]})})]}),v===1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"auth-divider",children:e.jsx("span",{children:"or sign up with"})}),e.jsxs("div",{className:"social-login",children:[e.jsxs("button",{className:"social-btn google",children:[e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:[e.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Google"]}),e.jsxs("button",{className:"social-btn github",children:[e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:e.jsx("path",{fill:"currentColor",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]})]})]}),e.jsxs("p",{className:"auth-footer-text",children:["Already have an account?"," ",e.jsx(N,{to:"/login",className:"auth-link",children:"Sign in"})]})]})})]}),e.jsx("style",{children:`
        .auth-page {
          min-height: 100vh;
          display: flex;
          position: relative;
          overflow: hidden;
        }

        .auth-bg-effects {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .auth-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          top: -200px;
          right: -200px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          bottom: -200px;
          left: -200px;
        }

        .auth-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Branding Side */
        .auth-branding {
          display: flex;
          align-items: center;
          padding: 3rem;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.05));
        }

        .branding-content {
          max-width: 480px;
        }

        .branding-logo {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 3rem;
          display: inline-block;
        }

        .branding-logo span {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .branding-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .branding-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .branding-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .branding-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e2e8f0;
          font-size: 0.95rem;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-radius: 50%;
        }

        /* Form Side */
        .auth-form-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2.5rem;
        }

        .auth-card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-card-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .auth-card-subtitle {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 3rem;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .password-toggle:hover {
          color: #94a3b8;
        }

        /* Password Strength */
        .password-strength {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .strength-bars {
          display: flex;
          gap: 0.25rem;
          flex: 1;
        }

        .strength-bar {
          height: 4px;
          flex: 1;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .strength-label {
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* Checkbox */
        .checkbox-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          cursor: pointer;
        }

        .checkbox-wrapper input {
          display: none;
        }

        .checkbox-custom {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .checkbox-wrapper input:checked + .checkbox-custom {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
        }

        .checkbox-wrapper input:checked + .checkbox-custom::after {
          content: '';
          width: 5px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .terms-checkbox .checkbox-label {
          font-size: 0.8rem;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
          color: #64748b;
          font-size: 0.875rem;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #e2e8f0;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .auth-footer-text {
          text-align: center;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .auth-link {
          color: #3b82f6;
          font-weight: 600;
        }

        .auth-link:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .auth-container {
            grid-template-columns: 1fr;
          }

          .auth-branding {
            display: none;
          }

          .auth-form-wrapper {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 1.5rem;
          }

          .social-login {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const Ke=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 3h12"}),e.jsx("path",{d:"M6 8h12"}),e.jsx("path",{d:"M12 3v13"}),e.jsx("path",{d:"M12 13a2.5 2.5 0 0 0 2.5 2.5H18"}),e.jsx("path",{d:"M12 16a2.5 2.5 0 0 1-2.5 2.5H6"})]}),et=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),e.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),tt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M8 2v4"}),e.jsx("path",{d:"M16 2v4"}),e.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),e.jsx("path",{d:"M3 10h18"})]}),rt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),e.jsx("polyline",{points:"16 17 22 17 22 11"})]}),K=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"M12 5v14"})]}),E=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 3v18h18"}),e.jsx("path",{d:"m19 9-5 5-4-4-3 3"})]}),st=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]}),at=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),e.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]}),it=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]});function nt(){var l;const{user:g}=P(),[t,f]=d.useState([]),[o,m]=d.useState(!0),[h,w]=d.useState(""),[x,b]=d.useState(!1);d.useEffect(()=>{(async()=>{try{m(!0),f([])}catch(i){w("Failed to load subscriptions"),console.error("Error fetching subscriptions:",i)}finally{m(!1)}})()},[]);const k=[{title:"Monthly Spend",value:t.length>0?`₹${t.reduce((s,i)=>{const j=parseFloat(i.cost||0),c=i.billingCycle==="Yearly"?j/12:j;return s+c},0).toFixed(0)}`:"₹0",change:t.length>0?"Your actual spending":"No subscriptions yet",trend:(t.length>0,"neutral"),icon:e.jsx(Ke,{}),color:"blue"},{title:"Active Subscriptions",value:t.length.toString(),change:t.length>0?`${t.length} active services`:"Get started by adding your first subscription",trend:(t.length>0,"neutral"),icon:e.jsx(et,{}),color:t.length>0?"green":"gray"},{title:"Upcoming Renewals",value:t.filter(s=>{const i=new Date(s.renewalDate),j=new Date,c=new Date(j.getTime()+7*24*60*60*1e3);return i>=j&&i<=c}).length.toString(),change:t.length>0?"This week":"No upcoming renewals",trend:"neutral",icon:e.jsx(tt,{}),color:"amber"},{title:"Annual Savings Potential",value:t.length>0?`₹${t.filter(s=>s.billingCycle==="Monthly").reduce((s,i)=>s+parseFloat(i.cost||0)*2,0).toFixed(0)}`:"₹0",change:t.length>0?"Switch monthly to annual billing":"Add subscriptions to see savings potential",trend:"up",icon:e.jsx(rt,{}),color:t.length>0?"success":"gray"}],u=t.filter(s=>{const i=new Date(s.renewalDate),j=new Date,c=new Date(j.getTime()+7*24*60*60*1e3);return i>=j&&i<=c}).slice(0,3).map(s=>({name:s.softwareName,date:a(s.renewalDate),amount:`₹${s.cost}`,urgent:v(s.renewalDate)})),r=t.slice(0,3).map(s=>({action:"Added",item:`${s.softwareName} (${s.category})`,time:n(s.startDate)}));function a(s){const i=new Date(s),j=new Date,c=new Date(j);if(c.setDate(c.getDate()+1),i.toDateString()===j.toDateString())return"Today";if(i.toDateString()===c.toDateString())return"Tomorrow";const y=Math.ceil((i-j)/(1e3*60*60*24));return y<=7?`In ${y} days`:i.toLocaleDateString()}function v(s){const i=new Date(s);return Math.ceil((i-new Date)/(1e3*60*60*24))<=3}function n(s){const i=new Date(s),c=Math.floor((new Date-i)/(1e3*60*60));if(c<1)return"Just now";if(c<24)return`${c} hour${c!==1?"s":""} ago`;const y=Math.floor(c/24);return`${y} day${y!==1?"s":""} ago`}return e.jsxs("div",{className:"page dashboard-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"welcome-section",children:[e.jsxs("h1",{className:"page-title",children:["Welcome back, ",((l=g==null?void 0:g.name)==null?void 0:l.split(" ")[0])||"User","! 👋"]}),e.jsx("p",{className:"page-subtitle",children:"Here's what's happening with your subscriptions today."})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(N,{to:"/add",className:"btn btn-primary",children:[e.jsx(K,{}),"Add Subscription"]}),e.jsxs(N,{to:"/analytics",className:"btn btn-secondary",children:[e.jsx(E,{}),"View Analytics"]})]})]}),t.length===0&&e.jsx("div",{className:"card mb-2",style:{transform:"scale(0.85)",transformOrigin:"top center"},children:e.jsxs("div",{className:"card-content text-center py-3",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2",children:e.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),e.jsx("h2",{className:"text-lg font-bold text-white mb-1",children:"Welcome to Your Subscription Dashboard!"}),e.jsx("p",{className:"text-gray-400 text-xs max-w-xl mx-auto",children:"Get started by adding your first subscription to track your software expenses and manage renewals."})]}),e.jsxs(N,{to:"/add",className:"btn btn-primary inline-flex items-center text-sm py-1.5 px-3",children:[e.jsx(K,{}),"Add Your First Subscription"]})]})}),e.jsx("div",{className:"stats-grid",children:k.map((s,i)=>e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:`stat-icon ${s.color}`,children:s.icon}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:s.value}),e.jsx("div",{className:"stat-label",children:s.title}),e.jsx("div",{className:`stat-trend ${s.trend}`,children:s.change})]})]},i))}),e.jsxs("div",{className:"dashboard-grid tab-transition-enter-active",children:[e.jsxs("div",{className:"dashboard-card card-fade-in",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h3",{className:"card-title",children:[e.jsx(at,{}),"Upcoming Renewals"]}),t.length>0&&e.jsxs(N,{to:"/manage",className:"card-link",children:["View all",e.jsx(st,{})]})]}),e.jsx("div",{className:"renewals-list",children:u.length>0?u.map((s,i)=>e.jsxs("div",{className:`renewal-item ${s.urgent?"urgent":""}`,children:[e.jsxs("div",{className:"renewal-info",children:[e.jsx("div",{className:"renewal-name",children:s.name}),e.jsxs("div",{className:"renewal-date",children:[e.jsx(it,{}),s.date]})]}),e.jsx("div",{className:"renewal-amount",children:s.amount})]},i)):e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-gray-500 mb-2",children:e.jsx("svg",{className:"w-12 h-12 mx-auto mb-3 opacity-50",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),e.jsx("p",{className:"text-gray-400",children:t.length===0?"Add subscriptions to see upcoming renewals":"No upcoming renewals this week"})]})})]}),e.jsxs("div",{className:"dashboard-card card-fade-in",style:{animationDelay:"0.2s"},children:[e.jsx("div",{className:"card-header",children:e.jsxs("h3",{className:"card-title",children:[e.jsx(E,{}),"Financial Insights"]})}),e.jsx("div",{className:"activity-list",children:t.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"activity-item",children:[e.jsx("div",{className:"activity-badge bg-blue-500",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{className:"activity-info",children:[e.jsxs("div",{className:"activity-text",children:[e.jsx("span",{className:"action",children:"Savings Opportunity"})," ",e.jsxs("span",{className:"item",children:["Switch ",t.filter(s=>s.billingCycle==="Monthly").length," monthly subscriptions to annual billing"]})]}),e.jsxs("div",{className:"activity-time text-green-400",children:["Potential savings: ₹",t.filter(s=>s.billingCycle==="Monthly").length*100,"/year"]})]})]}),e.jsxs("div",{className:"activity-item",children:[e.jsx("div",{className:"activity-badge bg-green-500",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{className:"activity-info",children:[e.jsxs("div",{className:"activity-text",children:[e.jsx("span",{className:"action",children:"Healthy Portfolio"})," ",e.jsxs("span",{className:"item",children:[[...new Set(t.map(s=>s.category))].length," categories of essential tools"]})]}),e.jsx("div",{className:"activity-time text-green-400",children:"Good diversification achieved"})]})]}),e.jsxs("div",{className:"activity-item",children:[e.jsx("div",{className:"activity-badge bg-amber-500",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),e.jsxs("div",{className:"activity-info",children:[e.jsxs("div",{className:"activity-text",children:[e.jsx("span",{className:"action",children:"Renewal Alert"})," ",e.jsxs("span",{className:"item",children:[u.length," subscriptions renew this week"]})]}),e.jsx("div",{className:"activity-time text-amber-400",children:"Review before renewal"})]})]})]}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-gray-500 mb-2",children:e.jsx("svg",{className:"w-12 h-12 mx-auto mb-3 opacity-50",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),e.jsx("p",{className:"text-gray-400",children:"Add subscriptions to see personalized financial insights"})]})})]}),e.jsxs("div",{className:"dashboard-card card-fade-in",style:{animationDelay:"0.1s"},children:[e.jsx("div",{className:"card-header",children:e.jsxs("h3",{className:"card-title",children:[e.jsx(E,{}),"Recent Activity"]})}),e.jsx("div",{className:"activity-list",children:r.length>0?r.map((s,i)=>e.jsxs("div",{className:"activity-item",children:[e.jsx("div",{className:`activity-badge ${s.action.toLowerCase()}`,children:s.action[0]}),e.jsxs("div",{className:"activity-info",children:[e.jsxs("div",{className:"activity-text",children:[e.jsx("span",{className:"action",children:s.action})," ",e.jsx("span",{className:"item",children:s.item})]}),e.jsx("div",{className:"activity-time",children:s.time})]})]},i)):e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-gray-500 mb-2",children:e.jsx("svg",{className:"w-12 h-12 mx-auto mb-3 opacity-50",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsx("p",{className:"text-gray-400",children:t.length===0?"Add subscriptions to see activity history":"No recent activity to display"})]})})]}),e.jsxs("div",{className:"dashboard-card tips-card card-fade-in",style:{animationDelay:"0.3s"},children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"💡 Quick Tips"})}),e.jsxs("div",{className:"tips-list",children:[e.jsxs("div",{className:"tip-item",children:[e.jsx("div",{className:"tip-icon",children:"1"}),e.jsx("p",{children:"Set up renewal reminders to avoid unexpected charges"})]}),e.jsxs("div",{className:"tip-item",children:[e.jsx("div",{className:"tip-icon",children:"2"}),e.jsx("p",{children:"Review your subscriptions monthly to identify unused services"})]}),e.jsxs("div",{className:"tip-item",children:[e.jsx("div",{className:"tip-icon",children:"3"}),e.jsx("p",{children:"Consider annual billing for discounts up to 20%"})]})]})]}),e.jsxs("div",{className:"dashboard-card chart-card graph-pop-in",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h3",{className:"card-title",children:[e.jsx(E,{}),"Spending Overview"]}),e.jsxs("select",{className:"form-input form-input-sm",children:[e.jsx("option",{children:"This Month"}),e.jsx("option",{children:"Last Month"}),e.jsx("option",{children:"This Year"})]})]}),e.jsxs("div",{className:"chart-placeholder",children:[e.jsx("div",{className:"chart-bars",children:[65,45,80,55,70,90,60,75,50,85,40,95].map((s,i)=>e.jsx("div",{className:"chart-bar",style:{height:`${s}%`}},i))}),e.jsxs("div",{className:"chart-labels",children:[e.jsx("span",{children:"Jan"}),e.jsx("span",{children:"Jun"}),e.jsx("span",{children:"Dec"})]})]})]})]})]}),e.jsx("style",{children:`
        /* Smooth Transitions */
        .dashboard-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }
        
        .tab-transition-enter {
          opacity: 0;
          transform: translateY(10px);
        }
        
        .tab-transition-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.4s ease-out;
        }
        
        .card-fade-in {
          animation: cardFadeIn 0.6s ease-out forwards;
        }
        
        .graph-pop-in {
          animation: graphPopIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .text-appear {
          animation: textAppear 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        @keyframes cardFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        
        @keyframes graphPopIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          70% {
            opacity: 1;
            transform: scale(1.02) translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes textAppear {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .welcome-section {
          flex: 1;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          font-size: 0.8125rem;
          white-space: nowrap;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
        }

        .stat-icon.blue {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .stat-icon.green {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .stat-icon.amber {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .stat-icon.rose {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .stat-trend {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          display: inline-block;
        }

        .stat-trend.up {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .stat-trend.down {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .stat-trend.neutral {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        /* Dashboard Grid */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .dashboard-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
        }

        .card-title svg {
          color: #64748b;
          width: 18px;
          height: 18px;
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #3b82f6;
          font-weight: 500;
        }

        .card-link:hover {
          color: #60a5fa;
        }

        /* Renewals List */
        .renewals-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .renewal-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 0.75rem;
          transition: all 0.2s;
        }

        .renewal-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .renewal-item.urgent {
          border-color: rgba(244, 63, 94, 0.3);
          background: rgba(244, 63, 94, 0.05);
        }

        .renewal-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .renewal-name {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .renewal-date {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .renewal-date svg {
          width: 14px;
          height: 14px;
        }

        .renewal-amount {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.95rem;
        }

        /* Activity List */
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .activity-badge {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .activity-badge.added {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .activity-badge.renewed {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .activity-badge.cancelled {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .activity-info {
          flex: 1;
        }

        .activity-text {
          font-size: 0.9rem;
          color: #e2e8f0;
        }

        .activity-text .action {
          font-weight: 600;
        }

        .activity-time {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.125rem;
        }

        /* Tips Card */
        .tips-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.05));
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tip-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
        }

        .tip-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .tip-item p {
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.5;
          margin: 0;
        }

        /* Chart Card */
        .chart-card .card-header {
          margin-bottom: 1.5rem;
        }

        .form-input-sm {
          padding: 0.375rem 0.75rem;
          font-size: 0.8rem;
          width: auto;
        }

        .chart-placeholder {
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 0.5rem;
          height: 140px;
          padding-bottom: 0.5rem;
        }

        .chart-bar {
          flex: 1;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 4px 4px 0 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .chart-bar:hover {
          opacity: 1;
        }

        .chart-bar:nth-child(4n) {
          opacity: 1;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .page-header {
            flex-direction: column;
            gap: 1rem;
          }

          .header-actions {
            width: 100%;
          }

          .header-actions .btn {
            flex: 1;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            flex-direction: row;
            align-items: center;
          }
        }
      `})]})}const ot=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m12 19-7-7 7-7"}),e.jsx("path",{d:"M19 12H5"})]}),ee=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m7.5 4.27 9 5.15"}),e.jsx("path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}),e.jsx("path",{d:"m3.3 7 8.7 5 8.7-5"}),e.jsx("path",{d:"M12 22V12"})]}),lt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"}),e.jsx("path",{d:"M7 7h.01"})]}),te=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 3h12"}),e.jsx("path",{d:"M6 8h12"}),e.jsx("path",{d:"M12 3v13"}),e.jsx("path",{d:"M12 13a2.5 2.5 0 0 0 2.5 2.5H18"}),e.jsx("path",{d:"M12 16a2.5 2.5 0 0 1-2.5 2.5H6"})]}),H=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M8 2v4"}),e.jsx("path",{d:"M16 2v4"}),e.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),e.jsx("path",{d:"M3 10h18"})]}),re=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),e.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),ct=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}),e.jsx("path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}),e.jsx("path",{d:"M10 9H8"}),e.jsx("path",{d:"M16 13H8"}),e.jsx("path",{d:"M16 17H8"})]}),se=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})});function dt(){const g=F(),[t,f]=d.useState({softwareName:"",category:"",cost:"",billingCycle:"Monthly",startDate:"",renewalDate:"",paymentMethod:"",notes:""}),[o,m]=d.useState(""),[h,w]=d.useState(""),[x,b]=d.useState(!1),k=["Communication","Meetings","Productivity","Design","Development","Marketing","Finance","CRM","Analytics","Security","Cloud Storage","Project Management","HR & Payroll","Accounting","E-commerce","Other"],u=["Credit Card","Debit Card","PayPal","Bank Transfer","Direct Debit","Digital Wallet","Corporate Account","Invoice/Purchase Order","Other"];function r(n,l){if(f({...t,[n]:l}),n==="startDate"&&l&&t.billingCycle){const s=new Date(l);let i=new Date(s);t.billingCycle==="Monthly"?(i.setMonth(i.getMonth()+1),s.getDate()>28&&i.getDate()<s.getDate()&&i.setDate(0)):(i.setFullYear(i.getFullYear()+1),s.getMonth()===1&&s.getDate()===29&&(a(i.getFullYear())||i.setDate(28))),f(j=>({...j,[n]:l,renewalDate:i.toISOString().split("T")[0]}))}else if(n==="billingCycle"&&l&&t.startDate){const s=new Date(t.startDate);let i=new Date(s);l==="Monthly"?(i.setMonth(i.getMonth()+1),s.getDate()>28&&i.getDate()<s.getDate()&&i.setDate(0)):(i.setFullYear(i.getFullYear()+1),s.getMonth()===1&&s.getDate()===29&&(a(i.getFullYear())||i.setDate(28))),f(j=>({...j,[n]:l,renewalDate:i.toISOString().split("T")[0]}))}else f(s=>({...s,[n]:l}))}function a(n){return n%4===0&&n%100!==0||n%400===0}const v=n=>{if(n.preventDefault(),m(""),w(""),!t.softwareName||!t.category||!t.cost||!t.startDate||!t.renewalDate){m("Please fill in all required fields");return}const l=Number(t.cost);if(l<0){m("Cost must be non-negative");return}if(l>1e4){m("Cost seems unusually high. Please verify the amount.");return}if(t.billingCycle==="Monthly"&&l>1e3){m("Monthly cost seems high. Consider if this should be annual billing.");return}const s=new Date(t.startDate),i=new Date(t.renewalDate),j=new Date;if(i<=s){m("Renewal date must be after start date");return}if(s>j){m("Start date cannot be in the future");return}if(i<j){m("Renewal date should be in the future");return}const y=(i-s)/(1e3*60*60*24);if(t.billingCycle==="Monthly"&&y>35){m("For monthly billing, renewal should be approximately 30 days after start date");return}if(t.billingCycle==="Yearly"&&y<330){m("For yearly billing, renewal should be approximately 365 days after start date");return}b(!0),setTimeout(()=>{w("Subscription added successfully!"),b(!1),setTimeout(()=>g("/manage"),1500)},800)};return e.jsxs("div",{className:"page add-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs(N,{to:"/dashboard",className:"back-link",children:[e.jsx(ot,{}),"Back to Dashboard"]}),e.jsx("div",{className:"page-header",children:e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Add Subscription"}),e.jsx("p",{className:"page-subtitle",children:"Track a new SaaS subscription and never miss a renewal"})]})}),e.jsxs("div",{className:"form-card",children:[o&&e.jsxs("div",{className:"alert alert-error",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),e.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),o]}),h&&e.jsxs("div",{className:"alert alert-success",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"m9 11 3 3L22 4"})]}),h]}),e.jsxs("form",{onSubmit:v,className:"subscription-form",children:[e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-section",children:[e.jsxs("h3",{className:"section-title",children:[e.jsx(ee,{}),"Basic Information"]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Software Name ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(ee,{}),e.jsx("input",{type:"text",placeholder:"e.g., Slack, Zoom, Notion",value:t.softwareName,onChange:n=>r("softwareName",n.target.value),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Category ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(lt,{}),e.jsxs("select",{value:t.category,onChange:n=>r("category",n.target.value),className:"form-input with-icon",children:[e.jsx("option",{value:"",children:"Select a category"}),k.map(n=>e.jsx("option",{value:n,children:n},n))]})]})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsxs("h3",{className:"section-title",children:[e.jsx(te,{}),"Pricing Details"]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Cost (INR) ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(te,{}),e.jsx("input",{type:"number",placeholder:"0",min:"0",step:"1",value:t.cost,onChange:n=>r("cost",n.target.value),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Billing Cycle ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("select",{value:t.billingCycle,onChange:n=>r("billingCycle",n.target.value),className:"form-input",children:[e.jsx("option",{value:"Monthly",children:"Monthly"}),e.jsx("option",{value:"Yearly",children:"Yearly"})]})]})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsxs("h3",{className:"section-title",children:[e.jsx(H,{}),"Important Dates"]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Start Date ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(H,{}),e.jsx("input",{type:"date",value:t.startDate,onChange:n=>r("startDate",n.target.value),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Renewal Date ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(H,{}),e.jsx("input",{type:"date",value:t.renewalDate,onChange:n=>r("renewalDate",n.target.value),className:"form-input with-icon"})]}),e.jsx("p",{className:"form-hint",children:"Auto-calculated based on billing cycle"})]})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsxs("h3",{className:"section-title",children:[e.jsx(re,{}),"Payment Information"]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Payment Method"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(re,{}),e.jsxs("select",{value:t.paymentMethod,onChange:n=>r("paymentMethod",n.target.value),className:"form-input with-icon",children:[e.jsx("option",{value:"",children:"Select payment method"}),u.map(n=>e.jsx("option",{value:n,children:n},n))]})]})]})]}),e.jsxs("div",{className:"form-section full-width",children:[e.jsxs("h3",{className:"section-title",children:[e.jsx(ct,{}),"Additional Notes"]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Notes"}),e.jsx("textarea",{placeholder:"Add any additional information about this subscription...",value:t.notes,onChange:n=>r("notes",n.target.value),className:"form-input",rows:"4"})]})]})]}),e.jsxs("div",{className:"form-actions",children:[e.jsx(N,{to:"/manage",className:"btn btn-secondary",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:x,children:x?e.jsx("span",{className:"spinner"}):e.jsxs(e.Fragment,{children:[e.jsx(se,{}),"Add Subscription"]})})]})]})]}),e.jsxs("div",{className:"tips-card",children:[e.jsxs("h4",{className:"tips-title",children:[e.jsx(se,{}),"Pro Tips"]}),e.jsxs("ul",{className:"tips-list",children:[e.jsx("li",{children:"Set the correct renewal date to get timely reminders"}),e.jsx("li",{children:"Add notes about cancellation policies or special terms"}),e.jsx("li",{children:"Categorize subscriptions for better expense tracking"})]})]})]}),e.jsx("style",{children:`
        .add-page {
          padding-top: 1.5rem;
          padding-bottom: 3rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #ffffff;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        /* Form Card */
        .form-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2rem;
          margin-bottom: 1.5rem;
        }

        .subscription-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-section.full-width {
          grid-column: 1 / -1;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .section-title svg {
          color: #3b82f6;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e2e8f0;
        }

        .required {
          color: #f43f5e;
        }

        .input-wrapper {
          position: relative;
        }

        .input-wrapper > svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 18px;
          height: 18px;
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 2.75rem;
        }

        .form-hint {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* Form Actions */
        .form-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Tips Card */
        .tips-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.05));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .tips-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 1rem;
        }

        .tips-title svg {
          color: #f59e0b;
        }

        .tips-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tips-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.625rem;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .tips-list li::before {
          content: '•';
          color: #3b82f6;
          font-weight: bold;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-section.full-width {
            grid-column: 1;
          }
        }

        @media (max-width: 640px) {
          .form-card {
            padding: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column-reverse;
          }

          .form-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}const ht=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),mt=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),ae=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"M12 5v14"})]}),pt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),e.jsx("path",{d:"m15 5 4 4"})]}),gt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),xt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"19",cy:"12",r:"1"}),e.jsx("circle",{cx:"5",cy:"12",r:"1"})]}),ut=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M8 2v4"}),e.jsx("path",{d:"M16 2v4"}),e.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),e.jsx("path",{d:"M3 10h18"})]}),ft=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 3h12"}),e.jsx("path",{d:"M6 8h12"}),e.jsx("path",{d:"M12 3v13"}),e.jsx("path",{d:"M12 13a2.5 2.5 0 0 0 2.5 2.5H18"}),e.jsx("path",{d:"M12 16a2.5 2.5 0 0 1-2.5 2.5H6"})]}),bt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m21 16-4 4-4-4"}),e.jsx("path",{d:"M17 20V4"}),e.jsx("path",{d:"m3 8 4-4 4 4"}),e.jsx("path",{d:"M7 4v16"})]}),jt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m7.5 4.27 9 5.15"}),e.jsx("path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}),e.jsx("path",{d:"m3.3 7 8.7 5 8.7-5"}),e.jsx("path",{d:"M12 22V12"})]});function vt(){const{user:g}=P(),[t,f]=d.useState(""),[o,m]=d.useState(""),[h,w]=d.useState("renewalDate"),[x,b]=d.useState("asc"),[k,u]=d.useState([]),[r,a]=d.useState(!0);d.useEffect(()=>{g?(async()=>{try{const y=await L.get("/subscriptions");u(y.data)}catch(y){console.error("Error fetching subscriptions:",y),u([])}finally{a(!1)}})():a(!1)},[g]);const v=["All",...new Set(k.map(c=>c.category))],n=d.useMemo(()=>{let c=k.filter(y=>{const z=y.softwareName.toLowerCase().includes(t.toLowerCase()),D=o&&o!=="All"?y.category===o:!0;return z&&D});return c.sort((y,z)=>{let D=y[h],p=z[h];return h==="renewalDate"&&(D=new Date(D),p=new Date(p)),x==="asc"?D>p?1:-1:D<p?1:-1}),c},[t,o,h,x]),l=c=>{const y=new Date(c),z=Math.ceil((y-new Date)/(1e3*60*60*24));return z<=1?{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.15)",label:"Critical"}:z<=3?{color:"#f59e0b",bg:"rgba(245, 158, 11, 0.15)",label:"Soon"}:z<=7?{color:"#3b82f6",bg:"rgba(59, 130, 246, 0.15)",label:"Upcoming"}:{color:"#10b981",bg:"rgba(16, 185, 129, 0.15)",label:"Active"}},s=c=>{confirm("Are you sure you want to delete this subscription?")&&alert("Deleted subscription "+c)},i=c=>{h===c?b(x==="asc"?"desc":"asc"):(w(c),b("asc"))},j=n.filter(c=>c.status==="Active").reduce((c,y)=>{const z=parseFloat(y.cost||0),D=y.billingCycle==="Yearly"?z/12:z;return c+D},0);return e.jsxs("div",{className:"page manage-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Subscriptions"}),e.jsx("p",{className:"page-subtitle",children:"Manage and track all your SaaS subscriptions in one place"})]}),e.jsxs(N,{to:"/add",className:"btn btn-primary",children:[e.jsx(ae,{}),"Add Subscription"]})]}),e.jsxs("div",{className:"stats-bar",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-value",children:n.length}),e.jsx("span",{className:"stat-label",children:"Total Subscriptions"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-value",children:["₹",j.toFixed(0)]}),e.jsx("span",{className:"stat-label",children:"Monthly Cost"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-value",children:["₹",(j*12).toFixed(0)]}),e.jsx("span",{className:"stat-label",children:"Yearly Cost"})]})]}),e.jsxs("div",{className:"filters-bar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(ht,{}),e.jsx("input",{type:"text",placeholder:"Search subscriptions...",value:t,onChange:c=>f(c.target.value),className:"search-input"})]}),e.jsxs("div",{className:"filter-group",children:[e.jsxs("div",{className:"filter-select-wrapper",children:[e.jsx(mt,{}),e.jsxs("select",{value:o,onChange:c=>m(c.target.value),className:"filter-select",children:[e.jsx("option",{value:"",children:"All Categories"}),v.filter(c=>c!=="All").map(c=>e.jsx("option",{value:c,children:c},c))]})]}),e.jsxs("button",{className:"sort-btn",onClick:()=>i("renewalDate"),children:[e.jsx(bt,{}),"Sort by Date"]})]})]}),n.length>0?e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"subscriptions-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Service"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Cost"}),e.jsx("th",{children:"Renewal Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:n.map(c=>{const y=l(c.renewalDate);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"service-cell",children:[e.jsx("div",{className:"service-icon",children:c.softwareName.charAt(0)}),e.jsxs("div",{className:"service-info",children:[e.jsx("div",{className:"service-name",children:c.softwareName}),e.jsx("div",{className:"service-cycle",children:c.billingCycle})]})]})}),e.jsx("td",{children:e.jsx("span",{className:"category-badge",children:c.category})}),e.jsx("td",{children:e.jsxs("div",{className:"cost-cell",children:[e.jsx(ft,{}),e.jsxs("span",{children:["₹",c.cost]}),e.jsxs("span",{className:"cycle",children:["/",c.billingCycle.toLowerCase().slice(0,-2)]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"renewal-cell",children:[e.jsx(ut,{}),e.jsx("span",{children:new Date(c.renewalDate).toLocaleDateString("en-US",{month:"short",day:"numeric"})}),e.jsx("span",{className:"renewal-badge",style:{color:y.color,backgroundColor:y.bg},children:y.label})]})}),e.jsx("td",{children:e.jsx("span",{className:`status-badge ${c.status.toLowerCase()}`,children:c.status})}),e.jsx("td",{children:e.jsxs("div",{className:"actions-cell",children:[e.jsx("button",{className:"action-btn edit",title:"Edit",children:e.jsx(pt,{})}),e.jsx("button",{className:"action-btn delete",title:"Delete",onClick:()=>s(c.id),children:e.jsx(gt,{})}),e.jsx("button",{className:"action-btn more",title:"More",children:e.jsx(xt,{})})]})})]},c.id)})})]})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-state-icon",children:e.jsx(jt,{})}),e.jsx("h3",{className:"empty-state-title",children:"No subscriptions found"}),e.jsx("p",{className:"empty-state-text",children:t||o?"Try adjusting your search or filters":"Start by adding your first subscription to track"}),!t&&!o&&e.jsxs(N,{to:"/add",className:"btn btn-primary",children:[e.jsx(ae,{}),"Add Your First Subscription"]})]}),e.jsxs("div",{className:"legend-bar",children:[e.jsx("span",{className:"legend-title",children:"Renewal Status:"}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#f43f5e"}}),e.jsx("span",{children:"Critical (1 day)"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),e.jsx("span",{children:"Soon (3 days)"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#3b82f6"}}),e.jsx("span",{children:"Upcoming (7 days)"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),e.jsx("span",{children:"Active"})]})]})]}),e.jsx("style",{children:`
        .manage-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        /* Stats Bar */
        .stats-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-item .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .stat-item .stat-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Filters Bar */
        .filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 280px;
          padding: 0.625rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
        }

        .search-box svg {
          color: #64748b;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
        }

        .search-input::placeholder {
          color: #64748b;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .filter-select-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 0.875rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
        }

        .filter-select-wrapper svg {
          color: #64748b;
          width: 16px;
          height: 16px;
        }

        .filter-select {
          background: none;
          border: none;
          color: #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
        }

        .filter-select option {
          background: #0f172a;
        }

        .sort-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 0.875rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #e2e8f0;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sort-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .sort-btn svg {
          width: 16px;
          height: 16px;
        }

        /* Table */
        .table-container {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .subscriptions-table {
          width: 100%;
          border-collapse: collapse;
        }

        .subscriptions-table thead {
          background: rgba(0, 0, 0, 0.2);
        }

        .subscriptions-table th {
          padding: 1rem 1.25rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
        }

        .subscriptions-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.9rem;
        }

        .subscriptions-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        .subscriptions-table tr:last-child td {
          border-bottom: none;
        }

        /* Service Cell */
        .service-cell {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .service-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 0.625rem;
          font-weight: 700;
          font-size: 1rem;
          color: white;
        }

        .service-info {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .service-name {
          font-weight: 600;
          color: #ffffff;
        }

        .service-cycle {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Category Badge */
        .category-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        /* Cost Cell */
        .cost-cell {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #ffffff;
          font-weight: 600;
        }

        .cost-cell svg {
          color: #10b981;
          width: 14px;
          height: 14px;
        }

        .cost-cell .cycle {
          color: #64748b;
          font-weight: 400;
          font-size: 0.8rem;
        }

        /* Renewal Cell */
        .renewal-cell {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .renewal-cell svg {
          color: #64748b;
          width: 14px;
          height: 14px;
        }

        .renewal-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        /* Status Badge */
        .status-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.active {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .status-badge.cancelled {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        /* Actions Cell */
        .actions-cell {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          border-radius: 0.5rem;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .action-btn.edit:hover {
          color: #3b82f6;
        }

        .action-btn.delete:hover {
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.1);
        }

        .action-btn.more:hover {
          color: #94a3b8;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
        }

        .empty-state-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
        }

        .empty-state-icon svg {
          width: 40px;
          height: 40px;
        }

        .empty-state-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .empty-state-text {
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        /* Legend Bar */
        .legend-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 0.75rem;
        }

        .legend-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #94a3b8;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #64748b;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-bar {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .stat-divider {
            display: none;
          }

          .subscriptions-table {
            font-size: 0.85rem;
          }

          .subscriptions-table th,
          .subscriptions-table td {
            padding: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            gap: 1rem;
          }

          .page-header .btn {
            width: 100%;
            justify-content: center;
          }

          .filters-bar {
            flex-direction: column;
          }

          .search-box {
            width: 100%;
            min-width: auto;
          }

          .filter-group {
            width: 100%;
          }

          .filter-select-wrapper,
          .sort-btn {
            flex: 1;
            justify-content: center;
          }

          .table-container {
            overflow-x: auto;
          }

          .subscriptions-table {
            min-width: 700px;
          }

          .legend-bar {
            gap: 1rem;
          }
        }
      `})]})}const wt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),yt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 3h12"}),e.jsx("path",{d:"M6 8h12"}),e.jsx("path",{d:"M12 3v13"}),e.jsx("path",{d:"M12 13a2.5 2.5 0 0 0 2.5 2.5H18"}),e.jsx("path",{d:"M12 16a2.5 2.5 0 0 1-2.5 2.5H6"})]}),kt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),Nt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M8 2v4"}),e.jsx("path",{d:"M16 2v4"}),e.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),e.jsx("path",{d:"M3 10h18"})]}),Ct=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]}),St=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m5 12 7-7 7 7"}),e.jsx("path",{d:"M12 19V5"})]}),Lt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"m19 12-7 7-7-7"})]});function Mt(){const[g,t]=d.useState("6months"),{user:f}=P(),[o,m]=d.useState([]),[h,w]=d.useState(!0);d.useEffect(()=>{f?(async()=>{try{const a=await L.get("/subscriptions");m(a.data)}catch(a){console.error("Error fetching subscriptions:",a)}finally{w(!1)}})():w(!1)},[f]);const x=[{title:"Total Spent",value:o.length>0?`₹${o.reduce((r,a)=>r+parseFloat(a.cost||0),0)}`:"₹0",change:o.length>0?"Your actual spending":"No subscriptions yet",trend:(o.length>0,"neutral"),icon:e.jsx(yt,{}),color:"blue"},{title:"Monthly Average",value:o.length>0?`₹${o.reduce((r,a)=>{const v=parseFloat(a.cost||0),n=a.billingCycle==="Yearly"?v/12:v;return r+n},0).toFixed(0)}`:"₹0",change:o.length>0?"Based on your subscriptions":"Add subscriptions to see average",trend:(o.length>0,"neutral"),icon:e.jsx(wt,{}),color:"green"},{title:"Active Subscriptions",value:o.filter(r=>r.status==="Active").length.toString(),change:o.length>0?`${o.filter(r=>r.status==="Active").length} active services`:"Get started by adding subscriptions",trend:(o.length>0,"neutral"),icon:e.jsx(kt,{}),color:o.length>0?"purple":"gray"},{title:"Upcoming Renewals",value:o.filter(r=>{const a=new Date(r.renewalDate),v=new Date,n=new Date(v.getTime()+30*24*60*60*1e3);return a>=v&&a<=n}).length.toString(),change:"Next 30 days",trend:"neutral",icon:e.jsx(Nt,{}),color:"amber"}],b=o.length>0?Object.entries(o.reduce((r,a)=>(r[a.category]=(r[a.category]||0)+parseFloat(a.cost||0),r),{})).map(([r,a],v)=>{const n=["#3b82f6","#8b5cf6","#10b981","#f59e0b","#64748b","#ec4899"],l=o.reduce((i,j)=>i+parseFloat(j.cost||0),0),s=l>0?Math.round(a/l*100):0;return{name:r,amount:a,color:n[v%n.length],percent:s}}):[],k=o.sort((r,a)=>parseFloat(a.cost||0)-parseFloat(r.cost||0)).slice(0,5).map(r=>({name:r.softwareName,cost:parseFloat(r.cost||0),change:"+0%"})),u=o.length>0?(()=>{const r=[],a=new Date;for(let v=5;v>=0;v--){const n=new Date(a.getFullYear(),a.getMonth()-v,1),l=n.toLocaleString("default",{month:"short"}),s=o.filter(i=>{const j=new Date(i.renewalDate);return j.getMonth()===n.getMonth()&&j.getFullYear()===n.getFullYear()&&i.status==="Active"}).reduce((i,j)=>{const c=parseFloat(j.cost||0);return i+(j.billingCycle==="Yearly"?c/12:c)},0);r.push({month:l,amount:Math.round(s)})}return r})():[];return e.jsxs("div",{className:"page analytics-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Analytics"}),e.jsx("p",{className:"page-subtitle",children:"Track your subscription spending and identify savings opportunities"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs("select",{className:"form-input",value:g,onChange:r=>t(r.target.value),style:{width:"auto"},children:[e.jsx("option",{value:"30days",children:"Last 30 Days"}),e.jsx("option",{value:"3months",children:"Last 3 Months"}),e.jsx("option",{value:"6months",children:"Last 6 Months"}),e.jsx("option",{value:"1year",children:"Last Year"})]}),e.jsxs("button",{className:"btn btn-secondary",children:[e.jsx(Ct,{}),"Export"]})]})]}),e.jsx("div",{className:"stats-grid",children:x.map((r,a)=>e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:`stat-icon ${r.color}`,children:r.icon}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:r.value}),e.jsx("div",{className:"stat-label",children:r.title}),e.jsxs("div",{className:`stat-trend ${r.trend}`,children:[r.trend==="up"&&e.jsx(St,{}),r.trend==="down"&&e.jsx(Lt,{}),r.change]})]})]},a))}),e.jsxs("div",{className:"charts-grid",children:[e.jsxs("div",{className:"chart-card large",children:[e.jsxs("div",{className:"chart-header",children:[e.jsx("h3",{className:"chart-title",children:"Spending Trend"}),e.jsx("div",{className:"chart-legend",children:e.jsxs("span",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#3b82f6"}}),"Monthly Spend"]})})]}),e.jsx("div",{className:"chart-content",children:e.jsxs("div",{className:"trend-chart",children:[e.jsxs("div",{className:"chart-y-axis",children:[e.jsx("span",{children:"₹300"}),e.jsx("span",{children:"₹200"}),e.jsx("span",{children:"₹100"}),e.jsx("span",{children:"₹0"})]}),e.jsxs("div",{className:"chart-bars-area",children:[e.jsxs("div",{className:"chart-grid-lines",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"trend-bars",children:u.map((r,a)=>e.jsxs("div",{className:"trend-bar-wrapper",children:[e.jsx("div",{className:"trend-bar",style:{height:`${r.amount/300*100}%`},children:e.jsxs("span",{className:"bar-value",children:["₹",r.amount]})}),e.jsx("span",{className:"bar-label",children:r.month})]},a))})]})]})})]}),e.jsxs("div",{className:"chart-card",children:[e.jsx("div",{className:"chart-header",children:e.jsx("h3",{className:"chart-title",children:"Spending by Category"})}),e.jsxs("div",{className:"chart-content",children:[e.jsx("div",{className:"donut-chart",children:e.jsxs("svg",{viewBox:"0 0 100 100",className:"donut-svg",children:[b.reduce((r,a,v)=>{const n=b.slice(0,v).reduce((j,c)=>j+c.percent,0),l=2*Math.PI*40,s=l-a.percent/100*l,i=n/100*360-90;return r.push(e.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:a.color,strokeWidth:"12",strokeDasharray:l,strokeDashoffset:s,transform:`rotate(${i} 50 50)`,style:{transition:"all 0.3s ease"}},v)),r},[]),e.jsx("text",{x:"50",y:"45",textAnchor:"middle",fill:"#fff",fontSize:"14",fontWeight:"bold",children:"₹247"}),e.jsx("text",{x:"50",y:"58",textAnchor:"middle",fill:"#64748b",fontSize:"8",children:"/month"})]})}),e.jsx("div",{className:"category-legend",children:b.map((r,a)=>e.jsxs("div",{className:"category-item",children:[e.jsx("span",{className:"category-dot",style:{background:r.color}}),e.jsx("span",{className:"category-name",children:r.name}),e.jsxs("span",{className:"category-percent",children:[r.percent,"%"]})]},a))})]})]}),e.jsxs("div",{className:"chart-card",children:[e.jsx("div",{className:"chart-header",children:e.jsx("h3",{className:"chart-title",children:"Top Expenses"})}),e.jsx("div",{className:"chart-content",children:e.jsx("div",{className:"top-subscriptions",children:k.map((r,a)=>e.jsxs("div",{className:"subscription-row",children:[e.jsx("div",{className:"sub-rank",children:a+1}),e.jsx("div",{className:"sub-info",children:e.jsx("span",{className:"sub-name",children:r.name})}),e.jsxs("div",{className:"sub-cost",children:[e.jsxs("span",{className:"cost-value",children:["₹",r.cost]}),e.jsx("span",{className:"cost-change",children:r.change})]})]},a))})})]}),e.jsxs("div",{className:"chart-card insights-card",children:[e.jsx("div",{className:"chart-header",children:e.jsx("h3",{className:"chart-title",children:"💡 Insights"})}),e.jsx("div",{className:"chart-content",children:e.jsxs("div",{className:"insights-list",children:[e.jsxs("div",{className:"insight-item",children:[e.jsx("div",{className:"insight-icon",children:"📈"}),e.jsxs("div",{className:"insight-text",children:[e.jsx("strong",{children:"Spending up 12%"}),e.jsx("p",{children:"Your subscription costs increased by ₹27 compared to last month"})]})]}),e.jsxs("div",{className:"insight-item",children:[e.jsx("div",{className:"insight-icon",children:"💰"}),e.jsxs("div",{className:"insight-text",children:[e.jsx("strong",{children:"Potential savings"}),e.jsx("p",{children:"You could save ₹45/month by switching to annual billing"})]})]}),e.jsxs("div",{className:"insight-item",children:[e.jsx("div",{className:"insight-icon",children:"⚠️"}),e.jsxs("div",{className:"insight-text",children:[e.jsx("strong",{children:"Duplicate detected"}),e.jsx("p",{children:"You have 2 video conferencing tools. Consider consolidating."})]})]})]})})]})]})]}),e.jsx("style",{children:`
        .analytics-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
        }

        .stat-icon.blue {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .stat-icon.green {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .stat-icon.purple {
          background: rgba(139, 92, 246, 0.15);
          color: #8b5cf6;
        }

        .stat-icon.amber {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .stat-trend {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .stat-trend.up {
          color: #10b981;
        }

        .stat-trend.down {
          color: #f43f5e;
        }

        .stat-trend.neutral {
          color: #94a3b8;
        }

        /* Charts Grid */
        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }

        .chart-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .chart-card.large {
          grid-row: span 2;
        }

        .chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .chart-legend {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* Trend Chart */
        .trend-chart {
          display: flex;
          height: 280px;
        }

        .chart-y-axis {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 1rem;
          font-size: 0.75rem;
          color: #64748b;
          text-align: right;
        }

        .chart-bars-area {
          flex: 1;
          position: relative;
        }

        .chart-grid-lines {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .chart-grid-lines div {
          height: 1px;
          background: rgba(255, 255, 255, 0.05);
        }

        .trend-bars {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          padding: 0 0.5rem;
        }

        .trend-bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .trend-bar {
          width: 40px;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 4px 4px 0 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .trend-bar:hover {
          opacity: 0.8;
        }

        .bar-value {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          color: #94a3b8;
          white-space: nowrap;
        }

        .bar-label {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Donut Chart */
        .donut-chart {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .donut-svg {
          width: 180px;
          height: 180px;
          transform: rotate(-90deg);
        }

        .category-legend {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .category-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.875rem;
        }

        .category-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .category-name {
          flex: 1;
          color: #e2e8f0;
        }

        .category-percent {
          color: #64748b;
          font-weight: 500;
        }

        /* Top Subscriptions */
        .top-subscriptions {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .subscription-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0.625rem;
        }

        .sub-rank {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
        }

        .sub-info {
          flex: 1;
        }

        .sub-name {
          font-weight: 500;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        .sub-cost {
          text-align: right;
        }

        .cost-value {
          display: block;
          font-weight: 600;
          color: #ffffff;
        }

        .cost-change {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Insights Card */
        .insights-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.05));
        }

        .insights-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .insight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
        }

        .insight-icon {
          font-size: 1.25rem;
          line-height: 1;
        }

        .insight-text strong {
          display: block;
          color: #e2e8f0;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .insight-text p {
          color: #94a3b8;
          font-size: 0.8rem;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .charts-grid {
            grid-template-columns: 1fr;
          }

          .chart-card.large {
            grid-row: span 1;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .page-header {
            flex-direction: column;
          }

          .header-actions {
            width: 100%;
          }

          .header-actions .btn,
          .header-actions select {
            flex: 1;
          }

          .trend-chart {
            height: 200px;
          }

          .trend-bar {
            width: 24px;
          }
        }
      `})]})}const zt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),e.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),Dt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"})]}),It=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}),e.jsx("path",{d:"M12 18h.01"})]}),At=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 10h.01"}),e.jsx("path",{d:"M12 14h.01"}),e.jsx("path",{d:"M12 6h.01"}),e.jsx("path",{d:"M16 10h.01"}),e.jsx("path",{d:"M16 14h.01"}),e.jsx("path",{d:"M16 6h.01"}),e.jsx("path",{d:"M8 10h.01"}),e.jsx("path",{d:"M8 14h.01"}),e.jsx("path",{d:"M8 6h.01"}),e.jsx("path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"}),e.jsx("rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"})]}),Bt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]}),ie=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),O=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]}),ne=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]}),Pt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]});function Wt(){var r;const[g,t]=d.useState(1),[f,o]=d.useState(""),[m,h]=d.useState("card"),[w,x]=d.useState(!1),b=[{id:"card",name:"Credit/Debit Card",icon:e.jsx(zt,{}),description:"Pay with Visa, Mastercard, etc."},{id:"upi",name:"UPI",icon:e.jsx(It,{}),description:"Google Pay, PhonePe, Paytm"},{id:"wallet",name:"Wallet",icon:e.jsx(Dt,{}),description:"Paytm, Amazon Pay, etc."},{id:"netbanking",name:"Net Banking",icon:e.jsx(At,{}),description:"All major banks supported"}],k=async a=>{a.preventDefault(),f&&(x(!0),setTimeout(()=>{x(!1),t(2)},2e3))},u="TXN-"+Date.now();return e.jsxs("div",{className:"page payment-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header text-center",children:[e.jsx("h1",{className:"page-title",children:"Make a Payment"}),e.jsx("p",{className:"page-subtitle",children:"Secure payment processing for your subscriptions"})]}),e.jsxs("div",{className:"payment-card",children:[g===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"payment-steps",children:[e.jsxs("div",{className:"step active",children:[e.jsx("div",{className:"step-number",children:"1"}),e.jsx("span",{children:"Amount"})]}),e.jsx("div",{className:"step-line"}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"step-number",children:"2"}),e.jsx("span",{children:"Confirm"})]})]}),e.jsxs("form",{onSubmit:k,className:"payment-form",children:[e.jsxs("div",{className:"amount-section",children:[e.jsx("label",{className:"section-label",children:"Payment Amount"}),e.jsxs("div",{className:"amount-input-wrapper",children:[e.jsx("span",{className:"currency",children:"₹"}),e.jsx("input",{type:"number",placeholder:"0.00",min:"1",step:"0.01",value:f,onChange:a=>o(a.target.value),className:"amount-input",required:!0})]}),e.jsx("p",{className:"amount-hint",children:"Enter the amount you want to pay"})]}),e.jsxs("div",{className:"method-section",children:[e.jsx("label",{className:"section-label",children:"Select Payment Method"}),e.jsx("div",{className:"methods-grid",children:b.map(a=>e.jsxs("div",{className:`method-card ${m===a.id?"selected":""}`,onClick:()=>h(a.id),children:[e.jsx("div",{className:"method-icon",children:a.icon}),e.jsxs("div",{className:"method-info",children:[e.jsx("span",{className:"method-name",children:a.name}),e.jsx("span",{className:"method-desc",children:a.description})]}),e.jsx("div",{className:"method-check",children:m===a.id&&e.jsx("div",{className:"check-icon",children:e.jsx(O,{})})})]},a.id))})]}),e.jsxs("div",{className:"security-badge",children:[e.jsx(ie,{}),e.jsx("span",{children:"Secure 256-bit SSL encrypted payment"})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg pay-btn",disabled:!f||w,children:w?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Processing..."]}):e.jsxs(e.Fragment,{children:["Pay ₹",f||"0.00",e.jsx(ne,{})]})})]})]}),g===2&&e.jsxs("div",{className:"success-section",children:[e.jsx("div",{className:"success-icon",children:e.jsx(O,{})}),e.jsx("h2",{className:"success-title",children:"Payment Successful!"}),e.jsxs("p",{className:"success-message",children:["Your payment of ",e.jsxs("strong",{children:["₹",f]})," has been processed successfully."]}),e.jsxs("div",{className:"transaction-details",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{children:"Transaction ID"}),e.jsx("span",{className:"detail-value",children:u})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{children:"Payment Method"}),e.jsx("span",{className:"detail-value",children:(r=b.find(a=>a.id===m))==null?void 0:r.name})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{children:"Date & Time"}),e.jsx("span",{className:"detail-value",children:new Date().toLocaleString()})]}),e.jsxs("div",{className:"detail-row total",children:[e.jsx("span",{children:"Amount Paid"}),e.jsxs("span",{className:"detail-value",children:["₹",f]})]})]}),e.jsxs("div",{className:"success-actions",children:[e.jsxs("button",{className:"btn btn-secondary",children:[e.jsx(Pt,{}),"Download Receipt"]}),e.jsxs(N,{to:"/manage",className:"btn btn-primary",children:["View Subscriptions",e.jsx(ne,{})]})]})]})]}),e.jsxs("div",{className:"trust-badges",children:[e.jsxs("div",{className:"trust-badge",children:[e.jsx(Bt,{}),e.jsx("span",{children:"PCI DSS Compliant"})]}),e.jsx("div",{className:"trust-divider"}),e.jsxs("div",{className:"trust-badge",children:[e.jsx(ie,{}),e.jsx("span",{children:"256-bit Encryption"})]}),e.jsx("div",{className:"trust-divider"}),e.jsxs("div",{className:"trust-badge",children:[e.jsx(O,{}),e.jsx("span",{children:"Instant Confirmation"})]})]})]}),e.jsx("style",{children:`
        .payment-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        .text-center {
          text-align: center;
        }

        /* Payment Card */
        .payment-card {
          max-width: 600px;
          margin: 0 auto 2rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2rem;
        }

        /* Payment Steps */
        .payment-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
        }

        .step.active {
          color: #3b82f6;
        }

        .step-number {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .step.active .step-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
          color: white;
        }

        .step-line {
          width: 60px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Payment Form */
        .payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.75rem;
        }

        /* Amount Section */
        .amount-section {
          text-align: center;
        }

        .amount-input-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .currency {
          font-size: 2rem;
          font-weight: 700;
          color: #64748b;
        }

        .amount-input {
          width: 200px;
          background: none;
          border: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          outline: none;
          transition: border-color 0.2s;
        }

        .amount-input:focus {
          border-color: #3b82f6;
        }

        .amount-input::placeholder {
          color: #334155;
        }

        .amount-hint {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }

        /* Methods Grid */
        .methods-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .method-card {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .method-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .method-card.selected {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .method-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.625rem;
          color: #64748b;
        }

        .method-card.selected .method-icon {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .method-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .method-name {
          font-weight: 600;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        .method-desc {
          font-size: 0.75rem;
          color: #64748b;
        }

        .method-check {
          width: 24px;
          height: 24px;
        }

        .method-check svg {
          width: 100%;
          height: 100%;
          color: #3b82f6;
        }

        /* Security Badge */
        .security-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 0.5rem;
          font-size: 0.8rem;
          color: #10b981;
        }

        .security-badge svg {
          width: 14px;
          height: 14px;
        }

        /* Pay Button */
        .pay-btn {
          width: 100%;
          justify-content: center;
        }

        /* Success Section */
        .success-section {
          text-align: center;
          padding: 1rem 0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: rgba(16, 185, 129, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
        }

        .success-icon svg {
          width: 48px;
          height: 48px;
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .success-message {
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .success-message strong {
          color: #ffffff;
        }

        /* Transaction Details */
        .transaction-details {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 0.75rem;
          padding: 1.25rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 0.625rem 0;
          font-size: 0.875rem;
          color: #94a3b8;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-row.total {
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-weight: 600;
          color: #ffffff;
        }

        .detail-value {
          color: #e2e8f0;
          font-weight: 500;
        }

        .detail-row.total .detail-value {
          color: #10b981;
          font-size: 1.125rem;
        }

        /* Success Actions */
        .success-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        /* Trust Badges */
        .trust-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #64748b;
        }

        .trust-badge svg {
          width: 18px;
          height: 18px;
          color: #10b981;
        }

        .trust-divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .payment-card {
            padding: 1.5rem;
          }

          .methods-grid {
            grid-template-columns: 1fr;
          }

          .amount-input {
            font-size: 2rem;
            width: 150px;
          }

          .currency {
            font-size: 1.5rem;
          }

          .success-actions {
            flex-direction: column;
          }

          .success-actions .btn {
            width: 100%;
            justify-content: center;
          }

          .trust-badges {
            flex-direction: column;
            gap: 1rem;
          }

          .trust-divider {
            display: none;
          }
        }
      `})]})}const oe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Tt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),Rt=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),$t=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"}),e.jsx("rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"})]}),Et=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),e.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]}),Ft=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"2",x2:"22",y1:"12",y2:"12"}),e.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),Ut=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Ht=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),Ot=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})});function Yt(){const{user:g,updateUser:t,loading:f}=P(),[o,m]=d.useState("general"),[h,w]=d.useState(!1),[x,b]=d.useState(!1),[k,u]=d.useState(""),[r,a]=d.useState({name:"",email:"",phone:"",company:"",notifications:{email:!0,sms:!1,push:!0,marketing:!1},preferences:{darkMode:!0,language:"en",currency:"INR"}});d.useEffect(()=>{var l,s,i,j,c,y,z;g&&a({name:g.name||"",email:g.email||"",phone:g.phone||"",company:g.company||"",notifications:{email:((l=g.notifications)==null?void 0:l.email)??!0,sms:((s=g.notifications)==null?void 0:s.sms)??!1,push:((i=g.notifications)==null?void 0:i.push)??!0,marketing:((j=g.notifications)==null?void 0:j.marketing)??!1},preferences:{darkMode:((c=g.preferences)==null?void 0:c.darkMode)??!0,language:((y=g.preferences)==null?void 0:y.language)||"en",currency:((z=g.preferences)==null?void 0:z.currency)||"INR"}})},[g]);const v=async()=>{w(!0),u("");try{await t({name:r.name,phone:r.phone,company:r.company,notifications:r.notifications,preferences:r.preferences}),b(!0),setTimeout(()=>b(!1),3e3)}catch(l){u("Failed to update profile. Please try again."),console.error("Profile update error:",l)}finally{w(!1)}},n=[{id:"general",label:"General",icon:e.jsx(oe,{})},{id:"notifications",label:"Notifications",icon:e.jsx(Et,{})},{id:"preferences",label:"Preferences",icon:e.jsx(Ft,{})},{id:"security",label:"Security",icon:e.jsx(Ut,{})}];return e.jsxs("div",{className:"page profile-page",children:[e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Profile Settings"}),e.jsx("p",{className:"page-subtitle",children:"Manage your account settings and preferences"})]})}),e.jsxs("div",{className:"profile-layout",children:[e.jsxs("div",{className:"profile-sidebar",children:[e.jsxs("div",{className:"profile-card user-card",children:[e.jsx("div",{className:"user-avatar-large",children:r.name.charAt(0).toUpperCase()}),e.jsx("h3",{className:"user-name",children:r.name}),e.jsx("p",{className:"user-email",children:r.email}),e.jsx("span",{className:"user-role",children:"Pro Member"})]}),e.jsx("nav",{className:"profile-nav",children:n.map(l=>e.jsxs("button",{className:`nav-item ${o===l.id?"active":""}`,onClick:()=>m(l.id),children:[l.icon,e.jsx("span",{children:l.label})]},l.id))})]}),e.jsxs("div",{className:"profile-content",children:[f&&!g&&e.jsxs("div",{className:"alert alert-info",children:[e.jsxs("svg",{className:"animate-spin h-5 w-5 mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Loading your profile..."]}),!f&&!g&&e.jsxs("div",{className:"alert alert-error",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Unable to load profile data"]}),k&&e.jsxs("div",{className:"alert alert-error",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),k]}),x&&e.jsxs("div",{className:"alert alert-success",children:[e.jsx(Ot,{}),"Changes saved successfully!"]}),o==="general"&&e.jsxs("div",{className:"profile-card",children:[e.jsx("h3",{className:"card-title",children:"General Information"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(oe,{}),e.jsx("input",{type:"text",value:r.name,onChange:l=>a({...r,name:l.target.value}),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(Tt,{}),e.jsx("input",{type:"email",value:r.email,onChange:l=>a({...r,email:l.target.value}),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Phone Number"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(Rt,{}),e.jsx("input",{type:"tel",placeholder:"+91 98765 43210",value:r.phone,onChange:l=>a({...r,phone:l.target.value}),className:"form-input with-icon"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Company"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx($t,{}),e.jsx("input",{type:"text",placeholder:"Your company name",value:r.company,onChange:l=>a({...r,company:l.target.value}),className:"form-input with-icon"})]})]})]}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",onClick:v,disabled:h,children:h?e.jsx("span",{className:"spinner"}):"Save Changes"})})]}),o==="notifications"&&e.jsxs("div",{className:"profile-card",children:[e.jsx("h3",{className:"card-title",children:"Notification Preferences"}),e.jsx("p",{className:"card-description",children:"Choose how you want to be notified about your subscriptions"}),e.jsxs("div",{className:"toggles-list",children:[e.jsxs("div",{className:"toggle-item",children:[e.jsxs("div",{className:"toggle-info",children:[e.jsx("h4",{children:"Email Notifications"}),e.jsx("p",{children:"Receive renewal reminders and updates via email"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:r.notifications.email,onChange:l=>a({...r,notifications:{...r.notifications,email:l.target.checked}})}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"toggle-item",children:[e.jsxs("div",{className:"toggle-info",children:[e.jsx("h4",{children:"SMS Notifications"}),e.jsx("p",{children:"Get text messages for critical renewal alerts"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:r.notifications.sms,onChange:l=>a({...r,notifications:{...r.notifications,sms:l.target.checked}})}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"toggle-item",children:[e.jsxs("div",{className:"toggle-info",children:[e.jsx("h4",{children:"Push Notifications"}),e.jsx("p",{children:"Browser push notifications for real-time alerts"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:r.notifications.push,onChange:l=>a({...r,notifications:{...r.notifications,push:l.target.checked}})}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"toggle-item",children:[e.jsxs("div",{className:"toggle-info",children:[e.jsx("h4",{children:"Marketing Emails"}),e.jsx("p",{children:"Receive tips, offers, and product updates"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:r.notifications.marketing,onChange:l=>a({...r,notifications:{...r.notifications,marketing:l.target.checked}})}),e.jsx("span",{className:"toggle-slider"})]})]})]}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",onClick:v,disabled:h,children:h?e.jsx("span",{className:"spinner"}):"Save Preferences"})})]}),o==="preferences"&&e.jsxs("div",{className:"profile-card",children:[e.jsx("h3",{className:"card-title",children:"Preferences"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Language"}),e.jsxs("select",{value:r.preferences.language,onChange:l=>a({...r,preferences:{...r.preferences,language:l.target.value}}),className:"form-input",children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"es",children:"Spanish"}),e.jsx("option",{value:"fr",children:"French"}),e.jsx("option",{value:"de",children:"German"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Currency"}),e.jsxs("select",{value:r.preferences.currency,onChange:l=>a({...r,preferences:{...r.preferences,currency:l.target.value}}),className:"form-input",children:[e.jsx("option",{value:"INR",children:"INR (₹) - Indian Rupee"}),e.jsx("option",{value:"USD",children:"USD ($) - US Dollar"}),e.jsx("option",{value:"EUR",children:"EUR (€) - Euro"}),e.jsx("option",{value:"GBP",children:"GBP (£) - British Pound"})]})]})]}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",onClick:v,disabled:h,children:h?e.jsx("span",{className:"spinner"}):"Save Preferences"})})]}),o==="security"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"profile-card",children:[e.jsx("h3",{className:"card-title",children:"Change Password"}),e.jsxs("div",{className:"form-stack",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Current Password"}),e.jsx("input",{type:"password",className:"form-input",placeholder:"Enter current password"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"New Password"}),e.jsx("input",{type:"password",className:"form-input",placeholder:"Enter new password"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Confirm New Password"}),e.jsx("input",{type:"password",className:"form-input",placeholder:"Confirm new password"})]})]}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",children:"Update Password"})})]}),e.jsxs("div",{className:"profile-card danger-zone",children:[e.jsx("h3",{className:"card-title danger",children:"Danger Zone"}),e.jsx("p",{className:"card-description",children:"Once you delete your account, there is no going back. Please be certain."}),e.jsxs("button",{className:"btn btn-danger",children:[e.jsx(Ht,{}),"Delete Account"]})]})]})]})]})]}),e.jsx("style",{children:`
        /* Alert Styles */
        .alert {
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        /* Animation */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .alert-success {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
        }
        
        .alert-error {
          background: rgba(244, 63, 94, 0.15);
          border: 1px solid rgba(244, 63, 94, 0.3);
          color: #f43f5e;
        }
        
        .alert-info {
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
        }
        
        .profile-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        /* Layout */
        .profile-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.5rem;
        }

        /* Sidebar */
        .profile-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .user-card {
          text-align: center;
        }

        .user-avatar-large {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }

        .user-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .user-email {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 0.75rem;
        }

        .user-role {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 9999px;
        }

        /* Profile Nav */
        .profile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          border-radius: 0.625rem;
          color: #94a3b8;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
        }

        .nav-item.active {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .nav-item svg {
          width: 18px;
          height: 18px;
        }

        /* Profile Content */
        .profile-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-content .profile-card {
          margin-bottom: 0;
        }

        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-title.danger {
          color: #f43f5e;
        }

        .card-description {
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        /* Form Grid */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .form-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e2e8f0;
        }

        .input-wrapper {
          position: relative;
        }

        .input-wrapper > svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 18px;
          height: 18px;
        }

        .form-input.with-icon {
          padding-left: 2.75rem;
        }

        .card-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* Toggle Items */
        .toggles-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .toggle-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 0.75rem;
        }

        .toggle-info h4 {
          font-size: 0.95rem;
          font-weight: 500;
          color: #e2e8f0;
          margin-bottom: 0.25rem;
        }

        .toggle-info p {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          width: 48px;
          height: 26px;
          cursor: pointer;
        }

        .toggle-switch input {
          display: none;
        }

        .toggle-slider {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          transition: all 0.2s;
        }

        .toggle-slider::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .toggle-switch input:checked + .toggle-slider {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        .toggle-switch input:checked + .toggle-slider::after {
          transform: translateX(22px);
        }

        /* Danger Zone */
        .danger-zone {
          border-color: rgba(244, 63, 94, 0.3);
          background: rgba(244, 63, 94, 0.05);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .profile-layout {
            grid-template-columns: 1fr;
          }

          .profile-sidebar {
            flex-direction: row;
            overflow-x: auto;
          }

          .user-card {
            min-width: 200px;
          }

          .profile-nav {
            flex-direction: row;
            min-width: max-content;
          }

          .nav-item span {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .toggle-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `})]})}const Vt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),le=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),e.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),ce=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 3h12"}),e.jsx("path",{d:"M6 8h12"}),e.jsx("path",{d:"M12 3v13"}),e.jsx("path",{d:"M12 13a2.5 2.5 0 0 0 2.5 2.5H18"}),e.jsx("path",{d:"M12 16a2.5 2.5 0 0 1-2.5 2.5H6"})]}),qt=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"})}),Gt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),de=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),_t=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Zt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"19",cy:"12",r:"1"}),e.jsx("circle",{cx:"5",cy:"12",r:"1"})]});function Jt(){const{user:g}=P(),[t,f]=d.useState("overview"),[o,m]=d.useState(""),[h,w]=d.useState({totalUsers:0,activeSubscriptions:0,revenue:0,systemHealth:"0%"}),[x,b]=d.useState([]),[k,u]=d.useState([]),[r,a]=d.useState([]),[v,n]=d.useState({name:"",color:"#3b82f6",icon:"package"}),[l,s]=d.useState(!0);d.useEffect(()=>{g?(async()=>{try{const C=await L.get("/admin/stats");w(C.data);const M=await L.get("/admin/users");b(M.data.users||[]);const W=await L.get("/admin/activity");u(W.data.activities||[]);const B=await L.get("/admin/categories");a(B.data)}catch(C){console.error("Error fetching admin data:",C),w({totalUsers:0,activeSubscriptions:0,revenue:0,systemHealth:"0%"}),b([]),u([])}finally{s(!1)}})():s(!1)},[g]);const i=async(p,C)=>{try{const M=await L.put(`/admin/users/${p}/role`,{role:C});b(W=>W.map(B=>B._id===p?{...B,role:M.data.role}:B)),alert(`User role updated to ${C}`)}catch(M){console.error("Error updating user role:",M),alert("Error updating user role")}},j=async(p,C)=>{try{const M=await L.put(`/admin/users/${p}/status`,{status:C});b(W=>W.map(B=>B._id===p?{...B,status:M.data.status}:B)),alert(`User status updated to ${C}`)}catch(M){console.error("Error updating user status:",M),alert("Error updating user status")}},c=async p=>{try{const C=await L.post("/admin/categories",p);a(M=>[...M,C.data]),n({name:"",color:"#3b82f6",icon:"package"}),alert("Category created successfully")}catch(C){console.error("Error creating category:",C),alert("Error creating category")}},y=async p=>{if(window.confirm("Are you sure you want to delete this category?"))try{await L.delete(`/admin/categories/${p}`),a(C=>C.filter(M=>M._id!==p)),alert("Category deleted successfully")}catch(C){console.error("Error deleting category:",C),alert("Error deleting category")}},z=[{title:"Total Users",value:h.totalUsers.toString(),change:h.totalUsers>0?`+${Math.floor(Math.random()*10)}`:"Get started",icon:e.jsx(Vt,{}),color:"blue"},{title:"Active Subscriptions",value:h.activeSubscriptions.toString(),change:h.activeSubscriptions>0?`+${Math.floor(Math.random()*5)}`:"No subscriptions yet",icon:e.jsx(le,{}),color:h.activeSubscriptions>0?"green":"gray"},{title:"Revenue",value:`₹${h.revenue.toFixed(0)}K`,change:h.revenue>0?`+${Math.floor(Math.random()*30)}%`:"No revenue yet",icon:e.jsx(ce,{}),color:h.revenue>0?"purple":"gray"},{title:"System Health",value:h.systemHealth,change:"Monitoring",icon:e.jsx(qt,{}),color:"amber"}],D=(x==null?void 0:x.filter(p=>p.name.toLowerCase().includes(o.toLowerCase())||p.email.toLowerCase().includes(o.toLowerCase())))||[];return e.jsxs("div",{className:"page admin-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Admin Panel"}),e.jsx("p",{className:"page-subtitle",children:"Manage users, monitor system health, and view analytics"})]}),e.jsxs("div",{className:"admin-badge",children:[e.jsx(de,{}),e.jsx("span",{children:"Administrator"})]})]}),e.jsx("div",{className:"stats-grid",children:z.map((p,C)=>e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:`stat-icon ${p.color}`,children:p.icon}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:p.value}),e.jsx("div",{className:"stat-label",children:p.title}),e.jsx("div",{className:"stat-change",children:p.change})]})]},C))}),e.jsxs("div",{className:"admin-tabs",children:[e.jsx("button",{className:`tab-btn ${t==="overview"?"active":""}`,onClick:()=>f("overview"),children:"Overview"}),e.jsx("button",{className:`tab-btn ${t==="users"?"active":""}`,onClick:()=>f("users"),children:"Users"}),e.jsx("button",{className:`tab-btn ${t==="settings"?"active":""}`,onClick:()=>f("settings"),children:"Settings"})]}),e.jsxs("div",{className:"tab-content",children:[t==="overview"&&e.jsxs("div",{className:"overview-grid",children:[e.jsxs("div",{className:"admin-card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Recent Activity"})}),e.jsx("div",{className:"activity-list",children:k.length>0?k.map((p,C)=>{var M;return e.jsxs("div",{className:"activity-item",children:[e.jsxs("div",{className:`activity-icon ${p.type}`,children:[(p.type==="user_login"||p.type==="user_register")&&e.jsx(_t,{}),(p.type==="subscription_add"||p.type==="subscription_update"||p.type==="subscription_delete")&&e.jsx(le,{}),p.type==="payment_process"&&e.jsx(ce,{}),(p.type==="admin_action"||p.type==="system_event")&&e.jsx(de,{})]}),e.jsxs("div",{className:"activity-details",children:[e.jsx("div",{className:"activity-action",children:p.description}),e.jsxs("div",{className:"activity-meta",children:["by ",((M=p.userId)==null?void 0:M.name)||"Unknown"," • ",new Date(p.createdAt||p.timestamp).toLocaleString()]})]})]},C)}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-gray-500 mb-2",children:e.jsx("svg",{className:"w-12 h-12 mx-auto mb-3 opacity-50",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsx("p",{className:"text-gray-400",children:"No recent activity to display"})]})})]}),e.jsxs("div",{className:"admin-card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Today's Overview"})}),e.jsxs("div",{className:"quick-stats",children:[e.jsxs("div",{className:"quick-stat",children:[e.jsx("span",{className:"quick-value",children:h.newUsers||0}),e.jsx("span",{className:"quick-label",children:"New Users"})]}),e.jsxs("div",{className:"quick-stat",children:[e.jsxs("span",{className:"quick-value",children:["₹",h.todayRevenue||0]}),e.jsx("span",{className:"quick-label",children:"Revenue"})]}),e.jsxs("div",{className:"quick-stat",children:[e.jsx("span",{className:"quick-value",children:h.newSubscriptions||0}),e.jsx("span",{className:"quick-label",children:"New Subs"})]}),e.jsxs("div",{className:"quick-stat",children:[e.jsx("span",{className:"quick-value",children:h.supportTickets||0}),e.jsx("span",{className:"quick-label",children:"Support Tickets"})]})]})]})]}),t==="users"&&e.jsxs("div",{className:"admin-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h3",{className:"card-title",children:"User Management"}),e.jsxs("div",{className:"search-box",children:[e.jsx(Gt,{}),e.jsx("input",{type:"text",placeholder:"Search users...",value:o,onChange:p=>m(p.target.value)})]})]}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"users-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"User"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Joined"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:D.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"user-cell",children:[e.jsx("div",{className:"user-avatar",children:p.name.charAt(0)}),e.jsxs("div",{className:"user-info",children:[e.jsx("div",{className:"user-name",children:p.name}),e.jsx("div",{className:"user-email",children:p.email})]})]})}),e.jsx("td",{children:e.jsxs("select",{className:"role-select",value:p.role,onChange:C=>i(p._id,C.target.value),style:{border:"none",background:"transparent",fontWeight:"bold",textTransform:"capitalize"},children:[e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"member",children:"Member"}),e.jsx("option",{value:"viewer",children:"Viewer"})]})}),e.jsx("td",{children:e.jsxs("select",{className:"status-select",value:p.status,onChange:C=>j(p._id,C.target.value),style:{border:"none",background:"transparent",textTransform:"capitalize"},children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"suspended",children:"Suspended"})]})}),e.jsx("td",{children:new Date(p.createdAt).toLocaleDateString()}),e.jsx("td",{children:e.jsx("button",{className:"action-btn",children:e.jsx(Zt,{})})})]},p._id))})]})})]}),t==="settings"&&e.jsxs("div",{className:"admin-card settings-card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"System Settings"})}),e.jsxs("div",{className:"settings-list",children:[e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Maintenance Mode"}),e.jsx("p",{children:"Temporarily disable user access for maintenance"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"User Registration"}),e.jsx("p",{children:"Allow new users to register"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Email Notifications"}),e.jsx("p",{children:"Send system emails to users"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"API Access"}),e.jsx("p",{children:"Enable API endpoints for external integrations"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Subscription Categories"}),e.jsx("p",{children:"Manage subscription categories for organization"})]}),e.jsxs("div",{className:"category-management",children:[e.jsxs("div",{className:"category-form",children:[e.jsx("input",{type:"text",placeholder:"Category name",value:v.name,onChange:p=>n({...v,name:p.target.value}),className:"category-input"}),e.jsx("input",{type:"color",value:v.color,onChange:p=>n({...v,color:p.target.value}),className:"color-picker"}),e.jsx("button",{onClick:()=>c(v),className:"btn btn-primary",disabled:!v.name.trim(),children:"Add"})]}),e.jsx("div",{className:"categories-list",children:r.map(p=>e.jsxs("div",{className:"category-item",children:[e.jsxs("div",{className:"category-info",children:[e.jsx("div",{className:"category-color-preview",style:{backgroundColor:p.color}}),e.jsx("span",{className:"category-name",children:p.name})]}),e.jsx("div",{className:"category-actions",children:e.jsx("button",{onClick:()=>y(p._id),className:"btn btn-danger",children:"Delete"})})]},p._id))})]})]})]})]})]})]}),e.jsx("style",{children:`
        .admin-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        .admin-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05));
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 9999px;
          color: #f59e0b;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .admin-badge svg {
          width: 16px;
          height: 16px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
        }

        .stat-icon.blue {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .stat-icon.green {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .stat-icon.purple {
          background: rgba(139, 92, 246, 0.15);
          color: #8b5cf6;
        }

        .stat-icon.amber {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 0.25rem;
        }

        .stat-change {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 600;
        }

        /* Tabs */
        .admin-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 1rem;
        }

        .tab-btn {
          padding: 0.625rem 1.25rem;
          background: none;
          border: none;
          border-radius: 0.5rem;
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
        }

        .tab-btn.active {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        /* Tab Content */
        .tab-content {
          min-height: 400px;
        }

        /* Overview Grid */
        .overview-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1.5rem;
        }

        .admin-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        /* Activity List */
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0.625rem;
        }

        .activity-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
        }

        .activity-icon.user {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .activity-icon.subscription {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .activity-icon.payment {
          background: rgba(139, 92, 246, 0.15);
          color: #8b5cf6;
        }

        .activity-icon.system {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .activity-details {
          flex: 1;
        }

        .activity-action {
          font-weight: 500;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        .activity-meta {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Quick Stats */
        .quick-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .quick-stat {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0.625rem;
        }

        .quick-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .quick-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* Search Box */
        .search-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.5rem;
        }

        .search-box svg {
          color: #64748b;
          width: 16px;
          height: 16px;
        }

        .search-box input {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.875rem;
          outline: none;
          width: 200px;
        }

        .search-box input::placeholder {
          color: #64748b;
        }

        /* Users Table */
        .table-container {
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
        }

        .users-table th {
          padding: 0.875rem 1rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .users-table td {
          padding: 0.875rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.9rem;
        }

        .users-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        .user-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 500;
          color: #e2e8f0;
        }

        .user-email {
          font-size: 0.75rem;
          color: #64748b;
        }

        .role-badge {
          display: inline-block;
          padding: 0.25rem 0.625rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .role-badge.admin {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .role-badge.user {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.25rem 0.625rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .status-badge.active {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .status-badge.suspended {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .status-badge svg {
          width: 12px;
          height: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          border-radius: 0.5rem;
          color: #64748b;
          cursor: pointer;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
        }

        /* Settings */
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .setting-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 0.75rem;
        }

        .setting-info h4 {
          font-size: 0.95rem;
          font-weight: 500;
          color: #e2e8f0;
          margin-bottom: 0.25rem;
        }

        .setting-info p {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          width: 48px;
          height: 26px;
          cursor: pointer;
        }

        .toggle-switch input {
          display: none;
        }

        .toggle-slider {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          transition: all 0.2s;
        }

        .toggle-slider::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .toggle-switch input:checked + .toggle-slider {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        .toggle-switch input:checked + .toggle-slider::after {
          transform: translateX(22px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .overview-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .admin-tabs {
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .tab-btn {
            white-space: nowrap;
          }

          .search-box input {
            width: 150px;
          }

          .users-table {
            font-size: 0.85rem;
          }

          .users-table th,
          .users-table td {
            padding: 0.625rem;
          }
        }
        
        /* Custom select styles */
        .role-select, .status-select {
          background: transparent;
          border: none;
          outline: none;
          font-weight: bold;
          text-transform: capitalize;
          cursor: pointer;
          padding: 0;
          margin: 0;
          color: inherit;
        }
        
        .role-select:focus, .status-select:focus {
          outline: 2px solid #3b82f6;
          border-radius: 4px;
        }
        
        /* Category Management Styles */
        .category-management {
          width: 100%;
          max-width: 500px;
        }
        
        .category-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .category-input {
          flex: 1;
          min-width: 150px;
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }
        
        .color-picker {
          width: 40px;
          height: 40px;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          padding: 0.25rem;
          cursor: pointer;
        }
        
        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .category-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
        }
        
        .category-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .category-color-preview {
          width: 20px;
          height: 20px;
          border-radius: 0.25rem;
          border: 1px solid #cbd5e1;
        }
        
        .category-name {
          font-weight: 500;
          color: #1e293b;
        }
        
        .category-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .btn-danger {
          background: #ef4444;
          color: white;
          border: none;
          padding: 0.375rem 0.75rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-size: 0.875rem;
        }
        
        .btn-danger:hover {
          background: #dc2626;
        }
      `})]})}const Qt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Xt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m12 19-7-7 7-7"}),e.jsx("path",{d:"M19 12H5"})]}),Kt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]});function er(){return e.jsxs("div",{className:"not-found-page",children:[e.jsxs("div",{className:"bg-effects",children:[e.jsx("div",{className:"bg-orb orb-1"}),e.jsx("div",{className:"bg-orb orb-2"}),e.jsx("div",{className:"bg-orb orb-3"})]}),e.jsxs("div",{className:"not-found-content",children:[e.jsx("div",{className:"error-illustration",children:e.jsxs("div",{className:"error-code",children:[e.jsx("span",{className:"digit",children:"4"}),e.jsxs("div",{className:"planet",children:[e.jsx("div",{className:"planet-ring"}),e.jsx("div",{className:"planet-body"})]}),e.jsx("span",{className:"digit",children:"4"})]})}),e.jsx("h1",{className:"error-title",children:"Page Not Found"}),e.jsx("p",{className:"error-description",children:"Oops! The page you're looking for seems to have drifted off into space. It might have been moved, deleted, or never existed."}),e.jsxs("div",{className:"error-actions",children:[e.jsxs(N,{to:"/",className:"btn btn-primary btn-lg",children:[e.jsx(Qt,{}),"Go Home"]}),e.jsxs("button",{onClick:()=>window.history.back(),className:"btn btn-secondary btn-lg",children:[e.jsx(Xt,{}),"Go Back"]})]}),e.jsxs("div",{className:"helpful-links",children:[e.jsx("p",{className:"links-title",children:"Or try these:"}),e.jsxs("div",{className:"links-grid",children:[e.jsxs(N,{to:"/dashboard",className:"link-item",children:[e.jsx("span",{className:"link-icon",children:"📊"}),e.jsx("span",{children:"Dashboard"})]}),e.jsxs(N,{to:"/manage",className:"link-item",children:[e.jsx("span",{className:"link-icon",children:"📋"}),e.jsx("span",{children:"Subscriptions"})]}),e.jsxs(N,{to:"/analytics",className:"link-item",children:[e.jsx("span",{className:"link-icon",children:"📈"}),e.jsx("span",{children:"Analytics"})]}),e.jsxs(N,{to:"/profile",className:"link-item",children:[e.jsx("span",{className:"link-icon",children:"👤"}),e.jsx("span",{children:"Profile"})]})]})]}),e.jsxs("div",{className:"search-suggestion",children:[e.jsx("p",{children:"Looking for something specific?"}),e.jsxs("div",{className:"search-box",children:[e.jsx(Kt,{}),e.jsx("input",{type:"text",placeholder:"Search pages..."})]})]})]}),e.jsx("style",{children:`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        /* Background Effects */
        .bg-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -200px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          bottom: -150px;
          left: -100px;
          animation: float 8s ease-in-out infinite;
          animation-delay: -4s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 6s ease-in-out infinite;
          opacity: 0.15;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }

        /* Content */
        .not-found-content {
          text-align: center;
          max-width: 600px;
          position: relative;
          z-index: 1;
        }

        /* Error Illustration */
        .error-illustration {
          margin-bottom: 2rem;
        }

        .error-code {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 8rem;
          font-weight: 800;
          line-height: 1;
        }

        .digit {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.5)); }
        }

        .planet {
          position: relative;
          width: 100px;
          height: 100px;
          animation: rotate 20s linear infinite;
        }

        .planet-body {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f59e0b, #f97316);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 40px rgba(245, 158, 11, 0.4);
        }

        .planet-ring {
          width: 100px;
          height: 30px;
          border: 4px solid rgba(245, 158, 11, 0.5);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-20deg);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Error Message */
        .error-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .error-description {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Actions */
        .error-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        /* Helpful Links */
        .helpful-links {
          margin-bottom: 2rem;
        }

        .links-title {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 1rem;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .link-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #e2e8f0;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .link-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        .link-icon {
          font-size: 1.5rem;
        }

        /* Search Suggestion */
        .search-suggestion {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .search-suggestion p {
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          max-width: 300px;
          margin: 0 auto;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
        }

        .search-box svg {
          color: #64748b;
          flex-shrink: 0;
        }

        .search-box input {
          flex: 1;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
        }

        .search-box input::placeholder {
          color: #64748b;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .error-code {
            font-size: 5rem;
          }

          .planet {
            width: 70px;
            height: 70px;
          }

          .planet-body {
            width: 40px;
            height: 40px;
          }

          .planet-ring {
            width: 70px;
            height: 20px;
            border-width: 3px;
          }

          .error-title {
            font-size: 1.875rem;
          }

          .error-description {
            font-size: 1rem;
          }

          .error-actions {
            flex-direction: column;
          }

          .error-actions .btn {
            width: 100%;
            justify-content: center;
          }

          .links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})}function tr(){return e.jsxs("div",{className:"policy-page",children:[e.jsxs("div",{className:"policy-container",children:[e.jsx("h1",{className:"policy-title gradient-text",children:"Terms and Conditions"}),e.jsxs("div",{className:"policy-content",children:[e.jsx("p",{className:"last-updated",children:"Last Updated: October 2026"}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. Introduction"}),e.jsx("p",{children:"Welcome to RenewSense. By accessing and using our website and services, you agree to be bound by the following Terms and Conditions. Please read them carefully."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"2. Use of Service"}),e.jsx("p",{children:"Our service allows you to manage and track your SaaS subscriptions. You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"3. User Accounts"}),e.jsx("p",{children:"To use our services, you must create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"4. Subscriptions and Payments"}),e.jsx("p",{children:"While RenewSense helps you track subscriptions, we do not process payments for third-party services. Any payment features on our site relate only to RenewSense premium services, if applicable."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"5. Disclaimer of Warranties"}),e.jsx("p",{children:'Our services are provided "as is" and "as available". We do not warrant that the service will be uninterrupted, error-free, or completely secure.'})]})]})]}),e.jsx("style",{children:`
        .policy-page {
          min-height: calc(100vh - 80px);
          padding: 4rem 1.5rem;
          display: flex;
          justify-content: center;
        }
        .policy-container {
          max-width: 800px;
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 3rem;
          backdrop-filter: blur(20px);
        }
        .policy-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .policy-content {
          color: #94a3b8;
          line-height: 1.7;
        }
        .last-updated {
          font-style: italic;
          margin-bottom: 2rem;
          color: #64748b;
        }
        .policy-content section {
          margin-bottom: 2rem;
        }
        .policy-content h2 {
          color: #e2e8f0;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .policy-content p {
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .policy-container {
            padding: 2rem;
          }
          .policy-title {
            font-size: 2rem;
          }
        }
      `})]})}function rr(){return e.jsxs("div",{className:"policy-page",children:[e.jsxs("div",{className:"policy-container",children:[e.jsx("h1",{className:"policy-title gradient-text",children:"Privacy Policy"}),e.jsxs("div",{className:"policy-content",children:[e.jsx("p",{className:"last-updated",children:"Last Updated: October 2026"}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. Information We Collect"}),e.jsx("p",{children:"We collect information you provide directly to us when you create an account, such as your name, email address, and subscription tracking details. We may also collect usage data to improve our services."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"2. How We Use Your Information"}),e.jsx("p",{children:"We use the information we collect to operate, maintain, and provide the features of the RenewSense platform. We may also use your information to send you technical notices, updates, and administrative messages."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"3. Data Security"}),e.jsx("p",{children:"We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"4. Sharing of Information"}),e.jsx("p",{children:"We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"5. Your Rights"}),e.jsx("p",{children:"You have the right to access, update, or entirely delete the personal information we have on you. You can do this from within your account settings or by contacting our support team."})]})]})]}),e.jsx("style",{children:`
        .policy-page {
          min-height: calc(100vh - 80px);
          padding: 4rem 1.5rem;
          display: flex;
          justify-content: center;
        }
        .policy-container {
          max-width: 800px;
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 3rem;
          backdrop-filter: blur(20px);
        }
        .policy-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .policy-content {
          color: #94a3b8;
          line-height: 1.7;
        }
        .last-updated {
          font-style: italic;
          margin-bottom: 2rem;
          color: #64748b;
        }
        .policy-content section {
          margin-bottom: 2rem;
        }
        .policy-content h2 {
          color: #e2e8f0;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .policy-content p {
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .policy-container {
            padding: 2rem;
          }
          .policy-title {
            font-size: 2rem;
          }
        }
      `})]})}function T({children:g,roles:t}){const{token:f,role:o}=P();return f?t&&t.length&&!t.includes(o)?e.jsx(J,{to:"/",replace:!0}):g:e.jsx(J,{to:"/login",replace:!0})}const sr=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}),e.jsx("rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}),e.jsx("rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}),e.jsx("rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"})]}),ar=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"M12 5v14"})]}),ir=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M8 6h13"}),e.jsx("path",{d:"M8 12h13"}),e.jsx("path",{d:"M8 18h13"}),e.jsx("path",{d:"M3 6h.01"}),e.jsx("path",{d:"M3 12h.01"}),e.jsx("path",{d:"M3 18h.01"})]}),nr=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 3v18h18"}),e.jsx("path",{d:"m19 9-5 5-4-4-3 3"})]}),or=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),e.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),he=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),me=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),pe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),e.jsx("polyline",{points:"16 17 21 12 16 7"}),e.jsx("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]}),lr=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),e.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),e.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]}),cr=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]});function dr(){var k;const{role:g,token:t,logout:f,user:o}=P(),m=ge(),[h,w]=d.useState(!1),x=u=>m.pathname===u,b=t?[{to:"/dashboard",label:"Dashboard",icon:e.jsx(sr,{})},{to:"/add",label:"Add",icon:e.jsx(ar,{})},{to:"/manage",label:"Subscriptions",icon:e.jsx(ir,{})},{to:"/analytics",label:"Analytics",icon:e.jsx(nr,{})},{to:"/payment",label:"Payment",icon:e.jsx(or,{})},{to:"/profile",label:"Profile",icon:e.jsx(he,{})},...g==="admin"?[{to:"/admin",label:"Admin",icon:e.jsx(me,{})}]:[]]:[{to:"/login",label:"Login"},{to:"/register",label:"Get Started"}];return e.jsxs("nav",{className:"navbar",children:[e.jsxs("div",{className:"nav-container",children:[e.jsx(N,{to:"/",className:"nav-brand",children:e.jsx("span",{className:"gradient-text",children:"RenewSense"})}),e.jsx("div",{className:"nav-links desktop",children:t?e.jsx(e.Fragment,{children:b.filter(u=>u.to!=="/profile"&&u.to!=="/admin").map(u=>e.jsxs(N,{to:u.to,className:`nav-link ${x(u.to)?"active":""}`,children:[u.icon,e.jsx("span",{children:u.label})]},u.to))}):e.jsxs(e.Fragment,{children:[e.jsx(N,{to:"/login",className:"nav-link",children:"Login"}),e.jsx(N,{to:"/register",className:"btn btn-primary btn-sm",children:"Get Started"})]})}),t&&e.jsx("div",{className:"nav-user desktop",children:e.jsxs("div",{className:"user-menu",children:[e.jsxs("button",{className:"user-menu-trigger",children:[e.jsx("div",{className:"user-avatar",children:((k=o==null?void 0:o.name)==null?void 0:k.charAt(0).toUpperCase())||"U"}),e.jsx("span",{className:"user-name",children:(o==null?void 0:o.name)||"User"})]}),e.jsxs("div",{className:"user-dropdown",children:[e.jsxs(N,{to:"/profile",className:"dropdown-item",children:[e.jsx(he,{}),"Profile"]}),g==="admin"&&e.jsxs(N,{to:"/admin",className:"dropdown-item",children:[e.jsx(me,{}),"Admin Panel"]}),e.jsx("div",{className:"dropdown-divider"}),e.jsxs("button",{onClick:f,className:"dropdown-item danger",children:[e.jsx(pe,{}),"Logout"]})]})]})}),e.jsx("button",{className:"mobile-menu-btn",onClick:()=>w(!h),children:h?e.jsx(cr,{}):e.jsx(lr,{})})]}),h&&e.jsx("div",{className:"mobile-menu",children:e.jsxs("div",{className:"mobile-nav-links",children:[b.map(u=>e.jsxs(N,{to:u.to,className:`mobile-nav-link ${x(u.to)?"active":""}`,onClick:()=>w(!1),children:[u.icon,e.jsx("span",{children:u.label})]},u.to)),t&&e.jsxs("button",{onClick:f,className:"mobile-nav-link danger",children:[e.jsx(pe,{}),e.jsx("span",{children:"Logout"})]})]})}),e.jsx("style",{children:`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 15, 28, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          flex-shrink: 0;
        }

        .nav-brand span {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #94a3b8;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: #ffffff;
          background: rgba(59, 130, 246, 0.15);
        }

        .nav-user {
          flex-shrink: 0;
        }

        .user-menu {
          position: relative;
        }

        .user-menu-trigger {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.4rem 0.75rem 0.4rem 0.4rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .user-menu-trigger:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e2e8f0;
        }

        .user-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          min-width: 200px;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          padding: 0.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s ease;
        }

        .user-menu:hover .user-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 0.75rem;
          font-size: 0.9rem;
          color: #94a3b8;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .dropdown-item.danger:hover {
          background: rgba(244, 63, 94, 0.1);
          color: #f43f5e;
        }

        .dropdown-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 0.5rem 0;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 15, 28, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          font-size: 1rem;
          color: #94a3b8;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: rgba(59, 130, 246, 0.15);
          color: #ffffff;
        }

        .mobile-nav-link.danger:hover {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        @media (max-width: 1024px) {
          .nav-links.desktop,
          .nav-user.desktop {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: block;
          }
        }
      `})]})}function hr(){return e.jsxs(De,{children:[e.jsxs("div",{className:"app",children:[e.jsx(dr,{}),e.jsx("main",{className:"main-content",children:e.jsxs(ve,{children:[e.jsx(A,{path:"/",element:e.jsx(Ee,{})}),e.jsx(A,{path:"/login",element:e.jsx(Ve,{})}),e.jsx(A,{path:"/register",element:e.jsx(Xe,{})}),e.jsx(A,{path:"/terms",element:e.jsx(tr,{})}),e.jsx(A,{path:"/privacy",element:e.jsx(rr,{})}),e.jsx(A,{path:"/dashboard",element:e.jsx(T,{children:e.jsx(nt,{})})}),e.jsx(A,{path:"/add",element:e.jsx(T,{children:e.jsx(dt,{})})}),e.jsx(A,{path:"/manage",element:e.jsx(T,{children:e.jsx(vt,{})})}),e.jsx(A,{path:"/analytics",element:e.jsx(T,{children:e.jsx(Mt,{})})}),e.jsx(A,{path:"/payment",element:e.jsx(T,{children:e.jsx(Wt,{})})}),e.jsx(A,{path:"/profile",element:e.jsx(T,{children:e.jsx(Yt,{})})}),e.jsx(A,{path:"/admin",element:e.jsx(T,{roles:["admin"],children:e.jsx(Jt,{})})}),e.jsx(A,{path:"*",element:e.jsx(er,{})})]})})]}),e.jsx("style",{children:`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
        }
      `})]})}const mr=fe(document.getElementById("root"));mr.render(e.jsx(we.StrictMode,{children:e.jsx(ye,{children:e.jsx(hr,{})})}));
