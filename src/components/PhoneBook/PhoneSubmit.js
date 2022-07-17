import React from "react";
import PhoneName from "./PhoneName";
import PhoneNumber from "./PhoneNumber";
import SubName from "./SubName";

//Создание компонента (тут будет меняться только название)
class PhoneSubmit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // name: [],
            // number: [],
            // subname:[]
        }
        this.onChange= this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    /**
     * Динапический перенос данных в стейт
     * @param e
     */
    onChange(e){
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;
        this.setState(oldState);
    }


    onSave(){
        this.props.save(this.state);
    }

    render() {
        return(
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUser" id="btnCreate">
                    Create User
                </button>

        <div className="modal fade" id="addUser" tabIndex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addUserModalLabel">Add User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <PhoneName></PhoneName>
                        <PhoneNumber></PhoneNumber>
                        <SubName></SubName>
                        {/*<label>  Name: <input type="text" name="name" onChange={this.onChange}/></label>*/}
                        {/*<label> Number: <input type="text" name="imgUrl" onChange={this.onChange}/></label>*/}
                        {/*<label> SubName:*/}
                        {/*    <textarea name="des" onChange={this.onChange}></textarea>*/}
                        {/*</label>*/}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={this.onSave.bind(this)} type="button" data-bs-dismiss="modal" className="btn btn-primary">Save user</button>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }
}




//     render() {
//         return(
//             <div>
//                 <label>Create User<input type="submit"/></label>
//             </div>
//         )
//     }
// }
export default PhoneSubmit;