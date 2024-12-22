import React from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import "./App.css"
import PokemonApplication from "./PokemonApplication"

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="container">
            {location.pathname !== "/PokemonApplication" && (
                <button className="start-button" onClick={() => navigate("/PokemonApplication")}>
                    Start Pokemon app
                </button>
            )}
            <Routes>
                <Route path="/PokemonApplication" element={<PokemonApplication />} />
            </Routes>
        </div>
    )
}

export default App
