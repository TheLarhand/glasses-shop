import { useMemo, useState } from 'react';
import './App.css';
import Shop from './components/shop/Shop';

const productsImg = require.context('./images/products', false, /\.(png|jpe?g|svg)$/);
const filtersImg = require.context('./images/UI/filters', false, /\.(png|jpe?g|svg)$/);

function App() {
  const filterInfo = [
    {title: "Contact Lenses", image: filtersImg('./lens.svg')},
    {title: "Colored Lenses", image: filtersImg('./colored lens.svg')},
    {title: "Blue light", image: filtersImg('./blue glasses.svg')},
    {title: "Sports", image: filtersImg('./sport glasses.svg')},
    {title: "Sunwear", image: filtersImg('./sunglasses.svg')},
    {title: "Optical", image: filtersImg('./glasses.svg')},
  ]
  const [products, setProducts] = useState([
    {name: "lenses 1", type: "1", price: 500, image: productsImg('./glasses1.png'), body: "description", year: 2023, brand: "brand 1"},
    {name: "color lenses 1", type: "2", price: 50, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "blue glasses 1", type: "3", price: 4000, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "sport glasses 1", type: "4", price: 1000, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "sunwear glasses 1", type: "5", price: 8000, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "optical glasses 1", type: "6", price: 5000, image: productsImg('./glasses1.png'), body: "description", year: 2023, brand: "brand 1"},
  ])

  const[filter, setFilter] = useState({
    sort: '',
    sortInvert: false, 
    query: '', 
    type: [], 
    priceDiapason: {min: 0, max: Infinity}
  })

  const sortedProducts = useMemo(() => {
    console.log("sorted products");
    let productsCopy = [...products];
    if (filter.priceDiapason.min > 0 || filter.priceDiapason.max !== Infinity) {
      productsCopy = productsCopy.filter((product) => {
      const price = product.price; 
      return price >= filter.priceDiapason.min && price <= filter.priceDiapason.max;
    })}
    if(filter.sort === "name"){
      if(filter.sortInvert){
        return [...productsCopy].sort((a, b) => b[filter.sort].localeCompare(a[filter.sort]))
      } 
      else {
        return [...productsCopy].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
    }

    else if(filter.sort){
      if(filter.sortInvert){
        return [...productsCopy].sort((a, b) => b[filter.sort] - a[filter.sort])
      } 
      else {
        return [...productsCopy].sort((a, b) => a[filter.sort] - b[filter.sort])
      }
    } 
      return productsCopy;

  }, [filter.sort, filter.sortInvert, filter.priceDiapason, products])

  const sortedAndSearchedProducts = useMemo(() => {
    return sortedProducts.filter(product => {
      const nameMatches = product.name.toLowerCase().includes(filter.query.toLowerCase());
      const typeMatches = filter.type.length === 0 || filter.type.includes(product.type);

      return nameMatches && typeMatches;
    });
  }, [filter.query, filter.type, sortedProducts]);
  

  const createProduct = (product) => {
    setProducts([...products, product])

    console.log("create product");
  }

  return (
    <div className="App">
      <Shop
        filter={filter}
        filterInfo={filterInfo}
        setFilter={setFilter}
        create={createProduct}
        products={sortedAndSearchedProducts}/>
    </div>
  );
}

export default App;
