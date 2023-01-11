class Valid {
    constructor(out, email, password, isValid) {
        this.out = out;
        this.email = email;
        this.password = password;
        this.isValid = isValid;
    }
    validate() {
        if (this.password > 5) {
            document.querySelector(this.out).innerHTML = `<p>${this.email}</p> <p>${this.password}</p> <p>${this.isValid}  </p> <p>${true}</p>`;
            this.isValid = true;
        }
        else {
            document.querySelector(this.out).innerHTML = `<p>${this.email}</p> <p>${this.password}</p> <p>${this.isValid}  </p> <p>${false}</p>`;
            this.isValid = false;
        }
        console.log(this.isValid)
    }

}