import { Routes, Route } from 'react-router-dom';
import { QRCode, BarCode } from './Path';

export default function Path() {
  return (
    <Routes>
        <Route path="/" element={<QRCode />} />
        <Route path='/barcode' element={<BarCode />} />
    </Routes>
  )
}