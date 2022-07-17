//Подключение модуля реакт
import React from "react";

//Создание компонента (тут будет меняться только название)
class SubName extends React.Component {


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
        let subname = ev.target.value
        let err = []

        //регулярки на валидацию
        let isUpper = /^[А-ЯЁ][а-яё]+$/ //Регулярка на заглавную букву
        //маленькие буквы
        // let isLower =  /.*[a-z].*/

        if(subname.length < 2){
            err.push('короткая кликуха')
        }
        if(!isUpper.test(subname)){
            err.push('Фамилия должна начинаться с большой буквы' +
                 '_и должна быть на русском языке')
        }
        // if(!isLower.test(subname)){
        //     err.push('пароль должен содержать маленькие буквы')
        // }

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
                <label>SubName<input type ="text" onChange={this.onChange.bind(this)}/></label>
                {err}
            </div>
        )
    }

    // render() {
    //     return(
    //         <div>
    //             <label><input type="text"/>Address</label>
    //         </div>
    //     )
    // }
}
export default SubName;