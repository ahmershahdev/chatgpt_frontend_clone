setTimeout(function() {
    var textarea = document.getElementsByClassName("input")[0];
    var sendIcon = document.getElementById("sendIcon");
    var micIcon = document.getElementById("voiceIcon");
    
    sendIcon.style.display = "none";
    micIcon.style.display = "inline-block";
    textarea.oninput = function() {
        if (textarea.value.trim() !== "") {
            sendIcon.style.display = "inline-block";
            micIcon.style.display = "none";
        } else {
            sendIcon.style.display = "none";
            micIcon.style.display = "inline-block";
        }
    };
}, 100);