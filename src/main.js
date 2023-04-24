const	synthA = new Tone.FMSynth().toMaster();
let steps = document.querySelectorAll(".step");
let playerState = 0;

const changePlayerstate = document.getElementById("play");
changePlayerstate.addEventListener("click", () =>
{
	playerState++;
	if (playerState == 1)
	{
		steps.forEach(steps => 
		{
			if (steps.checked)
			{
				console.log("Player has started.");
				synthA.triggerAttackRelease("C2", "16n");
			}
		});

	}
	else if (playerState == 2)
		console.log("Player is paused.");
	if (playerState > 1)
		playerState = 0;
});


