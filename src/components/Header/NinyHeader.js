//Подключение модуля реакт
import React from "react";
 import '../PhoneBook/HeaderCss.css';
//Создание компонента (тут будет меняться только название)
class NinyHeader extends React.Component {

    render() {
        return(
            <header>
                <h1>Список ненужных людей</h1>

            </header>
        )
    }
}
export default NinyHeader;