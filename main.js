const form = document.querySelector('#form-habits')

let nlwSetup = new NLWSetup(form)

form.addEventListener("change", save)

function save(){
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()



