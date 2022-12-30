function updateTime() {

  // buenos-aires
  let bsasElement = document.querySelector("#buenos-aires");
  if (bsasElement) {
    let bsasDateElement = bsasElement.querySelector(".date");
    let bsasTimeElement = bsasElement.querySelector(".time");
    let bsasTime = moment().tz("America/Buenos_Aires");

    bsasDateElement.innerHTML = bsasTime.format("MMMM	Do YYYY");
    bsasTimeElement.innerHTML = bsasTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/Paris");

    londonDateElement.innerHTML = londonTime.format("MMMM	Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateMyCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">Go Back</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateMyCity);