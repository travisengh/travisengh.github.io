(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),l=n(4957),c=n(7995),f=n(647),i=n(1992),s=n(639),d=n(4019),p=n(227),v="undefined"!==typeof u.default.useTransition,y={};function h(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;y[t+"%"+n+(o?"%"+o:"")]=!0}}var b=u.default.forwardRef((function(e,t){var n,o=e.href,b=e.as,m=e.children,g=e.prefetch,C=e.passHref,_=e.replace,O=e.soft,x=e.shallow,j=e.scroll,M=e.locale,E=e.onClick,R=e.onMouseEnter,w=e.onTouchStart,L=e.legacyBehavior,k=void 0===L?!0!==Boolean(!1):L,P=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!k||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var N=!1!==g,I=v?u.default.useTransition():[],S=r(I,2)[1],T=u.default.useContext(f.RouterContext),U=u.default.useContext(i.AppRouterContext);U&&(T=U);var z,A=u.default.useMemo((function(){var e=l.resolveHref(T,o,!0),t=r(e,2),n=t[0],a=t[1];return{href:n,as:b?l.resolveHref(T,b):a||n}}),[T,o,b]),B=A.href,D=A.as,H=u.default.useRef(B),K=u.default.useRef(D);k&&(z=u.default.Children.only(n));var Z=k?z&&"object"===typeof z&&z.ref:t,G=s.useIntersection({rootMargin:"200px"}),q=r(G,3),W=q[0],F=q[1],J=q[2],Q=u.default.useCallback((function(e){K.current===D&&H.current===B||(J(),K.current=D,H.current=B),W(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[D,Z,B,J,W]);u.default.useEffect((function(){var e=F&&N&&l.isLocalURL(B),t="undefined"!==typeof M?M:T&&T.locale,n=y[B+"%"+D+(t?"%"+t:"")];e&&!n&&h(T,B,D,{locale:t})}),[D,B,F,M,N,T]);var V={ref:Q,onClick:function(e){k||"function"!==typeof E||E(e),k&&z.props&&"function"===typeof z.props.onClick&&z.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c,f,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:u,locale:f,scroll:c})};i?i(s):s()}}(e,T,B,D,_,O,x,j,M,U?S:void 0)},onMouseEnter:function(e){k||"function"!==typeof R||R(e),k&&z.props&&"function"===typeof z.props.onMouseEnter&&z.props.onMouseEnter(e),l.isLocalURL(B)&&h(T,B,D,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof w||w(e),k&&z.props&&"function"===typeof z.props.onTouchStart&&z.props.onTouchStart(e),l.isLocalURL(B)&&h(T,B,D,{priority:!0})}};if(!k||C||"a"===z.type&&!("href"in z.props)){var X="undefined"!==typeof M?M:T&&T.locale,Y=T&&T.isLocaleDomain&&d.getDomainLocale(D,X,T.locales,T.domainLocales);V.href=Y||p.addBasePath(c.addLocale(D,X,T&&T.defaultLocale))}return k?u.default.cloneElement(z,V):u.default.createElement("a",Object.assign({},P,V),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,i=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],y=o.useState(null),h=r(y,2),b=h[0],m=h[1];o.useEffect((function(){if(u){if(i.current&&(i.current(),i.current=void 0),f||p)return;return b&&b.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(b,(function(e){return e&&v(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[b,f,n,t,p]);var g=o.useCallback((function(){v(!1)}),[]);return[m,p,g]};var o=n(7294),a=n(6286),u="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u},1664:function(e,t,n){e.exports=n(7942)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return f}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,u({key:t},e.attr),c(e.child))}))}function f(e){return function(t){return r.createElement(i,u({attr:u({},e.attr)},t),c(e.child))}}function i(e){var t=function(t){var n,o=e.attr,a=e.size,c=e.title,f=l(e,["attr","size","title"]),i=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);