import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditGift() {
    const { giftId } = useParams();
    const [gift, setGift] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        getGift(giftId, controller.signal).then((data) => setGift(data));

        return () => {
            controller.abort();
        };
    }, [giftId]);

    async function getGift(id, signal) {
        const response = await fetch(`http://localhost:3000/gifts/${id}`, {
            signal,
        });
        return response.json();
    }

    function handleUpdateInputs(event) {
        setGift({
            ...gift,
            [event.target.name]: event.target.value,
        });
    }

    if (!gift) {
        return <h2>Loader...</h2>;
    }

    return (
        <div>
            <h1>{gift.name} </h1>
            <form>
                <div>
                    <label htmlFor="name">Nazwa: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={gift.name}
                        onChange={handleUpdateInputs}
                    />
                </div>
                <div>
                    <label htmlFor="description">Opis: </label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        value={gift.description}
                        onChange={handleUpdateInputs}
                    />
                </div>
                <div>
                    <label htmlFor="price">Szacunkowa cena: </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={gift.price}
                        onChange={handleUpdateInputs}
                    />
                </div>
                <button type="submit">Zapisz</button>
            </form>
        </div>
    );
}

export default EditGift;
