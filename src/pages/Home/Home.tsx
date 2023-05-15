import { useContext } from 'react';
import { HomeContainer } from "./Home.style";
import QRCode from '../../components/QrCode/QRCode';
import Form from "../../components/Form/Form";
import Networks from '../../components/Networks/Networks';
import { Context } from '../../utils/context/context';
import { networks } from '../../utils/datas/networks';
import { supports } from '../../utils/datas/supports';

export default function Home() {
  const { code, setCode } = useContext(Context)!;

  return (
    <HomeContainer>
      <QRCode code={code}/>
      <Form code={code} set={setCode}/>
      <Networks networks={networks}/>
      <Networks networks={supports}/>
    </HomeContainer>
  )
}
