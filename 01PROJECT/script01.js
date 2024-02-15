// mouse cursor
const cursor = document.querySelector(".cursor");
console.log(cursor);
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// close
const button = document.querySelector(".close");

button.onclick = function () {
  history.back();
};

// 좋아요 heart
const like = document.querySelector(".like");

like.addEventListener("click", () => {
  like.classList.toggle("active");
});

const like02 = document.querySelector(".like02");
const likeText = document.querySelector(".like-text");

like02.addEventListener("click", () => {
  like02.classList.toggle("active");
  likeText.classList.toggle("active");
});

// text 나오게하기
const shortText = document.querySelector(".shortText");
const plus = document.querySelector(".plus");
const hideContent = document.querySelector(".hide-content");

plus.addEventListener("click", () => {
  plus.classList.toggle("active");
  shortText.classList.toggle("active");
  hideContent.classList.toggle("active");
});

hideContent.addEventListener("click", () => {
  plus.classList.toggle("active");
  shortText.classList.toggle("active");
  hideContent.classList.toggle("active");
});

// img slide
const container = document.querySelector(".pic-content");
const arrows = document.querySelectorAll(".arrow");
const pics = ["1-1.jpg", "1-2.jpg", "1-3.jpg", "1-4.jpg", "1-5.jpg"];

container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";
container.style.backgroundImage = `url(./img/slide/${pics[0]})`;

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(./img/slide/${pics[i]})`;
  });
});
