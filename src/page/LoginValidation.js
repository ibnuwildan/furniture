function Validation (values) {

    let error = {}
    const email_pattern = /^[^s\@+\.[^\s@z]+$/
    const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email = "Name should be empety"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "email didn't match"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "password  should be empety"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "password didn't match"
    }else {
        error.password = ""
    }
    return error;

}


export default Validation;