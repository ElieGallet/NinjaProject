enum Direction {
  'UP',
  'DOWN',
  'RIGHT',
  'LEFT'
}

abstract class Action {}

class MoveAction extends Action {
  private readonly direction;
  public constructor(direction: Direction){
    super();
    this.direction = direction;
  }
}

class SlapAction extends Action {}

class LaserAction extends Action {}

export { Action, MoveAction, SlapAction, LaserAction, Direction };