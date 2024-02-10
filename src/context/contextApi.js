import React, { createContext, useState, useEffect } from "react";

<<<<<<< HEAD
import { fetchDataFromApi } from "../utils/api.js";
=======
import  {fetchDataFromApi}  from "../utils/api.js";
>>>>>>> 2bd6c94964e17a0ae56bcb43c0ea5752750e7072

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);


    useEffect (() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            console.log(res);
            setSearchResult(res)
            setSearchResult(res)
            setLoading(false);
        })
    }

    return  (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSelectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
};