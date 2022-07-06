//Подключение модуля реакт
import React from "react";

//Создание компонента (тут будет меняться только название)
class AndreyInputsPassword extends React.Component {

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
        let pass = ev.target.value
        let err = []

        //регулярки на валидацию
        //цифры
        let inSum = /\d{1,}/
        //большие буквы
        let isUpper = /.*[A-Z].*/
        //маленькие буквы
        let isLower =  /.*[a-z].*/

        if(pass.length < 8){
            err.push('пароль должен содержать 8 символов')
        }
        if(!inSum.test(pass)){
            err.push('пароль должен содержать цифры')
        }
        if(!isUpper.test(pass)){
            err.push('пароль должен содержать большие буквы')
        }
        if(!isLower.test(pass)){
            err.push('пароль должен содержать маленькие буквы')
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
            let err = 'Правильно'
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
                <input type ="password" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}
export default AndreyInputsPassword;