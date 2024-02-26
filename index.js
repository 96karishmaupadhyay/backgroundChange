const colors=["whiite","yellow","pink","skyblue","blue","black","purple","green","sea green"]
function backgroundChange(){
const indexColor=Math.floor(Math.random()*colors.length);
//console.log(indexColor)
const selectDiv=document.querySelector(".container")
selectDiv.style.backgroundColor=colors[indexColor]
}
