$(function () {
  $(".eat-burger").on("click", function (event) {
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");
    const devouredState = {
      devoured: devoured
    };
    //Ajax request to change burger's devoured state to true
    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      //Logs the change of devoured state
      console.log("Changed devoured to", devoured);
      //Reloads the page to update changes
      location.reload();
    })
  });
  $("create-form").on("submit", function(event) {
    event.preventDefault();
    let newBurger = {
      burger_name: $("#burg").val().trim()
    };
    //Ajax request to add new burger to database
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      //Logs the success of adding new burger
      console.log("added new burger");
      //Reloads the page to update the changes
      location.reload();
    });
  });
});