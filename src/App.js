import { Routes, Route } from "react-router-dom"

import DashboardIndex from "./pages/dashboard/dashboardIndex"
import Home from "./pages/dashboard/dashboard-page/home"

const App = () => {

    const Dashboard = (page) => {
        return (
            <DashboardIndex page={page} />
        )
    }

    return (
        <Routes>
            <Route path='/' element={Dashboard(<Home />)} />
            <Route path='*' element={'Error 404, Page Not Found!'} />
        </Routes>
    )
}

export default App