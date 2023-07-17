import { useState } from "react";

function AddGift() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function handleAddGift(event) {
        event.preventDefault();
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
            </form>
        </div>
    );
}

export default AddGift;
