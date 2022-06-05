module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                Mplus: ["M PLUS 1p", "sans-serif"],
            },
            colors: {
                primary: "#F15A29",
                blacky: "#30233D",
                secondary: "#000039",
                disabled: "#D9D9D9",
                orange: "#ffa51f",
                deepOrange: "#f96f0a",
            },
            height: {
                "400px": "400px",
            },
            letterSpacing: {
                buttonWide: ".25em",
                widest: ".45em",
            },
            fontSize: {
                card: "27px",
            },
        },
    },
    plugins: [],
};