// combat.ts
import { Superhero } from './interfaces';
import { DamagePoints, DefensePoints } from './types';

// Make sure both superheroes have the same type of ability
function simulateCombat<T extends Superhero>(
  hero1: T,
  hero2: T
): void {
  while (hero1.health > 0 && hero2.health > 0) {
    // Hero1's turn
    const damage1: DamagePoints = hero1.attack(hero2);
    hero2.health -= damage1;

    // Hero2's turn
    if (hero2.health > 0) {
      const damage2: DamagePoints = hero2.attack(hero1);
      hero1.health -= damage2;
    }
  }

  if (hero1.health <= 0) {
    console.log(`${hero1.name} has been defeated.`);
  } else {
    console.log(`${hero2.name} has been defeated.`);
  }
}

export { simulateCombat };
