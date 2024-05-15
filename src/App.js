import { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import './App.css';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const productsImg = require.context('./images/products', false, /\.(png|jpe?g|svg)$/);
const filtersImg = require.context('./images/UI/filters', false, /\.(png|jpe?g|svg)$/);

function App() {
  const navigationInfo = [
    {title: "Shops", link: "#"},
    {title: "Offers", link: "#"}, 
    {title: "Warranty", link: "#"}, 
    {title: "Medical", link: "#"}, 
    {title: "Info", link: "#"}, 
    {title: "Blog", link: "#"}, 
    {title: "About us", link: "#"}, 
    {title: "Contact", link: "#"},  
  ]
  const filterInfo = [
    {title: "Contact Lenses", image: filtersImg('./lens.svg')},
    {title: "Colored Lenses", image: filtersImg('./colored lens.svg')},
    {title: "Blue light", image: filtersImg('./blue glasses.svg')},
    {title: "Sports", image: filtersImg('./sport glasses.svg')},
    {title: "Sunwear", image: filtersImg('./sunglasses.svg')},
    {title: "Optical", image: filtersImg('./glasses.svg')},
  ]
  const articlesInfo = [
    {title: "Headline", body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.+"},
    {title: "Headline", body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.+"}
  ]
  const [products, setProducts] = useState([
    {name: "lenses 1", type: "1", price: 500, image: productsImg('./glasses1.png'), body: "description", year: 2023, brand: "brand 1"},
    {name: "color lenses 1", type: "2", price: 50, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "blue glasses 1", type: "3", price: 4000, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "sport glasses 1", type: "4", price: 1000, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "sunwear glasses 1", type: "5", price: 8000, image: productsImg('./glasses1.png'), body: "description", year: 2020, brand: "brand 1"},
    {name: "Revel Slater", type: "5", price: 65.80, image: productsImg('./sunglasses1.jpg'), body: "The Revel Slater is a stylish sunglasses frame that's impossible to ignore. Hand crafted from lightweight TR-90, it features a high keyhole-shaped nose bridge, flexible arms and a lustrous hue.", year: 2024, brand: "Klarna"},
    {name: "optical glasses 1", type: "6", price: 5000, image: productsImg('./glasses1.png'), body: "description", year: 2023, brand: "brand 1"},
  ])

  const [modalVisible, setModalVisible] = useState(false)

  const[filter, setFilter] = useState({
    sort: '',
    sortInvert: false, 
    query: '', 
    type: [], 
    priceDiapason: {min: 0, max: Infinity}
  })

  const sortedAndSearchedProducts = useProducts(products, filter.sort, filter.sortInvert, filter.priceDiapason, filter.query, filter.type)
  
  const createProduct = (product) => {
    setProducts([...products, product])
    setModalVisible(false)

    console.log("create product");
  }

  return (
    <div className="App">
      <Header
        navigationInfo={navigationInfo}
      />
      <Shop
        filter={filter}
        filterInfo={filterInfo}
        setFilter={setFilter}
        create={createProduct}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        products={sortedAndSearchedProducts}
      />
      <Footer
        articlesInfo={articlesInfo}
      />

    </div>
  );
}

export default App;
