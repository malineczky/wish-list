import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddGift() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

    async function handleAddGift(event) {
        event.preventDefault();
        const gift = await addGift({ name, description, price });
        navigate(`/gift/${gift.id}`);
    }

    async function addGift(data) {
        const response = await fetch("http://localhost:3000/gifts", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.json();
    }

    return (
        <div>
            <h1>Dodaj prezent</h1>
            <form onSubmit={handleAddGift}>
                <div>
                    <label htmlFor="name">Nazwa</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Opis</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="price">Szacunkowa cena</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>
                <button type="submit">Zapisz</button>
                <Link to={"/"}>Cofnij</Link>
            </form>
        </div>
    );
}

export default AddGift;
