  // String(25)

    // window.document
    // window.console.log('window')
    // window.alert
    
    function handleCostKeydown(event){
      
      if (event.key === 'Enter'){
        calculateTotal();
      }
        }
    
        function calculateTotal(){
         const inputElement = document.querySelector('.js-cost-input');
      //  let cost = JSON.parse(inputElement.value );
      let cost = Number(inputElement.value);
      
         if (cost < 40 ){
          cost += 10 ;
         }
         cost= Math.round(cost*100)/100
      
        document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}` ;
         
          
    
        }
        function Subscribe(){
          const buttonElement = document.querySelector('.js-subscribe-button');
          if (buttonElement.innerHTML === 'Subscribe'){
            buttonElement.innerHTML = 'Subscribed';
            buttonElement.classList.add('is-subscribed');
          }else{
            buttonElement.innerHTML ='Subscribe';
            buttonElement.classList.remove('is-subscribed');
          }
      
        }