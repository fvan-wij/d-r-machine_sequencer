const	synthA = new Tone.FMSynth().toMaster();
let	synths = [];
// Initialize 8 synths, 1 synth for each step.
const initSynths = (n) =>
{
	for (let i= 0; i < n; i++)
	{
		let synth = new Tone.FMSynth().toDestination();
		synths.push(synth);
	}
	return synths;
};

let steps = document.querySelectorAll(".step");

synths = initSynths(8);

const playStepsInLoop = () =>
{
	const repeat = (time) =>
	{
		let index = 0;
		steps.forEach((steps, index) => 
		{
			let synth = synths[index];
			if (steps.checked)
			{
				synth.triggerAttackRelease("C3", "32n", time);
			}
		});
	    // beat = (beat + 1) % 8;
	}
	Tone.Transport.bpm.value = 120;
	Tone.Transport.scheduleRepeat(repeat, "8n");
};

// Start button -> starts the loop
const start = document.getElementById('play');
start.addEventListener( 'click', async () =>
{
	await Tone.start();
	console.log("Audio is ready");
	Tone.Transport.start();
	playStepsInLoop();
	// Tone.Transport.bpm.rampTo(120);
});

// Stop button -> stops the loop
const stop = document.getElementById('stop');
stop.addEventListener( 'click', async () =>
{
	console.log("Audio has stopped.");
	Tone.Transport.stop();
});


