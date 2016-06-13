$(document).ready(function() {
  $(".greeting").hide();
  $('#name-form').submit(function(event) {
    var name = $("#name").val();
    console.log(name);
    $(".greeting").show();
    $(".greeting").text(name + ", here are our recommendations for you.");
    event.preventDefault();
  });
  $("#vacation-form").submit(function(event) {
    var region = $("#region").val();
    var beach = $("#beach").val();
    var museums = $("#museums").val();
    var city = $("#city").val();
    var hot = $("#hot").val();

    $('#all').text("Show all destinations");
    $(".europe, .asia, .australia, .island, .outback").hide();

    if (region === 'europe') {
      $(".europe").show();
    } else if (region === 'asia') {
      $(".asia").show();
    } else if (region === 'australia') {
      $(".australia").show();
    } else if (region === 'australia' && beach === 'no') {
       $(".outback").show();
    } else if (region === 'island') {
      $(".island").show();
    } else {
      alert ('Sorry, we don\'t have a recommendation, try Paris, everyone loves Paris');
    }
    event.preventDefault();
  });
  $("#all").click(function(event) {
    event.preventDefault();
      if ($(this).text() === "Show all destinations") {
        $(".europe, .asia, .australia, .island, .outback").show();
        $(this).text("Hide all destinations");
      } else {
        $(".europe, .asia, .australia, .island, .outback").hide();
        $(this).text("Show all destinations");
      }
  });
});
