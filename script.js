
var photoString = "<img src='images/dp.jpg' class='resumeThumbnail'><label>I LOVE YOU</label>";
var firstpicString = "<img src='images/FIRST_PIC.jpg' class='resumeThumbnail'><label>First meetup</label><img src='images/f1.jpg' class='resumeThumbnail'><label>Firstpic</label><img src='images/F13.jpg' class='resumeThumbnail'><img src='images/f2.jpg' class='resumeThumbnail'><label>First Selfie</label><img src='images/f3.jpg' class='resumeThumbnail'><label>First Ride </label><img src='images/f4.jpg' class='resumeThumbnail'><label>First meetup with grandparents</label><img src='images/f5.jpg' class='resumeThumbnail'><label>Our Journery for an offical peenukanal</label><img src='images/f6.jpg' class='resumeThumbnail'><label>Offical Peenukanal</label><img src='images/f7.jpg' class='resumeThumbnail'><label>First dayout</label><img src='images/f8.jpg' class='resumeThumbnail'><label>Most beautiful hangout </label>";
var preweddingString = "<label>Pre-Wedding</label><img src='images/b1.jpg' class='resumeThumbnail'><img src='images/b2.jpg' class='resumeThumbnail'><img src='images/b3.jpg' class='resumeThumbnail'><img src='images/b4.jpg' class='resumeThumbnail'><img src='images/b5.jpg' class='resumeThumbnail'><img src='images/b7.jpg' class='resumeThumbnail'><img src='images/b8.jpg' class='resumeThumbnail'><img src='images/b9.jpg' class='resumeThumbnail'><img src='images/b10.jpg' class='resumeThumbnail'><img src='images/b11.jpg' class='resumeThumbnail'>"
var postweddingString = "<label>Our Journery starts.....</label><img src='images/c1.jpg' class='resumeThumbnail'><img src='images/c2.jpg' class='resumeThumbnail'><img src='images/c3.jpg' class='resumeThumbnail'><img src='images/c4.jpg' class='resumeThumbnail'><img src='images/c5.jpg' class='resumeThumbnail'><img src='images/c6.jpg' class='resumeThumbnail'><img src='images/c7.jpg' class='resumeThumbnail'><img src='images/113.jpg' class='resumeThumbnail'><img src='images/c8.jpg' class='resumeThumbnail'><img src='images/c9.jpg' class='resumeThumbnail'><img src='images/c10.jpg' class='resumeThumbnail'><img src='images/c11.jpg' class='resumeThumbnail'><img src='images/c12.jpg' class='resumeThumbnail'><img src='images/c13.jpg' class='resumeThumbnail'><img src='images/c14.jpg' class='resumeThumbnail'>"
var journeyString ="<label>Our Journey</label><img src='images/1.jpg' class='resumeThumbnail'><img src='images/2.jpg' class='resumeThumbnail'><img src='images/3.jpg' class='resumeThumbnail'><img src='images/4.jpg' class='resumeThumbnail'><img src='images/5.jpg' class='resumeThumbnail'><img src='images/6.jpg' class='resumeThumbnail'><img src='images/7.jpg' class='resumeThumbnail'><img src='images/8.jpg' class='resumeThumbnail'><img src='images/9.jpg' class='resumeThumbnail'><img src='images/10.jpg' class='resumeThumbnail'><img src='images/11.jpg' class='resumeThumbnail'><img src='images/12.jpg' class='resumeThumbnail'><img src='images/13.jpg' class='resumeThumbnail'><img src='images/14.jpg' class='resumeThumbnail'><img src='images/15.jpg' class='resumeThumbnail'><img src='images/16.jpg' class='resumeThumbnail'><img src='images/17.jpg' class='resumeThumbnail'><img src='images/18.jpg' class='resumeThumbnail'><img src='images/19.jpg' class='resumeThumbnail'><img src='images/20.jpg' class='resumeThumbnail'><img src='images/21.jpg' class='resumeThumbnail'><img src='images/22.jpg' class='resumeThumbnail'><img src='images/23.jpg' class='resumeThumbnail'><img src='images/24.jpg' class='resumeThumbnail'><img src='images/25.jpg' class='resumeThumbnail'><img src='images/26.jpg' class='resumeThumbnail'><img src='images/27.jpg' class='resumeThumbnail'><img src='images/28.jpg' class='resumeThumbnail'><img src='images/29.jpg' class='resumeThumbnail'><img src='images/30.jpg' class='resumeThumbnail'><img src='images/31.jpg' class='resumeThumbnail'><img src='images/32.jpg' class='resumeThumbnail'><img src='images/33.jpg' class='resumeThumbnail'><img src='images/34.jpg' class='resumeThumbnail'><img src='images/35.jpg' class='resumeThumbnail'><img src='images/36.jpg' class='resumeThumbnail'><img src='images/37.jpg' class='resumeThumbnail'><img src='images/38.jpg' class='resumeThumbnail'><img src='images/39.jpg' class='resumeThumbnail'><img src='images/40.jpg' class='resumeThumbnail'><img src='images/41.jpg' class='resumeThumbnail'><img src='images/42.jpg' class='resumeThumbnail'><img src='images/43.jpg' class='resumeThumbnail'>"
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello My dear Minku 👋🏻,<br>with Lots of Love<br>  <span class='bold'><a class='alink'>Am your Dinku</a>.</span><br><br>Hope your cherish this beautiful day<span class='bold'> I wanted to take a moment to express my feelings for you and put them into words. </span><br><br>I am eager to express it<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our blessings ...<br>Our Journey of Love❤️ <br><span class='bold'>'photo'</span> - Gods Blessing<br><span class='bold'>'firstpic'</span> <br><span class='bold'>'prewedding'</span> <br><span class='bold'>'postwedding'</span> <br><span class='bold'>'journey'</span> <br><span class='bold'>'My heart'</span> <br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
       
        case "message":
            sendTextMessage("<span class='sk'>My heart 😍 is overflowing with gratitude and love. You are the light of my life, my partner, my soulmate, and my best friend. I am so blessed to have you by my side through all the ups and downs of life.....From the moment I saw you, I knew that you were the one I had been waiting for my entire life. </span>");
            break;
           
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 <br><br>🧜🏻‍♂️Designed and Developed by <span class='bold'>SanojTintu </a> with Lots ❤️ and Prayer</span>");
            break;
        
        case "photo":
                sendTextMessage(photoString);
                break;

        case "firstpic":
                    sendTextMessage(firstpicString);
                    break;     
        case "prewedding":
                        sendTextMessage(preweddingString);
                        break; 
        case "postwedding":
                        sendTextMessage(postweddingString);
                        break;    
        case "journey":
                        sendTextMessage(journeyString);
                        break;                            
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you Minku...😢<br>Send 'help' Your Dinku Will come to Help You .");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
