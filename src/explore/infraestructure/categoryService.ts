import { CategoryRepositoryDomain } from "../domain/categoryRepositoryDomain";



export class CategoryService{
     constructor(private categoryRepository:CategoryRepositoryDomain){
    }
    
    async getAllCategories(){
        return await this.categoryRepository.getCategories()
    }

    
}