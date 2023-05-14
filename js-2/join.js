function join(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      result += string[i];
      if (i !== string.length - 1) {
        result += " ";
      }
    }
    return result;
  }

  
  console.log(join(string));