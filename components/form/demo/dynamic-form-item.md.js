webpackJsonp([267,359],{625:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(46),a(45)),o=t(p),c=(a(7),a(6)),e=t(c),u=(a(17),a(24)),l=t(u),k=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},i=a(1),r=t(i),m=a(2);t(m);n.exports={content:[["p","\u52a8\u6001\u589e\u52a0\u3001\u51cf\u5c11\u8868\u5355\u9879\u3002"]],meta:{order:15,title:"\u52a8\u6001\u589e\u51cf\u8868\u5355\u9879",filename:"components/form/demo/dynamic-form-item.md",id:"components-form-demo-dynamic-form-item"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Form<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> uuid <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token keyword" >let</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >remove</span><span class="token punctuation" >(</span>k<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> form <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// can use data-binding to get</span>\n    <span class="token keyword" >let</span> keys <span class="token operator" >=</span> form<span class="token punctuation" >.</span><span class="token function" >getFieldValue</span><span class="token punctuation" >(</span><span class="token string" >\'keys\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    keys <span class="token operator" >=</span> keys<span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >return</span> key <span class="token operator" >!==</span> k<span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// can use data-binding to set</span>\n    form<span class="token punctuation" >.</span><span class="token function" >setFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      keys<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >add</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    uuid<span class="token operator" >++</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> form <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// can use data-binding to get</span>\n    <span class="token keyword" >let</span> keys <span class="token operator" >=</span> form<span class="token punctuation" >.</span><span class="token function" >getFieldValue</span><span class="token punctuation" >(</span><span class="token string" >\'keys\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    keys <span class="token operator" >=</span> keys<span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span>uuid<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// can use data-binding to set</span>\n    <span class="token comment" spellcheck="true">// important! notify form to detect changes</span>\n    form<span class="token punctuation" >.</span><span class="token function" >setFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      keys<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >submit</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >getFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> getFieldProps<span class="token punctuation" >,</span> getFieldValue <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n    <span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'keys\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      initialValue<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >const</span> formItemLayout <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      labelCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      wrapperCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >18</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >const</span> formItems <span class="token operator" >=</span> <span class="token function" >getFieldValue</span><span class="token punctuation" >(</span><span class="token string" >\'keys\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>k<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n        <span class="token operator" >&lt;</span>Form<span class="token punctuation" >.</span>Item <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span> label<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`\u597d\u670b\u53cb</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>k<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >\uff1a`</span></span><span class="token punctuation" >}</span> key<span class="token operator" >=</span><span class="token punctuation" >{</span>k<span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`name</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>k<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >}</span> style<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token string" >\'80%\'</span><span class="token punctuation" >,</span> marginRight<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >remove</span><span class="token punctuation" >(</span>k<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5220\u9664<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form.Item</span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span> <span class="token attr-name" >form</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>formItems<span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form.Item</span> <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >18</span><span class="token punctuation" >,</span> offset<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>add<span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginRight<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u65b0\u589e\u597d\u670b\u53cb<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>submit<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u63d0\u4ea4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nDemo <span class="token operator" >=</span> Form<span class="token punctuation" >.</span><span class="token function" >create</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >(</span>Demo<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=0,s=r["default"].createClass({displayName:"Demo",remove:function(n){var s=this.props.form,a=s.getFieldValue("keys");a=a.filter(function(s){return s!==n}),s.setFieldsValue({keys:a})},add:function(){n++;var s=this.props.form,a=s.getFieldValue("keys");a=a.concat(n),s.setFieldsValue({keys:a})},submit:function(n){n.preventDefault(),console.log(this.props.form.getFieldsValue())},render:function(){var n=this,s=this.props.form,a=s.getFieldProps,t=s.getFieldValue;a("keys",{initialValue:[0]});var p={labelCol:{span:6},wrapperCol:{span:18}},c=t("keys").map(function(s){return r["default"].createElement(o["default"].Item,k({},p,{label:"\u597d\u670b\u53cb"+s+"\uff1a",key:s}),r["default"].createElement(l["default"],k({},a("name"+s),{style:{width:"80%",marginRight:8}})),r["default"].createElement(e["default"],{onClick:function(){return n.remove(s)}},"\u5220\u9664"))});return r["default"].createElement(o["default"],{horizontal:!0,form:this.props.form},c,r["default"].createElement(o["default"].Item,{wrapperCol:{span:18,offset:6}},r["default"].createElement(e["default"],{onClick:this.add,style:{marginRight:8}},"\u65b0\u589e\u597d\u670b\u53cb"),r["default"].createElement(e["default"],{type:"primary",onClick:this.submit},"\u63d0\u4ea4")))}});return s=o["default"].create()(s),r["default"].createElement(s,null)}}}});