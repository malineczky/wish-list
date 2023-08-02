import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
        <Card
            sx={{
                maxWidth: 345,
                flexGrow: 1,
                width: "100%",
                mb: "30px",
            }}
        >
            <CardContent>
                <h1>{gift.name}</h1>
                <Typography variant="body2" color="text.secondary">
                    {gift.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {gift.price} PLN
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    type="onSubmit"
                    variant="contained"
                    size="small"
                    className="button"
                >
                    <Link to={`/edit-gift/${giftId}`}>Edytuj</Link>
                </Button>

                <Button
                    onClick={handleDelete}
                    type="onSubmit"
                    variant="contained"
                    className="button"
                    size="small"
                >
                    Usuń
                </Button>
                <Button
                    type="onSubmit"
                    variant="contained"
                    size="small"
                    className="button"
                >
                    <Link to={"/"}>Wróć</Link>
                </Button>
            </CardActions>
        </Card>
    );
}

export default Gift;
