//alert('Warblers in action');
window.onload = function() { //sayfa yuklenince
  var getTags = function(){ // getTags fonksiyonu tagleri alacak servis -> response -> action!
    var siteName = ""; //youtube / fizy kontrol
    var videoContentArray = Array(); 
    var siteControl = document.domain;
    console.log(siteControl);
    if(siteControl != "fizy.com"){
      siteName = "youtube";
    }else{
      siteName = "fizy";
    }

    var videoContent = "";
    if(siteName == "youtube"){
      var metaTags=document.getElementsByTagName("meta");
      for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute("property") == "og:video:tag") { //video tag'inden alinan degerler tolgaya yolla!
          videoContent = metaTags[i].getAttribute("content");
          console.log('videoContent = '+videoContent);
          videoContentArray.push(videoContent);
        }
      }
    }else{
    //  console.log('getting Child Node');
    //  //var metaTags = document.getElementsByClassName('artist')[0].childNodes[0].firstChild;
    //  var a = 0;
    //  var metaTags = null;
    //
    //    metaTags = document.getElementsByClassName('artist');
    //  for(var i = 0 ; i< metaTags.length; i++){
    //    var innerTag = metaTags[i].childNodes[0].firstChild;
    //    videoContentArray.push(innerTag);
    //  }
    }

    return videoContentArray;
  }


  //Register a button click handler that calls the background window.
  //chrome.browserAction.setBadgeText({text : "selam"});


  document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      alert("stateChange");
    }
  }


  var content = getTags();

  console.log('content = ' + content);

  //servisden gelen veriler popup.htmlde doldurulacak.


  //chrome.browserAction.setBadgeText({text : "2"}); // bu kod servisden gelen cevap kadar yazilacak!





};