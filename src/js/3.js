const BRACKETS = ['{', '}', '[', ']', '(', ')'];
const BRACKETS_MATCH = {
  '}': '{',
  ']': '[',
  ')': '('
};

function isBracketsConsistent(string) {
  const bracketsStack = [];
  let hasError = false;

  for (let char of string) {
    if (BRACKETS.indexOf(char) === -1) {
      continue;
    }

    if (!BRACKETS_MATCH[char]) {
      bracketsStack.push(char);
    } else if (BRACKETS_MATCH[char] === bracketsStack[bracketsStack.length - 1]) {
      bracketsStack.pop();
    } else {
      hasError = true;
      break;
    }
  }

  return bracketsStack.length === 0 && !hasError;
}

console.log(isBracketsConsistent('{([])}{}'));
console.log(isBracketsConsistent('(({{([])}{()}}))'));
console.log(isBracketsConsistent('{([{])}{}'));
console.log(isBracketsConsistent('{([])}{})'));
console.log(isBracketsConsistent(''));
console.log(isBracketsConsistent('}'));
