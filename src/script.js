//Languages ----------------------------------------------------------
function translate() {
    var lg = localStorage.getItem("language");
    console.log(lg);

    if (lg === null || lg === undefined) {
        localStorage.setItem("language", "fr");
        return;
    }

    if (lg == "fr") {
        $(".eng").hide();
        $(".fr").show();
    }

    if (lg == "eng") {
        $(".fr").hide();
        $(".eng").show();
    }
}

translate();
translate();



$("#btn_fr").click(() => {
    localStorage.setItem("language", "fr");
    translate();
})

$("#btn_eng").click(() => {
    localStorage.setItem("language", "eng");
    translate();
})

//VIDEO
var myVideo = document.getElementById('video');
myVideo.volume= 0.07;
myVideo.addEventListener('click', function () {
    if(myVideo.muted) {
        myVideo.volume = 0.07;
    } else {
        myVideo.volume = 0;
    }
}, false);