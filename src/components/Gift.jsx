import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Gift() {
    const { giftId } = useParams();
    const [gift, setGift] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getGift(giftId, signal).then((data) => setGift(data));

        return () => {
            controller.abort();
        };
    }, [giftId]);

    async function getGift(id, signal) {
        const response = await fetch(`http:localhost:3000/gifts/${id}`, {
            signal,
        });
        return await response.json();
    }

    return (
        <div>
            <h1>{gift.name}</h1>
            <h1>{gift.description}</h1>
            <h1>PLN {gift.price}</h1>
            <Link to={"/"}>Powrót</Link>
        </div>
    );
}

export default Gift;
