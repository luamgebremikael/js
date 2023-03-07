

// 1,
function keepOrder(arr, val) {
    for (let i = 0; i < arr.length; i++){
      if ( val <= arr[i] ) {
        return i;
      }
    }
      return arr.length;
  };

  //2,
  function isNegativeZero(n) {
    return Object.is(-0,n);
  }

  //3,
  
function hoopCount (n) {
    return n>=10? "Great, now move on to tricks":"Keep at it until you get it" 
 }

 //4,

 class Cat extends Animal {
    speak() {
      return `${this.name} meows.`;
    }
  }