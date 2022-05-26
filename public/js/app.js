// const data = require('export');

import { dnd, genders, alignments, motivations, flaws, personalities, statRoll } from "./stats.js"

document.getElementById('data').innerHTML = statRoll()
