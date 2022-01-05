function well(x){
    let n = 0;
      x.forEach((el) => {
        if(el == 'good'){
          n++;
        }
      });
       if(n === 0){
         return 'Fail!';
       }else if (n > 2){
         return 'I smell a series!';
       }else if(n <= 2) {
         return 'Publish!';}
        }