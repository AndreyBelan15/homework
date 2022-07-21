import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";
import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
// import ContactPhone from "./components/Contacts/ContactPhone";
import PageHome from "./pages/Home";
import PageAbout from "./pages/About";
import PageError from "./pages/Error";
import PageKino from "./pages/Kino";
import Main from "./components/Nav/Main";
import PageMyContacts from "./pages/MyContacts";
import PageImg from "./pages/FotoPage";
import MyProba from "./components/Proba/MyProba";

function App() {

  return (

    <BrowserRouter>

      <div className="App">
        <div className="App container">
          <NinyHeader></NinyHeader>
          <Main></Main>
          {/*<MyProba></MyProba>*/}

          <Routes>
            <Route path="/" element={<PageHome/>}/>
            <Route path="/about" element={<PageAbout/>}/>
            <Route path="/films" element={<PageKino/>}/>
            <Route path="/contacts" element={<PageMyContacts/>}/>
            <Route path="/foto" element={<PageImg/>}/>

            <Route path="*" element={<PageError/>}/>

          </Routes>

          {/*<ContactPhone></ContactPhone>*/}
          <NinyFooter></NinyFooter>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
