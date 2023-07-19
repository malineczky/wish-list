import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditGift() {
    const { giftId } = useParams();
    const [gift, setGift] = useState(null);

    const navigate = useNavigate();

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

    async function editProduct(id, data) {
        const response = await fetch(`http://localhost:3000/gifts/${id}`, {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.json();
    }

    function handleSubmit(event) {
        event.preventDefault();
        editProduct(giftId, gift).then(() => {
            navigate(`/gift/${giftId}`);
        });
    }

    if (!gift) {
        return <h2>Loader...</h2>;
    }

    return (
        <div>
            <h1>{gift.name} </h1>
            <form onSubmit={handleSubmit}>
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
                <Link to={`/gift/${giftId}`}>Cofnij</Link>
            </form>
        </div>
    );
}

export default EditGift;
