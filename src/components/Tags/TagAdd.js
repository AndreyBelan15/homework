import React from "react";


class TagAdd extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            newTagName: '',
            help: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;
        if(oldState[e.target.name].length <3) {
            oldState.help = 'Метка больше 3 символов'
        } else {
            oldState.help = ''
        }

        this.setState(oldState);
    }

    addNewTag(){
        this.props.addNewTag(this.state.newTagName)
    }


    render() {
        return(
            <>


                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTag">
                    New Tag Add
                </button>


                <div className="modal fade" id="addTag" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label> NewTag:<span>{this.state.help}</span> <input type="text" name="newTagName" onInput={this.onChange}/></label>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={this.addNewTag.bind(this)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default TagAdd;