let rightArrow  = document.querySelector('.rightArrow')
leftArrow = document.querySelector('.leftArrow')
let slide1partnersInfo  = document.querySelector('.slide1partnersInfo');
let slide2partnersInfo  = document.querySelector('.slide2partnersInfo');
var navbarL = document.querySelector('.navXl');
let navMd = document.querySelector('.navMd')
let slideRightMenu = document.querySelector(".slideRightMenu")
let togglTopmenuStick = document.querySelector(".togglTopmenuStick")
let toggleMiddlemenuStick = document.querySelector(".toggleMiddlemenuStick")
let toggleBottommenuStick = document.querySelector(".toggleBottommenuStick")
let toggleMenuBtn = document.querySelector(".toggleMenuBtn")
let togglMenu = document.querySelector(".togglMenu")


 let arr = [
  {
    key0: 'https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_308,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png width="246"  height="74"',
    key1: 'https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_301,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png width="241"  height="80"',
    key2: 'https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_313,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png width="250"  height="45" ',
  },
  {
    key3: 'https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_310,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png width="248"  height="71"',
    key4: 'https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_234,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png width="87" height="45"',
    key5: 'https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_390,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png width="315"  height="95"',
  },
  {
    key6: 'https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_284,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png width="227"  height="64"',
  }
];

// change image syses dynamically
const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let changeParameters = function(url, width, height) {
  return url.replace(/width="\d+"/, `width="${width}"`).replace(/height="\d+"/, `height="${height}"`);
}
if (windowWidth < 425) {
  arr[0].key0 = changeParameters(arr[0].key0, 200, 66);
  arr[0].key1 = changeParameters(arr[0].key1, 200, 67);
  arr[0].key2 = changeParameters(arr[0].key2, 131, 45);
  arr[1].key3 = changeParameters(arr[1].key3, 180, 52);
  arr[1].key4 = changeParameters(arr[1].key4, 200, 45);
  arr[1].key5 = changeParameters(arr[1].key5, 200, 66);
  arr[2].key6 = changeParameters(arr[2].key6, 200, 65);
}


// slowly disappear navbar when scrolling down
      window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
          navbarL.style.opacity = "0.8";
          navbarL.style.transition = "all .5s ease";
          navMd.style.transition = "all .5s ease";
          navMd.style.opacity = "0.8";
        } else {
          navbarL.style.opacity = "1";
          navbarL.style.transition = "all .5s ease";
          navMd.style.opacity = "1";
          navMd.style.transition = "all .5s ease";
        }

      });

// starting positions
let counter = 0;  
showImages(arr[counter]);
showImages2(arr[counter + 1]); 


// right / left arrow clicks
rightArrow.addEventListener('click', function () {
  stopFading()
  counter = (counter + 1) % arr.length;
  showImages(arr[counter]);
  showImages2(arr[(counter + 1) % arr.length]); 
});
leftArrow.addEventListener('click', function () {
  stopFading()
  counter = (counter - 1 + arr.length) % arr.length;
  showImages(arr[counter]);
  showImages2(arr[counter-1]);
});


// auto slider
function fadeImages() {
  counter = (counter + 1) % arr.length;
  showImages(arr[counter]);
  showImages2(arr[(counter + 1) % arr.length]);
}
let intervalId = setInterval(fadeImages, 4000);

function stopFading() {
  clearInterval(intervalId);
}

    
// dot slides
let dots = document.querySelectorAll('.dots');
let dotsArr = Array.from(dots)

dotsArr[0].addEventListener('click', function(){
  showImages(arr[0]); 
  showImages2(arr[2]); 
  stopFading()
})

dotsArr[1].addEventListener('click', function(){showImages(arr[1]); showImages2(arr[0]); stopFading()})
dotsArr[2].addEventListener('click', function(){showImages(arr[2]); showImages2(arr[1]); stopFading()})



// defining sliders functions
function showImages(obj) {
  let members = 0;
  slide1partnersInfo.innerHTML = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let img1 = `<img class="fading-in partnerImg" src="${obj[key]}" alt="">`;
      slide1partnersInfo.innerHTML += img1; 
    }
    members++;
    members === 1 ? slide1partnersInfo.style.justifyContent = "center" : slide1partnersInfo.style.justifyContent = "space-between";
  }
}

function showImages2(obj) {
  let members = 0;
  slide2partnersInfo.innerHTML = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let img2 = `<img class="fading-out partnerImg" src="${obj[key]}" alt="">`;
      slide2partnersInfo.innerHTML += img2; 
    }
    members++;
    members === 1 ? slide2partnersInfo.style.justifyContent = "center" : slide2partnersInfo.style.justifyContent = "space-between";
      }
}


// toggle answers to the questions
questions.forEach(toggler => {
  toggler.addEventListener("click", () => {
    let nextSiblingElement = toggler.nextElementSibling;
    nextSiblingElement.classList.toggle('showAnswer'); 
  });
});


// animating togglable navbar-s icon and -disabling- scrolling while menu bar is open
slideRightMenu.addEventListener("click", function() {
  togglMenu.classList.remove('show')
  togglTopmenuStick.classList.remove("rotateStick");
  toggleBottommenuStick.classList.remove("rotateStick");
  toggleMiddlemenuStick.classList.remove("rotateCentralStick")
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";

});
// animating togglable navbar-s icon and -enabling- scrolling while menu bar is closed
toggleMenuBtn.addEventListener("click", function() {
  togglTopmenuStick.classList.add("rotateStick");
  toggleBottommenuStick.classList.add("rotateStick");
  toggleMiddlemenuStick.classList.add("rotateCentralStick");
  togglMenu.classList.add('show')
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

});
