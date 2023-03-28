import {Component} from "react"; 


class Input extends Component {
        constructor(props){
            super(props)
            this.state ={
                letter : ''
            }
            this.printInp = this.printInp.bind(this)

        }
        printInp(event){
            
            this.setState ({letter : event.target.value})
        }
        render(){
            return (
                <div>
                <p>This is Input Field</p>
                <input type='input' onChange={this.printInp} placeholder="Enter something" />
                <p>{this.state.letter}</p>
                <p>{this.state.letter.length}</p>
                </div>
            )
        }


}

export default Input;