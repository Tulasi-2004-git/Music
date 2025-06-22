
let loveSongs=[
     
   "song11.mp3",
    "song22.mp3",
    "song33.mp3",
    "song44.mp3",
    "song55.mp3",
    "song66.mp3",
    "song77.mp3",
    "song88.mp3",
    "song99.mp3",
    "song10.mp3"
   
];

let loveImages=[
   "image1.webp",
    "image3.webp",
    "image4.webp",
    "https://tse2.mm.bing.net/th?id=OIP.sPC4RMraieX4Gq6Guzvn8QHaE8&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.vHIW85gxCDJHdGLZRv35PAHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.7AAhNwczBtW2Py26dDdmogAAAA&pid=Api&P=0&h=180",
    "lover.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.53JidrVvXPvBoM8_ivT3oQHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.o-eriDKghU_uTpSxK95iNQHaEK&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.zhi3UHyhn5cFmeDgCXy02QHaHa&pid=Api&P=0&h=180"
  
];
   

let loveTitles=[
    "yedhe-yedhe",
    "Madhuvarame",
    "preme velluva",
    "Ee Raathale",
    "Inthandham",
    "Ninnila Ninnila",
    "adbhutam",
    "pilla o pilla",
    "naanaa hyraanaa",
    "yedurangula Vaana"
    
];
let melodySongs=[
"song21.mp3",
"song22.mp3",
"song23.mp3",
 "song24.mp3",
"song25.mp3",
 "song26.mp3",
"song27.mp3",
"song28.mp3",
"song29.mp3",
"song30.mp3"
];

let melodyImages=[
    "image21.jpg",
    "image22.jpg",
     "image23.jpg",
     "https://tse4.mm.bing.net/th?id=OIP.jx9vvPZ6Lv8J93U0Bpq1aQHaEi&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.f1sX1oVa__4gWob-v__WwwHaEK&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.1HnoX8xL32Ejdgyr6Jk9jwHaEN&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.76PwW1m9Ak_XCWp52zl5RQHaEK&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.URZHOwixw5UOC2SxAWQq0AHaEK&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.JjrFHDmztOCeCZjxXr_ptwHaEK&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.dBODwnjxZdd1C-xutzG7NwHaEK&pid=Api&P=0&h=180"

];

let melodyTitles=[
    "Em sandheham ledhu",
    "adhento ganni vunnapaatu",
    "Anuvanuvuu",
    "Kadalalle",
    "Choosale Kallarra",
    "Ninnu chuse Anandamlo",
    "ye Kannulu Choodani",
    "Kannuladha",
    "Adiga Adiga",
    "Nee Paata Madhuram"
];

let vibeSongs=[
    "song111.mp3",
    "song222.mp3",
    "song333.mp3",
    "song444.mp3",
    "song555.mp3",
    "song666.mp3",
    "song777.mp3"


];

let vibeImages=[
    "Image111.jpg",
    "Image222.jpg",
    "Image333.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.Jnbdt1A48yBs7rFykhhoswHaEK&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.9cg5YtGdvDa6u_JAnXr1vwAAAA&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.0iepaP39eLv9V9MHJgFLQQHaHa&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.sl-kt7z3zvroIw4q1Aof_QHaEK&pid=Api&P=0&h=180",



    
];

let vibeTitles=["Golden sparrow",
    "Manasilaayo",
    "pippi pippi Dum Dum",
    "Oy!Oy",
    "jaragandi",
    "Sooseki",
    "Mass Raja"
    
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