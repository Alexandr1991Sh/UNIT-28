class Goods2 extends Goods {
    constructor(image, out, name, amount, sale) {
        super(image, out, name, amount);
        this.sale = sale;
    }
    draw() {
        document.querySelector(this.out).innerHTML = `<div><img src="${this.image}" alt=""><h1>${this.name}</h1> <p>${this.amount}</p> <p>${this.sale} </p> </div>`;

    }
}