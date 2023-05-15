import { createContext, useState } from "react";
import { CodeType, ContextDatasProps, DatasContextType } from '../types/types';
import icone from '../../assets/Zen.webp';
export const Context = createContext<DatasContextType | null>(null);

export const ContextProvider = ({children} : ContextDatasProps) => {
    const [ code, setCode ] = useState<CodeType>({
        backgroundColor: "#ffffff",
        foregroundColor: "#000000",
        qrcode: {
            value: "http://www.example.com/",
            includeMargin: true,
            size: 250,
            level: "M",
            imageSettings: {
                src: icone,
                x: undefined,
                y: undefined,
                height: 50,
                width: 50,
                excavate: true
            }
        }
    })
    
    return(
        <Context.Provider value={{code,setCode}}>
            {children}
        </Context.Provider>
    )
}