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


//Master sliders and FX 
document.getElementById('output').innerHTML = bpmSlider.value;
bpmSlider.oninput = function() 
{
	Tone.Transport.bpm.value = this.value;
	
	document.getElementById('output').innerHTML = this.value;
}
//Volume
Tone.Master.volume.value = -13;
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
