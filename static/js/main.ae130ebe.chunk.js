(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{22:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/default.717c6e48.svg"},23:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/thunderstorm.ed0512e4.svg"},24:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/rain.4eaa14cd.svg"},25:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/clouds.642138d8.svg"},26:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/clearnight.d72ad11f.svg"},27:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/clearday.79dd66f3.svg"},28:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/hazy.670d9598.svg"},31:function(t,n,e){"use strict";e.r(n);var i,c,a,r,o,s,d=e(1),l=e.n(d),h=e(9),u=e.n(h),b=e(10),j=e(11),f=e(16),p=e(15),x=e(3),g=e(2),O=e(4),m=e(0),v={default:e(22),thunderstorm:e(23),rain:e(24),clouds:e(25),clearnight:e(26),clearday:e(27),hazy:e(28)},w=g.c.div(i||(i=Object(x.a)(["\n\theight: 100%;\n\tdisplay: inline-block;\n\tfont-weight: 200;\n"]))),y=g.c.div(c||(c=Object(x.a)(["\n\theight: 70%;\n"]))),S=g.c.img(a||(a=Object(x.a)(["\n\theight:100%;\n\theight: 100%;\n\tfloat: left;\n"]))),k=g.c.div(r||(r=Object(x.a)(["\n\theight: 100%;\n\tfloat: right;\n\tfont-size: 35px;\n\tpadding-top: 8px;\n"]))),z=g.c.div(o||(o=Object(x.a)(["\n\theight: 30%;\n\ttext-align: center;\n\tfont-size: 20px;\n"])));function E(t){var n=t.lat,e=t.long,i=Object(d.useState)(),c=Object(O.a)(i,2),a=c[0],r=c[1],o=Object(d.useState)(),s=Object(O.a)(o,2),l=s[0],h=s[1],u=Object(d.useState)(),b=Object(O.a)(u,2),j=b[0],f=b[1];Object(d.useEffect)((function(){var t=v,i="https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(e,"&appid=").concat("a68f7eba17ff810319e0698eb480852e","&units=metric");fetch(i).then((function(t){return t.json()})).then((function(n){var e=n.main,i=n.name,c=n.sys,a=n.weather;if(a){var o=a[0].main.toLowerCase(),s=c.sunrise,d=c.sunset,l=new Date;"clear"===o&&(o=l>s&&l<d?"clearday":"clearnight");var u=t.hazy;o in t&&(u=t[o]),r(e.temp.toFixed(0)),f(u),h(i)}})).catch((function(t){console.log(t)}))}),[n,e]);var p=a&&j!==v.default?"":"hidden";return Object(m.jsxs)(w,{className:p,children:[Object(m.jsxs)(y,{children:[Object(m.jsx)(S,{src:j?j.default:null}),Object(m.jsxs)(k,{className:"vertical-center",children:[a,"\xb0"]})]}),Object(m.jsx)(z,{children:l})]})}var F,D,M,U=g.c.div(s||(s=Object(x.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 200px;\n\n\t@media screen and (max-width: ","px) {\n\t\tfont-size: 100px;\n\t}\n"])),(function(t){return t.theme.smallScreen}));function A(){var t=Object(d.useState)(new Date),n=Object(O.a)(t,2),e=n[0],i=n[1],c=Object(d.useRef)();Object(d.useEffect)((function(){return c.current=setInterval((function(){return i(new Date)}),1e3),function(){clearInterval(c.current)}}),[c,i]);var a=function(t){var n=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"});return n.replace("AM","").replace("PM","")}(e);return Object(m.jsx)(U,{children:a})}var C,I=g.c.div(F||(F=Object(x.a)(["\n\tdisplay: inline-block;\n\theight: 100%;\n\twidth: 80px;\n\tpadding: 5px;\n\tborder: 2px solid;\n\tborder-radius: 8px;\n\tfont-weight: 200;\n"]))),N=g.c.div(D||(D=Object(x.a)(["\n\tfont-size: 28px;\n\ttext-align: center;\n"]))),B=g.c.div(M||(M=Object(x.a)(["\n\tfont-size: 30px;\n\ttext-align: center;\n"])));function J(){var t=Object(d.useState)(null),n=Object(O.a)(t,2),e=n[0],i=n[1],c=Object(d.useState)(null),a=Object(O.a)(c,2),r=a[0],o=a[1];return Object(d.useEffect)((function(){var t=new Date,n=t.getDate(),e=t.getMonth();i(["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][e]),o(n)}),[]),Object(m.jsxs)(I,{children:[Object(m.jsx)(N,{children:e}),Object(m.jsx)(B,{children:r})]})}var R,W,G,V,L,P=g.c.div(C||(C=Object(x.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 50px;\n\n\t@media screen and (max-width: ","px) {\n\t\tfont-size: 30px;\n\t}\n"])),(function(t){return t.theme.smallScreen}));function _(t){var n=t.name,e=Object(d.useState)(),i=Object(O.a)(e,2),c=i[0],a=i[1];return Object(d.useEffect)((function(){var t=(new Date).getHours(),n="evening";t>=5&&t<12?n="morning":t>=12&&t<=17&&(n="afternoon"),a(n)}),[n]),Object(m.jsxs)(P,{children:["Good ",c,n?", "+n:"","."]})}var T=g.c.a(R||(R=Object(x.a)(["\n\tdisplay: inline-flex;\n\tflex-direction: column;\n\tfont-weight: 200;\n\theight: 100%;\n\tfloat: left;\n\tvertical-align: bottom;\n\tcolor: ",";\n\ttext-decoration: none;\n"])),(function(t){return t.theme.primaryWhite})),Y=g.c.div(W||(W=Object(x.a)(["\n\tfont-size: 20px;\n\ttext-align: center;\n\theight: 50%;\n\tdisplay: flex;\n\talign-items: flex-end;\n"]))),q=g.c.div(G||(G=Object(x.a)(["\n\tpadding-top: 3px;\n\theight: 50%;\n\tdisplay: flex;\n"]))),H=g.c.div(V||(V=Object(x.a)(["\n\tfont-size: 30px;\n\tdisplay: inline-block;\n\theight: 100%;\n\ttext-align: right;\n\tpadding-right: 1px;\n"]))),X=g.c.div(L||(L=Object(x.a)(["\n\tfont-size: 15px;\n\tdisplay: inline-block;\n\theight: 100%;\n\tfloat: right;\n\tpadding-top: 8px;\n\tpadding-left: 1px;\n"])));function K(){var t=Object(d.useState)(null),n=Object(O.a)(t,2),e=n[0],i=n[1];Object(d.useEffect)((function(){fetch("https://www.gasnow.org/api/v3/gas/price?utm_source=dashboard").then((function(t){return t.json()})).then((function(t){var n=(t.data.standard*Math.pow(10,-9)).toFixed(0);i(n)})).catch((function(t){console.log(t)}))}),[]);var c=e?"":"hidden";return Object(m.jsxs)(T,{href:"https://www.gasnow.org/",className:c,children:[Object(m.jsx)(Y,{children:"Gas Fee"}),Object(m.jsxs)(q,{children:[Object(m.jsx)(H,{children:e}),Object(m.jsx)(X,{children:"gwei"})]})]})}var Q,Z,$,tt,nt,et=e.p+"static/media/searchIcon.aedba738.svg",it=g.c.div(Q||(Q=Object(x.a)(["\n\theight: 40px;\n\twidth: 100%;\n\ttext-align: center;\n"]))),ct=g.c.form(Z||(Z=Object(x.a)(["\n\tdisplay: inline-block;\n\theight: 100%;\n\tbackground-color: ",";\n\tborder-radius: 20px;\n\twidth: 350px;\n\topacity: ",";\n\n\n\t@media screen and (max-width: ","px) {\n\t\twidth: 300px;\n\t}\n"])),(function(t){return t.theme.primaryWhite}),(function(t){return t.startSearch?1:.5}),(function(t){return t.theme.smallScreen})),at=g.c.input($||($=Object(x.a)(["\n\tdisplay: inline-block;\n\theight: 100%;\n\twidth: 300px;\n\tfloat: left;\n\tpadding-left: 20px;\n\tborder: none;\n\tfont-size: 15px;\n\tbackground-color: transparent;\n\tbox-sizing: border-box;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t@media screen and (max-width: ","px) {\n\t\twidth: 250px;\n\t}\n"])),(function(t){return t.theme.smallScreen})),rt=g.c.button(tt||(tt=Object(x.a)(["\n\tdisplay: inline-block;\t\n\theight: 100%;\n\twidth: 50px;\n\tborder: none;\n\tbackground-color: transparent;\n\tcursor: pointer;\n\n\t& > img {\n\t\theight: 100%;\n\t\twidth: 18px;\n\t}\n"])));function ot(){var t=Object(d.useState)(""),n=Object(O.a)(t,2),e=n[0],i=n[1];function c(t){window.location.href="https://www.duckduckgo.com?q="+e,t.preventDefault()}Object(d.useEffect)((function(){document.getElementById("searchBox").select()}),[]);var a=""!==e;return Object(m.jsx)(it,{children:Object(m.jsxs)(ct,{onSubmit:c,startSearch:a,children:[Object(m.jsx)(at,{id:"searchBox",type:"text",value:e,onChange:function(t){i(t.target.value)}}),Object(m.jsx)(rt,{type:"submit",onClick:c,children:Object(m.jsx)("img",{src:et,alt:""})})]})})}var st,dt,lt,ht,ut,bt=g.c.a(nt||(nt=Object(x.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\talign-items: flex-end;\n\topacity: 0.3;\n\tfont-size: 50px;\n\ttext-decoration: none;\n\tcolor: ",";\n\tfont-weight: 300;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n\n\t@media screen and (max-width: ","px) {\n\t\tfont-size: 40px;\n\t}\n"])),(function(t){return t.theme.primaryWhite}),(function(t){return t.theme.smallScreen}));function jt(){return Object(m.jsx)(bt,{href:"https://www.spencerperkins.me",children:"[S]"})}var ft,pt="20px",xt=g.c.div(st||(st=Object(x.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tpadding: ",";\n\tcolor: ",";\n\tbackground-image: ",";\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n"])),pt,(function(t){return t.theme.primaryWhite}),(function(t){return t.imgUrl})),gt=g.c.div(dt||(dt=Object(x.a)(["\n\twidth: 100%;\n\theight: 80px;\n\tposition: relative;\n"]))),Ot=g.c.div(lt||(lt=Object(x.a)(["\n\tdisplay: inline;\n\tposition: absolute;\n\tright: 0;\n\theight: 100%;\n"]))),mt=g.c.div(ht||(ht=Object(x.a)(["\n\theight: 80px;\n\tposition: absolute;\n\tbottom: ",";\n\tfont-size: 10px;\n\twidth: calc(100% - 2*",");\n"])),pt,pt),vt=g.c.div(ut||(ut=Object(x.a)(["\n \theight: 10%;\n"]))),wt=function(t){Object(f.a)(e,t);var n=Object(p.a)(e);function e(t){var i;return Object(b.a)(this,e),(i=n.call(this,t)).state={imgUrl:null},i}return Object(j.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.unsplash.com/photos/random/?client_id=c_Mh-IYia-rRAxpMVjEXew6rcrvySdE3lVI3xnG4Vrk&orientation=landscape&collections=").then((function(t){return t.json()})).then((function(n){var e="url("+n.urls.regular+")";t.setState({imgUrl:e})})).catch((function(){console.log("Error"),document.body.style.backgroundColor="#474749"}))}},{key:"render",value:function(){return Object(m.jsxs)(xt,{imgUrl:this.state.imgUrl,children:[Object(m.jsxs)(gt,{children:[Object(m.jsx)(J,{}),Object(m.jsx)(Ot,{children:Object(m.jsx)(E,{lat:this.props.lat,long:this.props.long})})]}),Object(m.jsx)(vt,{}),Object(m.jsx)(ot,{}),Object(m.jsx)(vt,{}),Object(m.jsx)(A,{}),Object(m.jsx)(_,{name:this.props.name}),Object(m.jsxs)(mt,{children:[Object(m.jsx)(K,{}),Object(m.jsx)(Ot,{children:Object(m.jsx)(jt,{})})]})]})}}]),e}(l.a.Component),yt=function(t,n){return{primaryWhite:"#FFFFFF",mediumScreen:800,smallScreen:500}};function St(t){var n=t.children;return Object(m.jsx)(g.a,{theme:yt,children:n})}var kt=Object(g.b)(ft||(ft=Object(x.a)(["\n\thtml {font-family: 'Roboto', sans-serif}\n\n\thtml, body, #root {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tfont-size: 18px;\n\t\tfont-weight: 400;\n\t\toverflow: hidden;\n\t}\n\n\tdiv {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.hidden {\n\t\topacity: 0;\n\t}\n"])));function zt(t){for(var n=window.location.search.substring(1).split("&"),e=0;e<n.length;e++){var i=n[e].split("=");if(i[0]===t)return i[1]}}u.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(St,{children:[Object(m.jsx)(kt,{}),Object(m.jsx)(wt,{long:zt("long"),lat:zt("lat"),name:zt("name")})]})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ae130ebe.chunk.js.map