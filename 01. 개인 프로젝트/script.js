const gnb = document.querySelector("#main-bar");
const gototop = document.querySelector(".gototop");
const like = document.querySelector(".like");
const logo = document.querySelector("#logo");
const trigger = document.querySelector(".trigger");
const gnbMobile = document.querySelector(".gnb");
const gnbA = document.querySelector(".gnb li a");

console.log(logo);

// mobile gnb
trigger.addEventListener("click", () => {
  trigger.classList.toggle("active");
  gnbMobile.classList.toggle("active");
});

gnbA.addEventListener("click", () => {
  gnbMobile.classList.remove("active");
  trigger.classList.remove("active");
});

// gnb 컬러 변경
window.addEventListener("scroll", () => {
  if (window.scrollY > 680) {
    gnb.classList.add("active");
    gototop.classList.add("active");
    logo.classList.add("active");
  } else {
    gnb.classList.remove("active");
    gototop.classList.remove("active");
    logo.classList.remove("active");
  }
});

// mouse cursor
const cursor = document.querySelector(".cursor");
console.log(cursor);
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 텍스트 타이핑
const phone = document.querySelector(".hello-content");
const textArr = ["H", "E", "L", "L", "O", ",", " ", "I", "'", "m"];
const move = document.querySelector(".text-ani");
let isClicked = false;

function blink() {
  move.classList.toggle("active");
}

phone.addEventListener("click", function (event) {
  if (!isClicked) {
    isClicked = true;
    textAni(textArr.slice());
    event.stopPropagation();

    // a 태그 좌표로 이동하는 부분 추가
    const targetId = document.querySelector("#third-move");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});

function textAni(randomArr) {
  if (randomArr.length > 0) {
    const char = randomArr.shift();
    move.textContent += char;
    setTimeout(function () {
      textAni(randomArr);
    }, 300);
  }
}

// 좋아요 heart
like.addEventListener("click", () => {
  like.classList.toggle("active");
});

// video slide
// const video = document.querySelector(".video-slide");
// const arrows = document.querySelectorAll(".arrow");
// const vids = ["v1.mp4", "v2.mp4", "v3.mp4", "v4.mp4"];

// // video.style.backgroundSize = "cover";
// // video.style.backgroundPosition = "center";
// // video.style.backgroundImage = `url(./video/${vids[0]})`;
// video.src = `url(./video/${vids[0]})`;

// let i = 0;

// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", (e) => {
//     console.log("click");
//     if (e.target.id === "left") {
//       i--;
//       if (i < 0) {
//         i = vids.length - 1;
//       }
//     } else if (e.target.id === "right") {
//       i++;
//       if (i >= vids.length) {
//         i = 0;
//       }
//     }
//     // video.style.backgroundImage = `url(./video/${vids[i]})`;
//     video.src = `url(./video/${vids[i]})`;
//   });
// });
