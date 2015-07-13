function sum(num1, num2) {
  return num1 + num2;
}

function isEqual(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

function discountPercentage(total, discount) {
  discount = 0 || discount;
  if (discount >= 100 || discount < 0) {
    throw "Error: Discount is >= 100 or < 0";
  }
  var discountedTotal = total - (total*(discount/100))
  return discountedTotal;
}

function stringCapitalize(str) {
  str = str.split(' ');
  var arrayStr = []
  for (i in str) {
    arrayStr.push(str[i][0].toUpperCase()+str[i].slice(1));
    // console.log(arrayStr);
    // console.log(str.split(' ')[i][0] = str.split(' ')[i][0].toUpperCase());
  }
  // console.log(str);
  return arrayStr.join(' ');
}

var str = "lets test this out";

// console.log(str.split(' '));
//
// console.log(stringCapitalize(str));
// console.log(str);

function evenNumbers() {
  var str = '';
  var random = Math.floor(Math.random() * 101 + 0);
  for (var i = 0; i < random; i++) {
    if (i%2 === 0){
      str += i+'\n';
    }
  }
  return str;
}

// console.log(evenNumbers());

function isDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

function oddNumbers() {
  var random = Math.floor(Math.random() * 101 + 0);
  var str = '';
  if (random > 40) {
    for (var i = 40; i < random; i++) {
      if (i % 2 !== 0) {
        str += i+'\n';
      }
    }
  } else {
    for (var i = 0; i < 40; i++) {
      if (i % 2 !== 0) {
        str += i+'\n';
      }
    }
  }
  return str;
}


console.log(oddNumbers())
