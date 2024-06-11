import { Product } from "../../interfaces/Product";
import { FiltersEntity } from "./filtersEntity";


export const applyFilters = (
    products: Product[],
    filters: FiltersEntity
  ): Product[]|undefined => {

    if (!products) {
      return undefined
    }

    const productsFiltred = products.filter(product => {
      for (const filterKey in filters) {
        const filterValue = filters[filterKey];

        console.log({this:product[filterKey] !== filterValue}, product[filterKey], filterValue);
        if (filterValue && product[filterKey] !== filterValue) {
          return false; // Si el producto no cumple con alguno de los filtros, lo excluimos
        }
      }

      return true; // El producto cumple con todos los filtros, lo conservamos
    });

    if (productsFiltred.length) {
      return productsFiltred
    }

    return undefined
  };