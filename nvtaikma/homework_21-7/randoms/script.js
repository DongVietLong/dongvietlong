const firstNames = ["Tài", "Trọng", "Văn","Long","Tú","Đoàn"];


const getRandomName=() =>
 `${firstNames[Math.floor(Math.random()*firstNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();

