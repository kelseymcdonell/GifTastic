
   var topics = ["Cat", "Dog", "Bird", "Fish"];
   
   $(document).on("click", ".topic-btn", displayTopicInfo);

   renderButtons();

   function displayTopicInfo() {

    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=cYlVzTj6pzQumESU3aH6U7un3AIAEbLK&limit=1";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
       console.log(response);

       var imageUrl1 = response.data[0].images.fixed_height_still.url;
       var imageUrl2 = response.data[0].images.fixed_height.url;
   

         var gifImage = $("<img>");
  
         gifImage.attr("src", imageUrl2);
         gifImage.attr("alt", "gif image");

         $("#topics-view").prepend(gifImage);
    });
  }

   function renderButtons() {
     $("#buttons-view").empty();
     for (var i = 0; i < topics.length; i++) {
       var a = $("<button>");
       a.addClass("topic-btn");
       a.attr("data-name", topics[i]);
       a.text(topics[i]);
       $("#buttons-view").append(a);
     }
   }

   $("#add-topic").on("click", function(event) {
     event.preventDefault();
  
     var topic = $("#topic-input").val().trim();
     topics.push(topic);    
     renderButtons();
   });

