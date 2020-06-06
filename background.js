chrome.tabs.onActivated.addListener(function(tabId, moveInfo) {
  chrome.tabs.query({active: true}, function(tabs) {
    const url = new URL(tabs[0].url)
    chrome.storage.sync.set({hostname: url.origin, startTime: Date.now()}, function(){
    });
  });
});
