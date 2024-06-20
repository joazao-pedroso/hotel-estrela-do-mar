
function more() {
    var show = document.getElementById('saiba_mais');
    show.style.left = '17%';
    show.style.position = 'fixed';
    if (show.style.opacity === '' || show.style.opacity == 0) {
        show.style.opacity = 1;
        show.style.bottom = '10%';
    } 


}
function teste() {
    var show = document.getElementById('saiba_mais')
    show.style.opacity = 0
    show.style.bottom = '2000%'
  }

  function price() {
    
    let quartos = parseInt(document.getElementById('quartos').value)
    let day = parseInt(document.getElementById('day').value)

    let text_total = document.getElementById('total')
    
    if (quartos == 1) {
        let days_price = 180.00
        let total = day * days_price
       text_total.innerHTML = `Cotação: R$${total}`
    }
    else if (quartos == 2) {   
        let days_price = 300.00
        let total = day * days_price
        text_total.innerHTML = `Cotação: R$${total}`
     }
     else if (quartos == 3) {
        let days_price = 500.00
        let total = day * days_price
        text_total.innerHTML = `Cotação: R$${total}`
     }
 
 


  }

