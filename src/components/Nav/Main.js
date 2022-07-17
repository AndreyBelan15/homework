import React from "react";
import {Link} from "react-router-dom";


class Main extends React.Component{


    render() {
        return(
            <>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </>
        )
    }
}
export default Main