let userName = prompt("Adınız nedir? ");
let myName = document.querySelector("#myName");

if (userName) {
  myName.innerHTML = ` Merhaba, <strong>${userName}</strong>! Hoş Geldin!`;
} else {
  myName.innerHTML = ` Merhaba, <strong>İSİMSİZ</strong>! Hoş Geldin!`;
}

function showTime() {
  let myClock = document.querySelector("#myClock");
  let date = new Date();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  myClock.innerHTML = `${date.getHours()} : ${date.getMinutes()}: ${date.getSeconds()} ${
    days[date.getDay()]
  }`;
}

setInterval(showTime);
