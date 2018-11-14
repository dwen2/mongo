$(document).ready(function() {
  $("#postComment").click(function() {
    var myobj = { Name: $("#name").val(), Comment: $("#comment").val() };
    jobj = JSON.stringify(myobj);
    $("#json").text(jobj);

    var url = "comment";
    $.ajax({
      url: url,
      type: "POST",
      data: jobj,
      contentType: "application/json; charset=utf-8",
      success: function(data, textStatus) {
        $("#done").html(textStatus);
      }
    })
  });


  $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for (var comment in data) {
        var com = data[comment];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  })

  $("#deleteComments").click(function() {
    var url = "comment";
    $.ajax({
      url: url,
      type: "DELETE",
      success: function(data, textStatus) {
        $("#done").html(textStatus);
      }
    });
  });

  $("#query").click(function() {
    var url = "findcomment?name=";
    url += $("#name").val();
    $.getJSON(url, function(data) {
    var everything = "<ul>";
    for (var comment in data) {
      var com = data[comment];
      everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
    }
    everything += "</ul>";
    $("#comments").html(everything);
    })
  });

});
