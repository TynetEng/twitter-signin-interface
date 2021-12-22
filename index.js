// document.querySelectorAll('div.team input').forEach((el) =>{
        //     el.addEventListener('keyup', function(event){
        //         if(event.target.value.length > 0){
        //             el.closest('div.team').children[0].classList.add('shift')
        //             return;
        //         }
        //         el.closest('div.team').children[0].classList.remove('shift')
        //     })
        // })
        let display = document.getElementById('email')
        let display2 = document.getElementById('pass')
        let result1;
        let result2;

        function shiftEmail(params){
            if(params == 'email'){
                display.style.transition = 'all 2s'
                display.style.transform = 'translateY(-30px)'
            }
        }
        function shiftPassword(params){
            if(params == 'pass'){
                display2.style.transition = 'all 2s'
                display2.style.transform = 'translateY(-30px)'
            }
        }
        function returnEmail(params){
            if(params == 'emailR'){
                
                if(document.getElementById('email2').value == ''){
                    display.style.transition = 'all 1s';
                    display.style.transform = 'translateY(0px)'
                }
            }
        }
        function returnPassword(params){
            if(params == 'passR'){
             if(document.getElementById('pass2').value == ''){
                display2.style.transition = 'all 2s';
                display2.style.transform = 'translateY(0px)'
             }
            }
        }
        function getData(){
            display = document.getElementById('email2').value;
            display2 = document.getElementById('pass2').value
            result1 = document.getElementById('result1')
            result2 = document.getElementById('result2')
        }
        function verifyEmail(){
            display = document.getElementById('email2').value
            result1 = document.getElementById('result1')
            let regex = /^[a-z0-9@.]{8,40}$/
            let check = regex.test(display)

            if(!check || display.length < 8){
                result1.innerHTML = `Invalid Email`
            }
            else{
                result1.innerHTML = `Email approved`
            }
        }
        function verifyPassword(){
            display2 = document.getElementById('pass2').value
            result2 = document.getElementById('result2')
            let regex = /[A-Za-z0-9]{8,20}[#@!$^*]{0,1}/
            let check = regex.test(display2);
            if(!check || display2.length < 8){
                result2.innerHTML = `Invalid Password`
            }
            else{
                result2.innerHTML = `Password verified`
            }
        }
        function validate(){
            getData();
            verifyEmail()
            verifyPassword()

        }