"use strict";function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(i){return function(){var n=this,c=arguments;return new Promise(function(t,e){var r=i.apply(n,c);function o(n){asyncGeneratorStep(r,t,e,o,a,"next",n)}function a(n){asyncGeneratorStep(r,t,e,o,a,"throw",n)}o(void 0)})}}var fetchDitto=function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://pokeapi.co/api/v2/pokemon/ditto");case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),mainFunc=function(){console.log(ditto)};mainFunc();