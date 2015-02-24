//alert('Warblers in action');
var muge = "sezen+aksu";
window.asd = "hello_world";
var videoContentArray = Array();
console.log('documentRead2');
window.onload = function() { //sayfa yuklenince
    var getTags = function() { // getTags fonksiyonu tagleri alacak servis -> response -> action!
        var siteName = ""; //youtube / fizy kontrol
        var siteControl = document.domain;
        console.log(siteControl);
        if (siteControl != "fizy.com") {
            siteName = "youtube";
        } else {
            siteName = "fizy";
        }
        var videoContent = "";
        if (siteName == "youtube") {
            var metaTags = document.getElementsByTagName("meta");
            for (var i = 0; i < metaTags.length; i++) {
                if (metaTags[i].getAttribute("property") == "og:video:tag") { //video tag'inden alinan degerler tolgaya yolla!
                    videoContent = metaTags[i].getAttribute("content");
                    console.log('videoContent = ' + videoContent);
                    videoContentArray.push(videoContent);
                }
            }
        } else {}
        var storage = chrome.storage.local;
        storage.set({
            'tags': videoContentArray[0]
        }, function() {
            // Notify that we saved.
        });
    }
    var content = getTags();
    console.log('content = ' + content);
    //servisden gelen veriler popup.htmlde doldurulacak.
    //chrome.browserAction.setBadgeText({text : "2"}); // bu kod servisden gelen cevap kadar yazilacak!
}