import React from "react";
import {Link} from "react-router-dom";


class Main extends React.Component {


  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">My Pages </Link>
          {/* тут была кнопка*/}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/"> Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films"> Cinema </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts"> Users </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foto"> Foto </Link>
              </li>
            </ul>
          </div>
        </nav>

      </>
    )
  }
}

export default Main


{/*<Link to="/">Home</Link>*/}
{/*<Link to="/about">About</Link>*/}
{/*<Link to="/films">Cinema</Link>*/}
{/*<Link to="/contacts">Users</Link>*/}

{/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
{/*        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
{/*        aria-expanded="false" aria-label="Toggle navigation">*/}
{/*  <span className="navbar-toggler-icon"></span>*/}
{/*</button>*/}
