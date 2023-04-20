import { useQuery } from '@tanstack/react-query'
import { getPlaceByTitle, getPlaces, getPlacesByCategory } from "../api";

export const usePlaces = () => {
    const { data, isLoading } = useQuery([], getPlaces);
    return { data, isLoading };
};

export const usePlacesByCategory = (category) => {
    const { data, isLoading } = useQuery([category], getPlacesByCategory);
    return { data, isLoading };
};

export const usePlaceByTitle = (placeTitle) => {
    const { data, isLoading } = useQuery([placeTitle], getPlaceByTitle);
    return { data, isLoading };
};