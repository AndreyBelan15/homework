//Подключение модуля реакт
import React from "react";
import AndreyInputsSubmit from "../Inputs/AndreyInputsSubmit";
import AndreyInputsPassword from "../Inputs/AndreyInputsPassword";
import AndreyInputsEmail from "../Inputs/AndreyInputsEmail";

//Создание компонента (тут будет меняться только название)
class FormSingUp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: [],
            p: '',
            cp: ''
        }
    }

    onPasswordChange(ev) {
        let oldState = this.state;
        oldState.p = ev.target.value;
        this.setState(oldState)
        this.validate()
    }

    onPasswordConfirmChange(ev) {
        let oldState = this.state;
        oldState.cp = ev.target.value;
        this.setState(oldState)
        this.validate()
    }

    validate() {
        let err = []
        if (this.state.p !== this.state.cp) {
            err.push('пароль не совпадает')
        }
        let oldState = this.state;
        if (err.length > 0) {
            oldState.isValid = false
        } else {
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
    }


    render() {
        let err = 'Форма верна'
        if (!this.state.isValid) {
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


        return (
            <>
                <AndreyInputsEmail label="Введите email"></AndreyInputsEmail>
                <AndreyInputsPassword label="пароль" onChange={this.onPasswordChange.bind(this)}></AndreyInputsPassword>
                <AndreyInputsPassword onChange={this.onPasswordConfirmChange.bind(this)}></AndreyInputsPassword>
                {err}
                <AndreyInputsSubmit></AndreyInputsSubmit>
            </>
        )
    }
}

export default FormSingUp

