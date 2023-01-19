const form = document.querySelector('#form-habits')
let nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-01", "01-02", "01-10",],
    market: ["01-03", "01-02", "01-10"],
    food: ["01-01", "01-02", "01-10"]
}

nlwSetup.setData(data)
nlwSetup.load()
