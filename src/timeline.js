let totalSteps = 0;
const tl_synthSteps = document.querySelectorAll('.synth_step');
const tl_kickSteps = document.querySelectorAll('.kick_step');
const tl_ohSteps = document.querySelectorAll('.oh_step');
const tl_chSteps = document.querySelectorAll('.ch_step');
const tl_snareSteps = document.querySelectorAll('.snare_step');
const tl_clapSteps = document.querySelectorAll('.clap_step');
let tl_stepArray = [tl_synthSteps, tl_kickSteps, tl_ohSteps, tl_chSteps, tl_snareSteps, tl_clapSteps];
const timelineBar = document.getElementById('timelineBar');

const clearHighlight = (tl_steps) =>
{
	tl_steps.forEach(tl_steps => {
		if (tl_steps.classList.contains('highlight'))
			tl_steps.classList.remove('highlight');
	});
}

Tone.Transport.scheduleRepeat(time => {
	let stepIndex = totalSteps % 16;
	tl_stepArray.forEach(tl_stepArray => 
	{
		clearHighlight(tl_stepArray);
	});
	tl_synthSteps[stepIndex].classList.add('highlight');
	tl_kickSteps[stepIndex].classList.add('highlight');
	tl_ohSteps[stepIndex].classList.add('highlight');
	tl_chSteps[stepIndex].classList.add('highlight');
	tl_snareSteps[stepIndex].classList.add('highlight');
	tl_clapSteps[stepIndex].classList.add('highlight');
	timelineBar.style.width = (99 / 16) * stepIndex + "%";
	totalSteps++;
}, "8n");

