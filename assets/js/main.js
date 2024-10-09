document.addEventListener("click", function () {
  const audio = document.querySelector("audio");
  audio.play();
});

let queryData = getSearchData();
let animateHeartCanvas = new AnimateHeartCanvas(
  Number(queryData.hMin),
  Number(queryData.hMax),
  Number(queryData.countHeart),
  Number(queryData.sizeMin),
  Number(queryData.sizeMax),
  queryData.bgColor
);

function getSearchData() {
  let searchString = location.search;
  if (searchString) {
    let obj = {};
    searchString = searchString.substring(1, searchString.length);
    let tempArray = searchString.split("&");
    tempArray.forEach((item) => {
      obj[item.split("=")[0]] = decodeURIComponent(item.split("=")[1]);
    });
    return obj;
  } else {
    return false;
  }
}
let love = setInterval(function () {
  let r_num = Math.floor(Math.random() * 40) + 1;
  let r_size = Math.floor(Math.random() * 65) + 10;
  let r_left = Math.floor(Math.random() * 100) + 1;
  let r_bg = Math.floor(Math.random() * 25) + 100;
  let r_time = Math.floor(Math.random() * 5) + 5;

  // add trái tim
  for (let i = 0; i < 5; i++) {
    // tạo vòng lặp cho trái tim
    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        (r_size - i * 5) +
        "px;height:" +
        (r_size - i * 5) +
        "px;left:" +
        (r_left + i * r_num) +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        (r_bg + i * 5) +
        ",1);-webkit-animation:love " +
        (r_time + i) +
        "s ease;-moz-animation:love " +
        (r_time + i) +
        "s ease;-ms-animation:love " +
        (r_time + i) +
        "s ease;animation:love " +
        (r_time + i) +
        "s ease'></div>"
    );
  }

  $(".heart").each(function () {
    let top = $(this)
      .css("top")
      .replace(/[^-\d\.]/g, "");
    let width = $(this)
      .css("width")
      .replace(/[^-\d\.]/g, "");
    if (top <= -100 || width >= 150) {
      $(this).detach();
    }
  });
}, 500);

let datetxt = "14 - 10 - 2001";
let datatxtletter = "Chúc mừng sinh nhật em 🎂❤️. \n  Cảm ơn em đã đến bên anh và làm cuộc sống này trở nên tuyệt vời hơn. Anh chúc em luôn xinh đẹp, hạnh phúc và đạt được mọi ước mơ mà em mong muốn nhé. Anh sẽ luôn ở đây, yêu thương và đồng hành cùng em trong mọi hành trình. Yêu em rất nhiều, chúc em một ngày sinh nhật thật trọn vẹn và ngọt ngào!";
let titleLetter = "Gửi em";
let charArrDate = datetxt.split("");
let charArrDateLetter = datatxtletter.split("");
let charArrTitle = titleLetter.split("");
let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;
let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter p");

setTimeout(function () {
  timeDatetxt = setInterval(function () {
    if (currentIndex < charArrDate.length) {
      date__of__birth.textContent += charArrDate[currentIndex];
      currentIndex++;
    } else {
      let i = document.createElement("i");
      i.className = "fa-solid fa-star";
      document.querySelector(".date__of__birth").prepend(i);
      document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
      clearInterval(timeDatetxt);
    }
  }, 100);
}, 12000);

var intervalContent;
var intervalTitle;
$("#btn__letter").on("click", function () {
  $(".box__letter").slideDown();
  setTimeout(function () {
    $(".letter__border").slideDown();
  }, 1000);

  setTimeout(function () {
    intervalTitle = setInterval(function () {
      if (currentIndexTitle < charArrTitle.length) {
        document.querySelector(".title__letter").textContent +=
          charArrTitle[currentIndexTitle];
        let i = document.createElement("i");
        i.className = "fa-solid fa-heart";
        document.querySelector(".title__letter").appendChild(i);
        currentIndexTitle++;
      } else {
        clearInterval(intervalTitle);
      }
    }, 100);
  }, 2000);

  setTimeout(function () {
    document.querySelector("#heart__letter").classList.add("animationOp");
    document.querySelector(".love__img").classList.add("animationOp");
    document.querySelector("#mewmew").classList.add("animationOp");
  }, 2800);

  setTimeout(function () {
    document.querySelectorAll(".heart").forEach((item) => {
      item.classList.add("animation");
    });
  }, 3500);

  setTimeout(function () {
    intervalContent = setInterval(function () {
      if (currentIndexLetter < charArrDateLetter.length) {
        text__letter.textContent += charArrDateLetter[currentIndexLetter];
        currentIndexLetter++;
      } else {
        clearInterval(intervalContent);
      }
    }, 50);
  }, 6000);
});

$(".close").on("click", function () {
  clearInterval(intervalContent);
  document.querySelector(".title__letter").textContent = "";
  text__letter.textContent = "";
  currentIndexLetter = 0;
  currentIndexTitle = 0;
  document.querySelector("#heart__letter").classList.remove("animationOp");
  document.querySelector(".love__img").classList.remove("animationOp");
  document.querySelector("#mewmew").classList.remove("animationOp");
  document.querySelectorAll(".heart").forEach((item) => {
    item.classList.remove("animation");
  });
  $(".box__letter").slideUp();
  $(".letter__border").slideUp();
});

//responsive mobile 

function mobile() {
  const app = {
    timeout: function (txt, dom) {
      let currentIndex = 0;
      let charArr = txt.split("");
      intervalMobile = setInterval(function () {
        if (currentIndex < charArr.length) {
          dom.textContent += charArr[currentIndex];
          currentIndex++;
        } else {
          clearInterval(intervalMobile);
        }
      }, 200);
    },
  };
  return app;
}
const fcMobile = mobile();
if (window.innerWidth < 768) {
  setTimeout(() => {
    fcMobile.timeout("14", document.querySelector(".day"));
  }, 5000);
  setTimeout(() => {
    fcMobile.timeout("10", document.querySelector(".month"));
  }, 6000);
}
//Click chuột để phát nhạc
document.addEventListener("click", function () {
  const audio = document.querySelector("audio");
  audio.play();
});

// Tạo pháo hoa khi click chuột
document.addEventListener("click", function (event) {
  createFirework(event.pageX, event.pageY);
});

function createFirework(x, y) {
  var firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = x + "px";
  firework.style.top = y + "px";
  document.body.appendChild(firework);

  // Xóa pháo hoa sau khi hoàn thành
  setTimeout(function () {
    firework.remove();
  }, 1000);
}
