let humanAge=+gets();
let dogAge=0;
if (humanAge<=2) {
    dogAge=humanAge*10;
    print(dogAge);
} else if(humanAge>2) {
    
    dogAge=(humanAge-2)*4+20;
    print(dogAge);
}