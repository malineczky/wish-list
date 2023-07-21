import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddGift() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

    async function handleAddGift(event) {
        event.preventDefault();
        const gift = await addGift({
            name,
            description,
            price,
            reserved: false,
        });
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
        <div className="form">
            <h1>Dodaj nowy prezent</h1>
            <form
                onSubmit={handleAddGift}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                <div>
                    <TextField
                        id="name"
                        label="Nazwa"
                        variant="outlined"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="description"
                        label="Opis"
                        variant="outlined"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        multiline
                    />
                </div>
                <div>
                    <TextField
                        type="number"
                        variant="outlined"
                        label="Szacunkowa cena"
                        id="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>
                <div className="buttons">
                    <Button type="onSubmit" variant="contained">
                        <Link to={"/"}>Cofnij</Link>
                    </Button>
                    <Button
                        type="onSubmit"
                        variant="contained"
                        className="button"
                    >
                        Zapisz
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddGift;
