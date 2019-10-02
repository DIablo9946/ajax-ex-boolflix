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

      var obj = $(".obj");
      var ris = data.results;
      printMovies(ris);
        // for (i=0; i< ris.length; i++) {
        //   var context = {
        //     title: ris[i].title,
        //     orgtitle: ris[i].original_title,
        //     lang: ris[i].original_language,
        //     voto: ris[i].vote_average,
        //     img: "<img src='ris[i].poster_path' >"
        //   };
        //
        //   obj.append(ris[i].title + "<br>" + ris[i].original_title, "<br><br>");
        //   obj.append(context);
        // };
        //   var html = template(context);

      // };
    },
    error : function (){

    }
  });
});

function printMovies(ris){
  for (i=0; i< ris.length; i++) {
    var movie = ris[i];
    var source   = $("#template").html();
    var template = Handlebars.compile(source);
  }
};


console.log("Sono nel documento");

});
