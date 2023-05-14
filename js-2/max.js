function max(numero) {
    if (numero.length === 0) {
      return undefined;
    }
    let maxNum = numero [0];
    for (let i = 1; i < numero.length; i++) {
      if (numero[i] > maxNum) {
        maxNum = numero[i];
      }
    }
    return maxNum;
  }

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined