let steps = [];
const synth = new Tone.Synth().toDestination();

const htmlSteps = document.querySelectorAll('.synth_step');
const fillSteps = () => 
{
	steps = [];
	let note = 'F4';
	console.log("checkSteps activated");
	htmlSteps.forEach(htmlSteps => {

		if (htmlSteps.checked)
			steps.push(note);
		else
			steps.push(null);
	});
	return steps;
};

var checkboxes = document.querySelectorAll('.synth_step');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
   		steps = fillSteps(); 
	  	sequenceNotes();
	  	console.log(steps);
  })
});

const sequenceNotes = () =>
{
	const seq = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(note, '32n', time);
	}, steps).start(0);

};

const start = document.getElementById('play');
start.addEventListener('click', async () =>
{
	await Tone.start();
	sequenceNotes();
	if (Tone.Transport.state === 'started')
	{
		console.log("Paused");
		Tone.Transport.pause();
	}
	else if (Tone.Transport.state === 'paused')
	{

		console.log("Started");
		Tone.Transport.start();
	}
	else if (Tone.Transport.state === 'stopped')
	{

		console.log("Started");
		Tone.Transport.start();
	}

});

const stop = document.getElementById('stop');
stop.addEventListener('click', async () =>
{
	if (Tone.Transport.state === 'started' || Tone.Transport.state === 'paused')
		Tone.Transport.stop();
	console.log("Stopped");
});
