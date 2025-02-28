import{_ as m,o as _t,n as xt,s as vt,g as bt,b as wt,a as St,c as lt,t as Lt,d as X,T as Et,v as At,k as Tt}from"./index-BWhsIm0Y.js";import{o as Mt}from"./ordinal-Cboi1Yqb.js";import"./init-Gi6I4Gst.js";function Nt(t){for(var e=t.length/6|0,i=new Array(e),a=0;a<e;)i[a]="#"+t.slice(a*6,++a*6);return i}const It=Nt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function ct(t,e){let i;if(e===void 0)for(const a of t)a!=null&&(i<a||i===void 0&&a>=a)&&(i=a);else{let a=-1;for(let h of t)(h=e(h,++a,t))!=null&&(i<h||i===void 0&&h>=h)&&(i=h)}return i}function pt(t,e){let i;if(e===void 0)for(const a of t)a!=null&&(i>a||i===void 0&&a>=a)&&(i=a);else{let a=-1;for(let h of t)(h=e(h,++a,t))!=null&&(i>h||i===void 0&&h>=h)&&(i=h)}return i}function nt(t,e){let i=0;if(e===void 0)for(let a of t)(a=+a)&&(i+=a);else{let a=-1;for(let h of t)(h=+e(h,++a,t))&&(i+=h)}return i}function Pt(t){return t.target.depth}function Ct(t){return t.depth}function Ot(t,e){return e-1-t.height}function mt(t,e){return t.sourceLinks.length?t.depth:e-1}function Dt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?pt(t.sourceLinks,Pt)-1:0}function q(t){return function(){return t}}function ut(t,e){return Q(t.source,e.source)||t.index-e.index}function ht(t,e){return Q(t.target,e.target)||t.index-e.index}function Q(t,e){return t.y0-e.y0}function it(t){return t.value}function zt(t){return t.index}function $t(t){return t.nodes}function jt(t){return t.links}function ft(t,e){const i=t.get(e);if(!i)throw new Error("missing: "+e);return i}function yt({nodes:t}){for(const e of t){let i=e.y0,a=i;for(const h of e.sourceLinks)h.y0=i+h.width/2,i+=h.width;for(const h of e.targetLinks)h.y1=a+h.width/2,a+=h.width}}function Bt(){let t=0,e=0,i=1,a=1,h=24,d=8,p,_=zt,s=mt,o,l,x=$t,v=jt,y=6;function b(){const n={nodes:x.apply(null,arguments),links:v.apply(null,arguments)};return M(n),T(n),N(n),C(n),S(n),yt(n),n}b.update=function(n){return yt(n),n},b.nodeId=function(n){return arguments.length?(_=typeof n=="function"?n:q(n),b):_},b.nodeAlign=function(n){return arguments.length?(s=typeof n=="function"?n:q(n),b):s},b.nodeSort=function(n){return arguments.length?(o=n,b):o},b.nodeWidth=function(n){return arguments.length?(h=+n,b):h},b.nodePadding=function(n){return arguments.length?(d=p=+n,b):d},b.nodes=function(n){return arguments.length?(x=typeof n=="function"?n:q(n),b):x},b.links=function(n){return arguments.length?(v=typeof n=="function"?n:q(n),b):v},b.linkSort=function(n){return arguments.length?(l=n,b):l},b.size=function(n){return arguments.length?(t=e=0,i=+n[0],a=+n[1],b):[i-t,a-e]},b.extent=function(n){return arguments.length?(t=+n[0][0],i=+n[1][0],e=+n[0][1],a=+n[1][1],b):[[t,e],[i,a]]},b.iterations=function(n){return arguments.length?(y=+n,b):y};function M({nodes:n,links:f}){for(const[c,r]of n.entries())r.index=c,r.sourceLinks=[],r.targetLinks=[];const u=new Map(n.map((c,r)=>[_(c,r,n),c]));for(const[c,r]of f.entries()){r.index=c;let{source:k,target:w}=r;typeof k!="object"&&(k=r.source=ft(u,k)),typeof w!="object"&&(w=r.target=ft(u,w)),k.sourceLinks.push(r),w.targetLinks.push(r)}if(l!=null)for(const{sourceLinks:c,targetLinks:r}of n)c.sort(l),r.sort(l)}function T({nodes:n}){for(const f of n)f.value=f.fixedValue===void 0?Math.max(nt(f.sourceLinks,it),nt(f.targetLinks,it)):f.fixedValue}function N({nodes:n}){const f=n.length;let u=new Set(n),c=new Set,r=0;for(;u.size;){for(const k of u){k.depth=r;for(const{target:w}of k.sourceLinks)c.add(w)}if(++r>f)throw new Error("circular link");u=c,c=new Set}}function C({nodes:n}){const f=n.length;let u=new Set(n),c=new Set,r=0;for(;u.size;){for(const k of u){k.height=r;for(const{source:w}of k.targetLinks)c.add(w)}if(++r>f)throw new Error("circular link");u=c,c=new Set}}function z({nodes:n}){const f=ct(n,r=>r.depth)+1,u=(i-t-h)/(f-1),c=new Array(f);for(const r of n){const k=Math.max(0,Math.min(f-1,Math.floor(s.call(null,r,f))));r.layer=k,r.x0=t+k*u,r.x1=r.x0+h,c[k]?c[k].push(r):c[k]=[r]}if(o)for(const r of c)r.sort(o);return c}function R(n){const f=pt(n,u=>(a-e-(u.length-1)*p)/nt(u,it));for(const u of n){let c=e;for(const r of u){r.y0=c,r.y1=c+r.value*f,c=r.y1+p;for(const k of r.sourceLinks)k.width=k.value*f}c=(a-c+p)/(u.length+1);for(let r=0;r<u.length;++r){const k=u[r];k.y0+=c*(r+1),k.y1+=c*(r+1)}A(u)}}function S(n){const f=z(n);p=Math.min(d,(a-e)/(ct(f,u=>u.length)-1)),R(f);for(let u=0;u<y;++u){const c=Math.pow(.99,u),r=Math.max(1-c,(u+1)/y);B(f,c,r),P(f,c,r)}}function P(n,f,u){for(let c=1,r=n.length;c<r;++c){const k=n[c];for(const w of k){let L=0,V=0;for(const{source:Y,value:et}of w.targetLinks){let H=et*(w.layer-Y.layer);L+=$(Y,w)*H,V+=H}if(!(V>0))continue;let G=(L/V-w.y0)*f;w.y0+=G,w.y1+=G,E(w)}o===void 0&&k.sort(Q),O(k,u)}}function B(n,f,u){for(let c=n.length,r=c-2;r>=0;--r){const k=n[r];for(const w of k){let L=0,V=0;for(const{target:Y,value:et}of w.sourceLinks){let H=et*(Y.layer-w.layer);L+=I(w,Y)*H,V+=H}if(!(V>0))continue;let G=(L/V-w.y0)*f;w.y0+=G,w.y1+=G,E(w)}o===void 0&&k.sort(Q),O(k,u)}}function O(n,f){const u=n.length>>1,c=n[u];g(n,c.y0-p,u-1,f),D(n,c.y1+p,u+1,f),g(n,a,n.length-1,f),D(n,e,0,f)}function D(n,f,u,c){for(;u<n.length;++u){const r=n[u],k=(f-r.y0)*c;k>1e-6&&(r.y0+=k,r.y1+=k),f=r.y1+p}}function g(n,f,u,c){for(;u>=0;--u){const r=n[u],k=(r.y1-f)*c;k>1e-6&&(r.y0-=k,r.y1-=k),f=r.y0-p}}function E({sourceLinks:n,targetLinks:f}){if(l===void 0){for(const{source:{sourceLinks:u}}of f)u.sort(ht);for(const{target:{targetLinks:u}}of n)u.sort(ut)}}function A(n){if(l===void 0)for(const{sourceLinks:f,targetLinks:u}of n)f.sort(ht),u.sort(ut)}function $(n,f){let u=n.y0-(n.sourceLinks.length-1)*p/2;for(const{target:c,width:r}of n.sourceLinks){if(c===f)break;u+=r+p}for(const{source:c,width:r}of f.targetLinks){if(c===n)break;u-=r}return u}function I(n,f){let u=f.y0-(f.targetLinks.length-1)*p/2;for(const{source:c,width:r}of f.targetLinks){if(c===n)break;u+=r+p}for(const{target:c,width:r}of n.sourceLinks){if(c===f)break;u-=r}return u}return b}var st=Math.PI,rt=2*st,F=1e-6,Rt=rt-F;function ot(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function kt(){return new ot}ot.prototype=kt.prototype={constructor:ot,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,i,a){this._+="Q"+ +t+","+ +e+","+(this._x1=+i)+","+(this._y1=+a)},bezierCurveTo:function(t,e,i,a,h,d){this._+="C"+ +t+","+ +e+","+ +i+","+ +a+","+(this._x1=+h)+","+(this._y1=+d)},arcTo:function(t,e,i,a,h){t=+t,e=+e,i=+i,a=+a,h=+h;var d=this._x1,p=this._y1,_=i-t,s=a-e,o=d-t,l=p-e,x=o*o+l*l;if(h<0)throw new Error("negative radius: "+h);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(x>F)if(!(Math.abs(l*_-s*o)>F)||!h)this._+="L"+(this._x1=t)+","+(this._y1=e);else{var v=i-d,y=a-p,b=_*_+s*s,M=v*v+y*y,T=Math.sqrt(b),N=Math.sqrt(x),C=h*Math.tan((st-Math.acos((b+x-M)/(2*T*N)))/2),z=C/N,R=C/T;Math.abs(z-1)>F&&(this._+="L"+(t+z*o)+","+(e+z*l)),this._+="A"+h+","+h+",0,0,"+ +(l*v>o*y)+","+(this._x1=t+R*_)+","+(this._y1=e+R*s)}},arc:function(t,e,i,a,h,d){t=+t,e=+e,i=+i,d=!!d;var p=i*Math.cos(a),_=i*Math.sin(a),s=t+p,o=e+_,l=1^d,x=d?a-h:h-a;if(i<0)throw new Error("negative radius: "+i);this._x1===null?this._+="M"+s+","+o:(Math.abs(this._x1-s)>F||Math.abs(this._y1-o)>F)&&(this._+="L"+s+","+o),i&&(x<0&&(x=x%rt+rt),x>Rt?this._+="A"+i+","+i+",0,1,"+l+","+(t-p)+","+(e-_)+"A"+i+","+i+",0,1,"+l+","+(this._x1=s)+","+(this._y1=o):x>F&&(this._+="A"+i+","+i+",0,"+ +(x>=st)+","+l+","+(this._x1=t+i*Math.cos(h))+","+(this._y1=e+i*Math.sin(h))))},rect:function(t,e,i,a){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +i+"v"+ +a+"h"+-i+"Z"},toString:function(){return this._}};function dt(t){return function(){return t}}function Vt(t){return t[0]}function Ft(t){return t[1]}var Wt=Array.prototype.slice;function Ut(t){return t.source}function Gt(t){return t.target}function Yt(t){var e=Ut,i=Gt,a=Vt,h=Ft,d=null;function p(){var _,s=Wt.call(arguments),o=e.apply(this,s),l=i.apply(this,s);if(d||(d=_=kt()),t(d,+a.apply(this,(s[0]=o,s)),+h.apply(this,s),+a.apply(this,(s[0]=l,s)),+h.apply(this,s)),_)return d=null,_+""||null}return p.source=function(_){return arguments.length?(e=_,p):e},p.target=function(_){return arguments.length?(i=_,p):i},p.x=function(_){return arguments.length?(a=typeof _=="function"?_:dt(+_),p):a},p.y=function(_){return arguments.length?(h=typeof _=="function"?_:dt(+_),p):h},p.context=function(_){return arguments.length?(d=_??null,p):d},p}function Ht(t,e,i,a,h){t.moveTo(e,i),t.bezierCurveTo(e=(e+a)/2,i,e,h,a,h)}function Xt(){return Yt(Ht)}function qt(t){return[t.source.x1,t.y0]}function Qt(t){return[t.target.x0,t.y1]}function Kt(){return Xt().source(qt).target(Qt)}var at=function(){var t=m(function(_,s,o,l){for(o=o||{},l=_.length;l--;o[_[l]]=s);return o},"o"),e=[1,9],i=[1,10],a=[1,5,10,12],h={trace:m(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:m(function(s,o,l,x,v,y,b){var M=y.length-1;switch(v){case 7:const T=x.findOrCreateNode(y[M-4].trim().replaceAll('""','"')),N=x.findOrCreateNode(y[M-2].trim().replaceAll('""','"')),C=parseFloat(y[M].trim());x.addLink(T,N,C);break;case 8:case 9:case 11:this.$=y[M];break;case 10:this.$=y[M-1];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:e,20:i},{1:[2,6],7:11,10:[1,12]},t(i,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(a,[2,8]),t(a,[2,9]),{19:[1,16]},t(a,[2,11]),{1:[2,1]},{1:[2,5]},t(i,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:e,20:i},{15:18,16:7,17:8,18:e,20:i},{18:[1,19]},t(i,[2,3]),{12:[1,20]},t(a,[2,10]),{15:21,16:7,17:8,18:e,20:i},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:m(function(s,o){if(o.recoverable)this.trace(s);else{var l=new Error(s);throw l.hash=o,l}},"parseError"),parse:m(function(s){var o=this,l=[0],x=[],v=[null],y=[],b=this.table,M="",T=0,N=0,C=2,z=1,R=y.slice.call(arguments,1),S=Object.create(this.lexer),P={yy:{}};for(var B in this.yy)Object.prototype.hasOwnProperty.call(this.yy,B)&&(P.yy[B]=this.yy[B]);S.setInput(s,P.yy),P.yy.lexer=S,P.yy.parser=this,typeof S.yylloc>"u"&&(S.yylloc={});var O=S.yylloc;y.push(O);var D=S.options&&S.options.ranges;typeof P.yy.parseError=="function"?this.parseError=P.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function g(L){l.length=l.length-2*L,v.length=v.length-L,y.length=y.length-L}m(g,"popStack");function E(){var L;return L=x.pop()||S.lex()||z,typeof L!="number"&&(L instanceof Array&&(x=L,L=x.pop()),L=o.symbols_[L]||L),L}m(E,"lex");for(var A,$,I,n,f={},u,c,r,k;;){if($=l[l.length-1],this.defaultActions[$]?I=this.defaultActions[$]:((A===null||typeof A>"u")&&(A=E()),I=b[$]&&b[$][A]),typeof I>"u"||!I.length||!I[0]){var w="";k=[];for(u in b[$])this.terminals_[u]&&u>C&&k.push("'"+this.terminals_[u]+"'");S.showPosition?w="Parse error on line "+(T+1)+`:
`+S.showPosition()+`
Expecting `+k.join(", ")+", got '"+(this.terminals_[A]||A)+"'":w="Parse error on line "+(T+1)+": Unexpected "+(A==z?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(w,{text:S.match,token:this.terminals_[A]||A,line:S.yylineno,loc:O,expected:k})}if(I[0]instanceof Array&&I.length>1)throw new Error("Parse Error: multiple actions possible at state: "+$+", token: "+A);switch(I[0]){case 1:l.push(A),v.push(S.yytext),y.push(S.yylloc),l.push(I[1]),A=null,N=S.yyleng,M=S.yytext,T=S.yylineno,O=S.yylloc;break;case 2:if(c=this.productions_[I[1]][1],f.$=v[v.length-c],f._$={first_line:y[y.length-(c||1)].first_line,last_line:y[y.length-1].last_line,first_column:y[y.length-(c||1)].first_column,last_column:y[y.length-1].last_column},D&&(f._$.range=[y[y.length-(c||1)].range[0],y[y.length-1].range[1]]),n=this.performAction.apply(f,[M,N,T,P.yy,I[1],v,y].concat(R)),typeof n<"u")return n;c&&(l=l.slice(0,-1*c*2),v=v.slice(0,-1*c),y=y.slice(0,-1*c)),l.push(this.productions_[I[1]][0]),v.push(f.$),y.push(f._$),r=b[l[l.length-2]][l[l.length-1]],l.push(r);break;case 3:return!0}}return!0},"parse")},d=function(){var _={EOF:1,parseError:m(function(o,l){if(this.yy.parser)this.yy.parser.parseError(o,l);else throw new Error(o)},"parseError"),setInput:m(function(s,o){return this.yy=o||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:m(function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var o=s.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},"input"),unput:m(function(s){var o=s.length,l=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var x=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var v=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===x.length?this.yylloc.first_column:0)+x[x.length-l.length].length-l[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[v[0],v[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:m(function(){return this._more=!0,this},"more"),reject:m(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:m(function(s){this.unput(this.match.slice(s))},"less"),pastInput:m(function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:m(function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:m(function(){var s=this.pastInput(),o=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:m(function(s,o){var l,x,v;if(this.options.backtrack_lexer&&(v={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(v.yylloc.range=this.yylloc.range.slice(0))),x=s[0].match(/(?:\r\n?|\n).*/g),x&&(this.yylineno+=x.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:x?x[x.length-1].length-x[x.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],l=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var y in v)this[y]=v[y];return!1}return!1},"test_match"),next:m(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,o,l,x;this._more||(this.yytext="",this.match="");for(var v=this._currentRules(),y=0;y<v.length;y++)if(l=this._input.match(this.rules[v[y]]),l&&(!o||l[0].length>o[0].length)){if(o=l,x=y,this.options.backtrack_lexer){if(s=this.test_match(l,v[y]),s!==!1)return s;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(s=this.test_match(o,v[x]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:m(function(){var o=this.next();return o||this.lex()},"lex"),begin:m(function(o){this.conditionStack.push(o)},"begin"),popState:m(function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:m(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:m(function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},"topState"),pushState:m(function(o){this.begin(o)},"pushState"),stateStackSize:m(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:m(function(o,l,x,v){switch(x){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return _}();h.lexer=d;function p(){this.yy={}}return m(p,"Parser"),p.prototype=h,h.Parser=p,new p}();at.parser=at;var K=at,J=[],tt=[],Z=new Map,Zt=m(()=>{J=[],tt=[],Z=new Map,At()},"clear"),W,Jt=(W=class{constructor(e,i,a=0){this.source=e,this.target=i,this.value=a}},m(W,"SankeyLink"),W),te=m((t,e,i)=>{J.push(new Jt(t,e,i))},"addLink"),U,ee=(U=class{constructor(e){this.ID=e}},m(U,"SankeyNode"),U),ne=m(t=>{t=Tt.sanitizeText(t,lt());let e=Z.get(t);return e===void 0&&(e=new ee(t),Z.set(t,e),tt.push(e)),e},"findOrCreateNode"),ie=m(()=>tt,"getNodes"),se=m(()=>J,"getLinks"),re=m(()=>({nodes:tt.map(t=>({id:t.ID})),links:J.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),"getGraph"),oe={nodesMap:Z,getConfig:m(()=>lt().sankey,"getConfig"),getNodes:ie,getLinks:se,getGraph:re,addLink:te,findOrCreateNode:ne,getAccTitle:St,setAccTitle:wt,getAccDescription:bt,setAccDescription:vt,getDiagramTitle:xt,setDiagramTitle:_t,clear:Zt},j,gt=(j=class{static next(e){return new j(e+ ++j.count)}constructor(e){this.id=e,this.href=`#${e}`}toString(){return"url("+this.href+")"}},m(j,"Uid"),j.count=0,j),ae={left:Ct,right:Ot,center:Dt,justify:mt},le=m(function(t,e,i,a){const{securityLevel:h,sankey:d}=lt(),p=Lt.sankey;let _;h==="sandbox"&&(_=X("#i"+e));const s=h==="sandbox"?X(_.nodes()[0].contentDocument.body):X("body"),o=h==="sandbox"?s.select(`[id="${e}"]`):X(`[id="${e}"]`),l=(d==null?void 0:d.width)??p.width,x=(d==null?void 0:d.height)??p.width,v=(d==null?void 0:d.useMaxWidth)??p.useMaxWidth,y=(d==null?void 0:d.nodeAlignment)??p.nodeAlignment,b=(d==null?void 0:d.prefix)??p.prefix,M=(d==null?void 0:d.suffix)??p.suffix,T=(d==null?void 0:d.showValues)??p.showValues,N=a.db.getGraph(),C=ae[y];Bt().nodeId(g=>g.id).nodeWidth(10).nodePadding(10+(T?15:0)).nodeAlign(C).extent([[0,0],[l,x]])(N);const S=Mt(It);o.append("g").attr("class","nodes").selectAll(".node").data(N.nodes).join("g").attr("class","node").attr("id",g=>(g.uid=gt.next("node-")).id).attr("transform",function(g){return"translate("+g.x0+","+g.y0+")"}).attr("x",g=>g.x0).attr("y",g=>g.y0).append("rect").attr("height",g=>g.y1-g.y0).attr("width",g=>g.x1-g.x0).attr("fill",g=>S(g.id));const P=m(({id:g,value:E})=>T?`${g}
${b}${Math.round(E*100)/100}${M}`:g,"getText");o.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(N.nodes).join("text").attr("x",g=>g.x0<l/2?g.x1+6:g.x0-6).attr("y",g=>(g.y1+g.y0)/2).attr("dy",`${T?"0":"0.35"}em`).attr("text-anchor",g=>g.x0<l/2?"start":"end").text(P);const B=o.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(N.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),O=(d==null?void 0:d.linkColor)??"gradient";if(O==="gradient"){const g=B.append("linearGradient").attr("id",E=>(E.uid=gt.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",E=>E.source.x1).attr("x2",E=>E.target.x0);g.append("stop").attr("offset","0%").attr("stop-color",E=>S(E.source.id)),g.append("stop").attr("offset","100%").attr("stop-color",E=>S(E.target.id))}let D;switch(O){case"gradient":D=m(g=>g.uid,"coloring");break;case"source":D=m(g=>S(g.source.id),"coloring");break;case"target":D=m(g=>S(g.target.id),"coloring");break;default:D=O}B.append("path").attr("d",Kt()).attr("stroke",D).attr("stroke-width",g=>Math.max(1,g.width)),Et(void 0,o,0,v)},"draw"),ce={draw:le},ue=m(t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing"),he=K.parse.bind(K);K.parse=t=>he(ue(t));var ge={parser:K,db:oe,renderer:ce};export{ge as diagram};
