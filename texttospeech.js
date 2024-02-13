let text = document.querySelector("textarea");
let voiceList=document.querySelector("select"),
speechbtn=document.querySelector("button");
let synth=speechSynthesis,isspeaking=true;
function voices(){
    for(let voice of synth.getVoices()){
        // console.log(voice);
        let option=`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML("beforeend",option);
    }
}
synth.addEventListener("voiceschanged",voices);
function fun(textValue){
    console.log("mohit");
    // speechbtn.style.background="#fff";
    let utternance=new SpeechSynthesisUtterance(textValue);
    for(let voice of synth.getVoices()){
        if(voice.name=== voiceList.value){
            utternance.voice=voice;
        }
    }
    speechSynthesis.speak(utternance);


    }
speechbtn.addEventListener("click",(e)=>{
e.preventDefault();
if(text.value!==''){
    if(!synth.speaking){
    fun(text.value);}
   
if(text.value.length>10){
if(isspeaking){
    synth.resume();
    isspeaking=false;
    speechbtn.innerText="Pause Speech";
}
else{
    synth.pause();
isspeaking=true;
speechbtn.innerText="Resume Speech";}
}
setInterval(()=>{
    if(!synth.speaking && !isspeaking){
        isspeaking=true;
        speechbtn.innerText='Convert To Speech';
    }
},1000)

}
});


