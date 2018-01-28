stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let count = 0;
    let splitStr = str.split('').filter((curLetter, index) => {
      let preLetter = str.charAt(index-1)
      if (preLetter !== curLetter){
        count = 0
      }else{
        count++
      }
      if(amount > count){
        return curLetter
      };
    })
    return  splitStr.join("");
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'bca'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
   return str.split("").reverse().join("")
  },
};
