import React from "react";

//Создание компонента (тут будет меняться только название)
class AndreyInputsEmail extends React.Component {


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
        let email = ev.target.value
        let err = []

        //регулярки на валидацию
        //цифры

        //большие буквы
        let isUpper =/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
        if(email.length < 8){
            err.push('Короткий пароль')
        }


        if(!isUpper.test(email)){
            err.push('пароль должен содержать латиницу буквы')
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
                <input type ="Email" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}



export default AndreyInputsEmail