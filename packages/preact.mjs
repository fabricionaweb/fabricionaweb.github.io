import e from"/packages/htm.mjs";var t=function(){},n={},o=[],r=[];function i(e,i){var l,a,s,p,c=arguments,u=r;for(p=arguments.length;p-- >2;)o.push(c[p]);for(i&&null!=i.children&&(o.length||o.push(i.children),delete i.children);o.length;)if((a=o.pop())&&void 0!==a.pop)for(p=a.length;p--;)o.push(a[p]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&l?u[u.length-1]+=a:u===r?u=[a]:u.push(a),l=s;var d=new t;return d.nodeName=e,d.children=u,d.attributes=null==i?void 0:i,d.key=null==i?void 0:i.key,void 0!==n.vnode&&n.vnode(d),d}function l(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var s="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function p(e,t){return i(e.nodeName,l(l({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,u=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==u.push(e)&&(n.debounceRendering||s)(f)}function f(){for(var e;e=u.pop();)e._dirty&&T(e)}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)a(n,null),a(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===c.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](n.event&&n.event(e)||e)}var b=[],g=0,C=!1,x=!1;function N(){for(var e;e=b.shift();)n.afterMount&&n.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,o,r,i){g++||(C=null!=r&&void 0!==r.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var l=function e(t,n,o,r,i){var l=t,a=C;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(l=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(l,t),w(t,!0))),l.__preactattr_=!0,l;var s,p,c=n.nodeName;if("function"==typeof c)return function(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=m(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(L(r,p,3,n,o),e=r.base):(i&&!a&&(M(i),e=l=null),r=P(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),L(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,w(l,!1))),e}(t,n,o,r);if(C="svg"===c||"foreignObject"!==c&&C,c=String(c),(!t||!v(t,c))&&(s=c,(p=C?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,l=p,t)){for(;t.firstChild;)l.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(l,t),w(t,!0)}var u=l.firstChild,d=l.__preactattr_,f=n.children;if(null==d){d=l.__preactattr_={};for(var y=l.attributes,b=y.length;b--;)d[y[b].name]=y[b].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&function(t,n,o,r,i){var l,a,s,p,c,u,d,f,m=t.childNodes,_=[],y={},b=0,g=0,C=m.length,x=0,N=n?n.length:0;if(0!==C)for(var k=0;k<C;k++){var S=m[k],U=S.__preactattr_;null!=(P=N&&U?S._component?S._component.__key:U.key:null)?(b++,y[P]=S):(U||(void 0!==S.splitText?!i||S.nodeValue.trim():i))&&(_[x++]=S)}if(0!==N)for(k=0;k<N;k++){var P;if(c=null,null!=(P=(p=n[k]).key))b&&void 0!==y[P]&&(c=y[P],y[P]=void 0,b--);else if(g<x)for(l=g;l<x;l++)if(void 0!==_[l]&&(u=a=_[l],f=i,"string"==typeof(d=p)||"number"==typeof d?void 0!==u.splitText:"string"==typeof d.nodeName?!u._componentConstructor&&v(u,d.nodeName):f||u._componentConstructor===d.nodeName)){c=a,_[l]=void 0,l===x-1&&x--,l===g&&g++;break}c=e(c,p,o,r),s=m[k],c&&c!==t&&c!==s&&(null==s?t.appendChild(c):c===s.nextSibling?h(s):t.insertBefore(c,s))}if(b)for(var k in y)void 0!==y[k]&&w(y[k],!1);for(;g<=x;)void 0!==(c=_[x--])&&w(c,!1)}(l,f,o,r,x||null!=d.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||_(e,o,n[o],n[o]=void 0,C);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||_(e,o,n[o],n[o]=t[o],C)}(l,n.attributes,d),C=a,l}(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--g||(x=!1,i||N()),l}function w(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&a(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||h(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;w(e,!0),e=t}}var U=[];function P(e,t,n){var o,r=U.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):((o=new E(t,n)).constructor=e,o.render=B);r--;)if(U[r].constructor===e)return o.nextBase=U[r].nextBase,U.splice(r,1),o;return o}function B(e,t,n){return this.constructor(e,n)}function L(e,t,o,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==o&&(1!==o&&!1===n.syncComponentUpdates&&e.base?d(e):T(e,1,i)),a(e.__ref,e))}function T(e,t,o,r){if(!e._disable){var i,a,s,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,v=e.prevContext||u,h=e.base,_=e.nextBase,y=h||_,C=e._component,x=!1,S=v;if(e.constructor.getDerivedStateFromProps&&(c=l(l({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),h&&(e.props=d,e.state=f,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){i=e.render(p,c,u),e.getChildContext&&(u=l(l({},u),e.getChildContext())),h&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(d,f));var U,B,E=i&&i.nodeName;if("function"==typeof E){var W=m(i);(a=C)&&a.constructor===E&&W.key==a.__key?L(a,W,1,u,!1):(U=a,e._component=a=P(E,W,u),a.nextBase=a.nextBase||_,a._parentComponent=e,L(a,W,0,u,!1),T(a,1,o,!0)),B=a.base}else s=y,(U=C)&&(s=e._component=null),(y||1===t)&&(s&&(s._component=null),B=k(s,i,u,o||!h,y&&y.parentNode,!0));if(y&&B!==y&&a!==C){var D=y.parentNode;D&&B!==D&&(D.replaceChild(B,y),U||(y._component=null,w(y,!1)))}if(U&&M(U),e.base=B,B&&!r){for(var V=e,A=e;A=A._parentComponent;)(V=A).base=B;B._component=V,B._componentConstructor=V.constructor}}for(!h||o?b.push(e):x||(e.componentDidUpdate&&e.componentDidUpdate(d,f,S),n.afterUpdate&&n.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);g||r||N()}}function M(e){n.beforeUnmount&&n.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?M(o):t&&(null!=t.__preactattr_&&a(t.__preactattr_.ref,null),e.nextBase=t,h(t),U.push(e),S(t)),a(e.__ref,null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function W(){return{}}function D(e,t){!function(t,n,o){k(o,e,{},!1,n,!1)}(0,t,t.firstElementChild)}l(E.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),T(this,2)},render:function(){}});var V=e.bind(i);export default{h:i,createElement:i,cloneElement:p,createRef:W,Component:E,render:D,rerender:f,options:n,html:V};export{i as h,i as createElement,p as cloneElement,W as createRef,E as Component,D as render,f as rerender,n as options,V as html}