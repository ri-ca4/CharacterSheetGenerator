const dnd = {

    races: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 
        'Halfling', 'Half-Orc', 'Human', 'Tiefling'],

    classes: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 
        'Monk', 'Palidin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 
        'Wizard', 'Artificer', 'Blood Hunter']

}

// const wow = {
//     races: [],
//     classes: []
// }

const genders = ['Male', 'Female', 'Non-binary'];

const alignments = [
    ['Lawful', 'Neutral', 'Chaotic'],
    ['Good', 'Neutral', 'Evil'] 
];

const motivations = ['Revenge', 'Power', 'Money', 'Healing', 'Justice', 'Entertainment',
                     'Love', 'Adventure', 'Education', 'Respect', 'Redemption', 'Boredom',
                     'Curiosity', 'Lust', 'Anarchy', 'Rebellion', 'Survival', 'Courage', 
                     'Glory', 'Honor'];

const flaws = ['Gullible', 'Clumbsy', 'Lazy', 'Naive', 'Pride', 'Stubborn', 'Anxious', 'Apathetic', 'Ignorant',
                'Hot-headed', 'Obsessive', 'Distractable', 'Arrogant', 'Forgetful', 'Compulsive Liar'];

const personalities = ['Bold', 'Shy', 'Quiet', 'Serious', 'Modest', 'Brave', 'Quirky', 'Careful', 'Honest', 
                    'Loyal', 'Humble', 'Responsible', 'Combative', 'Witty', 'Simple Minded', 'Bright', 
                    'Impulsive', 'Compassionate', 'Leader', 'Hard-working'];

function statRoll (){//simulates rolling 4 d6, dropping lowest, and adding the remaining
    let rolls = [];
    for(let i=1; i<=4; i++){//roll the dice
        rolls.push(Math.floor(Math.random() * 6) + 1)
    }
    rolls.sort(function(a, b){return b - a});//sort the dice
    rolls.pop();//drop the lowest
    var stat = rolls.reduce(function (a, b) {//add the remaining
        return a + b;
      }, 0);
    return stat
}

export {dnd, genders, alignments, motivations, flaws, personalities, statRoll}