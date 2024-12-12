import { Index } from "./pages/Index"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </Router>
    )
}