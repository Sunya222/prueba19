
 // Cuando tenemos muchas condicionales lo mejor es usar Switch  
 const metodoPago = 'efectivo';

 switch(metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
         break;
    case 'cheque':
        console.log('El usuario va a pagar con cheuqe, revisaremos los fondos primero');
            break;
    default:
        console.log('Aun no ha pagado');
                break;       
 }