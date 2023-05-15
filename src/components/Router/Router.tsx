import { Routes, Route } from "react-router-dom";
import { Home } from "./Paths";

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}