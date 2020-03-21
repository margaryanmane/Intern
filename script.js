//*******1********


// var str = '{"name":"John","age":31,"city":"New York"}';
// var obj = JSON.parse(str);
// console.log(obj.city);




//********2********

// let obj = {
//     prop : {
//         prop1: 'Great'
//     }
// };
//
// let obj2 = {
//     prop : {
//         prop2: 'Hello'
//     }
// };
//
//
// function getProp(param) {
//     if(param.prop.prop1){
//         return param.prop.prop1
//     } else {
//         return "NOT FOUND"
//     }
// }
//
// console.log(getProp(obj));
// console.log(getProp(obj2));



//*******3********


// let product = {
//     price: 10,
//     name: 'A'
// };
//
// // option 1
//
// // let price = product.price || 0;
//
// // option 2
//
// // let price = product.price ? product.price : 0;
//
// console.log(price);




//*******4*********

// let products = [
//     {
//         name: 'a',
//         price: 10
//     },
//     {
//         name: 'b',
//         price: 10
//     },
//     {
//         name: 'c',
//         price: 10
//     }
// ];
//
// let sum  = products.reduce(function(total, obj){
//     return total + obj.price
// },0);
//
// console.log(sum);





//********5*******

let list = [
  {
    name: "item 1"
  },
  {
    name: "item 2"
  },
  {
    name: "item 3"
  },
  {
    name: "item 4",
    items: [
      {
        name: "sub-item 1"
      },
      {
        name: "sub-item 2"
      },
      {
        name: "sub-item 3",
        items: [
          {
            name: "sub-sub-item 1"
          },
          {
            name: "sub-sub-item 2"
          },
          {
            name: "sub-sub-item 3",
            items: [
              {
                name: "sub-sub-sub-item 1"
              },
              {
                name: "sub-sub-sub-item 2"
              },
              {
                name: "sub-sub-sub-item 3"
              },
              {
                name: "sub-sub-sub-item 4"
              }
            ]
          }
        ]
      },
      {
        name: "sub-item 4"
      }
    ]
  },
  {
    name: "item 5"
  },
  {
    name: "item 6"
  }
];



//print list

function printList(list, content = '') {

  for (let item of list) {
    let innerContent = '';
    if (item.items) {
      innerContent = printList(item.items)
    }
    content += '<li>' + item.name + '<span class="remove" onclick="removeItem(\'' + item.name + '\')">-</span> <span class="add-item"  onclick="addItem(\'' + item.name + '\')">+</span>' + innerContent + '</li>';

  }
  return '<ul>' + content + '</ul>'

}

let div = document.createElement('div');
document.body.append(div);
div.innerHTML = printList(list);

//remove item

function removeItem(name, e = list) {

  for (let [idx, item] of e.entries()) {
    if (item.name === name) {
      e.splice(idx, 1);
      div.innerHTML = printList(list)
    }
    if (item.items) {
      removeItem(name, item.items)
    }
  }
}


//add item

function addItem(name, e=list) {
  for (let item of e) {
    if (item.name === name) {
      if (!item.items) {
        let newName = 'sub-' + name.split(' ')[0] + ' ' + 1;
        item.items = [{name: newName}];
      } else {
        let newName = 'sub-' + name.split(' ')[0] + ' ' + (item.items.length + 1);
        item.items.push({name: newName})
      }
      div.innerHTML = printList(list)
    }
    if (item.items) {
      addItem(name,item.items)
    }
  }
}












