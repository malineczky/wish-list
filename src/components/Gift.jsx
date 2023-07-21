import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Gift() {
    const { giftId } = useParams();
    const [gift, setGift] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getGift(giftId, signal).then((data) => {
            setGift(data);
            console.log(data);
        });

        return () => {
            controller.abort();
        };
    }, [giftId]);

    async function getGift(id, signal) {
        const response = await fetch(`http://localhost:3000/gifts/${id}`, {
            signal,
        });
        return await response.json();
    }

    async function deleteGift(id) {
        return await fetch(`http://localhost:3000/gifts/${id}`, {
            method: "delete",
        });
    }

    async function handleDelete() {
        await deleteGift(giftId);
        navigate("/");
    }

    if (!gift) {
        return <h2>Loader...</h2>;
    }

    return (
        <div className="form">
            <h1>{gift.name}</h1>
            <p>{gift.description}</p>
            <p>{gift.price} PLN</p>
            <div className="buttons">
                <Button type="onSubmit" variant="contained" className="button">
                    <Link to={`/edit-gift/${giftId}`}>Edytuj</Link>
                </Button>

                <Button
                    onClick={handleDelete}
                    type="onSubmit"
                    variant="contained"
                    className="button"
                >
                    Usuń
                </Button>

                <Button type="onSubmit" variant="contained" className="button">
                    <Link to={"/"}>Cofnij</Link>
                </Button>
            </div>
        </div>
    );
}

export default Gift;
