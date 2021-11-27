let n = Number(gets());
let num = n;
let divider = 2;

while (divider < n) {
    if (num % divider === 0) {
        print(divider);
        num = num / divider;
    }
    if (num % divider !== 0) {
        divider++;
    }
}