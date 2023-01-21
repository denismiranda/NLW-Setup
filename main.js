const form = document.querySelector('#form-habits')

let nlwSetup = new NLWSetup(form)

form.addEventListener("change", save)

const data = { 
    run: ['01-01', '01-02', '01-06'], 
    water: ['01-04', '01-05'],
    food: ['01-01', '01-03'],
  }

function save(){
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}

const dat = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()



