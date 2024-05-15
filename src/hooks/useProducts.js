import { useMemo } from "react";

export const useSortedProducts = (products, sort, sortInvert, priceDiapason) => {
    const sortedProducts = useMemo(() => {
        console.log("sorted products");
        let productsCopy = [...products];
        if (priceDiapason.min > 0 || priceDiapason.max !== Infinity) {
          productsCopy = productsCopy.filter((product) => {
          const price = product.price; 
          return price >= priceDiapason.min && price <= priceDiapason.max;
        })}
        if(sort === "name"){
          if(sortInvert){
            return [...productsCopy].sort((a, b) => b[sort].localeCompare(a[sort]))
          } 
          else {
            return [...productsCopy].sort((a, b) => a[sort].localeCompare(b[sort]))
          }
        }
    
        else if(sort){
          if(sortInvert){
            return [...productsCopy].sort((a, b) => b[sort] - a[sort])
          } 
          else {
            return [...productsCopy].sort((a, b) => a[sort] - b[sort])
          }
        } 
          return productsCopy;
    
      }, [sort, sortInvert, priceDiapason, products])

      return sortedProducts
}

export const useProducts = (products, sort, sortInvert, priceDiapason, query, type) => {
    const sortedProducts = useSortedProducts(products, sort, sortInvert, priceDiapason);
    const sortedAndSearchedProducts = useMemo(() => {
        return sortedProducts.filter(product => {
          const nameMatches = product.name.toLowerCase().includes(query.toLowerCase());
          const typeMatches = type.length === 0 || type.includes(product.type);
    
          return nameMatches && typeMatches;
        });
      }, [query, type, sortedProducts]);

      return sortedAndSearchedProducts;
}