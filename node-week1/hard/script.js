let express = require('express');

let app = express();

let data = require('./public/employees.json')


app.get('/', (req, res) => {

    res.send("This is the home page")

}) 


app.get('/employees', (req, res) => {

    if(!data) {
        res.status(404).send(`Couldn't find the employees`)
    }

    res.send(data)

})


app.get('/employees/:id', (req, res) => {

    const sData = data.employees.find((employee) => {
        console.log(employee.id)

        return parseInt(req.params.id) === employee.id
    })

    if(!sData) {
        res.status(404).send(`Couldn't find the employee id`)
    }

    res.send(sData)

})





const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})