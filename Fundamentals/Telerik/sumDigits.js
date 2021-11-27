var value = +gets();
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

print(sum);