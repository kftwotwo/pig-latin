var pigLatin = function(input) {

  // var splitInput = lowercaseInput.split("");
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  var wordsTogether = [];

  var words = input.split(" ");

  words.forEach(function(word) {
    var letterWord = word.replace(/[^a-z\s]/g, "").toLowerCase()
    var splitWord = letterWord.split("");

    var firstChecker = function(splitWord) {
      if (splitWord[0] === "q" && splitWord[1] === "u") {
        splitWord.shift(splitWord.push(splitWord[0]));
        splitWord.shift(splitWord.push(splitWord[0]));
      } else if (consonants.indexOf(splitWord[0]) > -1) {
        splitWord.shift(splitWord.push(splitWord[0]));
        firstChecker(splitWord);
      }
    }
      if (splitWord[0] === "y") {
        splitWord.shift(splitWord.push(splitWord[0]));
        splitWord.push("ay");
      } else if (vowels.indexOf(splitWord[0]) > -1) {
      splitWord.push("ay");
      } else {
      firstChecker(splitWord);
      splitWord.push("ay")
    }
      splitWord[0] = splitWord[0].toUpperCase();
      var output = splitWord.join("");
      wordsTogether.push(output);
    })
    var finishedWords = wordsTogether.join(" ");
    return finishedWords;
}



// Front end
$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var originalString = $("#input input").val();
    var result = pigLatin(originalString);
    $("#output").text(result);
  })
});
