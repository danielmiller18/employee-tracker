const validator = require("validator");

const validate = {
    validateString(str){
        return str != '' || "okease enter a valid response";
    },
    validateSalary(num){
       if(validator.isDecimal(num)) return true;
       return 'Please enter a valid Salary';
    },
    isSame(str1, str2){
        if(str1 === str2) return true;
    }
};

module.exports = validate;