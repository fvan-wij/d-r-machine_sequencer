// Synth FX
var attackSlider = document.getElementById('Attack');
var decaySlider = document.getElementById('Decay');
var sustainSlider = document.getElementById('Sustain');
var releaseSlider = document.getElementById('Release');
var synthPitchSlider = document.getElementById('Frequency');
var synthSliders = [attackSlider, decaySlider, sustainSlider, releaseSlider, synthPitchSlider];

// Pitch Sliders
var kickPitchSlider = document.getElementById('kickPitch');
var ohPitchSlider = document.getElementById('ohPitch');
var chPitchSlider = document.getElementById('chPitch');
var snarePitchSlider = document.getElementById('snarePitch');
var clapPitchSlider = document.getElementById('clapPitch');
var pitchSliders = [kickPitchSlider, ohPitchSlider, chPitchSlider, snarePitchSlider, clapPitchSlider];

synthSliders.forEach(synthSliders =>
{
	synthSliders.addEventListener('input', () =>
	{
		synth.envelope.attack = attackSlider.value;
		synth.envelope.decay = decaySlider.value;
		synth.envelope.sustain = sustainSlider.value;
		synth.envelope.release = releaseSlider.value;
	})
});

pitchSliders.forEach(pitchSliders =>
{
	pitchSliders.addEventListener('input', () =>
	{
		kick.playbackRate = kickPitchSlider.value;	
		oh.playbackRate = ohPitchSlider.value;	
		ch.playbackRate = chPitchSlider.value;	
		snare.playbackRate = snarePitchSlider.value;
		clap.playbackRate = clapPitchSlider.value;
	});
});

