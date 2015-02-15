//When DOM loaded we attach click event to button

$(document).ready(function() {
console.log('documentRead'+muge);
  //after button is clicked we download the data
    var person = "mert";
    var storage = chrome.storage.local;
    storage.get('tags', function(items) {
        console.log(items);
        person = items.tags;
        //person = "sezen aksu";
        console.log("person ="+person);
        var searchQuery = 'followables/search?q='+person;
        var baseEndpoint = "http://abitavsiyesiapp.com/curlDakick.php?parameters=";
        $.ajax({
            url : baseEndpoint+searchQuery,
            dataType : "text",
            success: function(data) {
                //console.log(data);
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
                        console.log(data);
                        console.log("req = "+ baseEndpoint+searchUrl);
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        //now json variable contains data in json format
                        //let's display a few items


                        //$('#results').html('Plugin name: ' + json.events[0].ticket_url + '<br />Author: ' + json.results);

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
    });






});

