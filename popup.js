//When DOM loaded we attach click event to button

$(document).ready(function() {
console.log('documentRead'+muge);
  //after button is clicked we download the data
  var person = muge;
  console.log("MMperson =" + person);

  var searchQuery = 'followables/search?q='+person;
  var baseEndpoint = "http://abitavsiyesiapp.com/curlDakick.php?parameters=";
$.ajax({
    url : baseEndpoint+searchQuery,
    dataType : "text",
    success: function(data) {
     console.log(data);
      var jsonParsePerson = $.parseJSON(data);
      console.log('PersonID = '+jsonParsePerson.results[0].id);
      var istanbulId = "207";
      var personId = jsonParsePerson.results[0].id;
      var searchUrl = "people/"+personId+"/events?location_ids="+istanbulId+"&page=1&per_page=10&locale=tr";
          //people/1367234/events?location_ids=207&page=1&per_page=10&locale=tr'
          //https://tr.dakick.com/api/v1/people/1367234/events?location_ids=207&page=1&per_page=10&locale=tr'
      $.ajax({
        url : baseEndpoint+searchUrl,
        dataType : "text",
        success: function(data) {
            $('.loading').css('display','none');
          //data downloaded so we call parseJSON function
          //and pass downloaded data
          var json = $.parseJSON(data);
          //now json variable contains data in json format
          //let's display a few items


          //$('#results').html('Plugin name: ' + json.events[0].ticket_url + '<br />Author: ' + json.results);
          console.log('1');
          $.each(json.events, function (index, value) {
            $('#inner').append("<li><img src=\"" + json.events[index].images.square.path + "\" class=\"img\">" +
            "<div class=\"text\" > "+ json.events[index].name +"</div></li>").bind('click', function() {
              console.log('2');
              var newURL = json.events[index].ticket_url ;
              console.log('3 = '+newURL);
              chrome.tabs.create({ url: newURL });
            });
          })



        }
      });
  }
});
    //start ajax request
    //$.ajax({
    //  url: "https://gist.githubusercontent.com/mertnesvat/45e63bd37c326f3d599e/raw/7d821cc57765721049efb658bba8c01171862b59/data.json",
    //  //force to handle it as text
    //  dataType: "text",
    //  success: function(data) {
    //
    //    //data downloaded so we call parseJSON function
    //    //and pass downloaded data
    //    var json = $.parseJSON(data);
    //    //now json variable contains data in json format
    //    //let's display a few items
    //
    //
    //    //$('#results').html('Plugin name: ' + json.events[0].ticket_url + '<br />Author: ' + json.results);
    //    console.log('1');
    //    $.each(json.events, function (index, value) {
    //      $('#inner').append("<img src=\"" + json.events[index].images.square.path + "\">")
    //      $('#inner').append( "<div id=\"red\" > "+ json.events[index].name +"</div>").bind('click', function() {
    //        console.log('2');
    //        var newURL = json.events[index].ticket_url ;
    //        console.log('3 = '+newURL);
    //        chrome.tabs.create({ url: newURL });
    //      });
    //    })
    //
    //
    //
    //  }
    //});

});

//function click(e) {
//  var newURL = "http://stackoverflow.com/";
//  var url = "https://gist.githubusercontent.com/mertnesvat/20ea185a6b7c697e7c28/raw/fc8b551dc992451f6864a9ad2d441dd306f10980/data.json";
//  $.getJSON(url, function (json) {
//    alert(json.result);
//    $.each(json.list, function (i, fb) {
//      alert(fb.result);
//    });
//  });
//
//  //var a = $('#red');
//  console.log('asd');
//  //alert(a);
//
//
//  //chrome.tabs.create({ url: newURL });
//
//
//}

//document.addEventListener('DOMContentLoaded', function () {
//  var divs = document.querySelectorAll('div');
//  for (var i = 0; i < divs.length; i++) {
//    divs[i].addEventListener('click', click);
//  }
//
//});
