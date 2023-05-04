import { useState, useRef } from 'react';
import { QRCodeContainer } from "./QRCode.style";
import FormQrCode from "../../components/FormQrCode/FormQrCode";
import { QRCodeSVG } from 'qrcode.react';
import { downloadImage } from '../../utils/functions/downloadImage';
import { printImage } from '../../utils/functions/printImage';

export default function QRCode() {
  
  const [ options, setOptions ] = useState({
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

  const svgRef = useRef<HTMLDivElement>(null);

  return (
    <QRCodeContainer>
      <div ref={svgRef}>
        <QRCodeSVG
          value={options.value}
          size={options.size}
          bgColor={options.bgColor}
          fgColor={options.fgColor}
          level={options.level}
          includeMargin={options.includeMargin}
          imageSettings={{
            src: options.imageSettings.src,
            height: options.imageSettings.height,
            width: options.imageSettings.width,
            excavate: options.imageSettings.excavate,
          }}
        />
      </div>
      <div>
        <button onClick={() => downloadImage('png', svgRef)}>Télécharger</button>
        <button onClick={() => printImage('qrcode', svgRef)}>Imprimer</button>
      </div>
      <FormQrCode options={options} setOptions={setOptions}/>
    </QRCodeContainer>
  )
}
