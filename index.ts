// index.ts
import * as readlineSync from 'readline-sync';
import { MagicSuperhero, StrengthSuperhero } from './superheroes';
import { simulateCombat } from './combate';
import { Ability } from './enums';

// Create instances of superheroes
const powerfulWarrior = new StrengthSuperhero('Powerful Warrior', 100);
const magicalWizard = new MagicSuperhero('Magical Wizard', 100);

// Function to choose an attack from the terminal
function chooseAttack(superhero: any): number {
    console.log(`[${superhero.type}] Choose an attack:`);
    console.log('[1] StrongAttack');
    console.log('[2] VeryStrongAttack');
    console.log('[3] ExtremelyStrongAttack');
    console.log('[0] CANCEL');
  
    const option = readlineSync.questionInt('Choose an attack [1, 2, 3, 0]: ');
  
    if (option >= 0 && option <= 3) {
        return option;
    } else {
        console.log('Invalid option. Selecting default attack.');
        return 0;
    }
}

// Start the combat with user interaction
while (powerfulWarrior.health > 0 && magicalWizard.health > 0) {
    const warriorAttack = chooseAttack(powerfulWarrior);
    const wizardAttack = chooseAttack(magicalWizard);
  
    // Assign selected attacks
    powerfulWarrior.type = warriorAttack as unknown as Ability;
    magicalWizard.type = wizardAttack as unknown as Ability;

    // Warrior's turn
    const warriorDamage = powerfulWarrior.attack(magicalWizard);
    magicalWizard.health -= warriorDamage;

    // Wizard's turn
    if (magicalWizard.health > 0) {
        const wizardDamage = magicalWizard.attack(powerfulWarrior);
        powerfulWarrior.health -= wizardDamage;
    }

    console.log(`Health of Powerful Warrior: ${powerfulWarrior.health}`);
    console.log(`Health of Magical Wizard: ${magicalWizard.health}`);
}

// Show the result of the combat
if (powerfulWarrior.health <= 0) {
    console.log('Powerful Warrior has been defeated.');
} else {
    console.log('Magical Wizard has been defeated.');
}
