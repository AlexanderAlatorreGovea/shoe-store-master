const Data = [
    {
        "title": "Scotts",
        "alternative_title": "Jeremy Scotts Pandabear",
        "routeName": "Scotts",
        "gender": [
            {
            "male": true, 
            "female": true
            }
        ],
        "brand": "Adidas",
        "price": 400,
        stock: 
            [
                { size: 3, stock: 100 },
                { size: 3.5, stock: 10 },
                { size: 4, stock: 0 },
                { size: 4.5, stock: 330 },
                { size: 5, stock: 5 },
                { size: 5.5, stock: 555 },
                { size: 6, stock: 6 },
                { size: 6.5, stock: 63 },
                { size: 7, stock: 0 },
                { size: 7.5, stock: 100 },
                { size: 8, stock: 33 },
                { size: 8.5, stock: 333 },
                { size: 9, stock: 222 },
                { size: 9.5, stock: 99 },
                { size: 10, stock: 99 },
                { size: 10.5, stock: 77 },
                { size: 11, stock: 55 }
            ]
        ,
        "description": "The Womens Air Jordan 1 Satin Black Toe” is a special construction of the original colorway of the Jordan 1 with satin paneling on the heel. Following the same blueprint of the Satin Shattered Backboard” colorway that was also a women’s exclusive, this Satin Black Toe” edition features a black and white leather upper with red satin at the heel. The Air Jordan wings” logo on the ankle is presented in a metal medallion to complete the premium look. The Women’s Air Jordan 1 Satin Black Toe” released on August 17, 2019 in limited quantities.",
        "image": "https://drive.google.com/uc?id=1Uzaa15R2zn-YAozyyVi7RI5GAlhB0uCo"
    },
    {
        "title": "Boost 350 White",
        "alternative_title": "Yeezy Boost 350 White",
        "routeName": "yeezy",
        "gender": [
            {
            "male": true,
            "female": false
            }
        ],
        "brand": "Nike",
        "price": 200,
        stock: 
            [
                { size: 3, stock: 140 },
                { size: 3.5, stock: 130 },
                { size: 4, stock: 10 },
                { size: 4.5, stock: 30 },
                { size: 5, stock: 53 },
                { size: 5.5, stock: 55 },
                { size: 6, stock: 64 },
                { size: 6.5, stock: 643 },
                { size: 7, stock: 0 },
                { size: 7.5, stock: 100 },
                { size: 8, stock: 334 },
                { size: 8.5, stock: 333 },
                { size: 9, stock: 22 },
                { size: 9.5, stock: 9 },
                { size: 10, stock: 99 },
                { size: 10.5, stock: 7 },
                { size: 11, stock: 45 }
            ],
        "description": "The adidas Yeezy Boost 350 v2 Static released in December 2018, bringing a new look to Kanye Wests popular silhouette. The updated Yeezy 350 features a transparent mesh panel in place of the usual side stripe. The panel is woven into the Primeknit upper on each lateral side. The Yeezy 350 Static introduced an intricate new Primeknit pattern in white and grey hues. The clean appearance is solidified with a translucent white rubber midsole and outsole that wrap full-length Boost cushioning. The unique design of the adidas Yeezy Boost 350 v2 Static provided a refreshing update that will be in-demand for years to come.",
        "image": "https://drive.google.com/uc?id=16Js6C1UyksZdVrPj_VdVKC16yYQcbMIp"
    },
    {
        "title": "Grey Yeezys",
        "alternative_title": "Adidas Yeezy 500 Bone White",
        "routeName": "yeezy-bone-whit",
        "gender": [
            {
            "male": true,
            "female": false
            }
        ],
        "brand": "Dolce & Gabbana",
        "price": 350,
        stock: 
        [
            { size: 3, stock: 140 },
            { size: 3.5, stock: 10 },
            { size: 4, stock: 1 },
            { size: 4.5, stock: 340 },
            { size: 5, stock: 53 },
            { size: 5.5, stock: 535 },
            { size: 6, stock: 654 },
            { size: 6.5, stock: 43 },
            { size: 7, stock: 20 },
            { size: 7.5, stock: 70 },
            { size: 8, stock: 34 },
            { size: 8.5, stock: 33 },
            { size: 9, stock: 2 },
            { size: 9.5, stock: 94 },
            { size: 10, stock: 9 },
            { size: 10.5, stock: 74 },
            { size: 11, stock: 45 }
        ]
    }
]


var set3 = new Set([ 4, 5.5, 6, 6.5 ]); 

const arr = [];

for (const cat of set3) {
    arr.push(cat)
}

//console.log(arr)

// // let mappedData = Data.map((product) => {
// //   return product.stock.map((item) => {
// //     item.stock === 0 ? item.size = false: item.size;
// //       return item.size
// //   })
// // })

let mappedData = Data.map((product) => {
  return product.stock.map((item) => {
     if(item.stock === 0) {
       return item.size = undefined
     } else {
       return item.size
     }
  })
})

const filteredArray = arr.filter(item => item)

//console.log(filteredArray)

//console.log(mappedData)
//  if(filter = item.filter((prod) => arr.includes(prod) && prod !== false)) 
//const filteredData = item.filter((prod) => prod);

 console.log(filteredArray)
mappedData.forEach((item, idx, array) => {
  //const filteredData = item.filter((prod) => prod);
  //const filteredArray = arr.filter((prod, idx, arr) => console.log(prod))
  //console.log(filteredArray)
  //const itemX = item;
  //const filteredArray = arr.filter(item => console.log(item))
  //const filteredArray = arr.filter((item) => { return  item })
  check = arr.every( r => item.indexOf(r) >= 0)
  //item.some(includes(arr[idx]))
  console.log(check)
      if( 
        //console.log(item.has(arr.filter((p) => p)))
        console.log(item.includes(arr[idx]))

      )
        {
          console.log(item)
        } else {
        return item
      }
})

//console.log(mappedData)

//console.log(mappedData.filter((item, i, arr) => return item)


// for (const cat of Data) {
//         for (const item of cat.stock) {
//           console.log(item.size)
//     }
// }


//*******************//

const mappedData = Data.map((product) => {
    return product.stock.map((item) => {
       if(item.stock === 0) {
         return item.size = false
       } else {
         return item.size
       }
     })
    }).find((item) => {
        const check = arr.every(r => item.indexOf((r)) >= 0);
        if( check ) { 
          return item
        } else {
          return null
        }
    })
  
  console.log(mappedData)


  /************************ ANSWER*/

  const mappedData = Data.map((product) => {
    return product.stock.map((item) => {
       if(item.stock === 0) {
         return item.size = false
       } else {
         return item.size
       }
     })
    }).filter(function(item, idx, array) {
      //console.log(item)
        const check = arr.every(r => item.indexOf((r)) >= 0);
        const state = [];
        //check ? null : item;
        //console.log(item)
        if( check ) { 
          return item
        } else {
          return null
        }
        console.log(state)
    })


const set3 = new Set([11, 10.5]);
const selectedSizes = [...set3];

const filteredProducts = Data.filter(product =>
  selectedSizes.every(size =>
    product.stock.some(s => s.stock > 0 && s.size === size)));

console.log(filteredProducts);