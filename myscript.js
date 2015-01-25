
console.log('myScript6');
console.log(chrome);
chrome.browserAction.setBadgeText({text : "2"});
chrome.alarms.create({delayInMinutes: 0.1});
window.onload = function() {
    //Register a button click handler that calls the background window.
    //chrome.browserAction.setBadgeText({text : "selam"});
    var metaTags=document.getElementsByTagName("meta");

    //console.log('onload');
    var videoContent = "";
    var videoContentArray = Array();
    for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute("property") == "og:video:tag") {
            videoContent = metaTags[i].getAttribute("content");
            //console.log('videoContent = '+videoContent);
            videoContentArray.push(videoContent);
        }
    }
    console.log(videoContentArray);
};
