import React from "react";
import NavBar from "./components/NavBar";
import NavFooter from "./components/NavFooter";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./components/Items/Items";
import "./App.css";

function App() {

  return (
    <div className="App">
      <header id="header">
        <NavBar></NavBar>
      </header>
      <main>
            <section id="products">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 pb-3">
                            <h2><ItemListContainer greeting={"Bienvenidos a la tienda THE FRUIT!"} /></h2>
                        </div>
                        <Items />
                    </div>
                </div>
            </section>
        </main>
        <footer id="footer">
            <NavFooter></NavFooter>
        </footer>
    </div>
  );
}

export default App;
