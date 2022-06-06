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
            const discount = 0;

            if(userAge === 'minorenne') {
                discount = price * 20 / 100;
            } else if (userAge === 'over') {
            discount = price * 40 / 100;
        }

        const finalPrice = price - discount;
        console.log(fina 88)
);
