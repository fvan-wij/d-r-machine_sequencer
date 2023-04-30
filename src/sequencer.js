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
var now = Tone.now();
//Fills the synthStepArray for each checkbox that is ticked
const fillSynthSteps = () => 
{
	synthStepArray = [];
	let note = 'F'+synthPitchSlider.value+'';
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
var seqSynth = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(note, '32n', time);
	console.log(time);
}, synthStepArray);
var seqKick = new Tone.Sequence((time, note) => {
	kick.start(time);
}, kickStepArray);
var seqOh = new Tone.Sequence((time, note) => {
	oh.start(time);
}, ohStepArray);
var seqCh = new Tone.Sequence((time, note) => {
	ch.start(time);
}, chStepArray);
var seqSnare = new Tone.Sequence((time, note) => {
	snare.start(time);
}, snareStepArray);
var seqClap = new Tone.Sequence((time, note) => {
	clap.start(time);
}, clapStepArray);

var arrayOfStepArrays = [synthStepArray, kickStepArray, ohStepArray, chStepArray, snareStepArray, clapStepArray];
var arrayOfFillFunctions = [fillSynthSteps, fillKickSteps, fillOhSteps, fillChSteps, fillSnareSteps, fillClapSteps];
var arrayOfSequences = [seqSynth, seqKick, seqOh, seqCh, seqSnare, seqClap];

//Updates the sequence as soon as a checkbox change is detected
checkboxes.forEach(function(checkbox) 
{
	checkbox.addEventListener('change', function() 
	{
		for (let i = 0; i < arrayOfStepArrays.length; i++) 
		{
			arrayOfStepArrays[i] = arrayOfFillFunctions[i]();
			arrayOfSequences[i].events = arrayOfStepArrays[i];
		}	
	})
});

const startSeq = () =>
{
	seqSynth.start(0);
	seqKick.start(0);
	seqOh.start(0);
	seqCh.start(0);
	seqSnare.start(0);
	seqClap.start(0);
};

const stopSeq = () =>
{
	seqSynth.stop(0);
	seqKick.stop(0);
	seqOh.stop(0);
	seqCh.stop(0);
	seqSnare.stop(0);
	seqClap.stop(0);
};

//Play or Pause the sequencer
start.addEventListener('click', async () =>
{
	if (!Tone.start())
		await Tone.start();
	else if (Tone.Transport.state === 'started')
	{
		console.log("Stopped");
		Tone.Transport.stop();
		stopSeq();
		start.classList.remove('focus');
	}
	else if (Tone.Transport.state === 'stopped')
	{
		console.log("Started");
		Tone.Transport.start();
		startSeq();
		start.classList.add('focus');
	}

	if (start.innerHTML === "Play.")
		start.innerHTML = "Stop.";
	else if (start.innerHTML === "Stop.")
		start.innerHTML = "Play.";
});

