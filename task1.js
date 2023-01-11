
let m = new Goods('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBdbjuKOQG_pCVL0_FQ29O8IXIAmmKOuoiBcKMM284CcuWfSjwJEEaD9BlJbhYe6wYvo&usqp=CAU', '.out-4', 'Java Script', '500');
console.log(m)
m.draw();

let m2 = new Goods2('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_aqPnz3cPjFzh0FJfpHKy2zKxMD-9aEKww&usqp=CAU', '.out-6', 'Java Script', '500', 'true');
m2.draw();

let m3 = new Valid('.out-8', '-', '4', '-', '-');
m3.validate();
