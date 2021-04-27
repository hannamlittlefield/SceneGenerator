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
    "The shadows are long",
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

const tempWeather = {
    winter:
        ["snowstorm", 
        "dusting of snow", 
        "well below freezing", 
        "unseasonably warm",
        "freezing rain",
        "cold and clear",
        "blizzard conditions",
        "snow flurries",
        "blowing wind and snow",
        "sunny but cold",
        "snow squalls",
        "hail",
        "the first snow",
        "ice storm",
        "a mild winter day",
        "white out conditions",
        "cold, but not too cold",
        "cloudy and chilly",
        "clear skies",
        "far below freezing",
        "comfortably cold",
        "bizarrely warm for winter",
        "foggy and chilly"],
    spring:  [
        "cool and breezy",
        "unseasonably warm",
        "comfortably temperate",
        "a spring rain shower",
        "downpouring rain",
        "it feels almost like early summer",
        "cloudy but warmer spring weather",
        "looks like a spring rain is coming",
    ],
    summer: [
        "atrociously hot",
        "the perfect summer day",
        "a summer thunderstorm",
        "weirdly cold for summer",
        "clear and hot"
    ],
    fall:[
        "a warm fall day",
        "it smells like snow",
        "drizzly and gray",
        "crisp and cool",
        "fall rainstorm"
    ]
}

const tempVisual = ["no one else but yourself",
"a group of foxes playing together",
"a flock of birds taking flight",
"one other lone horse",
"a multi-headed lakefish jumping nearby",
"fireflies a few yards away from you",
"a leopard bounding through the snow",
"another horse slipping on nearby ice",
"a clump of snow moving weirdly",
"snow collapsing a few tree branches",
"footprints (of any kind) in the snow",
"a waterfall",
"bubbles rising up from the lake",
"prey being chased by a predator",
"another horse approaching you",
"a grown horse playing in the snow",
"it is eerily empty and quiet"
]

/*const locationChoices = {
    "field":[{"winter":
                [{
                    "weather":["snowstorm", 
                        "dusting of snow", 
                        "well below freezing", 
                        "unseasonably warm",
                        "freezing rain",
                        "cold and clear",
                        "blizzard conditions",
                        "snow flurries",
                        "blowing wind and snow",
                        "sunny but cold",
                        "snow squalls",
                        "hail",
                        "the first snow",
                        "ice storm",
                        "a mild winter day",
                        "white out conditions",
                        "cold, but not too cold",
                        "cloudy and chilly",
                        "clear skies",
                        "far below freezing",
                        "comfortably cold",
                        "bizarrely warm for winter",
                        "foggy and chilly"],

                    "see": ["no one else but yourself",
                        "a group of foxes playing together",
                        "a flock of birds taking flight",
                        "one other lone horse",
                        "a multi-headed lakefish jumping nearby",
                        "fireflies a few yards away from you",
                        "a leopard bounding through the snow",
                        "another horse slipping on nearby ice",
                        "a clump of snow moving weirdly",
                        "snow collapsing a few tree branches",
                        "footprints (of any kind) in the snow",
                        "a waterfall",
                        "bubbles rising up from the lake",
                        "prey being chased by a predator",
                        "another horse approaching you",
                        "a grown horse playing in the snow",
                        "it is eerily empty and quiet"]
    }]
    "spring":[{
         "weather": [
             "cool and breezy",
             "unseasonably warm",
             "comfortably temperate"
             "a spring rain shower"
             "downpouring rain"
             "it feels almost like early summer"
             ""
         ]
        "see":
    }]
    "summer":[{
         "weather":
        "see":
    }]
    "fall"[{
         "weather":
        "see":
    }]

    }

]}
*/
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

/*function generateScene(){
    var e = document.getElementById("location")
    var chosenLocation = e.options[e.selectedIndex].value;
    var time = timeofDay[Math.floor(Math.random() * timeOfDay.length)];

}
*/

function randomSight(){
    var setSight = tempVisual[Math.floor(Math.random()*tempVisual.length)];
    document.getElementById("visuals").innerHTML = setSight;
}

function randomMood(){
    var setMood = moods[Math.floor(Math.random()*moods.length)];
    document.getElementById("moodDisplay").innerHTML= setMood;
    }

function randomWeather(){
    var e = document.getElementById('season');
    var selectedSeason = e.options[e.selectedIndex].value;
        if (selectedSeason === 'winter'){
            var setWeather = tempWeather.winter[Math.floor(Math.random()*tempWeather.winter.length)];
            document.getElementById("weather").innerHTML = setWeather;
        }
        if (selectedSeason === 'spring'){
            var setWeather = tempWeather.spring[Math.floor(Math.random()*tempWeather.spring.length)];
            document.getElementById("weather").innerHTML = setWeather;
        }
        if (selectedSeason === 'summer'){
            var setWeather = tempWeather.summer[Math.floor(Math.random()*tempWeather.summer.length)];
            document.getElementById("weather").innerHTML = setWeather;
        }
        if (selectedSeason === 'fall'){
            var setWeather = tempWeather.fall[Math.floor(Math.random()*tempWeather.fall.length)];
            document.getElementById("weather").innerHTML = setWeather;
        }
}

function randomTime(){
    var dayTime = timeOfDay[Math.floor(Math.random()*timeOfDay.length)];
    document.getElementById("timeofday").innerHTML=dayTime;
}

