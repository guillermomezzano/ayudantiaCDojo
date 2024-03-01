import "./App.css";
import Home from "./pages/Home";
import Layout from "./componets/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Layout title={"titulo del Layout"} footer={"titulo footer"}>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
