(()=>{var t=document.querySelector("article");let e=t.textContent;new class{constructor(t){this.text=t}parse(){return this.parseHtml(this.text)}parseHtml(s){var n=s.split("\n");n.shift(),n.pop();for(let s=0;s<n.length;s++)if(n[s].includes("#")&&n[s].split(/\s+/)[1]<=6)if(n[s].split(/\s+/)){var l=document.createElement(`h${n[s].split(/\s+/)[1].length}`);l.innerHTML=n[s].split(/\s+/)[2],t.appendChild(l)}else{var r=document.createElement("p");r.innerHTML=n[s].split(/\s+/)[2],e.appendChild(r)}}}(t.textContent).parse()})();