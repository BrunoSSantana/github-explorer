import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import DetailPage from "./pages/DetailPage"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
