import { dnd, genders, alignments, motivations, flaws, personalities, statRoll } from "./stats.js"


//roll for ... functions
function rollForRace(){
    var races = dnd.races;
    var rand = Math.floor(Math.random() * races.length);
    var race = races[rand];
    return race
}

function rollForClass(){
    var classes = dnd.classes;
    var rand = Math.floor(Math.random() * classes.length);
    var _class = classes[rand];
    return _class
}

function rollForGender(){
    var rand = Math.floor(Math.random() * genders.length);
    var gender = genders[rand];
    return gender
}

function rollForAlignment(){
    var rand1 = Math.floor(Math.random() * 3)
    var rand2 = Math.floor(Math.random() * 3)
    var align1 = alignments[0][rand1];
    var align2 = alignments[1][rand2];
    var alignment = align1 + ' ' + align2;
    return alignment
}

function rollForMotive(){
    var rand = Math.floor(Math.random() * motivations.length);
    var motive = motivations[rand];
    return motive
}

function rollForFlaw(){
    var rand = Math.floor(Math.random() * flaws.length);
    var flaw = flaws[rand];
    return flaw
}

function rollForPersonality(){
    var rand = Math.floor(Math.random() * personalities.length);
    var personality = personalities[rand];
    return personality
}

function rollForStats(){
    var stats = {};
    stats.Str = statRoll();
    stats.Dex = statRoll();
    stats.Con = statRoll();
    stats.Int = statRoll();
    stats.Wis = statRoll();
    stats.Chr = statRoll();
    return stats
}

//create character class
class Character {
    constructor(){
    this.race = rollForRace(),
    this.class = rollForClass(),
    this.gender = rollForGender(),
    this.align = rollForAlignment(),
    this.motive = rollForMotive(),
    this.flaw = rollForFlaw(),
    this.person = rollForPersonality(),
    this.stats = rollForStats()
    }
}

function generate(){//generate new character and display
//New character
    var char = new Character;

//Display in DOM
    document.getElementById('race').innerHTML = char.race;
    document.getElementById('class').innerHTML = char.class;
    document.getElementById('gender').innerHTML = char.gender;
    document.getElementById('align').innerHTML = char.align;
    document.getElementById('motive').innerHTML = char.motive;
    document.getElementById('flaw').innerHTML = char.flaw;
    document.getElementById('person').innerHTML = char.person;

    document.getElementById('str').innerHTML = char.stats.Str;
    document.getElementById('dex').innerHTML = char.stats.Dex;
    document.getElementById('con').innerHTML =  char.stats.Con;
    document.getElementById('int').innerHTML = char.stats.Int;
    document.getElementById('wis').innerHTML = char.stats.Wis;
    document.getElementById('chr').innerHTML = char.stats.Chr;
}

generate();
//Event listener
let generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generate();
});

