let allPageHeight;

const heightKeyFrames = {
  Top :      0,
  SBetweenA: 20,
  About:     120,     
}

const heightMax = 120;
let nowHeight = 0;

const elemAnimProps = {
  top:{
    0:[0 ,0],
    20:[100, 100],
    120:[0, 0],
  }
}
const elemProps = {
  top:{
    elemId:'topArea',
  }
}
const bTextElemProps = {
  he:{
    elemId:'bigHe',
  },
  no:{
    elemId:'bigNo'
  },
  nn:{
    elemId:'bigNn'
  }
}

const cameraMoveValues = {
  top:{
    k:0,
    x:0,
    y:0,
    r:0,
    pr:0,
  },
  aboutMe:{
    k:600,
    x:-120,
    y:160,
    r:0,
    pr:0,
  },
  beforeSkill:{
    k:1200,
    x:-280,
    y:-20,
    r:0,
    pr:0,
  },
  skill:{
    k:2000,
    x:-280,
    y:-20,
    r:0,
    pr:-360,
  },
  afterSkill:{
    k:2300,
    x:-350,
    y:-300,
    r:0,
    pr:-360,
  },
  works:{
    k:2600,
    x:-280,
    y:-600,
    r:0,
    pr:-360,
  },
  beforeWorks:{
    k:2800,
    x:-340,
    y:-600,
    r:90,
    pr:-360,
  },
  
  futres:{
    k:3200,
    x:-640,
    y:-600,
    r:90,
    pr:-360,
  },
  /*へ
  skills:{
    k:1200,
    x:-320,
    y:-60,
    r:0,
  },
  
  skillsAfter:{
    k:1600,
    x:-410,
    y:-360,
    r:0,
  },
  works:{
    k:1800,
    x:-350,
    y:-800,
    r:0,
  },*/
}


let isHambargerActive = false;
function hambargerBtnActive(){
  const hambargerBtn = document.getElementById('hamburgerBtn');
  if(isHambargerActive){
    hambargerBtn.classList.remove('active');
    isHambargerActive = false;
  }else{
    hambargerBtn.classList.add('active');
    isHambargerActive = true;
  }
}

const PClinkOffsets = [0, 0, 590, 1550,10000];
const PhonelinkOffsets = [0, 0, 1040, 2700,10000];
let linkOffsets;


const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

let nowlinkOffset = 0;

addEventListener("load", () => {
  if(document.documentElement.clientWidth < 769){
    linkOffsets=PhonelinkOffsets;
  }else{
    linkOffsets=PClinkOffsets;  
  }

  const dropDownElems = this.document.getElementsByClassName('dropDownLink');
    
  for(let i = 0; i < linkOffsets.length; i++){
    let newOffset = linkOffsets[i];
    if(i != 0){
      newOffset += document.documentElement.clientHeight;
    }
    if(newOffset<=this.window.scrollY && document.documentElement.clientHeight + linkOffsets[i+1]>=this.window.scrollY ){
      nowlinkOffset=i;
      const newElem = dropDownElems[i];
      if(activeDropDownElem){
        activeDropDownElem.classList.remove('active');
      }
      newElem.classList.add('active');
      activeDropDownElem = newElem;
      break;
    }
  }

  document.body.style.height = (cameraMoveValues[Object.keys(cameraMoveValues)[Object.keys(cameraMoveValues).length-1]].k + windowHeight) +'px';
  const textsElem = this.document.getElementById('moveBody');
/*
  textsElem.style.top = "25vh";
  textsElem.style.right = "-102vw";
scrollEvent();

*/  const agent = window.navigator.userAgent.toLowerCase();
  
  if(agent.indexOf('chrome') < 0 && agent.indexOf('safari') < 0 && agent.indexOf('firefox') < 0) {
    alert("ご使用のブラウザではアニメーション等正しく機能しない場合がございます。\nchrome、safari、firefoxで再度開いていただけると幸いです。")
  }
});

let activeDropDownElem = null;
function dropDownButtonActive(newElem, offsetNumb){
  console.log(offsetNumb)
  if(newElem != activeDropDownElem){
    if(activeDropDownElem){
      activeDropDownElem.classList.remove('active');
    }
    newElem.classList.add('active');
    activeDropDownElem = newElem;



    let scrollNumb = linkOffsets[offsetNumb];
    if(offsetNumb != 0){
      scrollNumb += document.documentElement.clientHeight;
    }

    window.scrollTo(0,  scrollNumb);
    
  }
}

window.addEventListener('scroll', scrollEvent);

function scrollEvent(){
  console.log('わ')
  let nowOffset = linkOffsets[nowlinkOffset];
  if(nowlinkOffset != 0){
    nowOffset += document.documentElement.clientHeight;
  }

  if(nowOffset>this.window.scrollY || document.documentElement.clientHeight + linkOffsets[nowlinkOffset+1]<this.window.scrollY ){
    const dropDownElems = this.document.getElementsByClassName('dropDownLink');
    
    for(let i = 0; i < linkOffsets.length; i++){
      let newOffset = linkOffsets[i];
      if(i != 0){
        newOffset += document.documentElement.clientHeight;
      }
      if(newOffset<=this.window.scrollY && document.documentElement.clientHeight + linkOffsets[i+1]>=this.window.scrollY ){
        nowlinkOffset=i;
        const newElem = dropDownElems[i];
        if(activeDropDownElem){
          activeDropDownElem.classList.remove('active');
        }
        newElem.classList.add('active');
        activeDropDownElem = newElem;
        break;
      }
    }
  }

  const newHeight = window.scrollY;

  let posX = NaN;
  let posY = NaN;
  let rot = NaN;
  let rotP = NaN;
  
  const cameraKeys = Object.keys(cameraMoveValues);
  for(let i = 0; i < cameraKeys.length; i++){
    if(cameraMoveValues[cameraKeys[i]].k > newHeight) {
      const keyLength = cameraMoveValues[cameraKeys[i]].k - cameraMoveValues[cameraKeys[i-1]].k;
      const differences = [
        (cameraMoveValues[cameraKeys[i]].x-cameraMoveValues[cameraKeys[i-1]].x)/keyLength,
        (cameraMoveValues[cameraKeys[i]].y-cameraMoveValues[cameraKeys[i-1]].y)/keyLength,
        (cameraMoveValues[cameraKeys[i]].r-cameraMoveValues[cameraKeys[i-1]].r)/keyLength,
        (cameraMoveValues[cameraKeys[i]].pr-cameraMoveValues[cameraKeys[i-1]].pr)/keyLength
      ];
      
      const keyDiff = newHeight - cameraMoveValues[cameraKeys[i-1]].k;
      
      posX = cameraMoveValues[cameraKeys[i-1]].x + differences[0] * keyDiff;
      posY = cameraMoveValues[cameraKeys[i-1]].y + differences[1] * keyDiff;
      rot = cameraMoveValues[cameraKeys[i-1]].r + differences[2] * keyDiff;
      rotP = cameraMoveValues[cameraKeys[i-1]].pr + differences[3] * keyDiff;
      break;
    }

  }
  
  if(posX!=NaN && posY!=NaN && rot!=NaN){
    const bodyElem = this.document.getElementById('moveBody');
    const textsElem = this.document.getElementById('noCircleBlack');
    console.log(posY);
    bodyElem.style.transform = 'translate('+ (posX * windowWidth/100) +'px,'+ (posY * windowHeight/100) +'px)'
  
    bodyElem.style.rotate = rot+'deg';
    textsElem.style.rotate = rotP+'deg';
    nowHeight = newHeight;
  }

}

/*
function scrollEvent(){

  const newHeight = window.scrollY;

  let posX = NaN;
  let posY = NaN;
  let rot = NaN;
  
  
  const cameraKeys = Object.keys(cameraMoveValues);
  for(let i = 0; i < cameraKeys.length; i++){
    if(cameraMoveValues[cameraKeys[i]].k > newHeight) {
      const keyLength = cameraMoveValues[cameraKeys[i]].k - cameraMoveValues[cameraKeys[i-1]].k;
      const differences = [
        (cameraMoveValues[cameraKeys[i]].x-cameraMoveValues[cameraKeys[i-1]].x)/keyLength,
        (cameraMoveValues[cameraKeys[i]].y-cameraMoveValues[cameraKeys[i-1]].y)/keyLength,
        (cameraMoveValues[cameraKeys[i]].r-cameraMoveValues[cameraKeys[i-1]].r)/keyLength
      ];
      
      const keyDiff = newHeight - cameraMoveValues[cameraKeys[i-1]].k;
      
      posX = cameraMoveValues[cameraKeys[i-1]].x + differences[0] * keyDiff;
      posY = cameraMoveValues[cameraKeys[i-1]].y + differences[1] * keyDiff;
      rot = cameraMoveValues[cameraKeys[i-1]].r + differences[2] * keyDiff;
      break;
    }

  }
  
  if(posX!=NaN && posY!=NaN && rot!=NaN){
    const bodyElem = this.document.getElementById('moveBody');
    console.log(posY);
    bodyElem.style.transform = 'translate('+ (posX * windowWidth/100) +'px,'+ (posY * windowHeight/100) +'px)'
  
    bodyElem.style.rotate = rot+'deg';
    nowHeight = newHeight;
  }
}*/
