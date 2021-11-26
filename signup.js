const Username = document.getElementById('Username');
const Password = document.getElementById('Password');
const form = document.getElementById('form');
const reset= document.getElementById('reset');
const errors = document.getElementById('errors');
let x=0;
reset.addEventListener('click',(e)=> {
  Username.value =null;
  Password.value =null;
  error.innerText =null;
  x=1;
})
form.addEventListener('submit',(e)=> {
   
    let errormessage =[];

    if((Password.value.length <= 8)&&(x!=1))
      {
        errormessage.push('!!Password must have 8 or more characters');
        
        Password.value =null;

      }

    if(errormessage.length > 0)
      {
        e.preventDefault();
        console.log(errormessage);
        error.innerText = errormessage.join( );
      }
})
   

