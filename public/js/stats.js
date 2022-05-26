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

const motivations = ['revenge', 'power', 'money', 'healing', 'justice', 'entertainment',
                     'love', 'adventure', 'education', 'respect', 'redemption', 'boredom',
                     'curiosity', 'lust', 'anarchy', 'rebellion', 'survival', 'courage', 
                     'glory', 'honor'];

const flaws = ['gullible', 'clumbsy', 'lazy', 'naive', 'pride', 'stubborn', 'anxious', 'apathetic', 'ignorant',
                'hot-headed', 'obsessive', 'distractable', 'arrogant', 'forgetful', 'compulsive liar'];

const personalities = ['bold', 'shy', 'quiet', 'serious', 'modest', 'brave', 'quirky', 'careful', 'honest', 
                    'loyal', 'humble', 'responsible', 'combative', 'witty', 'simple minded', 'bright', 
                    'impulsive', 'compassionate', 'leader', 'hard-working'];

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