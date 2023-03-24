// // import logo from './logo.svg';
// import React from 'react';
import './App.css';
import Button from './Button';
import Input from './Input'
import  React , {Component} from 'react';
// // const arr = [1,2,4,4];
// // arr.map(Element => console.log(Element))
// function App(){
//   const state = ['gujrat' ,'maharashtra' , 'haryana' ];
//   return (
//     <>
//     <div className="App">
//       {/* <h1>{props.person.boom}</h1>
//       <h1>{props.person.marks}</h1> */}
//     </div>
//     <ul>
//       {state.map(element => {
//           return <li>{element}</li>
//         }
//       )
//       }
//     </ul>
//   </>)
// }

 class App extends Component {
      // constructor(props){
      //   super(props)
      // }
      render(){
        
        return (
          <div style={{justifyContent : 'center'}}>
        
        <h1>This is our React App</h1>
        <Button count = {50}/>
        <Input />
          </div>
        )
      }

 }

export default App;




