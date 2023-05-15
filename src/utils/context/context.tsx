import { createContext, useState } from "react";
import { OptionsQrCode, ContextDatasProps, DatasContextType } from '../types/types';

export const Context = createContext<DatasContextType | null>(null);

export const ContextProvider = ({children} : ContextDatasProps) => {
    const [ optionsQrCode, setOptionsQrCode ] = useState<OptionsQrCode>({
        value: "https://picturesofpeoplescanningqrcodes.tumblr.com/",
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
        level: "L",
        includeMargin: false,
        imageSettings: {
          src: "https://static.zpao.com/favicon.png",
          height: 24,
          width: 24,
          excavate: true,
        }
    })
    
    return(
        <Context.Provider value={{optionsQrCode,setOptionsQrCode}}>
            {children}
        </Context.Provider>
    )
}