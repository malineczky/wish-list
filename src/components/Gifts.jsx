import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <>
            {gifts.map((gift) => (
                <div
                    key={gift.id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <h2>{gift.name}</h2>
                    <p>{gift.description}</p>
                    <p>PLN {gift.price}</p>
                    <Link to={`/edit-gift/${gift.id}`}>Edytuj</Link>
                    <button>Rezerwuj</button>
                </div>
            ))}
        </>
    );
}

export default Gifts;
