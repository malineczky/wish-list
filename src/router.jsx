import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Gift from "./components/Gift";
import AddGift from "./components/AddGift";
import EditGift from "./components/EditGift";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "gift/:giftId",
        element: <Gift />,
    },
    {
        path: "add-gift",
        element: <AddGift />,
    },
    {
        path: "edit-gift/:giftId",
        element: <EditGift />,
    },
]);

export default router;
