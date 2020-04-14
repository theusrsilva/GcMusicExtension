
const interval    = setInterval(()=>{
    const audio   = document.getElementById("soundHandle1");
    if(audio.src="/sounds/lobby-beta/pre-ready.mp3"){
        const url = chrome.runtime.getURL('musica.mp3');
        audio.src = url;
        audio.load();
        audio.play();
        clearInterval(interval);
    }
})
