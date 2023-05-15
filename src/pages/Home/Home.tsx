import { useState } from 'react';
import { HomeContainer } from "./Home.style";
import { CodeType } from '../../utils/types/types';
import QRCode from '../../components/QrCode/QRCode';
import Form from "../../components/Form/Form";
import Networks from '../../components/Networks/Networks';
import icone from '../../assets/Zen.png';
import { networks } from '../../utils/datas/networks';
import { supports } from '../../utils/datas/supports';

export default function Home() {
  
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

  return (
    <HomeContainer>
      <QRCode code={code}/>
      <Form code={code} set={setCode}/>
      <Networks networks={networks}/>
      <Networks networks={supports}/>
    </HomeContainer>
  )
}
