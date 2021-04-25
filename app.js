function handleOnClick(){
    var e = document.getElementById("location")
    var randomLocation = e.options[e.selectedIndex].value; 
    document.getElementById("generatedContent").innerHTML = randomLocation;
}

const timeOfDay = [
    "Sunrise",
    "Early dawn",
    "Sunset",
    "Midday",
    "Dusk",
    "Dawn",
    "Early morning",
    "Midnight",
    "Sometime in the morning when the birds start singing",
    "Twilight (not the books)",
    "Early evening",
    "Light is just appearing on the horizon",
    "Late morning",
    "Sometime in the middle of the night",
    "During the first rays of sunlight",
    "Shadows are long",
    "Night with a full moon",
    "A pitch black night",
    "Sometime around a meal time, you're hungry",
    "Shortly after sunup",
    "Shortly before sunset",
    "You're not quite sure.. the weather makes it hard to tell",
    "Mid-afternoon",
    "Mid-morning",
    "Late evening",
    "Sometime right before moonrise"
]
const locationChoices = [
    field
    {"winter":[{
        "weather":["snowstorm", 
            "dusting of snow", 
            "well below freezing", 
            "unseasonably warm",
            "freezing rain",
            "cold and clear",
            "blizzard conditions"]
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

const moods = ["angry", 
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
document.getElementById("moodDisplay").innerHTML = decidedMood;
