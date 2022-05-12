const BGImgNames=
[
  'サンシャイン・へのへの',
  'ヘガサス',
  'へがスコーン',
  'へっ海道',
  'へに',
  'へのbaby',
  'へのヴァイオリン',
  'へのーんクス',
  'へのカー',
  'へのがた',
  'へのゴースト',
  'へのサンタァ',
  'へのつむり',
  'へのデヴィル',
  'へのへのもへじ',
  'へのへの海賊団',
  'へのべろ',
  'へのべろリメイク',
  'へのミ缶の上にあるへかん',
  'へのもち',
  'へのレンジャー',
  'へのをでん',
  'への松',
  'への神様',
  'への島太郎',
  'ヘブと',
  'へりん・アラモード',
  'へんぎん！！',
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


function clicked(obj){
  let activeObjs = document.getElementsByClassName('activeWork');
  console.log(activeObjs);
  for(let i=0; i<activeObjs.length; i++){
    activeObjs[i].classList.remove('activeWork');  
  }
  
  obj.classList.add('activeWork');  
  
}