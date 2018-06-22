
   var topics = ["Cat", "Dog", "Bird", "Fish"];
   
   $(document).on("click", ".topic-btn", searchGif);

   renderButtons();

//    function displayTopicInfo() {
function searchGif(topic){
    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=cYlVzTj6pzQumESU3aH6U7un3AIAEbLK&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
       console.log(response);

       displayTopicInfo(response);
    })};

//        for (i = 0; i < 9; i ++){

//       var gifImage = $('<img src="response.data[i].url" data-still= "response.data[i].images.fixed_height_still.url" data-animate="response.data[i].images.fixed_height.url" data-state="still" class="gif"></img>')

    
//       $("#topics-view").prepend(gifImage);

//  $(".gif").on("click", function() {
     
//       var state = $(this).attr("data-state");

//       if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//       }
     
      
//     });
//   }})}

  function displayTopicInfo(response) {
    $('#topics-view').empty();
    for (var i = 0; i < 9; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#topics-view').append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

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
   };

   $("#add-topic").on("click", function(event) {
     event.preventDefault();
  
     var topic = $("#topic-input").val().trim();
     topics.push(topic);    
     renderButtons();
   });
  
