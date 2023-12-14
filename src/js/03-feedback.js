import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form')
const FEEDBACK_KEY = "feedback-form-state"

form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(onInput, 500))

const formData = {
    email: "",
    message: ""
}

getFromLocal(FEEDBACK_KEY)

function onSubmit(event) {
    event.preventDefault()
    if (!formData.email.trim() || !formData.message.trim()) {
       return alert('Please fill all fields')
    }
    console.log(formData)
    form.reset()
    formData.email = ""
    formData.message = ""
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
}

function getFromLocal(key) {
    const savedText = localStorage.getItem(key)
    const parsedText = JSON.parse(savedText)
        if (savedText) {
            form[0].value = parsedText.email
            form[1].value = parsedText.message
            formData.email = parsedText.email || ''
            formData.message = parsedText.message || ''
        }    
}

