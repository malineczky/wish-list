import Gifts from "./components/Gifts";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <Link to="add-gift">Dodaj prezent</Link>
            <Gifts />
        </>
    );
}

export default App;
