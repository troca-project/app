import { SuggestionSearchBarService } from "../../infraestructure/suggestionSearchBarService";

const suggestionService = new SuggestionSearchBarService()


export const getLocalSugestions  = ( ) => {
    return suggestionService.getLocalSugestions()
}

export const saveSuggestion  = (suggestion:string) => {
    return suggestionService.postLocalSuggestion(suggestion)
}

export const  getSuggestions = async (searchQuery:string) => {
    return await suggestionService.getSuggestions(searchQuery)
}