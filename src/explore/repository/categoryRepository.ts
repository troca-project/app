import { CategoryRepositoryDomain } from "../domain/categoryRepositoryDomain";

export class CategoryRepository implements CategoryRepositoryDomain {
  async getCategories() { 
    return await new Promise((resolve, rej)=>{
            resolve([
              {
                id: 1,
                name: "Alimentos",
                image:"https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_supermercado_carousel-qa-categories-landing.webp"
              },
              {
                id: 4,
                name: "Hogar",
                image:"https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_inmuebles_carousel-qa-categories-landing.webp"

              },
              {
                id: 2,
                name: "Ropa",
                image:"https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_style_winter_1_carousel_mobile.webp"
              },
           
            
              {
                id: 5,
                name: "Herramientas",
                image:"https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_style_winter_1_carousel_mobile.webp"

              },

              {  
                id: 3,
                name: "Calzado",
                image:"https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_style_winter_1_carousel_mobile.webp"

              },
              {
                id: 6,
                name: "Construcción",
                image:"https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_style_winter_1_carousel_mobile.webp" 
 
              },
            ])
    })
  }
};