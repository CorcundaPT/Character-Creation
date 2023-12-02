//First Load~
function open() {
    reload();
}

//Constant load by the webpage
function mainJS() {
    reload();
}

// This will update every value
var reload = function() {
    //Class level
    var maxLevel = 20;
    var barbarian = document.getElementById("character-barbarian").value;
    barbarian = parseInt(barbarian)
    var bard = document.getElementById("character-bard").value;
    bard = parseInt(bard)
    var cleric = document.getElementById("character-cleric").value;
    cleric = parseInt(cleric)
    var currentLevel = parseInt(barbarian) + parseInt(bard) + parseInt(cleric);
    var leftLevel = maxLevel - currentLevel;
    document.getElementById("character-barbarian").max = barbarian + leftLevel;
    document.getElementById("character-bard").max = bard + leftLevel;
    document.getElementById("character-cleric").max = cleric + leftLevel;
    document.getElementById("character-level").innerHTML = currentLevel;

    //Ability scores
    var Str = document.getElementById("character-strength").value;
    var Dex = document.getElementById("character-dexterity").value;
    var Con = document.getElementById("character-constitution").value;
    var Int = document.getElementById("character-intelligence").value;
    var Wis = document.getElementById("character-wisdom").value;
    var Cha = document.getElementById("character-charisma").value;
    //Strength Modifier
    var StrMod = Math.floor((Str-10)/2);
    if (StrMod>=0) {StrModNum="+"+StrMod} else {StrModNum=StrMod}
    document.getElementById("character-strength-modifier").innerHTML = StrModNum;
    //Dexterity Modifier
    var DexMod = Math.floor((Dex-10)/2);
    if (DexMod>=0) {DexModNum="+"+DexMod} else {DexModNum=DexMod}
    document.getElementById("character-dexterity-modifier").innerHTML = DexModNum;
    //Constitution Modifier
    var ConMod = Math.floor((Con-10)/2);
    if (ConMod>=0) {ConModNum="+"+ConMod} else {ConModNum=ConMod}
    document.getElementById("character-constitution-modifier").innerHTML = ConModNum;
    //Intelligence Modifier
    var IntMod = Math.floor((Int-10)/2);
    if (IntMod>=0) {IntModNum="+"+IntMod} else {IntModNum=IntMod}
    document.getElementById("character-intelligence-modifier").innerHTML = IntModNum;
    //Wisdom Modifier
    var WisMod = Math.floor((Wis-10)/2);
    if (WisMod>=0) {WisModNum="+"+WisMod} else {WisModNum=WisMod}
    document.getElementById("character-wisdom-modifier").innerHTML = WisModNum;
    //Charisma Modifier
    var ChaMod = Math.floor((Cha-10)/2);
    if (ChaMod>=0) {ChaModNum="+"+ChaMod} else {ChaModNum=ChaMod}
    document.getElementById("character-charisma-modifier").innerHTML = ChaModNum;

    //Proficiency
    var proficiency = Math.ceil(currentLevel/4)+1;
    if (proficiency<2) {proficiency=0}
    document.getElementById("character-proficiency").innerHTML = "+"+proficiency;

    //Strength Saving Throws
    var StrSaveCheck = document.querySelector('input[name="character-save-strength"]:checked').value;
    StrSave = StrMod + (proficiency*StrSaveCheck);
    if (StrSave>=0) {StrSave="+"+StrSave}
    document.getElementById("character-save-strength-bonus").innerHTML = StrSave;
    //Dexterity Saving Throws
    var DexSaveCheck = document.querySelector('input[name="character-save-dexterity"]:checked').value;
    DexSave = DexMod + (proficiency*DexSaveCheck);
    if (DexSave>=0) {DexSave="+"+DexSave}
    document.getElementById("character-save-dexterity-bonus").innerHTML = DexSave;
    //Constitution Saving Throws
    var ConSaveCheck = document.querySelector('input[name="character-save-constitution"]:checked').value;
    ConSave = ConMod + (proficiency*ConSaveCheck);
    if (ConSave>=0) {ConSave="+"+ConSave}
    document.getElementById("character-save-constitution-bonus").innerHTML = ConSave;
    //Intelligence Saving Throws
    var IntSaveCheck = document.querySelector('input[name="character-save-intelligence"]:checked').value;
    IntSave = IntMod + (proficiency*IntSaveCheck);
    if (IntSave>=0) {IntSave="+"+IntSave}
    document.getElementById("character-save-intelligence-bonus").innerHTML = IntSave;
    //Wisdom Saving Throws
    var WisSaveCheck = document.querySelector('input[name="character-save-wisdom"]:checked').value;
    WisSave = WisMod + (proficiency*WisSaveCheck);
    if (WisSave>=0) {WisSave="+"+WisSave}
    document.getElementById("character-save-wisdom-bonus").innerHTML = WisSave;
    //Charisma Saving Throws
    var ChaSaveCheck = document.querySelector('input[name="character-save-charisma"]:checked').value;
    ChaSave = ChaMod + (proficiency*ChaSaveCheck);
    if (ChaSave>=0) {ChaSave="+"+ChaSave}
    document.getElementById("character-save-charisma-bonus").innerHTML = ChaSave;

    //Athletics Skill
    var AthleticsCheck = document.querySelector('input[name="character-athletics"]:checked').value;
    Athletics = StrMod + (proficiency*AthleticsCheck);
    if (Athletics>=0) {Athletics="+"+Athletics}
    document.getElementById("character-athletics").innerHTML = Athletics;

    //Features
    console.log(barbarian)
    //if (barbarian >= 1) {document.getElementById("barbarian1").style.display = "block"} else {document.getElementById("barbarian1").style.display = "none"}
}

//open Class List
function classLevel() {
}

//Open bonus proficiency
function bonusCheck(itemBox) {
    if (document.getElementById(itemBox).style.display == "block") {
        document.getElementById(itemBox).style.display = "none"
    }
    else {
        document.getElementById(itemBox).style.display = "block"
    }
}