let mic = document.getElementById("mic");

let chatcontainer = document.querySelector('.chat-container');
let chatcontainertext = document.querySelector('.chat-container-text');

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

const speech = new SpeechSynthesisUtterance();

// Display student & shuttle (bot) messages
function studentmessages(text){
    let result = '';
    result += `<div class="convo-container student">${text}</div>`;
    chatcontainertext.innerHTML += result;
    return chatcontainertext;
}

function shuttlemessages(text){
    let result = '';
    result += `<div class="convo-container shuttle">${text}</div>`;
    chatcontainertext.innerHTML += result;
    return chatcontainertext;
}

// Display input text messages in chat box
function inputtextmessages(text){
    document.getElementById("input-text").value = text;
}

// Enable/Disable microphone
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}

mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    //console.log("Activated");
})

// Reply to queries
function chat(message){
    
    speech.text = "I have not quite understand, can you please repeat?";       // if message is not understood

    // Simple queries
    if(message.includes("hi") || message.includes("hello")){
        speech.text = "Hi, I am your virtual assistance";       
    }

    if(message.includes("how are you")){
        speech.text = "I am good";       
    }

    if(message.includes("who are you")){
        speech.text = "I am your virtual assistance to help you with your queries on the shuttle service";       
    }

    // help
    if(message.includes("help") || message.includes("how to") || message.includes("tutorial")){
        help();
    }

    // if shuttle is not specified
    if(message.includes("routes")){
        speech.text = "Please specify which shuttle you would like to take";       
    }

    if(message.includes("bus number")){
        speech.text = "Please specify which shuttle you would like to take";       
    }

    if(message.includes("pickup point")){
        speech.text = "Please specify which shuttle you would like to take";     
    }

    // Port Louis
    let plArr = ['Port Louis', 'Port-Louis', 'port louis', 'port-louis', 'pl'];

        for(let i = 0; i < plArr.length; i++){

            if(message.includes(plArr[i]) && message.includes("routes")){
                routesportlouis();
            }

        }

    // Reduit
    let reduitArr = ['reduit', 'Reduit'];

    for(let i = 0; i < reduitArr.length; i++){

        if(message.includes(reduitArr[i]) && message.includes("routes")){
            routesreduit();
        }
        
    }

    // Curepipe
    let cpeArr = ['curepipe', 'Curepipe', 'cpe'];

    for(let i = 0; i < cpeArr.length; i++){

        if(message.includes(cpeArr[i]) && message.includes("routes")){
            routescurepipe();
        }
        
    }

    // Flacq
    let flacqArr = ['Flacq', 'flacq'];

    for(let i = 0; i < flacqArr.length; i++){

        if(message.includes(flacqArr[i]) && message.includes("routes")){
            routesflacq();
        }
        
    }

    // Mahebourg
    let mahebourgArr = ['Mahebourg', 'mahebourg'];

    for(let i = 0; i < mahebourgArr.length; i++){

        if(message.includes(mahebourgArr[i]) && message.includes("routes")){
            routesmahebourg();
        }
        
    }

    // Query on Bus Number
    if(message.includes("bus number") && message.includes("port louis")){
        speech.text = "The bus number of Port Louis shuttle is BM 1984";
    }

    if(message.includes("bus number") && message.includes("reduit")){
        speech.text = "The bus number of Reduit shuttle is 1679 AP 09";
    }

    if(message.includes("bus number") && message.includes("curepipe")){
        speech.text = "The bus number of Curepipe shuttle is G 1284 or D 1095";
    }

    if(message.includes("bus number") && message.includes("flacq")){
        speech.text = "The bus number of Flacq shuttle is BV 225";
    }

    if(message.includes("bus number") && message.includes("mahebourg")){
        speech.text = "The bus number of Mahebourg shuttle is 11414 DC 19 or 1990 MR 19";
    }

    // Pickup points
    if(message.includes("pickup point") && message.includes("port louis")){
        speech.text = "The pickup point of the Port Louis shuttle is at Abattoir Road Trou Fanfaron";
        chatcontainer.appendChild(shuttlemessages('<img src="img/portlouis.png"'));
    }

    if(message.includes("pickup point") && message.includes("reduit")){
        speech.text = "The pickup point of the Reduit shuttle is at the University of Mauritius Bus Stop";
        chatcontainer.appendChild(shuttlemessages('<img src="img/reduit.png"'));
    }

    if(message.includes("pickup point") && message.includes("curepipe")){
        speech.text = "The pickup point of the Curepipe shuttle is at Ste Therese Church";
        chatcontainer.appendChild(shuttlemessages('<img src="img/cpe.png"'));
    }

    if(message.includes("pickup point") && message.includes("flacq")){
        speech.text = "The pickup point of the Flacq shuttle is at Winners Boulet Rouge";
        chatcontainer.appendChild(shuttlemessages('<img src="img/flacq.png"'));
    }

    if(message.includes("pickup point") && message.includes("mahebourg")){
        speech.text = "The pickup point of the Mahebourg shuttle is at Kong Supermarket";
        chatcontainer.appendChild(shuttlemessages('<img src="img/mahebourg.png"'));
    }

    window.speechSynthesis.speak(speech);
    chatcontainer.appendChild(shuttlemessages(speech.text));
}

// Help
function help(){
        
    let resultsArr = ["Please use the provided keywords to obtain relevant information.", 
    "Keywords: pickup point, bus number, routes", "For Examples, ", "- What is the 'keyword' of 'location' shuttle", 
    "- What is the bus number of the port louis shuttle?", 
    "- What are the routes taken for the curepipe shuttle?"];

    for(let i = 0; i < resultsArr.length; i++){
        chatcontainer.appendChild(shuttlemessages(resultsArr[i]));

    }

    speech.text = "Your queries should specify the keyword and the shuttle you would like to take. ";

}

// Port Louis
function routesportlouis(){

    let heading = "* Port Louis to Middlesex University Mauritius Shuttle"
        
    let resultsArr = ["Abattoir Road Trou Fanfaron - 8:05", "Venus (Bus Stop) - 8:15", "Grand Riviere North West (Bus Stop) - 8:25", 
        "Petite Riviere (Bus Stop next to METRO parking) - 8:30", "Petite Riviere (Bus Stop opposite to Indian Oil) - 8:35", 
        "Canot (Bus Stop opposite to Albion) - 8:40", "Bambous - 8:50"];

    chatcontainer.appendChild(shuttlemessages(heading));
    chatcontainer.appendChild(shuttlemessages('<a href="https://goo.gl/maps/nZQQfdiByvEjYAaZA"> ⮞ Routes to be taken (Click Me!)</a>'));
    chatcontainer.appendChild(shuttlemessages("<>"));

    for(let i = 0; i < resultsArr.length; i++){
        chatcontainer.appendChild(shuttlemessages(resultsArr[i]));
    }

    chatcontainer.appendChild(shuttlemessages("<>"));
    speech.text = "The above are the routes taken and its estimate arrival time for the Port Louis shuttle";

}

// Reduit
function routesreduit(){

    let heading = "* Reduit to Middlesex University Mauritius Shuttle"
        
    let resultsArr = ["UOM (Bus Stop) - 8:05", "Quatre-Bornes (Bus Stop opposite to Intermart) - 8:20", "Palma/La louise (Bus Stop next to Pharmacy) - 8:25", 
        "Palma (Bus Stop next to Govt. School) - 8:30", "Beau Songes (Bus Stop next to reservoir) - 8:45"];

    chatcontainer.appendChild(shuttlemessages(heading));
    chatcontainer.appendChild(shuttlemessages('<a href="https://goo.gl/maps/XmhuUgXBektE2ad7A"> ⮞ Routes to be taken (Click Me!)</a>'));
    chatcontainer.appendChild(shuttlemessages("<>"));

    for(let i = 0; i < resultsArr.length; i++){
        chatcontainer.appendChild(shuttlemessages(resultsArr[i]));

    }

    chatcontainer.appendChild(shuttlemessages("<>"));
    speech.text = "The above are the routes taken and its estimate arrival time for the Reduit shuttle";

}

// Curepipe
function routescurepipe(){

    let heading = "* Curepipe to Middlesex University Mauritius Shuttle"
        
    let resultsArr = ["Ste Therese Church - 8:05", "Vacoas (near Vavid House) - 8:20", 
    "Jumbo bus station (Opposite to underground parking entrance) - 8:20", "Solferino - 8:30"];

    chatcontainer.appendChild(shuttlemessages(heading));
    chatcontainer.appendChild(shuttlemessages('<a href="https://goo.gl/maps/DFdc9fGfoydCCtYY7"> ⮞ Routes to be taken (Click Me!)</a>'));
    chatcontainer.appendChild(shuttlemessages("<>"));

    for(let i = 0; i < resultsArr.length; i++){
        chatcontainer.appendChild(shuttlemessages(resultsArr[i]));

    }

    chatcontainer.appendChild(shuttlemessages("<>"));
    speech.text = "The above are the routes taken and its estimate arrival time for the Curepipe shuttle";

}

// Flacq
function routesflacq(){

    let heading = "* Flacq to Middlesex University Mauritius Shuttle"
        
    let resultsArr = ["Winners Boulet Rouge - 7:25", "Camp de Masque (Community Centre) - 7:40", 
    "Medine Camp de Masque (Opposite Pailles en Queue Road) - 7:42", "Medine Camp de Masque (Shell Filling Station) - 7:45", 
    "Quartier Militaire (La gare) - 7:55", "Quartier Militaire (Bus Stop next to Church) - 8:00", 
    "Valetta (Bus Stop opposite to Shivala) - 8:05"];

    chatcontainer.appendChild(shuttlemessages(heading));
    chatcontainer.appendChild(shuttlemessages('<a href="https://goo.gl/maps/KX175vqhna23he3u9"> ⮞ Routes to be taken (Click Me!)</a>'));
    chatcontainer.appendChild(shuttlemessages("<>"));

    for(let i = 0; i < resultsArr.length; i++){
        chatcontainer.appendChild(shuttlemessages(resultsArr[i]));

    }
    
    chatcontainer.appendChild(shuttlemessages("<>"));
    speech.text = "The above are the routes taken and its estimate arrival time for the Flacq shuttle";

}

// Mahebourg
function routesmahebourg(){

    let heading = "* Mahebourg to Middlesex University Mauritius Shuttle"
        
    let resultsArr = ["Kong Supermarket - 7:25", "Plaine Magnien (State Bank) - 7:40", "Rose Belle (Plaisance Mall near KFC) - 7:45",
    "Nouvelle France (Last Bus Stop on Motorway towards Curepipe) - 7:55"];

    chatcontainer.appendChild(shuttlemessages(heading));
    chatcontainer.appendChild(shuttlemessages('<a href="https://goo.gl/maps/GiKJjhJ1trGXCRFM6"> ⮞ Routes to be taken (Click Me!)</a>'));
    chatcontainer.appendChild(shuttlemessages("<>"));

    for(let i = 0; i < resultsArr.length; i++){
        chatcontainer.appendChild(shuttlemessages(resultsArr[i]));

    }

    chatcontainer.appendChild(shuttlemessages("<>"));
    speech.text = "The above are the routes taken and its estimate arrival time for the Mahebourg shuttle";

}

// Intro 
function intro(){

    let intro = ["Hi, I am a virtual bot to help you with your queries on the Shuttle Service. Please use 'help' if you need any assistance."];
    
    speech.text = intro;
    window.speechSynthesis.speak(speech);
    chatcontainer.appendChild(shuttlemessages(intro));
}

recognition.onresult = function(event){

    let resultIndex = event.resultIndex;
    let transcript = event.results[resultIndex][0].transcript;

    inputtextmessages(transcript);        
    console.log(transcript);
}

function load() {

    intro();

    document.addEventListener("keyup", function(event) {

        let textmessage = document.getElementById("input-text").value;
        
        if (event.code === 'Enter') {

            if (!textmessage){
                console.log("field is empty");
            }

            else{
                chatcontainer.appendChild(studentmessages(textmessage));
                document.getElementById("input-text").value = '';

                chat(textmessage);
            }

        }
    
    });

}

window.onload = load;
