import { createBrowserRouter } from "react-router-dom";
import Gift from "./components/Gift";
import AddGift from "./components/AddGift";
import EditGift from "./components/EditGift";
import Layout from "./components/Layout";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
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
        ],
    },
]);

export default router;
