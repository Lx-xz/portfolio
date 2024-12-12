import { Index } from "./pages/Index"

import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom"

export const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </HashRouter>
    )
}