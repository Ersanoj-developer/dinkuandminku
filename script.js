var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
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
       
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currsssssssssssssssssssssssssently pusuing B.Tech degree in Computer Science Engineering from TKIET Kolhapur<br>Passing Year : 2023<br><br>I have completed my Diploma from Government Polytechnic Karad<br>Passing Year:2020<br>Result:86.06%<br><br>I have completed my Secondary school from local school known as SWV<br>Passing Year:2016");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
           
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 <br><br>👨🏻‍💻 Designed and Developed by <span class='bold'>Sanoj ❤️ Tintu </a> with Lots ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
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
