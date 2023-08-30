document.querySelector(".form").addEventListener("submit",(function(n){var t;n.preventDefault(),console.log(n),t=1,new Promise((function(n,e){var o=Math.random()>.3;setTimeout((function(){o?n("ok"):e("no")}),t)})).then((function(n){alert(n)})).catch((function(n){alert(n)}))}));
//# sourceMappingURL=03-promises.3e9fb6d1.js.map
