console.log("Project-4")
const userName = document.getElementById("userName")
const email = document.getElementById("userEmail")
const car = document.getElementById("car")
const phone = document.getElementById("userPhone")
const address = document.getElementById("userAddress")
let validName = false;
let validEmail = false;
let validPhone = false;
// console.log(name, email, phone, car, address)

userName.addEventListener('blur', () => {
    // console.log("name is blur")
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/
    let str = userName.value;
    // console.log(regex, str)
    console.log(str)
    if (regex.test(str)) {
        console.log("Matched")
        userName.classList.remove('invalid')
        userName.removeAttribute("style", ' box-shadow: 0 0  10px rgb(230, 7, 7);')
        userName.classList.remove('invalid')
        invalid.innerText = "UserName valid"
        validName = true
        // userName.setAttribute("style","width:700px")
    }
    else {
        userName.setAttribute("style", ' box-shadow: 0 0  10px rgb(230, 7, 7);');
        let invalid = document.getElementById("invalid")
        invalid.innerText = "The Username should contain at 2-10 characters & should not start with a number."
        validName = false
        userName.classList.add('invalid')
        //    userName.setAttribute("style", " width:700px;")
    }
})

email.addEventListener('blur', () => {
    console.log("email is blur")

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    // console.log(regex, str)
    console.log(str)
    if (regex.test(str)) {
        console.log("Matched")
        email.removeAttribute("style", ' box-shadow: 0 0  10px rgb(230, 7, 7);')
        email.classList.remove('invalidEmail')
        invalidEmail.innerText = "Email valid"
        validEmail = true
        // userName.setAttribute("style","width:700px")
    }
    else {
        email.setAttribute("style", ' box-shadow: 0 0  10px rgb(230, 7, 7);');
        let invalidEmail = document.getElementById("invalidEmail")
        invalidEmail.innerText = "Please Verify your email."
        validEmail = false
        email.classList.add('invalidEmail')
        //    userName.setAttribute("style", " width:700px;")
    }
})


phone.addEventListener('blur', () => {
    console.log("phone is blur")


    let regex = /^([0-9]){10}$/
    let str = phone.value;
    // console.log(regex, str)
    console.log(str)
    if (regex.test(str)) {
        console.log("Matched")

        phone.removeAttribute("style", ' box-shadow: 0 0  10px rgb(230, 7, 7);')
        phone.classList.remove('invalidPhone')
        invalidPhone.innerText = "Phone number is valid"
        validPhone = true
        // userName.setAttribute("style","width:700px")
    }
    else {
        phone.setAttribute("style", ' box-shadow: 0 0  10px rgb(230, 7, 7);');
        let invalidPhone = document.getElementById("invalidPhone")
        invalidPhone.innerText = "Phone number is not valid"
        let validPhone = false;
        phone.classList.add('invalid')
        //    userName.setAttribute("style", " width:700px;")
    }
})

address.addEventListener('blur', () => {
    console.log("address is blur")
})

let button = document.getElementById("submit")
button.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (validEmail && validPhone && validName) {
        let succes = document.getElementById("success")
        let failure = document.getElementById("failure")
        succes.classList.add('show');
        failure.classList.remove('show')
    }
    else {
        let failure = document.getElementById("failure")
        let succes = document.getElementById("success")
        failure.classList.add('show')
        succes.classList.remove('show');
    }


});


