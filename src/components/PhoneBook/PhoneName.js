//Подключение модуля реакт
import React from "react";

//Создание компонента (тут будет меняться только название)
class PhoneName extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: []
        }
    }
    onChange(ev){
        this.checkValid(ev)
        if(this.props.onChange){
            this.props.onChange(ev)
        }
    }
    checkValid(ev){
        let name = ev.target.value
        let err = []

        let isUpper = /^[А-ЯЁ][а-яё]+$/ //Регулярка на заглавную букву
        if(name.length < 2){
            err.push('Имя должно содержать больше символов')
        }
        if(!isUpper.test(name)){
            err.push('Имя должно начинаться с большой буквы')
        }

        let oldState = this.state;
        if (err.length>0){
            oldState.isValid = false
        } else {
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
    }
    render() {
        let err = ''
        if(!this.state.isValid){
            err = (

                <ul>
                    {this.state.err.map(e => {
                        return (
                            <li>{e}</li>
                        )
                    })}
                </ul>
            )
        }
        let label = ''
        if(this.props.label){
            label = (<label>{this.props.label}</label>)
        }


        return(
            <div>
                {label}
                <label>Name<input type ="text" onChange={this.onChange.bind(this)}/></label>
                {err}
            </div>
        )
    }


    // render() {
    //     return(
    //         <div>
    //             <label><input type="text"/>Name</label>
    //         </div>
    //     )
    // }
}
export default PhoneName;