import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditGift() {
    const { giftId } = useParams();
    const [gift, setGift] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        getGift(giftId, controller.signal).then((data) => {
            setGift(data);
            console.log();
        });

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
        <div className="form">
            <h1>{gift.name} </h1>
            <form
                className="form-container"
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                <div>
                    <TextField
                        id="name"
                        name="name"
                        label="Nazwa"
                        variant="outlined"
                        value={gift.name}
                        onChange={handleUpdateInputs}
                    />
                </div>
                <div>
                    <TextField
                        id="description"
                        name="description"
                        label="Opis"
                        variant="outlined"
                        value={gift.description}
                        onChange={handleUpdateInputs}
                        multiline
                    />
                </div>
                <div>
                    <TextField
                        type="number"
                        name="price"
                        variant="outlined"
                        label="Szacunkowa cena"
                        id="price"
                        value={gift.price}
                        onChange={handleUpdateInputs}
                    />
                </div>
                <div className="buttons">
                    <Button type="onSubmit" variant="contained">
                        Zapisz
                    </Button>
                    <Button type="onSubmit" variant="contained">
                        <Link to={`/gift/${giftId}`}>Cofnij</Link>
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default EditGift;
