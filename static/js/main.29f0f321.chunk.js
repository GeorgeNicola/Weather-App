(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,function(t,e,a){t.exports=a(23)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(9),i=a.n(c),s=a(6),r=a.n(s),l=a(7),u=a(1),d=a(2),h=a(5),p=a(4),m=a(3),b=(a(16),a(17),a(18),function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"changeHighlightedLocation",value:function(t){console.log("Id: ",t),this.props.changeDetailedLocation(t)}},{key:"render",value:function(){var t=this,e=this.props,a=e.element,n=e.name,c=e.region,i=e.country,s=e.temp,r=e.bg;return o.a.createElement("div",{className:"weather-card",style:{backgroundImage:"url(".concat(r,")")},id:a,onClick:function(e){return t.changeHighlightedLocation(t.props.element)}},o.a.createElement("div",{className:"location"},o.a.createElement("span",{className:"city"}," ",n," "),o.a.createElement("span",{className:"region"}," ",c,", ",i," ")),o.a.createElement("div",{className:"temp"},s,"\xb0"))}}]),a}(n.Component)),f=(a(19),function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"add-location-btn",id:"1",onClick:function(e){return t.props.showAddLocation(e.target.id)}})}}]),a}(n.Component)),g=function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"weather-card-list"},this.props.location.map((function(e,a){return o.a.createElement(b,{key:a,element:e.id,name:e.location.name,region:e.location.region,country:e.location.country,temp:e.current.temperature,changeDetailedLocation:t.props.changeDetailedLocation,bg:e.bg})})),o.a.createElement(f,{showAddLocation:this.props.showAddLocation}))}}]),a}(n.Component),v=(a(20),function(t){return o.a.createElement("div",{className:"weather-detailed",style:{backgroundImage:"url(".concat(t.bg,")")}},o.a.createElement("div",{className:"temp-location"},o.a.createElement("span",{className:"location"}," ",t.location," "),o.a.createElement("span",{className:"temp"}," ",t.temp,"\xb0 ")))}),L=(a(21),function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={searchBox:""},n}return Object(d.a)(a,[{key:"updateSearchBox",value:function(t){this.setState({searchBox:t})}},{key:"addLocationName",value:function(){this.props.closeBox(0),console.log("AddLocation",this.state.searchBox);var t=this.state.searchBox;this.props.addLocationName(t)}},{key:"render",value:function(){var t=this;return this.props.showAddLocation?o.a.createElement("div",{className:"search-box"},o.a.createElement("input",{className:"text-input",type:"text",onChange:function(e){return t.updateSearchBox(e.target.value)}}),o.a.createElement("div",{className:"button",onClick:function(){return t.addLocationName()}},"Search")):""}}]),a}(n.Component)),y=function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).addLocationTest=n.addLocationTest.bind(Object(h.a)(n)),n.changeDetailedLocation=n.changeDetailedLocation.bind(Object(h.a)(n)),n.addLocationName=n.addLocationName.bind(Object(h.a)(n)),n.showAddLocation=n.showAddLocation.bind(Object(h.a)(n)),n.state={locations:[],detailedLocation:0,showAddLocation:0},n}return Object(d.a)(a,[{key:"changeDetailedLocation",value:function(t){this.setState({detailedLocation:t})}},{key:"componentDidMount",value:function(){this.addLocation()}},{key:"addLocation",value:function(){var t=Object(l.a)(r.a.mark((function t(){var e,a,n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.weatherstack.com/current?access_key=ff841349aa894a1e73d516cc496a2b25&query=fetch:ip",t.next=3,fetch("https://api.weatherstack.com/current?access_key=ff841349aa894a1e73d516cc496a2b25&query=fetch:ip");case 3:return e=t.sent,t.next=6,e.json();case 6:return a=t.sent,n=this.state.locations,t.next=10,this.addBg(a.location.region);case 10:o=t.sent,n.push(Object.assign(a,{id:this.state.locations.length,bg:o})),this.setState({locations:n});case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addLocationName",value:function(){var t=Object(l.a)(r.a.mark((function t(e){var a,n,o,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("AddLocationName Funtion"),a="https://api.weatherstack.com/current?access_key=ff841349aa894a1e73d516cc496a2b25&query=".concat(e),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:return o=t.sent,c=this.state.locations,t.next=11,this.addBg(o.location.region);case 11:i=t.sent,c.push(Object.assign(o,{id:this.state.locations.length,bg:i})),this.setState({locations:c});case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"addBg",value:function(){var t=Object(l.a)(r.a.mark((function t(e){var a,n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="https://app.zenserp.com/api/v2/search?apikey=49537c30-bc2f-11ea-bde9-c778342b1c35&q=".concat(e,"&tbm=isch"),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:return o=t.sent,console.log(o.image_results[0].sourceUrl),t.abrupt("return",o.image_results[0].sourceUrl);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return","https://github.com/GeorgeNicola/Images/blob/master/city-bg.jpg?raw=true");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"addLocationTest",value:function(){var t=this.state.locations;t.push(Object.assign({current:{temperature:"30"},location:{name:"Dubai",region:"Dubai",country:"United Arab Emirates"},bg:"https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg"},{id:this.state.locations.length})),this.setState({locations:t})}},{key:"showAddLocation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.log(this.state.showAddLocation),this.setState({showAddLocation:t})}},{key:"render",value:function(){return console.log("In render: ",this.state.locations),0===Object.keys(this.state.locations).length&&this.state.locations.constructor===Array?o.a.createElement("div",{className:"loader"}):o.a.createElement("div",{className:"wrapp-all"},o.a.createElement(L,{addLocationName:this.addLocationName,showAddLocation:this.state.showAddLocation,closeBox:this.showAddLocation}),o.a.createElement("div",{className:"app"},o.a.createElement(g,{location:this.state.locations,changeDetailedLocation:this.changeDetailedLocation,addLocation:this.addLocationTest,showAddLocation:this.showAddLocation}),o.a.createElement(v,{location:this.state.locations[this.state.detailedLocation].location.name,temp:this.state.locations[this.state.detailedLocation].current.temperature,bg:this.state.locations[this.state.detailedLocation].bg})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22);i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.29f0f321.chunk.js.map