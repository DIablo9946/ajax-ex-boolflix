
$(document).ready(function(){

var obj = $(".obj");
var posterImg = "https://image.tmdb.org/t/p/w185"

$("#searchButt").click(function(){
  console.log("cliccato il bottone");
  var query = $("#searchBar").val();
  console.log(query);

// MOVIES
  $.ajax({
    url : "https://api.themoviedb.org/3/search/movie",
    method : "GET",
    data : {
      api_key : "13e4dd0bfdea1b550587c2e9a8eb9391",
      language : "it-IT",
      query : query
    },
    success : function (data) {
      console.log("Sono nella chiamata API");
      console.log(data);


      var ris = data.results;
      printAdv("movies", ris);

    },
    error : function (){

    }
  });
  // TV SERIES
  $.ajax({
    url : "https://api.themoviedb.org/3/search/tv",
    method : "GET",
    data : {
      api_key : "13e4dd0bfdea1b550587c2e9a8eb9391",
      language : "it-IT",
      query : query
    },
    success : function (data) {
      console.log("Sono nella chiamata API");
      console.log(data);


      var ris = data.results;
      printAdv("tv", ris);

    },
    error : function (){

    }
  });

});






// // function printMovies(ris){
//   for (var i=0; i< ris.length; i++) {
//     var movie = ris[i];
//     var source   = $("#template").html();
//     var template = Handlebars.compile(source);
//
//     var context = {
//       type: "Film",
//       title: movie.title,
//       orgtitle: movie.original_title,
//       lang: getFlag(movie.original_language),
//       // lang: movie.original_language,
//       voto: getStarFromRates(movie.vote_average),
//       // voto: movie.vote_average,
//       // img: "<img src='" + movie.poster_path + "' >"
//     };
//
//     var html = template(context);
//
//     obj.append(html);
//   }
// };

//
// function printSeries(ris){
//   for (var i=0; i< ris.length; i++) {
//     var movie = ris[i];
//     var source   = $("#template").html();
//     var template = Handlebars.compile(source);
//
//     var context = {
//       type: "Serie Tv",
//       title: movie.name,
//       orgtitle: movie.original_name,
//       lang: getFlag(movie.original_language),
//       // lang: movie.original_language,
//       voto: getStarFromRates(movie.vote_average),
//       // voto: movie.vote_average,
//       // img: "<img src='" + movie.poster_path + "' >"
//     };
//
//     var html = template(context);
//
//     obj.append(html);
//   }
//
// };

console.log("Sono nel documento");


function getStarFromRates (rate){
  var roundedRate = Math.floor(rate/2);
  var graphStar = "";
  for (var i=0; i<5; i++){
    if (i<roundedRate){
      graphStar += "<i class='fas fa-star'></i>";
    } else {
      graphStar += "<i class='far fa-star'></i>";
    };
    // <i class="fas fa star"></i>
    // <i class="far fa star"></i>
  }

  return graphStar;
};


function getFlag(lang){
  // if (lang === "en"){
  //   lang = '<img src="img/en.png">'
  // } if (lang === "it"){
  //   lang = '<img src="img/it.png">'
  // }
  var avaiableFlag = [
    "it",
    "en"
  ];

  var flag = "";
  if (avaiableFlag.includes(lang)){

    flag = "<img src='img/" + lang + ".png'>";
  } else {

    flag = lang;
  };
  return flag;
};


function getPosterImg(url){

  // https://www.image.tmdb.org/t/p/w185/
  var imgTag = "";
  if (url){
    imgTag = "<img src='" + posterImg + url + "'class='poster'>"
  } else {

  }

  return imgTag;
};


// Sostituisco le due funzioni print per una sola

function printBoth(type, ris){



  for (var i=0; i< ris.length; i++) {
    var movie = ris[i];
    var source   = $("#template").html();
    var template = Handlebars.compile(source);

    title= " ";
    originalTitle= " ";

    if (type == "movies") {
      title = movie.title,
      originalTitle = movie.original_title;
    } else {
      title = movie.name,
      originalTitle = movie.original_name;
    };

    var context = {
      type: type,
      title: title,
      orgtitle: originalTitle,
      lang: getFlag(movie.original_language),
      // lang: movie.original_language,
      voto: getStarFromRates(movie.vote_average),
      // voto: movie.vote_average,
      // img: "<img src='" + movie.poster_path + "' >"
      img : getPosterImg(movie.poster_path)
    };

    var html = template(context);

    obj.append(html);
  };
};



function printAdv (type, ris){

  for (var i=0; i< ris.length; i++) {
    var movie = ris[i];
    var source   = $("#template2").html();
    var template = Handlebars.compile(source);

    title= " ";
    originalTitle= " ";

    if (type == "movies") {
      title = movie.title,
      originalTitle = movie.original_title;
    } else {
      title = movie.name,
      originalTitle = movie.original_name;
    };

    var context = {
      type: type,
      title: title,
      orgtitle: originalTitle,
      lang: getFlag(movie.original_language),
      // lang: movie.original_language,
      voto: getStarFromRates(movie.vote_average),
      // voto: movie.vote_average,
      // img: "<img src='" + movie.poster_path + "' >"
      img : getPosterImg(movie.poster_path)
    };

    var html = template(context);

    obj.append(html);
  };

};


});
