import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Gift from "./components/Gift";
import AddGift from "./components/AddGift";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "edit-gift/:giftId",
        element: <Gift />,
    },
    {
        path: "add-gift",
        element: <AddGift />,
    },
]);

export default router;
