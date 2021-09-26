import React, { createContext, useContext, useState } from "react"
import { footerInterface, navInterface, dataContextType, providerProps, navDefaultValue, footerDefaultValue, dataContextDefaultValues } from "../Interfaces/Interface";

const dataContext = createContext<dataContextType>(dataContextDefaultValues);

export function useDataContext(){
    return useContext(dataContext);
}

export function DataContextProvider({children}: providerProps) {

    const [navData, setNavData] = useState<navInterface>(navDefaultValue);
    const [footerData, setFooterData] = useState<footerInterface>(footerDefaultValue);

    const setNav = (data: navInterface) => {
        setNavData(data);
    }

    const setFooter = (data: footerInterface) => {
        setFooterData(data);
    }

    const value = {
        navData,
        footerData,
        setNav,
        setFooter,
    }

    return (
        <>
            <dataContext.Provider value={value}>
                {children}
            </dataContext.Provider>
        </>
    )
}
