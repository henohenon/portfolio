const BGImgNames=
[
  'へに',
  'サンシャイン・へのへの',
  '望への鏡',
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let img=document.getElementById('BGImg');
document.getElementById('h1').onclick=function(){
  console.log("a");
}

window.onload=()=>{

  //let body=document.getElementById('body');
  //body.style.backgroundImage='black'
  changeImg();

  setInterval(changeImg,17000)
}

function changeImg(){
  img.src='./backGroundImages/'+BGImgNames[getRandomInt(BGImgNames.length)]+'.png';
  img.classList.remove('fadeout');
  img.classList.add('fadein');
  setTimeout(function(){
    img.classList.remove('fadein');
    img.classList.add('fadeout');
  },8000)
}