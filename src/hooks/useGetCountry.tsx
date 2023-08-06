import React, { useState } from 'react';
// import { getQueryClient } from '@/helpers/lib';
import { dehydrate, useQuery } from '@tanstack/react-query';
import { Country, State, City, ICountry, IState, ICity } from 'country-state-city';

function useGetCountryList() {
  const [selectedValue, setSelectedValue] = useState({
    label: '',
    value: '',
  });

  // Queries
  const allCountriesQuery: any = useQuery({
    queryKey: ['allCountries()'],
    queryFn: () => Country.getAllCountries(),
  });
  // const allStatesQuery: any = useQuery({
  //   queryKey: ['allStates', selectedValue.value],
  //   queryFn: () => State.getStatesOfCountry(selectedValue.value),
  // });
  // const allCitiesQuery: any = useQuery({
  //   queryKey: ['allCities', selectedValue.value],
  //   queryFn: () => City.getCitiesOfCountry(selectedValue.value),
  // });

  return {
    selectedValue,
    setSelectedValue,
    allCountriesQuery,
    // allStatesQuery,
    // allCitiesQuery,
  };
}

export default useGetCountryList;
