
const inputPassword =document.querySelector('#password')

const inputLength = document.querySelector('#password-length')
const uppercaseCheckEl = document.querySelector('#uppercase-check')
const numberCheckEl = document.querySelector('#number-check')
const simbolCheckEl = document.querySelector('#simbol-check')


document.querySelector('#copy-1').addEventListener('click',copy)
document.querySelector('#copy-2').addEventListener('click',copy)




  let inputLengthvalue = 8 
function generatePassword(){
  let chars = "abcdefghjkmnpqrstuvwxyz"

  const uppercaseChar = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  const numberChar = '123456789'
  const simbolChar = '?!@&*()[]'


if( uppercaseCheckEl.checked){
  chars += uppercaseChar
}

if( numberCheckEl.checked){ 
  chars += numberChar
}

if( simbolCheckEl.checked){
  chars += simbolChar
}


    let password = ''

    for(let i = 0; i < inputLengthvalue; i++){

            const randomNunber = Math.floor( Math.random()*chars.length )   
   
            password +=chars.substring(randomNunber,randomNunber+1)
   
    }
            inputPassword.value=password

    console.log(password)
  }

function calculateQuality(){
  const percent = Math.round((inputLengthvalue / 64)*100)
  console(percent)



}







uppercaseCheckEl.addEventListener('click',generatePassword)
numberCheckEl.addEventListener('click',generatePassword)
simbolCheckEl.addEventListener('click',generatePassword)


function copy(){
  navigator.clipboard.writeText(inputPassword.value)
}



  inputLength.addEventListener('input',function(){

inputLengthvalue = inputLength.value
generatePassword()
calculateQuality()
document.querySelector('#password-length-text').innerText = inputLengthvalue


  })


generatePassword()

 
