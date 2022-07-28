import axios from "axios";

let catalog = [
  {
    id: 1,
    price: 15.0,
    stock: 15,
    title: "Black Basketball",
    image: "black basketball.jpg",
    discount: 4,
    category: "Basketball",
  },
  {
    id: 2,
    price: 30.0,
    stock: 30,
    title: "Black Baseball",
    image: "black baseball.jpg",
    discount: 15,
    category: "Baseball",
  },
  {
    id: 3,
    price: 20.0,
    stock: 45,
    title: "Black Tennis ball",
    image: "black tennis ball.jpg",
    discount: 30,
    category: "Tennis",
  },
  {
    id: 4,
    price: 45.0,
    stock: 25,
    title: "Black Golf ball",
    image: "black golf ball.jpg",
    discount: 50,
    category: "Golf",
  },
  {
    id: 5,
    price: 25.0,
    stock: 115,
    title: "Black Softball",
    image: "black-softball-hi.png",
    discount: 10,
    category: "Softball",
  },
  {
    id: 6,
    price: 42.0,
    stock: 150,
    title: "Black Tennis Racquet",
    image: "black tennis racquet.jpg",
    discount: 25,
    category: "Tennis",
  },
];
class DataService {
  serverURL = "http://127.0.0.1:5000/api/products";

  async getCatalog() {
    // TODO: call the server and get the data
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
    // use the line below to show a catalog without backend
    // return catalog
  }

  async saveProduct(prod) {
    // send prod to server
    let response = await axios.post(this.serverURL + "/api/products", prod);
  }
}

export default DataService;
