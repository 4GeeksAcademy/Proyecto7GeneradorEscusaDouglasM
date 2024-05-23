const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generatorEscuse(who, action, what, when) {
  const numberRandom = arr => arr[Math.floor(Math.random() * arr.length)];

  return `${numberRandom(who)} ${numberRandom(action)} ${numberRandom(
    what
  )} ${numberRandom(when)}`;
}

function onLoad() {
  const excuseLink = document.getElementById("excuse");
  excuseLink.innerHTML = generatorEscuse(who, action, what, when);
}
window.onload = onLoad;
