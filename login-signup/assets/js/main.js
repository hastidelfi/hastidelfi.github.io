// login show and hide
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

    signUp.addEventListener('click', ()=>{
        //remove classes id they exist
        loginIn.classList.remove('block')
        loginUp.classList.remove('none')

        //add classes
        loginIn.classList.toggle('none')
        loginUp.classList.toggle('block')
    })

    signIn.addEventListener('click', ()=>{
        //remove classes id they exist
        loginIn.classList.remove('none')
        loginUp.classList.remove('block')

        //add classes
        loginIn.classList.toggle('block')
        loginUp.classList.toggle('none')
    })