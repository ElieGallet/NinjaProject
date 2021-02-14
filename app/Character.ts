import { Action } from "./Action";


const prompts = require('prompts');

type Color = 'BLUE' | 'RED' | 'YELLOW' | 'GREEN';

abstract class Character {
  protected readonly color: Color;
  private coordX: number;
  private coordY: number;
  protected currentTick: number;
  public abstract getCurrentAction(): Promise<Action>;
}

class NonPlayerCharacter extends Character {
  private readonly plannedActions: Array<Action>;

  public constructor(plannedActions: Array<Action>){
    super();
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
      validate: (value: number) => 0 > value || value > 7 ? `unknown action` : true
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
        action = new SlapAction(Direction.RIGHT);
        break;
      case 6:
        action = new LaserAction(Direction.RIGHT);
        break;
      }
    }
  }
}