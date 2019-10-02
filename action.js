url = "https://api.themoviedb.org/3/search/movie";


$(document).ready(function(){


$("#searchButt").click(function(){
  console.log("cliccato il bottone");
  var query = $("#searchBar").val();
  console.log(query);



  $.ajax({
    url : url,
    method : "GET",
    data : {
      api_key : "13e4dd0bfdea1b550587c2e9a8eb9391",
      language : "it-IT",
      query : query
    },
    success : function (data) {
      console.log("Sono nella chiamata API");
      console.log(data);
      var source   = $("#template").html();
      var template = Handlebars.compile(source);
      var obj = $(".obj");
      var ris = data.results;

      for (i=0; i< ris.length; i++) {



        var context = {
          title: ris.title,
          orgtitle: ris.original_title,
          lang: ris.original_language,
          voto: ris.vote_average,
          img: "<img src='ris.poster_path' >"
        };

        obj.append(ris[i].title, "<br>");
      };
        var html = template(context);
    },
    error : function (){

    }
  });


});



console.log("Sono nel documento");

});
