//Подключение модуля реакт
import React from "react";

//Создание компонента (тут будет меняться только название)
class PhoneNumber extends React.Component {

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
        let numb = ev.target.value
        let err = []

         let inSum = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ //Регулярка для телефона
        // /^([+]?[0-9\s-\(\)]{3,25})*$/i
        // /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/
        // /^\+?[99][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/

        if(numb.length < 13){
            err.push('Номер должен содержать больше символов')
        }
        if(!inSum.test(numb)){
            err.push('Номер должен состоять из цифр  и начинаться с +')
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
                <label>Number<input type ="text" onChange={this.onChange.bind(this)}/></label>
                {err}
            </div>
        )
    }


    // render() {
    //     return(
    //         <div>
    //             <label><input type="text"/>Number</label>
    //         </div>
    //     )
    // }
}
export default PhoneNumber;