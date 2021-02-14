type Color = 'BLUE' | 'RED' | 'YELLOW' | 'GREEN';

abstract class Character {
  private readonly color: Color;
  private coordX: number;
  private coordY: number;
  abstract getCurrentAction(): Action;
}