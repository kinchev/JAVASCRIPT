let numArray = gets().split(',').map(Number);
  numArray.sort(function(a, b)  {
    return b - a;
  });
  print(numArray);