import { useEffect, useState } from "react";
import GiftCard from "./GiftCard";
import { Box } from "@mui/material";

function Gifts() {
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getGifts(signal).then((data) => setGifts(data));

        return () => {
            controller.abort();
        };
    }, []);

    async function getGifts(signal) {
        const response = await fetch("http://localhost:3000/gifts", { signal });
        return await response.json();
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {gifts.map((gift) => (
                <GiftCard
                    name={gift.name}
                    price={`${gift.price}`}
                    key={gift.id}
                    id={gift.id}
                />
            ))}
        </Box>
    );
}

export default Gifts;
