import {Character,NonPlayerCharacter,PlayerCharacter} from "./Character";

const displayBoard = (charList: Character[]) =>{
	const lineGrid = 10;
	const columnGrid = 10;
	const BgRed = "\x1b[41m"
	const BgGreen = "\x1b[42m"
	const BgYellow = "\x1b[43m"
	const BgBlue = "\x1b[44m"

	let horToPrint:string = '';
	let verToPrint:string = '';
	let notEmpty=0;
	
	for(let x=0; x< lineGrid; x++){
		horToPrint= '';
		verToPrint= '';
		for(let y=0; y< columnGrid; y++){
			horToPrint += '----';
			notEmpty =0;
			charList.forEach(function(item, index, array) {
				if((item.coordX == x)&&(item.coordY == y)){
					verToPrint += '|XX|';
					notEmpty = 1;
				}
			});
			if(notEmpty == 0){
					verToPrint += '|  |';
			}
		}
		console.log(horToPrint);
		console.log(verToPrint);
	}
	
}

export default displayBoard;