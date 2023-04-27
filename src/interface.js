const parentDiv = document.getElementById('toggle-btn');
const childArray = Array.from(parentDiv.children);

const synthTarget = document.querySelector('.synth');
const kickTarget = document.querySelector('.kick');
const ohTarget = document.querySelector('.oh');
const chTarget = document.querySelector('.ch');
const snareTarget = document.querySelector('.snare');
const clapTarget = document.querySelector('.clap');

let targetArray = [synthTarget, kickTarget, ohTarget, chTarget, snareTarget, clapTarget];

for (let i = 0; i < childArray.length; i++) {
	childArray[i].addEventListener('click', () => {
		hideElement(targetArray[i]);
	});
}

var hideElement = (target) => 
{	
	if (target.style.display !== "none")
		target.style.display = "none";
	else 
		target.style.display = "flex";
}
