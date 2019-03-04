var topics = ["spiderman", "batman", "hulk", "wonderwoman"];

function generateButtons() {
    for (var i = 0; i < topics.length; i++) {

        var newButton = $("<button>");
        newButton.attr("id", "buttons");
        newButton.attr("data-name", topics[i]);
        newButton.attr("value", topics[i]);
        newButton.text(topics[i]);

        console.log("button ", newButton)

        $("#buttons").append(newButton);
    }
}

generateButtons();

$("#submitbutton").on("click", function () {
    event.preventDefault();
    $("#buttons").empty();
    var newSuper = $("#superHeroInput").val().trim();
    console.log(newSuper);

    topics.push(newSuper);
    console.log(topics);
    generateButtons();
    $("#superHeroInput").val("");
});

$("#buttons").on("click", function () {
    console.log("a button was clicked");
    dude =$(this).val();
    console.log((this).attr("value"));
    // var superHero = $(this).val();
   
    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        dude + "&api_key=0WD0FIin0wZqsc3TspZekMfwgaz4zy2s&tag=&rating=G&limit=10";
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
            // imageURL = (response.)
            superImage = $("<img>");
            superImage.attr("src",)
        });
});

    $(".gif").on("click", function () {
        // STEP ONE: study the html above.
        // Look at all the data attributes.
        // Run the file in the browser. Look at the images.

        // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

        // STEP TWO: make a variable named state and then store the image's data-state into it.
        // Use the .attr() method for this.

        // ============== FILL IN CODE HERE FOR STEP TWO =========================

        var state = $(this).attr("data-state");


        // STEP THREE: Check if the variable state is equal to 'still',
        // then update the src attribute of this image to it's data-animate value,
        // and update the data-state attribute to 'animate'.

        // If state is equal to 'animate', then update the src attribute of this
        // image to it's data-still value and update the data-state attribute to 'still'
        // ============== FILL IN CODE HERE FOR STEP THREE =========================

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"))
            $(this).attr("data-state", "animate");
        }

        else {
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still")
        }


        // ==============================================

        // STEP FOUR: open the file in the browser and click on the images.
        // Then click again to pause.
    });