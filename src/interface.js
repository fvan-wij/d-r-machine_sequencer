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

// var playStopBtn = document.getElementById('play');
// playStopBtn.addEventListener('click', () =>
// {
// 	if (playStopBtn.innerHTML == 'Play')
// 	{
// 		playStopBtn.innerHTML = 'Stop';
// 		console.log("JO");
// 	}
// 	else
// 		playStopBtn.innerHTML = 'Play';
// });


