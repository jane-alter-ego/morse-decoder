const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  function chunkOf10(expr) {
    const result = [];
    for (let i = 0; i < expr.length / 10; i++) {
      result.push(expr.substring(i * 10, (i + 1) * 10));
    };
    return result;
  };
  
  let arr = [...chunkOf10(expr)];
  
  function strToMorse(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
      let pair = str[i] + str[i+1];
      if (pair == '**') {
        return ' ';
      } else if (pair == '10') {
        result = result + '.';
      } else if (pair == '11') {
        result = result + '-';
      };
    };
    return result;
  };

  const MorseLetter = arr.map(item => strToMorse(item));

  function decodeMorseLetter(letter) {
    if (letter == ' ') {
      return letter;
    };
    return MORSE_TABLE[letter];
  };
  
  const decodedArr = MorseLetter.map(item => decodeMorseLetter(item));
  
  return decodedArr.join('');

};  

module.exports = {
    decode
}