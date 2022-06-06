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

        const finalPrice = (price - discount).toFixed(2);
        console.log(finalPrice);

        document.getElementById('ticket_name').innerHTML = userName;
        document.getElementById('ticket').classList.add('active');
    }
);

const cancelButton = document.getElementById('cancel_ticket');
generateButton.addEventListener('click',
        function() {
            document.getElementById('user_name').value ='';
            document.getElementById('user_km').value ='';
            document.getElementById('user_age').value ='maggiorenne';
        }

        document.getElementById('ticket_name').innerHTML = '';
        // document.getElementById('ticket').classList.add('active');
);
