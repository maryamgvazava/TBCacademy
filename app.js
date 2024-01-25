

let arrowDown = document.querySelectorAll('.questions')
let rightArrow  = document.querySelector('.rightArrow')
leftArrow = document.querySelector('.leftArrow')
let partnerImg = document.querySelectorAll('.partnerImg');
 let slide1partnersInfo  = document.querySelector('.slide1partnersInfo');
 let slide2partnersInfo  = document.querySelector('.slide2partnersInfo');
 let arr = [
  {
    key0: "https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_308,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png width='246'  height='74'",
    key1: "https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_301,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png width='241'  height='80'",
    key2: "https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_313,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png width='250'  height='45' ",
  },
  {
    key3: "https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_310,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png width='248'  height='71'",
    key4: "https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_234,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png width='187'  height='64'",
    key5: "https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_390,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png width='315'  height='60'",
  },
  {
    key6: "https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_284,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png width='227'  height='64'",
  }
];

let counter = 0;  
showImages(arr[counter]);
showImages2(arr[counter + 1]); // Assuming you want to show the next set of images in slide2partnersInfo initially

rightArrow.addEventListener('click', function () {
  counter = (counter + 1) % arr.length;
  showImages(arr[counter]);
  showImages2(arr[(counter + 1) % arr.length]); // Use modulo to wrap around when reaching the end
  console.log(counter);
});
leftArrow.addEventListener('click', function () {
  counter = (counter - 1 + arr.length) % arr.length;
  showImages(arr[counter]);
  console.log(arr[counter-1])
  showImages2(arr[counter-1]);

});



let dots = document.querySelectorAll('.dots');
let dotsArr = Array.from(dots)
console.log(dotsArr)

dotsArr[0].addEventListener('click', function(){showImages(arr[0])})
dotsArr[1].addEventListener('click', function(){showImages(arr[1])})
dotsArr[2].addEventListener('click', function(){showImages(arr[2])})

function showImages(obj) {
  let members = 0;
  slide1partnersInfo.innerHTML = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let img1 = `<img class="fading-in partnerImg" src="${obj[key]}" alt="">`;
      slide1partnersInfo.innerHTML += img1; 
    }
    members++;
    slide1partnersInfo.style.gridTemplateColumns = `repeat(${members}, 1fr)`;
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
    slide2partnersInfo.style.gridTemplateColumns = `repeat(${members}, 1fr)`;
  }
}