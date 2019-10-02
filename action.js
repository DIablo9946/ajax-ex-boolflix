url = "https://api.themoviedb.org/3/movie/550?api_key=13e4dd0bfdea1b550587c2e9a8eb9391";
var stamp = document.getElementById("entry-template").innerHTML;


$(document).ready(function( ){



$.ajax {(
  url : url,
  method : "GET";
  success : function (data) {

    var source   = $("#template").html();
    var template = Handlebars.compile(source);
    var context = {
      title: "",
      orgtitle: "",
      lang: "",
      voto: ""
    };
    var html    = template(context);
  },
  error : function (){

  }
)}

)};
