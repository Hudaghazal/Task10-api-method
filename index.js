
fetch('https://fakestoreapi.com/products')
.then((res)=> res.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

const product= {
    
    
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
        rate: 3.9,
        count: 120
        }
        
}
fetch('https://fakestoreapi.com/products' ,{
method:'post',
body : JSON.stringify(product)
})
.then((res)=> res.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))



const product7 ={
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    }

fetch('https://fakestoreapi.com/products/7' ,{
method:'put',
body : JSON.stringify(product7)
})
.then((res)=> res.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))




fetch('https://fakestoreapi.com/products/6' ,{
method:'delete'
})
.then((res)=> res.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))


