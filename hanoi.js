
const toTower = (x)=>x.map((x)=>`<div class="block block-${x}"></div>`).join('')
const colors =["#b71c1c", "#4caf50", "#01579b"];
const final = [1,2,3]
var towerA = [1,2,3]
var towerB = []
var towerC = []

let movesCounter = 0;

const refresh = ()=>{
  document.getElementById('towerA').innerHTML = toTower(towerA)
  document.getElementById('towerB').innerHTML = toTower(towerB)
  document.getElementById('towerC').innerHTML = toTower(towerC)
  
  const classes = [...document.getElementsByClassName('block')];

  classes.map((item) => {
    const index = parseInt(item.className.substr(-1));
    item.style.backgroundColor = colors[index - 1];
    item.style.width = `calc( 100% - ${80/index}px )`
  });

  document.getElementById('moves-number').innerHTML = movesCounter;
}

refresh();

const move = (from,to)=>{  
  if(from.length==0){
    alert("Torre de Origem Vazia!")
    return
  }
  if((to.length==0)||(to[0]>from[0])){
    to.unshift(from.shift())
    movesCounter++;
    refresh()
  }else{
    alert("movimento inválido!")
    return
  }
  if(toTower(towerC)==toTower(final)){
    movesCounter++;
    alert("Missão Cumprida!")
  }
}
//const torreAparaTorreB = ()=>

document.getElementById('a2b').addEventListener('click',()=>move(towerA,towerB))
document.getElementById('a2c').addEventListener('click',()=>move(towerA,towerC))
document.getElementById('b2a').addEventListener('click',()=>move(towerB,towerA))
document.getElementById('b2c').addEventListener('click',()=>move(towerB,towerC))
document.getElementById('c2a').addEventListener('click',()=>move(towerC,towerA))
document.getElementById('c2b').addEventListener('click',()=>move(towerC,towerB))
