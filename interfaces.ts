// interfaces.ts
import { Ability } from './enums';
import { DamagePoints, DefensePoints } from './types';

interface Superhero {
  name: string;
  health: number;
  attack: (enemy: Superhero) => DamagePoints;
  defend: () => DefensePoints;
  type: Ability | number;
}

export { Superhero };
