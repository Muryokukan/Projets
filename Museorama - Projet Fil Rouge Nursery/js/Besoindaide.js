
function playWithBackgroundImage(backgroundImageUrl, audioFileUrl) {
    document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
  
    const audioPlayer = new Audio(audioFileUrl);
    audioPlayer.play();
  }
  
  const playButton1 = document.getElementById('playButton1');
  playButton1.addEventListener('click', () => {
    const backgroundImageUrl = "../Images/FINITO.jpg";
    const audioFileUrl = "../f.mp3";
    playWithBackgroundImage(backgroundImageUrl, audioFileUrl);
  });
  
  const playButton2 = document.getElementById('playButton2');
  playButton2.addEventListener('click', () => {
    const backgroundImageUrl = "../Images/traverser.jpg";
    const audioFileUrl = "../t.mp3";
    playWithBackgroundImage(backgroundImageUrl, audioFileUrl);
  });


//   Je dois resize la photo mais TBH il est 1h13 là c'est chaud :S