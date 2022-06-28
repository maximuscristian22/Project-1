// var randomQuote = "https://quotes15.p.rapidapi.com/quotes/random/";

// fetch(randomQuote).then(function (response) {
//   console.log(response);
// });

var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
