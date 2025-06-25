
let loveSongs=[
     
   "song11.mp3",
    "song33.mp3",
    "song44.mp3"
   
];

let loveImages=[
   "https://tse2.mm.bing.net/th?id=OIP.XKCCJede8pegEiHCg4wuCAHaF3&pid=Api&P=0&h=180",
   "https://tse3.mm.bing.net/th?id=OIP.upIT5YVtRkQNeecn7_Zf7QHaEK&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.jS9XL-WL3ZoIenKLdjn_-wHaEK&pid=Api&P=0&h=180"
];
   

let loveTitles=[
    "yedhe-yedhe",
    
    "preme velluva",
    "Ee Raathale"
    
];
let melodySongs=[
"song21.mp3",
"song22.mp3",
 "song24.mp3"
];

let melodyImages=[
    "https://tse3.mm.bing.net/th?id=OIP.kFuNCH5fanvujCt_PzpiCwHaEK&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.IC1NdOkWY0OrihmYJW_5vwAAAA&pid=Api&P=0&h=180",
     "https://tse4.mm.bing.net/th?id=OIP.jx9vvPZ6Lv8J93U0Bpq1aQHaEi&pid=Api&P=0&h=180",

];

let melodyTitles=[
    "Em sandheham ledhu",
    "adhento ganni vunnapaatu",
    "Kadalalle"
];

let vibeSongs=[
    "song111.mp3",
    "song222.mp3",
    "song333.mp3"


];

let vibeImages=[
    "https://tse3.mm.bing.net/th?id=OIP.pdF6qXaQWCt8w8xevTu22AHaEK&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.mkB-Xxex0j4AGP9IjzYOowHaFj&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIF.3GPyGLm2w5baxDNYg1%2fmVw&pid=Api&P=0&h=180"
];

let vibeTitles=["Golden sparrow",
    "Manasilaayo",
    "pippi pippi Dum Dum"
];


function formatTime(seconds){
    let min=Math.floor(seconds/60);
    let sec=Math.floor(seconds%60);
    sec=(sec<10? '0'+sec:sec);
    return `${min}:${sec}`;
}
function setupPlayer(id,songs,images,titles)
{
let play=document.getElementById(`play${id}`);
let audio=document.getElementById(`audio-player${id}`);
let prev=document.getElementById(`prev${id}`);
let next=document.getElementById(`next${id}`);
let volumeup=document.getElementById(`volume-up${id}`);
let volumedown=document.getElementById(`volume-down${id}`);
let duration=document.getElementById(`duration${id}`);
let currenttime=document.getElementById(`current-time${id}`);
let img=document.getElementById(`img${id}`);
let trackname=document.getElementById(`trackname${id}`);
let progress=document.getElementById(`progress${id}`);


let curInd=0;
audio.src=songs[curInd];
img.src=images[curInd];
trackname.textContent=titles[curInd];


play.addEventListener("click",function(event){
    if(audio.paused){
        stopAllRotations();
        audio.play();
        img.classList.add("rotate");
        play.textContent="pause";
    }
    else{
        audio.pause();
        img.classList.remove("rotate");
        play.textContent="Play";
    }
});

next.addEventListener("click",function(event){
    curInd++;
    if(curInd>=songs.length){
        curInd=0;
    }
  stopAllRotations();
audio.src=songs[curInd];
img.src=images[curInd];
trackname.textContent=titles[curInd];
    audio.play();
    img.classList.add("rotate");
    play.textContent="pause";
});

prev.addEventListener("click",function(event){
    curInd--;
    if(curInd<0){
        curInd=songs.length-1;
    }
    stopAllRotations();
audio.src=songs[curInd];
img.src=images[curInd];
trackname.textContent=titles[curInd];
    audio.play();
     img.classList.add("rotate")
    play.textContent="pause";
});

volumeup.addEventListener("click",function(event){
    if(audio.volume<1){
        audio.volume+=0.1;
    }
    if(audio.volume>1){
        audio.volume=1;
    }
});

volumedown.addEventListener("click",function(event){
    if(audio.volume>0){
        audio.volume-=0.1;
    }
    if(audio.volume<0){
        audio.volume=0;
    }
});

audio.addEventListener("loadedmetadata",function(event){
    duration.textContent=formatTime(audio.duration);
    progress.max=audio.duration;
});

audio.addEventListener("timeupdate",function(event){
    currenttime.textContent=formatTime(audio.currentTime);
    progress.value=audio.currentTime;
    if(audio.duration){
        progress.max=audio.duration;
    }
});

progress.addEventListener("input",function(event){
    audio.currentTime=progress.value;

});

audio.addEventListener("ended",function(event){
    next.click();
});
}
function stopAllRotations() {
    var allImages = document.getElementsByTagName("img");
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].classList.remove("rotate");
    }
}
setupPlayer(1,loveSongs, loveImages, loveTitles);
setupPlayer(2, melodySongs, melodyImages, melodyTitles);
setupPlayer(3, vibeSongs, vibeImages,vibeTitles);
