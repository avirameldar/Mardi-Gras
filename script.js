const toggle = document.getElementsByClassName('toggle')[0];
const links = document.getElementsByClassName('links')[0];

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
});

// Gallery Script

const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

// Video Gallery Script

let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video iframe');
let title = document.querySelector('.main-video .video-title');

listVideo.forEach(iframe => {
    iframe.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        iframe.classList.add('active');
        if (iframe.classList.contains('active')) {
            let src = iframe.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = iframe.children[1].innerHTML;
            title.innerHTML = text;
        }
    };
});

// Accordions FAQ

const accordion = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}