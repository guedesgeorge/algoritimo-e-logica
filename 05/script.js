/* 

CAPTURE ITEMS PARA COMPOR A ÇLISTA DE UM SUPERMECADO 

APÓS CAPTURAR OS 10 ITENS, IMPRIMA-OS, SEPARANDO POR VÍRGULA
*/


let items = [];

for(let item = 0; item < 3; item++) {
 let itemName = prompt(`Digite o item ` + (item + 1))

 items[item] = itemName
}

alert(items[0])