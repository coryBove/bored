// TODO: Things to do in 5 minutes or more.

var boredItems = 
{
    // CLEAN
    itemC1 : {
        heading : "CLEAN",
        action : "Wipe down/Sanitize Table"
    },
    itemC2 : {
        heading : "CLEAN",
        action : "Wipe down/Sanitize Desk"
    },
    itemC3 : {
        heading : "CLEAN",
        action : "Wipe down/Sanitize Chairs"
    },
    itemC4 : {
        heading : "CLEAN",
        action : "Wipe down/Sanitize Kitchen Counter/Sink"
    },
    itemC5 : {
        heading : "CLEAN",
        action : "Wipe down/Sanitize Bathroom Counter/Sink"
    },
    itemC6 : {
        heading : "CLEAN",
        action : "Wipe down/Sanitize Side Tables"
    },
    itemC7 : {
        heading : "CLEAN",
        action : "Wipe down/Sanitize Speakers/Amp Stand"
    },
    itemC8 : {
        heading : "CLEAN",
        action : "Wash Dishes"
    },
    itemC9 : {
        heading : "CLEAN",
        action : "Deep Clean Toilet"
    },
    itemC10 : {
        heading : "CLEAN",
        action : "Deep Clean Shower"
    },
    itemC11 : {
        heading : "CLEAN",
        action : "Vacuum Main Room"
    },
    itemC12 : {
        heading : "CLEAN",
        action : "Vacuum Main Hallway"
    },
    itemC13 : {
        heading : "CLEAN",
        action : "Vacuum Main Bedroom"
    },
    itemC14 : {
        heading : "CLEAN",
        action : "Sweep Kitchen"
    },
    itemC15 : {
        heading : "CLEAN",
        action : "Sweep Bathroom"
    },
    itemC16 : {
        heading : "CLEAN",
        action : "Clean Cat Boxes"
    },
    itemC17 : {
        heading : "CLEAN",
        action : "Clean Cat Food Bowl/Water Dish"
    },
    itemC18 : {
        heading : "CLEAN",
        action : "Deodorize Trash"
    },
    itemC19 : {
        heading : "CLEAN",
        action : "Take Trash Out"
    },

    //DRAW
    itemD1 : {
        heading : "DRAW",
        action : "Stick Figure Gestures"
    },
    itemD2 : {
        heading : "DRAW",
        action : "Trees"
    },
    itemD3 : {
        heading : "DRAW",
        action : "Plants"
    },
    itemD4 : {
        heading : "DRAW",
        action : "Still Life"
    },
    itemD5 : {
        heading : "DRAW",
        action : "Comic"
    },
    itemD6 : {
        heading : "DRAW",
        action : "Read/Write something. Draw it out."
    },
    itemD7 : {
        heading : "DRAW",
        action : "Whatever is in front of me."
    },

    //EXERCISE
    itemE1 : {
        heading : "EXERCISE",
        action : "Jumping Jacks"
    },
    itemE2 : {
        heading : "EXERCISE",
        action : "Push Ups"
    },
    itemE3 : {
        heading : "EXERCISE",
        action : "Squats"
    },
    itemE4 : {
        heading : "EXERCISE",
        action : "Stretch"
    },
    itemE5 : {
        heading : "EXERCISE",
        action : "Shadow Boxing"
    },
    itemE6 : {
        heading : "EXERCISE",
        action : "Core"
    },
    itemE7 : {
        heading : "EXERCISE",
        action : "Relaxation/Posture"
    },

    //MEDITATE
    itemM1 : {
        heading : "MEDITATE",
        action : "Count Inhalation"
    },
    itemM2 : {
        heading : "MEDITATE",
        action : "Count Exhalation"
    },
    itemM3 : {
        heading : "MEDITATE",
        action : "Count Breath Cycle"
    },
    itemM4 : {
        heading : "MEDITATE",
        action : "Count to 10, restart"
    },
    itemM5 : {
        heading : "MEDITATE",
        action : "Count backwards from 10, restart"
    },
    itemM6 : {
        heading : "MEDITATE",
        action : "Aum"
    },
    itemM7 : {
        heading : "MEDITATE",
        action : "Wu-Saw"
    },
    itemM8 : {
        heading : "MEDITATE",
        action : "Guided Meditation"
    },
    itemM9 : {
        heading : "MEDITATE",
        action : "Visualize a beach"
    },
    itemM10 : {
        heading : "MEDITATE",
        action : "Visualize a mountain"
    },
    itemM11 : {
        heading : "MEDITATE",
        action : "Visualize a forest"
    },
    itemM12 : {
        heading : "MEDITATE",
        action : "Visualize a dreamscape"
    },
    itemM13 : {
        heading : "MEDITATE",
        action : "Read something short, contemplate it"
    },
    itemM14 : {
        heading : "MEDITATE",
        action : "What did I write today?"
    },
    itemM15 : {
        heading : "MEDITATE",
        action : "What could I write today?"
    },

    //WRITE
    itemW1 : {
        heading : "WRITE",
        action : "Journal Entry"
    },
    itemW2 : {
        heading : "WRITE",
        action : "Make a todo list"
    },
    itemW3 : {
        heading : "WRITE",
        action : "Make a gratitude list"
    },
    itemW4 : {
        heading : "WRITE",
        action : "What did I do today?"
    },
    itemW5 : {
        heading : "WRITE",
        action : "Write a short story"
    },
    itemW6 : {
        heading : "WRITE",
        action : "Write a poem"
    },
    itemW7 : {
        heading : "WRITE",
        action : "Read something short - rewrite it in my own words"
    },
    itemW8 : {
        heading : "WRITE",
        action : "Read something short - summarize it"
    },
    itemW9 : {
        heading : "WRITE",
        action : "What did I read today?"
    },

    //READ
    itemR1 : {
        heading : "READ",
        action : "Find a random book on Libby"
    },
    itemR2 : {
        heading : "READ",
        action : "Bible"
    },
    itemR3 : {
        heading : "READ",
        action : "AA Literature"
    },
    itemR4 : {
        heading : "READ",
        action : "Guitar Grimoire"
    },
    itemR5 : {
        heading : "READ",
        action : "Vaideology"
    },
    itemR6 : {
        heading : "READ",
        action : "Audiobook"
    },

    //MUSIC
    itemMus1 : {
        heading : "MUSIC",
        action : "Play scales"
    },
    itemMus2 : {
        heading : "MUSIC",
        action : "Write a progression"
    },
    itemMus3 : {
        heading : "MUSIC",
        action : "Learn a new chord"
    },
    itemMus4 : {
        heading : "MUSIC",
        action : "Learn a new scale"
    },
    itemMus5 : {
        heading : "MUSIC",
        action : "Focus on Relaxing"
    },
    itemMus6 : {
        heading : "MUSIC",
        action : "Focus on Posture"
    },
    itemMus7 : {
        heading : "MUSIC",
        action : "Focus on the Breath"
    },
    itemMus8 : {
        heading : "MUSIC",
        action : "Stretch"
    },
    itemMus9 : {
        heading : "MUSIC",
        action : "Listen to music"
    },

    //FOOD
    itemF1 : {
        heading : "FOOD",
        action : "Prep food"
    },
    itemF2 : {
        heading : "FOOD",
        action : "Make a grocery list"
    },
    itemF3 : {
        heading : "FOOD",
        action : "Throw away bad food"
    },
    itemF4 : {
        heading : "FOOD",
        action : "Eat food"
    },
    itemF5 : {
        heading : "FOOD",
        action : "Make a list of different ways to prep what is on hand"
    },

    //RESEARCH
    itemRes1 : {
        heading : "RESEARCH",
        action : "Qi-Gong"
    },
    itemRes2 : {
        heading : "RESEARCH",
        action : "Story writing"
    },
    itemRes3 : {
        heading : "RESEARCH",
        action : "Poem writing"
    },
};

function getBoredItem() {
    var totalBoredItems = Object.keys(boredItems);
    var randomBoredItemHeader = totalBoredItems[Math.floor(Math.random() * totalBoredItems.length)];
    var doThisThing = boredItems[randomBoredItemHeader];
    
    var mainDiv = document.getElementById('mainDiv');
    var div = document.createElement("div");
    var divColumn = document.createElement("div");

    var heading = document.createElement("p");
    heading.innerHTML = doThisThing.heading;
    divColumn.appendChild(heading);
    var action = document.createElement("span");
    action.innerHTML = doThisThing.action; 
    divColumn.appendChild(action);
    div.appendChild(divColumn);
    mainDiv.appendChild(div);
}

getBoredItem();
