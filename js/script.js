// BOTTONE GENERA

const generateButton = document.getElementById('generate_ticket');
generateButton.addEventListener('click',
        function() {
            const userName = document.getElementById('user_name').value;
            console.log(userName);
            const userKm = parseInt(document.getElementById('user_km').value);
            console.log(userKm);
            const userAge = document.getElementById('user_age').value;
            console.log(userAge)

            const price = userKm * 0.21;
            let discount = 0;

            if(userAge === 'minorenne') {
                discount = price * 20 / 100;
            } else if (userAge === 'over') {
               discount = price * 40 / 100;
        }

        // calcolo prezzo finale 

        const finalPrice = (price - discount).toFixed(2);
        console.log(finalPrice);

        /*offerta biglietto: per over 18 sarà standard,
        minorenne sarà under, over 65 sarà over */ 

        let ticketOffer = 'Standard'

        if(userAge === 'minorenne') {
            ticketOffer = 'Sconto Under';
        } else if(userAge === 'over') {
            ticketOffer = 'Sconto Over';
        }

        // numero del vagone

        trainCar = Math.floor((Math.random() * 10) + 1);

           // codice del biglietto

           coCode = Math.random().toString(36).slice(2)

       // dati del biglietto generato 
        document.getElementById('ticket_name').innerHTML = userName;
        document.getElementById('ticket_price').innerHTML = finalPrice;
        document.getElementById('ticket_age').innerHTML = ticketOffer;
        document.getElementById('train_car').innerHTML = trainCar;
        document.getElementById('co_code').innerHTML = coCode;
        document.getElementById('ticket').classList.add('active');
    }
);

// BOTTONE CANCELLA 

const cancelButton = document.getElementById('cancel_ticket');
cancelButton.addEventListener('click',
        function() {
            document.getElementById('user_name').value ='';
            document.getElementById('user_km').value ='';
            document.getElementById('user_age').value ='maggiorenne';
        
// dati del biglietto generato 
        document.getElementById('ticket_name').innerHTML = 'Inserire nome';
        document.getElementById('ticket_age').innerHTML = "Inserire fascia d'età";
        document.getElementById('ticket_price').innerHTML = '__';
        document.getElementById('train_car').innerHTML = '__';
        document.getElementById('co_code').innerHTML = '__';
        document.getElementById('ticket').classList.remove('active');
    }
);
