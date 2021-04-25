function handleOnClick(){
    var e = document.getElementById("location")
    var randomLocation = e.options[e.selectedIndex].value; 
    document.getElementById("generatedContent").innerHTML = randomLocation;
}

/*const locationChoices = [
    field
    {"winter":[{
        "weather":[snowstorm, dusting of snow, well below freezing, unseasonably warm]
        "see":
        "hear":
    }]
    "spring":[{
         "weather":
        "see":
        "hear":
    }]
    "summer":[{
         "weather":
        "see":
        "hear":
    }]
    "fall"[{
         "weather":
        "see":
        "hear":
    }]

    }

]*/

let moods = ["angry", 
"anticipating", 
"anxious", 
"apathetic", 
"bored", 
"calm", 
"confident", 
"depressed", 
"fearful", 
"lonely",
"sad", 
"overwhelmed", 
"uncertain", 
"worried", 
"excited", 
"hopeless", 
"lost", 
"miserable", 
"nervous", 
"confused", 
"panicked", 
"bitter", 
"frustrated", 
"annoyed", 
"whimsical", 
"romantic", 
"cheerful", "cranky", "crazy", "mysterious", "dreamy", "content", "mellow", "silly", "energetic", "irritated", "weird", "startled", "alienated", "insignificant", "astonished", "eager", "amused", "inquisitive", "optimistic", "negative", "hesitant", "playful", "awed", "empathetic", "enthralled", "grateful", "happy", "impressed", "joyful", "light-hearted", "nostalgic", "passionate", "pleased", "powerful", "refreshed", "relaxed", "satisfied", "sentimental", "thoughtful", "trustful", "alienated", "annoyed", "brooding", "cold", "cranky", "critical", "drained", "embarrassed", "empty", "envious", "futile", "gloomy", "heartbroken", "humiliated", "lethargic", "painful", "serious", "skeptical", "uncomfortable", "tense", "vulnerable", "worried", "impartial", "understanding", "friendly", "scholarly", "bemused", "euphoric", "elated", "sly", "stern", "frantic", "foreboding", "disrespectful", "blunt", "bossy", "admiring", "affectionate", "appreciative", "hopeful", "hostile", "chipper", "energetic"];


function randomMood(){
    var mood = moods[Math.floor(Math.random() * moods.length)];
    return mood
}

const decidedMood = randomMood(moods)

//var randomMood = moods[Math.floor(Math.random()*moods.length)];
document.getElementById("mooddisplay").innerHTML = decidedMood;
