const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');



// Scroll to botttom//

function scrollDown() {
window.scrollBy({
    top: window.innerHeight * 1.3, // scrolls by 100vh
    behavior: 'smooth'
})
}



// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

//for scrolling to skills, project section and contact section

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();  // prevent default anchor behavior
    
    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



const hoverSign = document.querySelector(".hover-sign");




// About Modal //

// const aboutLink = document.getElementById("openAbout");
//     const aboutModal = document.getElementById("aboutModal");
//     const closeBtn = document.querySelector(".close-btn");

//     aboutLink.addEventListener("click", function (e) {
//       e.preventDefault(); // Prevent page jump
//       aboutModal.style.display = "block";
//     });

//     closeBtn.addEventListener("click", function () {
//       aboutModal.style.display = "none";
//     });

//     window.addEventListener("click", function (e) {
//       if (e.target === aboutModal) {
//         aboutModal.style.display = "none";
//       }
//     });






const videoList = [video1, video2, video3, video4];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})






// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
