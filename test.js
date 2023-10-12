const now = new Date();
const daysInThisMonths = () => {
  const getYear = now.getFullYear();
  const getMonth = now.getMonth();

  const lastDayOfTheMonth = new Date(getYear, getMonth + 1, 0);
  const lastDayOfThisMonth = lastDayOfTheMonth.getDate();
  return lastDayOfThisMonth;
};
console.log(daysInThisMonths());

const createBoxes = () => {
  const tombola = document.getElementById("tombola");

  for (let i = 1; i < 77; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("contenitore");

    const dayContent = document.createElement("h3");
    dayContent.innerText = i;

    dayDiv.appendChild(dayContent);
    tombola.appendChild(dayDiv);

    dayDiv.onclick = function (e) {
      console.log("Hai cliccato la cella numero", i + 1);
    };

    const formTheDay = document.getElementById("littleBox");
    formTheDay.innerText = i + 1;
    formTheDay.classList.add("smallBox");
  }
};

const touchTheButton = (e) => {
  e.preventDefault();

  e.currentTarget.classList.add("selected");
};

let button = document.createElement("button");
button.innerHTML = "Hit me here!";
let main = document.getElementsByClassName("secondBox")[0];
main.appendChild(button);

window.onload = () => {
  createBoxes();
};
