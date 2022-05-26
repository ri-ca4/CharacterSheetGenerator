import { dnd, genders, alignments, motivations, flaws, personalities, statRoll } from "./stats.js"

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

document.getElementById('data').innerHTML = rollForAlignment() + ' ' +
                                            rollForRace() + ' ' + rollForClass()
                                            + ' ' + rollForGender()
                                            + ' ' + rollForMotive()
                                            + ' ' + rollForFlaw()
                                            + ' ' + rollForPersonality();

var test = rollForStats();
document.getElementById('stats').innerHTML = test.Str+' '+test.Dex+' '+test.Con+' '+
                                             test.Int+' '+test.Wis+' '+test.Chr;