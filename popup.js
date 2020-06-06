let showURL = document.getElementById('url');
let showTime = document.getElementById('time');

chrome.storage.sync.get(['url', 'startTime'], function(data) {
  console.log(data)
  showURL.innerHTML=data.url.toString()
  showTime.innerHTML=data.startTime.toString()
});
