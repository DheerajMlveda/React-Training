import  React , {Component} from 'react';



class Button extends Component {

        constructor(props){
            super(props);
            this.state = {
                count : props.count
            }
            this.increCount = this.increCount.bind(this)
            this.decreCount = this.decreCount.bind(this)
        }
        increCount(){
            this.setState({ count : this.state.count + 1});
        }
        decreCount(){
            this.setState({ count : this.state.count - 1});
        }




    render() {

        return (
            <div style={{justifyContent : 'center'}}>
            <button onClick={this.decreCount}>-</button>
            <h4>{this.state.count}</h4>
            <button onClick={this.increCount}>+</button>
            </div>
        );
    }
}

export default Button;