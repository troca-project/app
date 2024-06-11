import { CategoryService } from "../../infraestructure/categoryService";
import { CategoryRepository } from "../../repository/categoryRepository";


const categoryService = new CategoryService(new CategoryRepository)

export const getAllCategories = async ( ) =>{
    return await categoryService.getAllCategories()
} 

