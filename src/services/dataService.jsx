let catalog = [
    {
        price: 15.00,
        stock: 15,
        title: "Black Basketball",
        image: "black basketball.jpg",
        discount: 4,
        category: "Basketball"
    },
    {
        price: 30.00,
        stock: 30,
        title: "Black Baseball",
        image: "black baseball.jpg",
        discount: 15,
        category: "Baseball" 
    },
    {
        price: 20.00,
        stock: 45,
        title: "Black Tennis ball",
        image: "black tennis ball.jpg",
        discount: 30,
        category: "Tennis"
    },
    {
        price: 45.00,
        stock: 25,
        title: "Black Golf ball",
        image: "black golf ball.jpg",
        discount: 50,
        category: "Golf"
    },
    {
        price: 25.00,
        stock: 115,
        title: "Black Softball",
        image: "black-softball-hi.png",
        discount: 10,
        category: "Softball"
    },
    {
        price: 42.00,
        stock: 150,
        title: "Black Tennis Racquet",
        image: "black tennis racquet.jpg",
        discount: 25,
        category: "Tennis"
    },
]
class DataService {
    getCatalog(){
        return catalog;
    }
}

export default DataService;
