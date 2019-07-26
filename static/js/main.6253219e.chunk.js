(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),l=n.n(a),i=(n(96),n(20)),u=n(31),c=n(4),s=n.n(c),d=n(77),f=n(78),h=[1,2,3,4,5,6,7,8,9],m=function(){function e(t){Object(d.a)(this,e),this.grid=void 0,this.grid=t||this.defaultGrid()}return Object(f.a)(e,[{key:"reset",value:function(){this.grid=this.defaultGrid()}},{key:"defaultGrid",value:function(){return Object(i.a)(Array(9)).map(function(e){return Object(i.a)(Array(9).fill(0))})}},{key:"get",value:function(e,t){return this.grid[t][e]}},{key:"set",value:function(e,t,n){if(n){if(!this.allowedNumbersInRow(t).includes(n))throw new Error("".concat(n," is not allowed in the row ").concat(t));if(!this.allowedNumbersInColumn(e).includes(n))throw new Error("".concat(n," is not allowed in the column ").concat(e));if(!this.allowedNumbersInBlock(e,t).includes(n))throw new Error("".concat(n," is not allowed in the block ").concat(t))}return this.grid[t][e]=n}},{key:"row",value:function(e){return this.grid[e]}},{key:"column",value:function(e){return this.grid.map(function(t){return t[e]})}},{key:"allowedNumbersInRow",value:function(e){var t=this;return h.filter(function(n){return!t.row(e).includes(n)})}},{key:"allowedNumbersInColumn",value:function(e){var t=this;return h.filter(function(n){return!t.column(e).includes(n)})}},{key:"allowedNumbersInBlock",value:function(e,t){for(var n=3*Math.floor(e/3),r=3*Math.floor(t/3),o=[],a=0;a<3;a++)for(var l=0;l<3;l++)o.push(this.get(n+a,r+l));return h.filter(function(e){return!o.includes(e)})}},{key:"allowedNumbers",value:function(e,t){var n=this;return this.allowedNumbersInBlock(e,t).filter(function(r){return n.allowedNumbersInRow(t).includes(r)&&n.allowedNumbersInColumn(e).includes(r)})}},{key:"emptyCells",value:function(){var e=[];return this.grid.forEach(function(t,n){t.forEach(function(t,r){!t&&e.push([r,n])})}),e}},{key:"solve",value:function(){return this.solveUltimately()}},{key:"solvePrimary",value:function(){var e=this;if(!this.emptyCells().length)return!0;var t=!1;this.emptyCells().forEach(function(n){var r=Object(u.a)(n,2),o=r[0],a=r[1],l=e.allowedNumbers(o,a);1===l.length&&(e.set(o,a,l[0]),t=!0)}),t&&this.solvePrimary()}},{key:"solveUltimately",value:function(){if(!this.emptyCells().length)return!0;for(var e=Object(u.a)(this.emptyCells()[0],2),t=e[0],n=e[1],r=this.allowedNumbers(t,n);r.length>0;){var o=r.shift();this.set(t,n,o);try{if(this.solve())return!0}catch(a){}this.set(t,n,0)}return!1}}]),e}(),v=(n(97),n(98),n(150)),w=n(149),y=n(151),b=n(34),k=new m([[5,1,9,0,0,0,4,3,0],[7,2,4,9,0,0,0,0,0],[0,0,0,2,5,4,9,0,0],[1,7,0,0,4,0,2,0,6],[0,0,0,0,9,0,0,0,3],[0,0,3,0,0,6,0,8,0],[0,0,1,4,7,0,0,6,0],[0,0,0,5,0,8,1,2,0],[0,9,0,0,6,0,3,0,4]]);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(function(){var e=Object(r.useState)(k.grid),t=Object(u.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)([]),c=Object(u.a)(l,2),d=c[0],f=c[1];return o.a.createElement("div",{className:"App"},o.a.createElement(y.a,null,o.a.createElement(y.a.Content,null,o.a.createElement("div",{className:"sudoku-container"},o.a.createElement("table",{className:"sudoku-table"},o.a.createElement("tbody",null,n.map(function(e,t){return o.a.createElement("tr",{key:t,className:s()({"block-boder":(t+1)%3===0})},e.map(function(e,n){return o.a.createElement("td",{key:n,className:s()({"block-boder":(n+1)%3===0,solved:d.some(function(e){return e.join()===[n,t].join()})})},o.a.createElement("input",{type:"text",value:e||"",onChange:function(e){return function(e,t,n){var r=parseInt(n);if(n.length&&r>9)return v.a.info("Only 1-9 numbers are allowed to input here!"),!1;try{k.set(e,t,r||0)}catch(o){return v.a.warning("Conflict! You cannot set ".concat(r," here!")),!1}a(Object(i.a)(k.grid))}(n,t,e.target.value)}}))}))}))),o.a.createElement("div",{className:"sudoku-actions"},o.a.createElement(b.a.Group,null,o.a.createElement(b.a,{type:"primary",size:"large",onClick:function(){f(k.emptyCells()),console.time("Sudoku runs"),k.solve()?a(Object(i.a)(k.grid)):w.a.error({title:"Sudoku",content:"Sorry, this sudoku has no solution!"}),console.timeEnd("Sudoku runs")}},"Solve Now!"),o.a.createElement(b.a,{type:"default",size:"large",onClick:function(){k.reset(),f([]),a(Object(i.a)(k.grid))}},"Clear All")))))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(147)},96:function(e,t,n){},97:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.6253219e.chunk.js.map