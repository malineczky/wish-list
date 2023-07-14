import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Gift from "./components/Gift";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "edit-gift/:giftId",
        element: <Gift />,
    },
]);

export default router;
