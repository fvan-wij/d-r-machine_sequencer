//Initializing synth and drum samples
const synth = new Tone.Synth().toDestination();
const kick = new Tone.Player('../data/samples/kick.wav').toDestination();
const oh = new Tone.Player('../data/samples/oh.wav').toDestination();
const ch = new Tone.Player('../data/samples/ch.wav').toDestination();
const snare	= new Tone.Player('../data/samples/snare.wav').toDestination();
const clap = new Tone.Player('../data/samples/clap.wav').toDestination();

//FX
const distortion = new Tone.Distortion(0).toDestination();
const reverb = new Tone.Reverb(1).toDestination();
const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination();

//HTML QuerySelectors
const synthSteps = document.querySelectorAll('.synth_step');
const kickSteps = document.querySelectorAll('.kick_step');
const ohSteps = document.querySelectorAll('.oh_step');
const chSteps = document.querySelectorAll('.ch_step');
const snareSteps = document.querySelectorAll('.snare_step');
const clapSteps = document.querySelectorAll('.clap_step');
var checkboxes = document.querySelectorAll('input');

//HTML GetElementById
const stop = document.getElementById('stop');
const start = document.getElementById('play');
var bpmSlider = document.getElementById('bpmRange');
var volumeSlider = document.getElementById('volumeRange');
var driveSlider = document.getElementById('driveRange');
var reverbSlider = document.getElementById('reverbRange');
var chorusSlider = document.getElementById('chorusRange');

//Global variables
let synthStepArray = [];
let kickStepArray = [];
let ohStepArray = [];
let chStepArray = [];
let snareStepArray = [];
let clapStepArray = [];

//Fills the synthStepArray for each checkbox that is ticked
const fillSynthSteps = () => 
{
	synthStepArray = [];
	let note = 'F4';
	synthSteps.forEach(synthSteps => {

		if (synthSteps.checked)
			synthStepArray.push(note);
		else
			synthStepArray.push(null);
	});
	return synthStepArray;
};

const fillKickSteps = () => 
{
	kickStepArray = [];
	let note = 'F4';
	kickSteps.forEach(kickSteps => {

		if (kickSteps.checked)
			kickStepArray.push(note);
		else
			kickStepArray.push(null);
	});
	return kickStepArray;
};

const fillOhSteps = () => 
{
	ohStepArray = [];
	let note = 'F4';
	ohSteps.forEach(ohSteps => {

		if (ohSteps.checked)
			ohStepArray.push(note);
		else
			ohStepArray.push(null);
	});
	return ohStepArray;
};

const fillChSteps = () => 
{
	chStepArray = [];
	let note = 'F4';
	chSteps.forEach(chSteps => {

		if (chSteps.checked)
			chStepArray.push(note);
		else
			chStepArray.push(null);
	});
	return chStepArray;
};

const fillSnareSteps = () => 
{
	snareStepArray = [];
	let note = 'F4';
	snareSteps.forEach(snareSteps => {

		if (snareSteps.checked)
			snareStepArray.push(note);
		else
			snareStepArray.push(null);
	});
	return snareStepArray;
};

const fillClapSteps = () => 
{
	clapStepArray = [];
	let note = 'F4';
	clapSteps.forEach(clapSteps => {

		if (clapSteps.checked)
			clapStepArray.push(note);
		else
			clapStepArray.push(null);
	});
	return clapStepArray;
};

//Sequences the notes as positioned in the synthStepArray
const sequenceSynthNotes = () =>
{
	const seq = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(note, '32n', time);
	}, synthStepArray).start(0);
};

const sequenceKickNotes = () =>
{
	const seq = new Tone.Sequence((time, note) => {
		kick.start();
	}, kickStepArray).start(0);
};

const sequenceOhNotes = () =>
{
	const seq = new Tone.Sequence((time, note) => {
		oh.start();
	}, ohStepArray).start(0);
};

const sequenceChNotes = () =>
{
	const seq = new Tone.Sequence((time, note) => {
		ch.start();
	}, chStepArray).start(0);
};

const sequenceSnareNotes = () =>
{
	const seq = new Tone.Sequence((time, note) => {
		snare.start();
	}, snareStepArray).start(0);
};

const sequenceClapNotes = () =>
{
	const seq = new Tone.Sequence((time, note) => {
		clap.start();
	}, clapStepArray).start(0);
};

//Updates the sequence as soon as a checkbox change is detected
checkboxes.forEach(function(checkbox) 
{
	checkbox.addEventListener('change', function() 
	{

   		synthStepArray = fillSynthSteps(); 
	  	kickStepArray = fillKickSteps();
	  	ohStepArray = fillOhSteps();
	  	chStepArray = fillChSteps();
		snareStepArray = fillSnareSteps();
		clapStepArray = fillClapSteps();

	  	sequenceSynthNotes();
	  	sequenceKickNotes();
	  	sequenceOhNotes();
	  	sequenceChNotes();
		sequenceSnareNotes();
		sequenceClapNotes();
	})
});

//Sliders and settings 
// TO DO: FIX VOLUME SLIDER AND FX SLIDERS
bpmSlider.oninput = function() 
{
	Tone.Transport.bpm.value = this.value;
}
//Volume
volumeSlider.addEventListener('input', () =>
{
	synth.volume.value = volumeSlider.value;
	kick.volume.value = volumeSlider.value;
	oh.volume.value = volumeSlider.value;
	ch.volume.value = volumeSlider.value;
	snare.volume.value = volumeSlider.value;
	clap.volume.value = volumeSlider.value;
});
//Distortion
synth.connect(distortion);
kick.connect(distortion);
oh.connect(distortion);
ch.connect(distortion);
snare.connect(distortion);
clap.connect(distortion);
driveSlider.addEventListener('input', () =>
{
distortion.distortion = driveSlider.value;
});
//Reverb
synth.connect(reverb);
kick.connect(reverb);
oh.connect(reverb);
ch.connect(reverb);
snare.connect(reverb);
clap.connect(reverb);
reverbSlider.addEventListener('input', () =>
{
reverb.decay = reverbSlider.value;
});

//Chorus
synth.connect(chorus);
kick.connect(chorus);
oh.connect(chorus);
ch.connect(chorus);
snare.connect(chorus);
clap.connect(chorus);
chorusSlider.addEventListener('input', () =>
{
chorus.depth = chorusSlider.value;
chorus.wet = chorusSlider.value;
});

//Play or Pause the sequencer
start.addEventListener('click', async () =>
{
	if (!Tone.start())
		await Tone.start();
	else if (Tone.Transport.state === 'started')
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

//Stop the sequencer
stop.addEventListener('click', async () =>
{
	if (Tone.Transport.state === 'started' || Tone.Transport.state === 'paused')
		Tone.Transport.stop();
	console.log("Stopped");
});

