import React from "react";
import TagAdd from "./TagAdd";
class TagsList extends React.Component{

    // Фрагмент кода который будет запущен обязательно в момент создания элемента
    // Тут принято описывать все данные, с которыми мы будем работать в компоненте
    // props - то что мы ему прислали
    // state - данные внутри компонента
    constructor(props) {
        super(props);

        console.log(' Работает конструктор')

        // Опишем данные, которые у нас есть под вывод
        this.state = {
            error: null, // Храним состояние ошибки
            isLoaded: false, // Храним состояние - загрузились ли данные
            data: []
        }
        this.deleteElement = this.deleteElement.bind(this)
    }



    //метод добавления новой метки к имеющимуся массиву
    addNewTag(newTagName){
        const oldState = this.state;
        let newTag = {
            id: Date.now(),
            name: newTagName
        }
        oldState.data.push(newTag);
        this.setState(oldState);
    }



//
   getDataFromServer(){
       this.setState({
           data : [
               {id: 1, name: "Asp"},
               {id: 2, name: "Php"},
               {id: 3, name: "C#"},
               {id: 4, name: "C++"},
               {id: 5, name: "Html"},
               {id: 6, name: "Css"}
           ],
           isLoaded: true
       })
   }


    deleteElement(e){
    let id = e.currentTarget.parentNode.getAttribute('data-key')
    const oldState = this.state;
    oldState.data.splice(oldState.data.findIndex(el=> el.id == id),1)
    this.setState(oldState);
    }


    componentDidMount() {
        console.log('componentDidMount')

        setTimeout ( this.getDataFromServer.bind(this), 1000)
    }


    // Отвечает за то, как будет выглядеть компонент
    renderData() {
        console.log('Работает рендер')
        return (
            <>
            <ul>
                {
                    this.state.data.map( tag => (
                        <li data-key={tag.id} key={tag.id}>{tag.name}
                            <span onClick={this.deleteElement}>-</span></li>
                    ))
                }
            </ul>
            <TagAdd addNewTag={this.addNewTag.bind(this)}></TagAdd>
            </>
        )
    }

    // Я принимаю решение - как я себя отображаю
    render(){
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
            <div>
                <header> Произошла ошибка компонента </header>
                <div> {this.state.error} </div>
            </div>
        )
    }

    /**
     * Выводим состояние - жду получения данных
     */
    renderPreload(){
        return(
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Ожидаю получение данных...</span>
            </div>
        )
    }
}


export default TagsList;