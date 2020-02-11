function rot13(str) {
  //Since the characters are only being shifted by 13, listing the whole alphabet twice will catch all transformations without danger of overflow.
  let megabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let bound='';
  let sundered=str.split('');
  for(let i=0; i < sundered.length; i++){
    if(sundered[i].match(/[\W]/)){ // If it's punctuation, whitespace, or a number, just pass it through.
      bound += sundered[i];
    }
    else{
      bound += megabet[megabet.indexOf(sundered[i])+13] // Use the megabet array to shift the index of the sundered letter and bind them together.
    }
  }
  return bound;
}

rot13("SERR PBQR PNZC") //FREE CODE CAMP
rot13("SERR CVMMN!") //FREE PIZZA!
rot13("SERR YBIR?") //FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.