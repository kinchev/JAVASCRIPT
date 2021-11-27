let bill = +gets();
  let paid = +gets();

  let sum=(paid-bill)*100;
  let counter=0;
  
    if (sum>=100) {
        counter=sum/100
        sum%=100
        print(`${Math.floor(counter)} x 1 lev`); 
        
        
    
    }
    if (sum>=50) {
        counter=sum/50;
        sum%=50;
        print(`${Math.floor(counter)} x 50 stotinki`);  
    }
    if  (sum>=20) {
        counter=sum/20
        sum%=20
        print(`${Math.floor(counter)} x 20 stotinki`);  
         
    }        
    if (sum>=10) {
        counter=sum/10
        sum%=10
        print(`${Math.floor(counter)} x 10 stotinki`); 
         
    }        
    if (sum>=5) {
        counter=sum/5
        sum%=5
        print(`${Math.floor(counter)} x 5 stotinki`); 
            
    }       
    if (sum>=2) {
        counter=sum/2
        sum%=2
        print(`${Math.floor(counter)} x 2 stotinki`); 
         
         
    }       
    if (sum>=1) {
        counter=sum/1
        sum%=1
        print(`${Math.floor(counter)} x 1 stotinka`); 
    
         
            
    }