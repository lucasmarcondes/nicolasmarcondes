(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(e,t,n){"use strict";n.r(t);var r=n(21),o=(n(57),n(268)),c=n(263),m=n(269),l=n(267),d={data:function(){return{time1:Object(l.a)(new Date,{hours:8,minutes:0}),time2:Object(l.a)(new Date,{hours:11,minutes:0}),nicolasTz:"America/Los_Angeles"}},computed:{userTimeZone:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},convertedTime1:function(){var e=Object(o.a)(this.time1,this.nicolasTz),t=Object(c.a)(e,this.userTimeZone);return Object(m.a)(t,"p")},convertedTime2:function(){var e=Object(o.a)(this.time2,this.nicolasTz),t=Object(c.a)(e,this.userTimeZone);return Object(m.a)(t,"p")}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$notion,t.next=3,n.getPageBlocks("98e9e058eebc47a4bc38070c05ff2d8f");case 3:return r=t.sent,t.abrupt("return",{blockMap:r});case 5:case"end":return t.stop()}}),t)})))()}},f=n(51),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{attrs:{header:"Hey! I'm Nicolas,",lead:"come study with me :)"}},[n("p",[e._v(e._s(e.convertedTime1)+" - "+e._s(e.convertedTime2)+" ("+e._s(e.userTimeZone)+")")])]),e._v(" "),n("notion-renderer",{attrs:{blockMap:e.blockMap,fullPage:""}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);