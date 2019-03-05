
//Buttons array
var topics = ["spiderman", "batman", "hulk", "wonderwoman"];

function generateButtons() {
    //clear buttons div
    $("#buttonsDiv").empty();
    for (var i = 0; i < topics.length; i++) {

        var newButton = $("<button>");
        newButton.attr("class", "button btn btn-primary btn-lg");
        newButton.attr("data-name", topics[i]);
        newButton.attr("value", topics[i]);
        newButton.text(topics[i]);
        $("#buttonsDiv").append(newButton);
    }
}

//generate standard set of buttons to start
generateButtons();

//Submit buttons

$("#submitbutton").on("click", function () {
    event.preventDefault();
    
    var newSuper = $("#superHeroInput").val().trim();
    console.log(newSuper);
   
    topics.push(newSuper);
    console.log(topics);
    $("#superHeroInput").val("");
    generateButtons();
       
});

// When buttons are pressed

$(document).on("click", '.button', function (event) {

    console.log("a button was clicked");
    console.log(event);

    var buttonName = $(this).attr("data-name");
    console.log("this is ", buttonName);
    
   $("#imagesDiv").empty();
    // Constructing a queryURL 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        buttonName + "&api_key=0WD0FIin0wZqsc3TspZekMfwgaz4zy2s&tag=&rating=PG&limit=10";
    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
              // fill up images div
            for(var i = 0;i<10;i++){
                
                var rating = response.data[i].rating;
                var ratingTag = $("<p>Rating: "+rating+" </p>");
                var superImage = $("<img>");
                superImage.attr("src", response.data[i].images.fixed_height_still.url);
                superImage.attr("class","gif");
                superImage.attr("data-state","still");
                superImage.attr("data-still", response.data[i].images.fixed_height_still.url);
                superImage.attr("data-animate", response.data[i].images.fixed_height.url);
                $("#imagesDiv").append(superImage);
                $("#imagesDiv").append(ratingTag);
                
            }
        });
 });

// Pause and unpause gifs
$(document).on("click", '.gif', function (event) {

    
    console.log(event);
    console.log("gif clicked");

    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "animate");
    }

    if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
});

