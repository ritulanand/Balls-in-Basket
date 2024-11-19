const ballColors = [
  "red",
  "blue",
  "yellow",
  "lightgrey",
  "darkorchid",
  "black",
  "orange",
  "deeppink",
  "green",
  "purple",
  "saddlebrown",
  "lightseagreen",
  "deepskyblue",
  "firebrick",
  "crimson",
];


let basket = $("#basket");
$("#addBallButton").click(function () {
  basket.append(
    '<div class="ball" style="background-color:    ' +
    ballColors[Math.floor(Math.random() * 15)] +
    ' "></div>'
  );
});