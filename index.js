const features = document.querySelector('.features-content');
const featuresBtns = document.querySelectorAll('.features-btn');
const tabs = document.querySelectorAll('.tab');
const questions = document.querySelectorAll('.collapsible');
const menu = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('header');
const form = document.querySelector('form');
const email = document.querySelector('#email');
const formControl =document.querySelector('.form-control');



features.addEventListener('click', (e) => {
    const you = e.target.dataset.id;

   
    if(you) {
        featuresBtns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
       });
       tabs.forEach(function(tab){
        tab.classList.remove('active');
       });
       const current = document.getElementById(you);
       current.classList.add('active');
    };
});
 

 questions.forEach(function(question) {
     const faqBtn = question.querySelector('.faq-btn');

     faqBtn.addEventListener('click', () => {
         question.classList.toggle('show-text');

         questions.forEach(function(item){
             if(item !== question) {
                 item.classList.remove('show-text');
             }
         })
     })
 });

 menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

form.addEventListener('submit', (f) => {
    f.preventDefault();

      checkInputs();

      function checkInputs() {
        const emailValue = email.value.trim();
    
        if(emailValue === "") {
            setErrorFor(formControl);
        }else if(!isEmail(emailValue)) {
            setErrorFor(formControl);
        }else{
            f.target.reset();
            formControl.classList.remove('error');
        }
    }
    
    function setErrorFor(formControl) {
         formControl.classList.add('error');
    };
    
    function isEmail(email) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/.test(email);
    };
});

