var vowels = ["a", "e", "i", "o", "u", "y"];

var is_vowel = function(letter) {
 if (vowels.indexOf(letter) >= 0) {
  return true;
 } else {
   return false;
 }
}

var find_vowel = function(word) {
  var index;
  for (index = 0; index < word.length; index++) {
    if (is_vowel(word[index]) == true){
      return index;
    }
  }
}

var check_word = function(word) {
  if (is_vowel(word[0]) == true){
    return word + "ay";
  } else {
    index = find_vowel(word);
    first_letters = word.slice(0, index);
    remain_word = word.substring(index, word.length);
    return remain_word + first_letters + "ay";
  }
}

var words = function(words) {
  word_array = words.split(" ");
  new_words = [];
  word_array.forEach(function(word) {
    new_words.push(check_word(word));
  });
  return new_words.join(" ")
}
///////////////////////////////////////
$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var originalString = $("#input input").val();
    var result = words(originalString);
    $("#output").text(result);
  })
});
