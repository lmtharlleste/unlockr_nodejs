import main from "./src/main.js";
const PORT = 3000;


main.listen(PORT, () => {
    console.log(`Server is running on url "http://127.0.0.1:${PORT}"`)
})