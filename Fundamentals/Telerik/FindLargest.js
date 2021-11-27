let n = +gets()
let arr = []

for (i=0 ; i < n ; i++){
  arr.push(+gets())
}

arr.sort((a, b) => b - a)
print(arr[0] + ", " + arr[1] + " and " + arr[2])