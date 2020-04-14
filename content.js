
const interval    = setInterval(()=>{
    const audio   = document.getElementById("soundHandle1");
    if(audio){
        if(audio.src="/sounds/lobby-beta/pre-ready.mp3"){
            const url = chrome.runtime.getURL('musica.mp3');
            console.log(url);
            audio.src = url;
            audio.load();
            audio.play();
        }
    }
})
