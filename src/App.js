import './App.css';
import Shop from './components/shop/Shop';

const productsImg = require.context('./images/products', false, /\.(png|jpe?g|svg)$/);
const filtersImg = require.context('./images/UI/filters', false, /\.(png|jpe?g|svg)$/);

function App() {
  const products = [
    {name: "lenses 1", type: 1, price: 5000, img: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "color lenses 1", type: 2, price: 5000, img: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "blue glasses 1", type: 3, price: 5000, img: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "sport glasses 1", type: 4, price: 5000, img: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "sunwear glasses 1", type: 5, price: 5000, img: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "optical glasses 1", type: 6, price: 5000, img: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
  ]
  return (
    <div className="App">
      <Shop 
      filtersImg={filtersImg}
      products={products}/>
    </div>
  );
}

export default App;
