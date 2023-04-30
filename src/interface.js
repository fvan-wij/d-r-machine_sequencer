const fxToggleButtons = document.querySelectorAll('.toggle');
const fxToggleDivs = document.querySelectorAll('.toggle-div');

const hideAllDivs = () =>
{
	fxToggleDivs.forEach(fxToggleDivs => {
		if (fxToggleDivs.classList.contains('show'))
			fxToggleDivs.classList.remove('show');
	});
};

const unfocusAllBtns = () =>
{
	fxToggleButtons.forEach(fxToggleButtons => 
	{
		if (fxToggleButtons.classList.contains('focus'))
			fxToggleButtons.classList.remove('focus');
	})
}

document.getElementById('synth-fx').classList.add('show');
document.querySelector('.toggle').classList.add('focus');

fxToggleButtons.forEach(fxToggleButtons => 
{
	fxToggleButtons.addEventListener('click', () =>
	{
	const targetDiv = document.getElementById(fxToggleButtons.dataset.target);
			hideAllDivs();
			unfocusAllBtns();
			targetDiv.classList.add('show');
			fxToggleButtons.classList.add('focus');
	});
});

const clearSequences = () =>
{
	checkboxes.forEach(checkboxes =>
	{
			checkboxes.checked = false;
	});
	for (let i = 0; i < arrayOfStepArrays.length; i++)
	{
		for (let j = 0; j < arrayOfStepArrays[i].length; j++)
		{
			arrayOfStepArrays[i][j] = null;
		}	
	}
		
};

const clearB = document.getElementById('clear');
clearB.addEventListener('click', () =>
{
		clearSequences();
		updateSequences();
		stopSeq();
		start.innerHTML = "Play.";
		start.classList.remove('focus');
	clearB.style.color = "red";
		console.log("Cleared!");
});

