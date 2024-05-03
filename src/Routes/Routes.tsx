import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/landingPage";
import SuperBoard from "../components/superBoard";
import TTT from "../components/TTT";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <LandingPage />},
            {path: "/superBoard", element: <SuperBoard />},
            {path: "/tic-tac-toe", element: <TTT />}
        ]
    }
])