const mongoose = require('mongoose');


// defining schema:
 
const employeeSchema = mongoose.Schema({
    eName: { type: String, required: true, trim: true },
    eAge: { type: Number, required: true },
    eSalary:{type:mongoose.Decimal128,required:true},
})

// Model

const EmployeeModel = mongoose.model('employee', employeeSchema);

module.exports =EmployeeModel;