import { Header } from "./components/Header"
import { AppRoutes } from "./Routes"

export function App() {
  return (
    <div id="container">
      <Header />
      <AppRoutes />
    </div>
  )
}