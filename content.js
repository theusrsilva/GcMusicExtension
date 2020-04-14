
const interval = setInterval(()=>{
    const audio = document.getElementById("soundHandle1");
    if(audio){
        const ss = audio.firstElementChild;
        const url = chrome.runtime.getURL('musica.mp3');
        ss.src = url;
        audio.load();
        audio.play();
        clearInterval(interval);
    }
})
