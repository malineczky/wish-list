import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GiftCard({ name, price, id, reserved }) {
    const [isReserved, setIsReserved] = useState(reserved);

    const handleReservedButton = async () => {
        setIsReserved((prevIsReserved) => !prevIsReserved);
        await fetch(`http://localhost:3000/gifts/${id}`, {
            method: "put",
            body: JSON.stringify({
                name,
                price,
                id,
                reserved: !isReserved,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                flexGrow: 1,
                width: "100%",
                mb: "30px",
                backgroundColor: isReserved ? "#5781BD" : "transparent",
            }}
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price} PLN
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to={`/gift/${id}`}>Zobacz więcej</Link>
                </Button>
                <Button size="small" onClick={handleReservedButton}>
                    Rezerwuj
                </Button>
            </CardActions>
        </Card>
    );
}

GiftCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
