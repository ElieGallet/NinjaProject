import {Character,NonPlayerCharacter,PlayerCharacter} from "./app/Character";
import { Game } from "./app/Game";

const main = () =>{
  const pillars = {
    
  }
  const boardConfiguration = {
    lengthY: 10,
    lengthX: 10,
    pillars: pillars
  }
	let charBlue = new NonPlayerCharacter(Color.[]);
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

  new Game(charList).displayBoard();
}

main();