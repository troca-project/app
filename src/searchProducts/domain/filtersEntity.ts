export interface FiltersEntity {
  sortBy?: SortByType | null;
  state?: StateProductTypes | null;
  color?:string | null
}

export interface FilterRadioProps {
  title: string;
  filters: any[];
  value: any;
  onValueChange: (value: string) => void;
}

export type FiltersByCategory = {
  clothes: ClothesFilters;
  phone: PhoneFilters;
  // Agrega aquí más categorías si es necesario
};

export type ClothesFilters = {
  sizes:sizeTypeModel
  color: colorTypeModel
};

export type sizeTypeModel = {
  name:string
  traduction: string;
  typeInput:TypeInputFilters;
  values: { value: string; description: string}[];
}

export type colorTypeModel = {
  name:string
  traduction: string;
  typeInput:TypeInputFilters;
  values: { value: string; description: string, codeWind:string }[];
} 


export type PhoneFilters = {
  brand: {
    typeInput:TypeInputFilters;
    traduction: string;
    values: { value: string; description: string }[];
  };
};

export type RadioProps = { value: string; description: string };


export enum TypeInputFilters{
  radio = 'radio',
  colorPicker = 'colorPicker',
}

export enum SortByType {
  recents = "recents",
  featured = "featured",
  closest = "closest",
}

export enum StateProductTypes {
  new = "new",
  used = "used",
}

export enum ColorsProductTypes {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  Yellow = 'yellow',
  Orange = 'orange',
  Pink = 'pink',
  Brown = 'brown',
  Gray = 'gray',
  Black = 'black',
  White = 'white',
}
