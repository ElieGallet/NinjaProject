import displayBoard from "./app/displayBoard";
import {Character,NonPlayerCharacter,PlayerCharacter} from "./app/Character";

const main = () =>{
	let charBlue = new NonPlayerCharacter([]);
	charBlue.coordX = 0;
	charBlue.coordY = 0;

	let charGreen = new NonPlayerCharacter([]);
	charGreen.coordX = 9;
	charGreen.coordY = 9;

	let charYellow = new NonPlayerCharacter([]);
	charYellow.coordX = 0;
	charYellow.coordY = 9;

	let charRed = new NonPlayerCharacter([]);
	charRed.coordX = 9;
	charRed.coordY = 0;

	let charList: Character[] = [];

	charList.push(charBlue);
	charList.push(charGreen);
	charList.push(charYellow);
	charList.push(charRed);

  displayBoard(charList);
}

main();