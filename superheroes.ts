// superheroes.ts
import { Superhero } from './interfaces';
import { Ability } from './enums';
import { DamagePoints, DefensePoints } from './types';

class MagicSuperhero implements Superhero {
  name: string;
  health: number;
  type: Ability;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.type = Ability.Attack;
  }

  attack(enemy: Superhero): DamagePoints {
    // Logic for magic superhero's attack
    return 10;
  }

  defend(): DefensePoints {
    // Logic for magic superhero's defense
    return 5;
  }
}

class StrengthSuperhero implements Superhero {
  name: string;
  health: number;
  type: Ability;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.type = Ability.Defense;
  }

  attack(enemy: Superhero): DamagePoints {
    // Logic for strength superhero's attack
    return 20;
  }

  defend(): DefensePoints {
    // Logic for strength superhero's defense
    return 20;
  }
}

export { MagicSuperhero, StrengthSuperhero };
