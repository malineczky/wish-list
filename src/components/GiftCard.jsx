import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export default function GiftCard({ name, price, id }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Szacunkowa cena: {price} PLN
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to={`/gift/${id}`}>Zobacz więcej</Link>
                </Button>
                <Button size="small">Rezerwuj</Button>
            </CardActions>
        </Card>
    );
}

GiftCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
