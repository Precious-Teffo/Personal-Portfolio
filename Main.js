//select the contact form
const contactForm=document.querySelector('.contact-form');

//select the form element
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const messageInput=document.querySelector('#message');
const submitButton=document.querySelector('button[type="submit"]');

//Add event listener to form submission
contactForm.addEventListener('submit',(e)=>
{
  e.preventDefault();
  
  //Get the input values 
  const name=nameInput.value.trim();
  const email=emailInput.value.trim();
  const message=messageInput.value.trim();
  
  //validate the input values
  if(name===''|| email===''|| message===''){
    alert('Please fill in all fields.');
    return;
    }
    
    //send the form data to the sever(contact.php)
    const formData=new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('message',message);
    
    fetch('contact.php',{
        method:'POST',body:formData
    })
            .then((response)=>response.json())
            .then((data)=>{
                if(data.success){
              alert('Message send successfully!');
      contactForm.reset();
                }else{
                    alert('Error sending message.Please try again.');
                }
            })
                    .catch((error)=>{
                        console.error('Error:',error);
                    });
});

//Email validation function
function validateEmail(email){
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\[a-zA=Z]{2,}$/;
    return emailRegex.test(email);
}

//Add event listener to the submit button
submitButton.addEventListener('click',()=>{
    submitButton.innerHTML='Sending....';
     submitButton.disabled=true;
});

//Add event listener to the form inputs
[nameInput,emailInput,messageInput].formEach((input)=>{
    input.addEventListener('input',()=>{
        //Remove error message
        input.classList.remove('error');
    });
});

