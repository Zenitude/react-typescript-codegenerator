import { useState, useRef } from 'react';
import { OptionsBarCode } from '../../utils/types/types';
import { BarCodeContainer } from "./CodeBar.style";
import FormBarCode from '../../components/FormBarCode/FormBarCode';
import Barcode from 'react-barcode';
import { downloadImage } from '../../utils/functions/downloadImage';
import { printImage } from '../../utils/functions/printImage';

export default function CodeBar() {

    const [ options, setOptions ] = useState<OptionsBarCode>({  
        value: "barcode-example",
        width: 2,
        height: 100,
        format: "CODE128",
        displayValue: true,
        fontOptions: "",
        font: "monospace",
        textAlign: "center",
        textPosition: "bottom",
        textMargin: 2,
        fontSize: 20,
        background: "#ffffff",
        lineColor: "#000000",
        margin: 10,
        marginTop: undefined,
        marginBottom: undefined,
        marginLeft: undefined,
        marginRight: undefined   
    });

    const svgRef = useRef<HTMLDivElement>(null);
    
    return (
      <BarCodeContainer>
        <div ref={svgRef}>
          <Barcode
            value={options.value}
            width={options.width}
            height={options.height}
            // format={options.format}
            displayValue={options.displayValue}
            fontOptions={options.fontOptions}
            font={options.font}
            textAlign={options.textAlign}
            textPosition={options.textPosition}
            textMargin={options.textMargin}
            fontSize={options.fontSize}
            background={options.background}
            lineColor={options.lineColor}
            margin={options.margin}
            marginTop={options.marginTop}
            marginBottom={options.marginBottom}
            marginLeft={options.marginLeft}
            marginRight={options.marginRight}
          />
        </div>
        <div>
          <button onClick={() => downloadImage('png', svgRef)}>Télécharger</button>
          <button onClick={() => printImage('barcode', svgRef)}>Imprimer</button>
        </div>

        <FormBarCode options={options} setOptions={setOptions}/>
      </BarCodeContainer>
    )
}
