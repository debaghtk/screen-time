let thead = document.getElementById('dynamic-list');

chrome.storage.local.get(['urls'], function(data) {
  console.log(data)
  for (let step = 0; step < data.urls.length; step++) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = data.urls[step].toString();
    thead.appendChild(tr);
  }
});
