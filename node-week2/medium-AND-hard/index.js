let Joi = require('joi');
let express = require('express')
let app = express()
let data = require('./medium-AND-hard/employees.json')
app.use(express.json());

app.get('/', function (req, res) {
    res.send('This is the home page')
})
app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(`Couldn't find the employee`)
    }
    res.send(data)
})
app.get('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employees) {
        return parseInt(req.params.id) === employees.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the employee id`)
    }
    res.send(sData)
})
app.post('/employees', (req, res) => {
    const { error } = validateEmployees(req.body);
    if (error) return res.status(400).send(error.detail[0].message);

    const employees = {
        id: employees.length + 1,
        name: req.body.name
    };
    employees.push(employees);
    res.send(employees);
});
app.put('/employees/:id', (req, res) => {
    const employees = employees.find(c => c.id === parseInt(req.params.id));
    if (!employees) return res.status(404).send('ID not found....')
    
    const { error } = validateEmployees(req.body);
    if (error) return res.status(400).send(error.detail[0].message);

    employees.name = req.body.name
    res.send(employees)

});

function validateEmployees(employees) {
    let schema = {
        name: Joi.string().min(3).max(30).required()
    };

    return Joi.validate(employees, schema);
};

app.delete('/employees/:id', (req, res) => {
    const employees = employees.find(c => c.id === parseInt(req.params.id));
    if (!employees) return res.status(404).send('Employee ID not found.... ')

    employees.index = employees.indexOf(employees);
    employees.splice(index, 1);

    res.send(employees);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listeninggg on port ${port}....`)
})