//Подключение модуля реакт
import React from "react";
import PhoneName from "./PhoneName";
import PhoneNumber from "./PhoneNumber";
import SubName from "./SubName";
import PhoneSubmit from "./PhoneSubmit";


//Создание компонента (тут будет меняться только название)
class FormUserUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null, // Храним состояние ошибки
            isLoaded: false, // Храним состояние - загрузились ли данные
            items: [] // Тут мы храним элементы коллекции, которые хотим выводить
        }
    }
    saveItem(item){
        const oldState = this.state
        oldState.items.push(item)
        this.setState(oldState)
    }

    /**
     * Сохранить в локальное хранилище в броузере
     */
    saveAll(){
        localStorage.setItem("users", JSON.stringify(this.state.items))
    }

    /**
     * Прочитать из локального хранилища в броузере
     */
    loadAll(){
        const oldState = this.state
        if(localStorage.getItem("users"))
            oldState.items = JSON.parse(localStorage.getItem("users"));
        else
            oldState.items = []
        this.setState(oldState)
    }



    getSimpleData(){
        let f1 = {
            id: Date.now(),
            name: [],
            number: [],
            subname:[]
        }
        const oldState = this.state
        oldState.items[0] = f1
        oldState.isLoaded = true
        this.setState(oldState)
    }
    componentDidMount() {
        this.getSimpleData()
    }

    renderData() {
        console.log('Работает рендер данных')
        return (
            <>
                <div className="row">
                    <div className="col-2">
                        <PhoneSubmit save={this.saveItem.bind(this)}></PhoneSubmit>
                    </div>
                    <div className="col-2">
                        <button onClick={this.saveAll.bind(this)} type="button" className="btn btn-info" > Save </button>
                    </div>
                    <div className="col-2">
                        <button onClick={this.loadAll.bind(this)} type="button" className="btn btn-warning" > Load </button>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.items.map( item => (

                            <PhoneName key={item.id} item={item}></PhoneName>
                        // <PhoneNumber key={item.id} item={item}></PhoneNumber>
                        // <SubName key={item.id} item={item}></SubName>
                        ))
                    }

                </div>
            </>

        )
    }


    render(){
        // return (
        //     <>
        //         <PhoneName ></PhoneName>
        //         <PhoneNumber  ></PhoneNumber>
        //         <SubName  ></SubName>
        //
        //         <PhoneSubmit save={this.saveItem.bind(this)}></PhoneSubmit>
        //     </>
        // )
        // Если в компоненте произошла ошибка - вывести ее
        if(this.state.error){
            return this.renderError()
        }
        // Если данные еще не получены - вывести - ожидаю данные
        if(!this.state.isLoaded){
            return this.renderPreload()
        }
        // Если нет ни ошибки ни получения данных - значит вывожу данные
        return this.renderData()
    }
    /**
     * Выводим что у нас проблемы Хьюстон
     */
    renderError(){
        return (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    <header  className="alert-heading"> Произошла ошибка компонента </header>
                </div>
            </div>
        )
    }
    /**
     * Выводим состояние - жду получения данных
     */
    renderPreload(){
        return(
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
}

//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     isValid: true,
//         //     err: [],
//         //     p: '',
//         //     cp: ''
//         // }
//     }
//     saveItem(item){
//         const oldState = this.state
//         oldState.items.push(item)
//         this.setState(oldState)
//     }
//
//     /**
//      * Сохранить в локальное хранилище в броузере
//      */
//     saveAll(){
//         localStorage.setItem("user", JSON.stringify(this.state.items))
//     }
//
//     /**
//      * Прочитать из локального хранилища в броузере
//      */
//     loadAll(){
//         const oldState = this.state
//         if(localStorage.getItem("user"))
//             oldState.items = JSON.parse(localStorage.getItem("user"));
//         else
//             oldState.items = []
//         this.setState(oldState)
//     }
//     // onPasswordChange(ev) {
//     //     let oldState = this.state;
//     //     oldState.p = ev.target.value;
//     //     this.setState(oldState)
//     //     this.validate()
//     // }
//
//     // onPasswordConfirmChange(ev) {
//     //     let oldState = this.state;
//     //     oldState.cp = ev.target.value;
//     //     this.setState(oldState)
//     //     this.validate()
//     // }
//
//     // validate() {
//     //     let err = []
//     //     if (this.state.p !== this.state.cp) {
//     //         err.push('пароль не совпадает')
//     //     }
//     //     let oldState = this.state;
//     //     if (err.length > 0) {
//     //         oldState.isValid = false
//     //     } else {
//     //         oldState.isValid = true
//     //     }
//     //     oldState.err = err
//     //     this.setState(oldState)
//     // }
//
//
//     render() {
//         // let err = 'Форма верна'
//         // if (!this.state.isValid) {
//         //     err = (
//         //
//         //         <ul>
//         //             {this.state.err.map(e => {
//         //                 return (
//         //                     <li>{e}</li>
//         //                 )
//         //             })}
//         //         </ul>
//         //     )
//         // }
//
//


//     }
// }

export default FormUserUp
