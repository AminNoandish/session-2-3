var list = ['Pencil', 'pen', 'ruler', 'pencil case', 'eraser'];
console.log(list);
var name = Number(prompt('What product do you need? 1-pencil 2-pen 3-ruler 4-pencil case 5-eraser')) - 1;
console.log(name);
var c = list.indexOf(list[name]);
console.log(c);
(c == name) ? alert(list[name] + ' Available'): alert(' Not_Available');