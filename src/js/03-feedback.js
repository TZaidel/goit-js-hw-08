import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form')
const email = document.querySelector('input')
const textarea = document.querySelector('.feedback-form textarea')
const FEEDBACK_KEY = "feedback-form-state"

form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(onInput, 500))

const formData ={}

getFromLocal(FEEDBACK_KEY)


function onSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    localStorage.removeItem(FEEDBACK_KEY)
}


function onInput(event) {
    formData[event.target.name] = event.target.value
    //*or
//     const formData = {
//     email: form.email.value,
//     message: form.message.value,
//   };
    
    const strMes = JSON.stringify(formData)

    localStorage.setItem(FEEDBACK_KEY, strMes)

    const savedMsg = localStorage.getItem(FEEDBACK_KEY)
    const parsedMsg = JSON.parse(savedMsg)
    console.log(parsedMsg)
}


function getFromLocal(key) {

    const savedText = localStorage.getItem(key)
    console.log(savedText)
    const parsedText = JSON.parse(savedText)

        if (savedText) {
            form[0].value = parsedText.email
            form[1].value = parsedText.message
        }
}


