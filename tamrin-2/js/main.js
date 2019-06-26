var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var question = Number(prompt('Which one do you want to delete? (betwen 1-15)')) - 1;
list.splice(question, 1);