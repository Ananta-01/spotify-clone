console.log("welcome to sportify");

// intalzie the variables
let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitems'));


let song = [ 
    {songName : "you like you " , filePath: "/songs/1.mp3", coverPath: "/covers/1.jpg"},{songName : "do love me " , filePath: "/songs/2.mp3", coverPath: "/covers/2.jpg"},{songName : "ek raat  " , filePath: "/songs/3.mp3", coverPath: "/covers/3.jpg"},{songName : "happy birthday " , filePath: "/songs/4.mp3", coverPath: "/covers/4.jpg"},{songName : "let me love you " , filePath: "/songs/5.mp3", coverPath: "/covers/5.jpg"},{songName : "you like you " , filePath: "/songs/6.mp3", coverPath: "/covers/6.jpg"},{songName : "girl i need you " , filePath: "/songs/7.mp3", coverPath: "/covers/7.jpg"},{songName : "mama i love a " , filePath: "/songs/8.mp3", coverPath: "/covers/8.jpg"},{songName : "let me down " , filePath: "/songs/9.mp3", coverPath: "/covers/9.jpg"},{songName : "grow " , filePath: "/songs/10.mp3", coverPath: "/covers/10.jpg"},
    
]

 songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

//   

// handle play and puase 
masterPlay.addEventListener('click', ()=> {
 if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
        
    }
    else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity= 0;
   }
})

// listen to the Event
audioElement.addEventListener('timeupdate', ()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeALLPlays = ()=>{
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeALLPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
})




// next and prev 
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

