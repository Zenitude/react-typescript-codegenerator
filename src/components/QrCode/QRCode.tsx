import { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ContainerQrCode } from './QRCode.style';
import { FaFileDownload } from 'react-icons/fa';
import { PropsCode } from '../../utils/types/types';
import { downloadImage } from '../../utils/functions/downloadImage';

export default function QRCode({code}: PropsCode): JSX.Element {
  const qrCodeRef = useRef<HTMLDivElement>(null);

  return (
    <ContainerQrCode className='containerQr'>
      <div ref={qrCodeRef}>
        <QRCodeCanvas
          id="qrcode"
          value={code.qrcode.value}
          size={code.qrcode.size}
          bgColor={code.backgroundColor}
          fgColor={code.foregroundColor}
          level={code.qrcode.level}
          includeMargin={code.qrcode.includeMargin}
          imageSettings={code.qrcode.imageSettings}
        />
      </div>
      <button onClick={(e):void => downloadImage(e, qrCodeRef)}><FaFileDownload /></button>
    </ContainerQrCode>
  )
}
