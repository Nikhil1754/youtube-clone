import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
   
    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(( data ) => {
            console.log(data.contents)
            
            setSearchResults(data.contents);
            setLoading(false);
        });
       
    };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
