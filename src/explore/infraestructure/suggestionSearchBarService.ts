import { CategoryRepositoryDomain } from "../domain/categoryRepositoryDomain";
import AsyncStorage from '@react-native-async-storage/async-storage';


 
export class SuggestionSearchBarService{
    constructor(private categoryRepository?:CategoryRepositoryDomain){ //SUGGESTION REPOSITORY!!!!!
        
    }

    
    async getSuggestions(searchQuery:string){
        //OBTENER POSIBLES PRODUCTOS QUE CUMPLAN CON EL QUERY
        const suggestions = []

        const localSuggestions = (await this.getLocalSugestions()).filter(s => this.hasSuggestion(s, searchQuery))

        console.log(localSuggestions, );
        
        const suggestionsRecovery = [{query:'Martillo'},  {query:'Lavarropas'}, {query:'moto 110'} ].filter(s=> searchQuery && this.hasSuggestion(s, searchQuery))
        const cleanRecovery = this.removeRepeats(suggestionsRecovery, localSuggestions)

        return [ ...localSuggestions, ...cleanRecovery,]
    }

    async getLocalSugestions():Promise<any[]>{
        const suggestions = await AsyncStorage.getItem('recent-suggestions')
        console.log(suggestions);
        if (!suggestions) return []

        return JSON.parse(suggestions)
    }

    async postLocalSuggestion(suggestion:string){

        const allSuggestions:any[]|null = await this.getLocalSugestions()

        if (!allSuggestions){
            await AsyncStorage.setItem('recent-suggestions', JSON.stringify([{query:suggestion, local:true}]))
            return
        }

        if (allSuggestions.findIndex(s => s.query.toLowerCase() === suggestion.toLowerCase()) !== -1) return //EROROR

        const newSuggestions = [...allSuggestions, {query:suggestion, local:true}]
        await AsyncStorage.setItem('recent-suggestions', JSON.stringify(newSuggestions))
    }

    
    async removeSuggestions(){
        await AsyncStorage.removeItem('recent-suggestions')
    }


    hasSuggestion(suggestion, searchQuery) {
        return suggestion.query.toLowerCase().includes(searchQuery.toLowerCase())
        
    }

    removeRepeats(arr1: any[], arr2: any[] ){
        return arr1.filter(objeto1 =>
            !arr2.some(objeto2 => objeto2.query.toLowerCase() === objeto1.query.toLowerCase()))
        }

}