import { useEffect, useState } from "react";

function App() {
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        getGifts(controller.signal).then((data) => setGifts(data));
    }, []);

    async function getGifts() {
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
                </div>
            ))}
        </>
    );
}

export default App;
