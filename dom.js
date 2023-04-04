// // EXAMINE THE DOCUMENT OBJECT
// // console.dir(document);
// console.log(document.domain);
// console.log(doucment.URL);
// console.log(doucment.title);
// // document.title = 123;
// console.log(doucment.doctype);
// console.log(doucment.head);
// console.log(doucment.all);
// console.log(doucment.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(doucment.forms[0]);
// console.log(doucment.links);
// console.log(doucment.images);

// GETELEMENTSBYCLASS
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// item[1].textcontent = 'Hello 2';
// item[1].style.fontWeight = 'bold';
// item[1].style.backgroundColor = 'bold';

// for (var i = 0; i < item.lenth; i++){
//     item[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR
var title = document.querySelectorAll('.title');
console.log('title');
titel[0].textcontent = 'Hello';
var odd = document.querySelectorAll('li:nth-child(odd)');
var odd = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i< odd.lenth; i++){
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = '#ccc'
}