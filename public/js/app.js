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

document.getElementById('data').innerHTML = rollForRace() + ' ' + rollForClass()
                                            + ' ' + rollForGender()
                                            + ' ' + rollForMotive()
                                            + ' ' + rollForFlaw()
                                            + ' ' + rollForPersonality();

var test = rollForStats();
document.getElementById('stats').innerHTML = test.Str+' '+test.Dex+' '+test.Con+' '+
                                             test.Int+' '+test.Wis+' '+test.Chr;