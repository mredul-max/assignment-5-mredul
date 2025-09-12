  
  let coins = 100;
let copyCount = 0;
let heartCount = 0;

function addFavorite() {
  heartCount++;
  document.getElementById('heart-count').innerText = heartCount;
}

function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert(`Copied ${number} to clipboard!`);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
  });


}
function makeCall(serviceName, number) {
  if (coins < 20) {
    alert("Not enough coins to make the call!");
    return;
  }

  alert(`Calling ${serviceName} at ${number}`);
  coins -= 20;
  document.getElementById('coin-count').innerText = coins;

  const time = new Date().toLocaleTimeString(); // ⏰ Get current time
  const historyItem = document.createElement('li');
  historyItem.textContent = `${serviceName} - ${number} - ${time}`;
  document.getElementById('call-history').appendChild(historyItem);
}

function clearHistory() {
  document.getElementById('call-history').innerHTML = '';
}

