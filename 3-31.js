console.log( 'js' );

function sillyNames( names ){
  console.log( 'in sillyNames:', names );
  // can we check if we are getting an array?
  if( typeof( names ) === 'object' ){
    // log out a sentence with the # of names
    console.log( 'I now know ' + names.length + ' silly names' );
    // and all the names listed
    // new string variable to hold the output
    var namesIknow = 'These names are: ';
    // loop through the array and concatenate each name onto the string
    for (var i = 0; i < names.length; i++) {
      namesIknow += names[i] + ' ';
    } // end for
    console.log( namesIknow );
    // return the number of silly names:
    return names.length;
  }
  else{
    console.log( 'nope.' );
    return false;
  }
} // end sillyNames
