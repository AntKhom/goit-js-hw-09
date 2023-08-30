document.querySelector(".form").addEventListener("submit",(e=>{var t;e.preventDefault(),console.log(e),t=1,new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?e("ok"):o("no")}),t)})).then((e=>{alert(e)})).catch((e=>{alert(e)}))}));
//# sourceMappingURL=03-promises.bb5c4453.js.map
