const gifts = [
    {
        id: 1,
        name: "Zabawka interaktywna",
        description: "Kolorowa zabawka z dźwiękami i światełkami",
        price: 50,
        availability: true,
    },
    {
        id: 2,
        name: "Klocki konstrukcyjne",
        description: "Zestaw klocków do budowania i układania",
        price: 120,
        availability: true,
    },
    {
        id: 3,
        name: "Miękka książeczka",
        description: "Miękka książka z obrazkami i opisami",
        price: 15,
        availability: true,
    },
    {
        id: 4,
        name: "Puzzle edukacyjne",
        description: "Zestaw puzzli z literami i cyframi",
        price: 20,
        availability: true,
    },
    {
        id: 5,
        name: "Tablica kredowa",
        description: "Mała tablica, na której można pisać kredą",
        price: 40,
        availability: true,
    },
    {
        id: 6,
        name: "Trampolina",
        description: "Trampolina ogrodowa do skakania i zabawy",
        price: 600,
        availability: true,
    },
    {
        id: 7,
        name: "Instrument muzyczny",
        description:
            "Mały instrument muzyczny do eksperymentowania z dźwiękami",
        price: 25,
        availability: true,
    },
    {
        id: 8,
        name: "Kolorowanki",
        description: "Książka z rysunkami do kolorowania",
        price: 12,
        availability: true,
    },
    {
        id: 9,
        name: "Piłka plażowa",
        description: "Kolorowa piłka do zabawy na plaży",
        price: 15,
        availability: true,
    },
    {
        id: 10,
        name: "Układanka",
        description: "Układanka logiczna do rozwiązywania zagadek",
        price: 45,
        availability: true,
    },
    {
        id: 11,
        name: "Lalka",
        description: "Piękna lalka do zabawy i opieki",
        price: 50,
        availability: true,
    },
    {
        id: 12,
        name: "Samochodzik",
        description: "Mały samochodzik na pilota do jeżdżenia po podłodze",
        price: 30,
        availability: true,
    },
    {
        id: 13,
        name: "Przytulanka",
        description:
            "Deska z magnesem i pisakiem do rysowania i kreatywnej zabawy",
        price: 40,
        availability: true,
    },
];

function App() {
    return (
        <>
            {gifts.map((gift) => (
                <div
                    key={gift.id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <h2>{gift.name}</h2>
                    <p>{gift.description}</p>
                    <p>PLN {gift.price}</p>
                </div>
            ))}
        </>
    );
}

export default App;
