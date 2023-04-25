// const	synthA = new Tone.FMSynth().toMaster();
// let steps = document.querySelectorAll(".step");
// let playerState = 0;
//
// const changePlayerstate = document.getElementById("play");
// changePlayerstate.addEventListener("click", () =>
// {
// 	playerState++;
// 	if (playerState == 1)
// 	{
// 		steps.forEach(steps => 
// 		{
// 			if (steps.checked)
// 			{
// 				console.log("Player has started.");
// 				synthA.triggerAttackRelease("C2", "16n");
// 			}
// 		});
//
// 	}
// 	else if (playerState == 2)
// 		console.log("Player is paused.");
// 	if (playerState > 1)
// 		playerState = 0;
// });
//

// create two monophonic synths
const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
//play a note every quarter-note
const loopA = new Tone.Loop(time => {
	synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);
//play another note every off quarter-note, by starting it "8n"
const loopB = new Tone.Loop(time => {
	synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");


const start = document.getElementById('play');
start.addEventListener( 'click', async () =>
{
await Tone.start();
console.log("Audio is ready");
Tone.Transport.start();
Tone.Transport.bpm.rampTo(120);
});

const stop = document.getElementById('stop');
stop.addEventListener( 'click', async () =>
{
console.log("Audio has stopped.");
Tone.Transport.stop();
});


