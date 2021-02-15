import { Direction } from "./Action";
import { Character, Color } from "./Character"

interface Pillar {
  color: Color;
  coordX: number;
  coordY: number;
}

interface BoardConfiguration {
  xLength: number;
  yLength: number;
  pillars: Pillar[];
  colorAchievements: Color[];
}
class Game {

  //private currentTick: number;
  private characters: Character[];
  private boardConfiguration: BoardConfiguration;

  constructor(characters: Character[], boardConfiguration: BoardConfiguration) {
    this.characters = characters;
    //this.currentTick = 0;
  }

  public nextTick(): void {
    this.characters.forEach((character: Character): void => {
      character.nextTick();
    })
    //this.currentTick++;
    this.displayBoard();
  }

  public displayBoard (): void {
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
        this.characters.forEach(function(item, index, array) {
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
}

export { Game, BoardConfiguration };