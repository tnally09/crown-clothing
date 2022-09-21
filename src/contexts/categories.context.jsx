import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

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
            try {
                const categoryMap = await getCategoriesAndDocuments();
                setCategoriesMap(categoryMap);
            } catch(error) {
                console.log(error);
            }
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap };
    return(
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    );
};