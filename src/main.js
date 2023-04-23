// import * as Tone from 'tone'

const synth = new Tone.Synth().toMaster()
synth.triggerAttackRelease('C4', '8n')

document.getElementById("play").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
	Tone.start();	
  } else {
    Tone.Transport.stop();
  }
	console.log("button pressed");
});
