$(document).ready(function() {
  $("#vacation-form").submit(function(event) {
    var region = $("#region").val();
    var beach = $("#beach").val();
    var museums = $("#museums").val();
    var city = $("#city").val();
    var hot = $("#hot").val();

    $('#all').text("Show all destinations");
    $(".region, .beach, .muesumes, .city, .hot").hide();

    if (region === 'europe') {
      $(".europe").show();
    } else if (region === 'asia') {
      $(".asia").show();
    } else if (region === 'austrilia') {
      $(".austrilia").show();
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
        $(".region, .beach, .muesumes, .city, .hot").show();
        $(this).text("Hide all destinations");
      } else {
        $(".region, .beach, .muesumes, .city, .hot").hide();
        $(this).text("Show all destinations");
      }
  });
});
