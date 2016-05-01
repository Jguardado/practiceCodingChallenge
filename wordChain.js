'use strict';
​
// you get an array of string ['i','in','if','input','int', 'integer','output']
// the function needs to spit out the longest word chain in the array
// so the output for this array should be, 'i', 'in', 'int', 'integer'
​
​
function findLongestChain(words) {
​
  var longestChain = [];
  var currentChain = [];
​
  //helper function
  var findChildren = function(baseWord) {
    var children = [];
​
    words.forEach(function (word){
      if(word.indexOf(baseWord) === 0 && word !== baseWord){
        children.push(word);
      }
    });
​
    return children;
  };
​
  var recursion = function(currWord) {
​
    console.log(currentChain);
​
    //check if we found a new longest chain
    if(currentChain.length > longestChain.length) {
      longestChain = currentChain.slice();
    }
​
    //determine who the children are
    var children = findChildren(currWord);
​
    for (var i = 0; i < children.length; i++) {
​
      //prep
      currentChain.push(children[i]);
​
      //dive
      recursion(children[i]);
​
      //cleanup
      currentChain.pop();
    }
  };
​
  recursion('');
​
  return longestChain;
}
​
var a = ['i','in','if','input','int', 'integer','output'];
console.log('here it is', findLongestChain(a));
​
​
var a = ['in','if','input','int', 'integer','output','i'];
console.log('here it is', findLongestChain(a));
​
