

// 1. write a function that is going to take two strings as arguments and returns true if they are anagrams -- a word or phrase formed by rearranging the letters of a different word or phrase -- or false if they are notDeepEqual. inputs are not empty(undefined) and will be lowercase.


const checkAnagram = (arg1:string, arg2:string) => {
    let arg1Arrange:string = arg1.split("").sort((a, b) => (a > b ? 1 : -1)).join('')
    let arg2Arrange:string = arg2.split("").sort((a, b) => (a > b ? 1 : -1)).join('')
    console.log( arg1Arrange, arg2Arrange )

    if(arg1Arrange == arg2Arrange){
        return true;
    }else {
        return false;
    }
  };
  
  console.log(checkAnagram("elvis", "lives"));
  

// practice1("elvis", "lives")
// 2. write a function that takes two arrays as arguments and returns true if those arrays have at least one element in common, or returns false if they are notDeepEqual.