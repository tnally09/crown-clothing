import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.utils";

// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    // One-off call to populate DB in Firestore
    // Would not typically do this in front-end
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // })

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    })

    const value = { categoriesMap };
    return(
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    );
};