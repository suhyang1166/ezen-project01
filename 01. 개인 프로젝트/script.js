const gnb = document.querySelector("#main-bar");
const gototop = document.querySelector(".gototop");
const like = document.querySelector(".like");
const logo = document.querySelector("#logo");

console.log(logo);

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

// jQuery

// scrollTo
// $("a").click(function (e) {
//   $.scrollTo(this.hash || 0, 1200);
//   e.preventDefault();
// });

// wow
let wow = new WOW({
  boxClass: "wow",
  offset: 120,
  mobile: false,
  live: true,
});
wow.init();
