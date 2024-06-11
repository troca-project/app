import React, {
  SetStateAction,
  createContext,
  Dispatch,
  useContext,
  useState,
} from "react";
import { FiltersEntity } from "../../domain/filtersEntity";

export const FiltersContext = createContext<any>({});

export const FiltersProvider = ({ children }) => {

  const [filters, setFilters] = useState<FiltersEntity>({});

  const getAciveFilters = (filters: FiltersEntity|null) => {

    if (!filters) return 0

    const keys = Object.keys(filters);
    let totalFilters = 0;

    for (let i = 0; i < keys.length; i++) {
      filters[keys[i]] ? totalFilters++ : null;
    }
    return totalFilters;
  };

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, countFilters: getAciveFilters(filters)}}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () =>
  useContext<{
    filters: FiltersEntity;
    setFilters: Dispatch<FiltersEntity|null>;
    countFilters: number;
  }>(FiltersContext);
