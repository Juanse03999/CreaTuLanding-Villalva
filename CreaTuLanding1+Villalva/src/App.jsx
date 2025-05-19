import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import "./App.css"

function App() {
    return (
        <>
        <NavBar/>
        <ItemListContainer greeting={"Buenas! Bienvenido a mi tienda!"}/>
        </>
    )
}

export default App