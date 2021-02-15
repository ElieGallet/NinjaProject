import { Action, Direction, LaserAction, MoveAction, SlapAction } from "./Action";
import { BoardConfiguration } from "./Game";


const prompts = require('prompts');

enum Color {
  'BLUE',
  'RED',
  'YELLOW',
  'GREEN'
}

class CharacterPawn


abstract class Character {
  protected constructor(color: Color){
    this.color = color;
  }
  protected boardConfiguration: BoardConfiguration;
  protected readonly color: Color;
  protected colorAchievement: Record<Color, boolean>;
  public coordX: number;
  public coordY: number;
  protected currentTick: number;
  public abstract getCurrentAction(): Promise<Action>;
  public nextTick(){
    this.currentTick++;
  }
  public setup(boardConfiguration: BoardConfiguration): CharacterPawn{
    this.boardConfiguration = boardConfiguration;
    const boardConfiguration.pillars.filter((pillar: Pillar) => pillar.color === this.color)
  }
}

class NonPlayerCharacter extends Character {
  private readonly plannedActions: Array<Action>;

  public constructor(color: Color, boardConfiguration: BoardConfiguration, plannedActions: Array<Action>){
    super(color, boardConfiguration);
    this.plannedActions = plannedActions;
    this.currentTick = 0;
  }
  public getCurrentAction(): Promise<Action>{
    return Promise.resolve(this.plannedActions[this.currentTick]);
  }
  public nextTick(){
    this.currentTick++;
  }
}

class PlayerCharacter extends Character {

  public async getCurrentAction(): Promise<Action> {
    console.log(`Choose an action to do with Player ${this.color}`);
    console.log('1: Move Up');
    console.log('2: Move Down');
    console.log('3: Move Left');
    console.log('4: Move Right');
    console.log('5: Slap');
    console.log('6: Laser');
    const actionNumber = await prompts({
      type: 'number',
      name: 'value',
      message: 'Type an action number',
      validate: (value: number) => 1 > value || value > 6 ? `unknown action` : true
    });
    let action: Action;
    switch (actionNumber.value) {
      case 1:
        action = new MoveAction(Direction.UP);
        break;
      case 2:
        action = new MoveAction(Direction.DOWN);
        break;
      case 3:
        action = new MoveAction(Direction.LEFT);
        break;
      case 4:
        action = new MoveAction(Direction.RIGHT);
        break;
      case 5:
        action = new SlapAction();
        break;
      case 6:
        action = new LaserAction();
        break;
    }
    return action;
  }
}

export { Character, Color, NonPlayerCharacter, PlayerCharacter };
