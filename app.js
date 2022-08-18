const pianoKeys=document.querySelectorAll('.key');


playSound = (url) => {
    new Audio(url).play();
    console.log(url)
}
pianoKeys.forEach((pianoKe,i)=>{
    const number = i < 9 ? '0' + (i+1) : (i+1);
  
    const newUrl = '24-piano-keys/key' + number + '.mp3'
    pianoKe.addEventListener('click',()=>playSound(newUrl))
})