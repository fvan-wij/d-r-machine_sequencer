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


synths = initSynths(8);

let index = 0;
const repeat = (time) =>
{
	let step = (index % 8) + 1;
	let synth = synths[step];
	const synthInputs = document.querySelector('.synth input:nth-child('+ step +')');
	if (synthInputs.checked)
		synth.triggerAttackRelease('C'+ step +'', "16n");
	index++;
}

Tone.Transport.scheduleRepeat(repeat, "16n");
Tone.Transport.bpm.value = 100;

// Start button -> starts the loop
const start = document.getElementById('play');
start.addEventListener( 'click', async () =>
{
	await Tone.start();
	console.log("Audio is ready");
	Tone.Transport.start();
});

// Stop button -> stops the loop
const stop = document.getElementById('stop');
stop.addEventListener( 'click', async () =>
{
	console.log("Audio has stopped.");
	Tone.Transport.stop();
});


