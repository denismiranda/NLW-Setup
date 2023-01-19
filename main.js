const form = document.querySelector('#form-habits')
let nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-18", "01-20",],
    water:["01-18","01-19","01-20"],
    food: ["01-18", "01-19", "01-20"],
    journal:["01-20"],
    market: ["01-18",],
}

nlwSetup.setData(data)
nlwSetup.load()
