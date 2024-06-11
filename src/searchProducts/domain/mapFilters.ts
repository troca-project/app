import { FiltersByCategory, TypeInputFilters } from "./filtersEntity";

export const filtersShowAllways = {
  sortBy: [
    { value: "recents", description: "Recientes" },
    { value: "featured", description: "Recomendados" },
    { value: "closest", description: "Más cerca" },
  ],

  state: [
    { value: "new", description: "Nuevo" },
    { value: "used", description: "Usado" },
  ],
};


export const filtersByCategory: FiltersByCategory = {
  clothes: {
    sizes:{
      name:'size',
      typeInput:TypeInputFilters.radio,
      traduction:'Tamaño',
      values:[
        { value: "children", description: "Niños/as" },
        { value: "young", description: "Adolescentes" },
        { value: "adult", description: "Adultos" },
      ]
    },

    color:{
      name:'color',
      typeInput:TypeInputFilters.colorPicker,
      traduction:'Color',
      values: [
        { value: "red", description: "Rojo", codeWind:'bg-red-700' },
        { value: "blue", description: "Azul", codeWind:'bg-blue-700' },
        { value: "green", description: "Verde", codeWind:'bg-green-700' },
        { value: 'yellow', description: 'Amarillo', codeWind: 'bg-yellow-400' },
        { value: 'orange', description: 'Naranja', codeWind: 'bg-orange-700' },
        { value: 'pink', description: 'Rosa', codeWind: 'bg-pink-400' },
        { value: 'gray', description: 'Gris', codeWind: 'bg-gray-500' },
        { value: "black", description: "Negro", codeWind:'bg-black' },
        { value: 'brown', description: 'Marrón', codeWind: 'bg-amber-950' },
        { value: 'white', description: 'Blanco', codeWind: 'bg-white' },
        { value: 'purple', description: 'Violeta', codeWind: 'bg-purple-700' },
      ],
    }
  },

  phone: {
    brand:{
      typeInput:TypeInputFilters.radio,
      traduction:'Marca',
      values: [
        { value: "samsung", description: "Samsung" },
        { value: "apple", description: "Apple" },
        { value: "huawei", description: "Huawei" },
      ],
    }
  },
};



export const getFilterByCategory = <T extends keyof FiltersByCategory>(
  category: T
): FiltersByCategory[T] => {
  return filtersByCategory[category];
};