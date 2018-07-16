//JavaScript Algorithms and Data Structures Projects: Caesars Cipher

function rot13(str) { // LBH QVQ VG!
  const letters = str.split("");
  const regex = /\.\,\?\!/g;
  const ciphered = letters.map(item => {
    switch(item) {
      case 'A':
          return 'N';
          break;
      case 'B':
          return 'O';
          break;
      case 'C':
          return 'P';
          break;
      case 'D':
          return 'Q';
          break;
      case 'E':
          return 'R';
          break;
      case 'F':
          return 'S';
          break;
      case 'G':
          return 'T';
          break;
      case 'H':
          return 'U';
          break;
      case 'I':
          return 'V';
          break;
      case 'J':
          return 'W';
          break;
      case 'K':
          return 'X';
          break;
      case 'L':
          return 'Y';
          break;
      case 'M':
          return 'Z';
          break;
      case 'N':
          return 'A';
          break;
      case 'O':
          return 'B';
          break;
      case 'P':
          return 'C';
          break;
      case 'Q':
          return 'D';
          break;
      case 'R':
          return 'E';
          break;
      case 'S':
          return 'F';
          break;
      case 'T':
          return 'G';
          break;
      case 'U':
          return 'H';
          break;
      case 'V':
          return 'I';
          break;
      case 'W':
          return 'J';
          break;
      case 'X':
          return 'K';
          break;
      case 'Y':
          return 'L';
          break;
      case 'Z':
          return 'M';
          break;
    }   
    
    if(!regex.test(item)) return item;
  });
  
 return ciphered.join("");
  
}

// Change the inputs below to test
rot13("SERR PBQR PNZC!");