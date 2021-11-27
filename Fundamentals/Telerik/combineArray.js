let list1 = gets().split(',');
 let list2 = gets().split(',');
 
 let combined = [];
 
 for (let i=0; i < list1.length; i++) {
 combined.push(list1[i], list2[i])
 };
 
 print(combined.join());