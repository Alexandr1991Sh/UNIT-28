class Goods {
    constructor(image, out, name, amount) {
        this.image = image;
        this.out = out;
        this.name = name;
        this.amount = amount;
    }
    draw() {
        document.querySelector(this.out).innerHTML = `<div><img src="${this.image}" alt=""><h1>${this.name}</h1> <p>${this.amount}</p> </div>`;
    }
}