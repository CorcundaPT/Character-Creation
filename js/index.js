function AbilityMath() {
    //Ability Score

    var ScoreStr = document.getElementById("ScoreStr").value;
    var ScoreDex = document.getElementById("ScoreDex").value;
    var ScoreCon = document.getElementById("ScoreCon").value;
    var ScoreInt = document.getElementById("ScoreInt").value;
    var ScoreWis = document.getElementById("ScoreWis").value;
    var ScoreCha = document.getElementById("ScoreCha").value;

    var ModifierStr = Math.floor((ScoreStr-10)/2);
    var ModifierDex = Math.floor((ScoreDex-10)/2);
    var ModifierCon = Math.floor((ScoreCon-10)/2);
    var ModifierInt = Math.floor((ScoreInt-10)/2);
    var ModifierWis = Math.floor((ScoreWis-10)/2);
    var ModifierCha = Math.floor((ScoreCha-10)/2);
    
    document.getElementById("ModifierStr").textContent = ModifierStr;
    document.getElementById("ModifierDex").textContent = ModifierDex;
    document.getElementById("ModifierCon").textContent = ModifierCon;
    document.getElementById("ModifierInt").textContent = ModifierInt;
    document.getElementById("ModifierWis").textContent = ModifierWis;
    document.getElementById("ModifierCha").textContent = ModifierCha;

    //Skills Score

    //Str
    var ProfAthletics = ModifierStr + 0;
    if (ProfAthletics >= 0) {ProfAthletics = "+"+ProfAthletics;};
    document.getElementById("Athletics").textContent = ProfAthletics;

    //Dex
    var ProfAcrobatics = ModifierDex + 0;
    var ProfSleightOfHands = ModifierDex + 0;
    var ProfStealth = ModifierDex + 0;
    if (ProfAcrobatics >= 0) {ProfAcrobatics = "+"+ProfAcrobatics;};
    if (ProfSleightOfHands >= 0) {ProfSleightOfHands = "+"+ProfSleightOfHands;};
    if (ProfStealth >= 0) {ProfStealth = "+"+ProfStealth;};
    document.getElementById("Acrobatics").textContent = ProfAcrobatics;
    document.getElementById("SleightOfHands").textContent = ProfSleightOfHands;
    document.getElementById("Stealth").textContent = ProfStealth;
    
    //Int
    var ProfArcana = ModifierInt + 0;
    var ProfHistory = ModifierInt + 0;
    var ProfInvestigation = ModifierInt + 0;
    var ProfNature = ModifierInt + 0;
    var ProfReligion = ModifierInt + 0;
    if (ProfArcana >= 0) {ProfArcana = "+"+ProfArcana;};
    if (ProfHistory >= 0) {ProfHistory = "+"+ProfHistory;};
    if (ProfInvestigation >= 0) {ProfInvestigation = "+"+ProfInvestigation;};
    if (ProfNature >= 0) {ProfNature = "+"+ProfNature;};
    if (ProfReligion >= 0) {ProfReligion = "+"+ProfReligion;};
    document.getElementById("Arcana").textContent = ProfArcana;
    document.getElementById("History").textContent = ProfHistory;
    document.getElementById("Investigation").textContent = ProfInvestigation;
    document.getElementById("Nature").textContent = ProfNature;
    document.getElementById("Religion").textContent = ProfReligion;
    
    var ProfAnimalHandling = ModifierWis + 0;
    var ProfInsight = ModifierWis + 0;
    var ProfMedicine = ModifierWis + 0;
    var ProfPerception = ModifierWis + 0;
    var ProfSurvival = ModifierWis + 0;
    if (ProfAnimalHandling >= 0) {ProfAnimalHandling = "+"+ProfAnimalHandling;};
    if (ProfInsight >= 0) {ProfInsight = "+"+ProfInsight;};
    if (ProfMedicine >= 0) {ProfMedicine = "+"+ProfMedicine;};
    if (ProfPerception >= 0) {ProfPerception = "+"+ProfPerception;};
    if (ProfSurvival >= 0) {ProfSurvival = "+"+ProfSurvival;};
    document.getElementById("AnimalHandling").textContent = ProfAnimalHandling;
    document.getElementById("Insight").textContent = ProfInsight;
    document.getElementById("Medicine").textContent = ProfMedicine;
    document.getElementById("Perception").textContent = ProfPerception;
    document.getElementById("Survival").textContent = ProfSurvival;
    
    var ProfDeception = ModifierCha + 0;
    var ProfIntimidation = ModifierCha + 0;
    var ProfPerformance = ModifierCha + 0;
    var ProfPersuasion = ModifierCha + 0;
    if (ProfDeception >= 0) {ProfDeception = "+"+ProfDeception;};
    if (ProfIntimidation >= 0) {ProfIntimidation = "+"+ProfIntimidation;};
    if (ProfPerformance >= 0) {ProfPerformance = "+"+ProfPerformance;};
    if (ProfPersuasion >= 0) {ProfPersuasion = "+"+ProfPersuasion;};
    document.getElementById("Deception").textContent = ProfDeception;
    document.getElementById("Intimidation").textContent = ProfIntimidation;
    document.getElementById("Performance").textContent = ProfPerformance;
    document.getElementById("Persuasion").textContent = ProfPersuasion;
}

function SaveCharacter() {
}