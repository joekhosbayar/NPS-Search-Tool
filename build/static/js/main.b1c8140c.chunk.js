(this.webpackJsonpcapitalonechallenge=this.webpackJsonpcapitalonechallenge||[]).push([[0],[,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),i=a(7),c=a.n(i),r=(a(12),a.p,a(13),a(14),a(0)),o=function(){return Object(r.jsxs)("div",{className:"NationalParks",children:[Object(r.jsx)("h1",{children:"National Parks"}),Object(r.jsx)("p",{children:"Explore our nation's marvelous parks"}),Object(r.jsxs)("div",{className:"Joe",children:[Object(r.jsx)("p",{children:"Website Built by: Joe Khosbayar"}),Object(r.jsx)("p",{children:"UVA Class of 2025"})]})]})},l=(a(16),function(){return Object(r.jsx)("div",{className:"Intro",children:Object(r.jsx)("p",{children:"The US National Park service maintains and administers our nation's beautiful Parks. Visitors can use our new activity search feature or view images from park webcams!"})})}),h=a(2),u=a(3),d=a(5),j=a(4),p=(a(17),s.Component,a(18),function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={todos:[],activities_list:[],parks:[],parkslink:[]},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://developer.nps.gov/api/v1/activities/parks?id=activities&api_key=8NnStekoxJFhJSQlXFrZ4RmXW7ebm6OvQA4upeaF").then((function(t){return t.json()})).then((function(e){var a=[],s=[],n={};t.setState({todos:e});var i=t.state.todos.data.length,c=v;console.log({handleChanges:c});for(var r=0;r<i;r++)if("Biking"==t.state.todos.data[r].name)for(var o=0;o<t.state.todos.data[r].parks.length;o++)s[o]=t.state.todos.data[r].parks[o].fullName+", ",n[o]=t.state.todos.data[r].parks[o].url;for(var l=0;l<i;l++)a[l]=t.state.todos.data[l].name+", ";t.setState({activities_list:a}),t.setState({parks:s}),t.setState({parkslink:n}),console.log(t.state.activities_list),console.log(t.state.todos),console.log(t.state.parks),console.log(t.state.parkslink)})).catch(console.log)}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"searchbar",children:[Object(r.jsx)("label",{children:"Search from this list of activities HERE"}),Object(r.jsx)("input",{name:"searchresult",onChange:v}),Object(r.jsx)("p",{children:this.state.activities_list}),Object(r.jsx)("div",{className:"resultsheader",children:Object(r.jsx)("h",{children:"RESULTS for 'Biking'"})}),Object(r.jsx)("a",{href:this.state.parkslink[0],children:this.state.parks})]})}}]),a}(s.Component));function v(t){return console.log(t.target.value),t.target.value}var b=p;var f=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)("p",{children:" "}),Object(r.jsx)(l,{}),Object(r.jsx)(b,{})]})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))};c.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),k()}],[[19,1,2]]]);
//# sourceMappingURL=main.b1c8140c.chunk.js.map