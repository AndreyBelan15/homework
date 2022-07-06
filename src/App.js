import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";


import FormSingUp from "./components/UI/Forms/Auth/FormSingUp";

function App() {
    return (
        <div className="App">
            <div className="App container">
                <NinyHeader></NinyHeader>
                <FormSingUp></FormSingUp>
                <NinyFooter></NinyFooter>
            </div>
        </div>
            );
            }

export default App
