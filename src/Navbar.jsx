import React from 'react'
import {  Typography ,Divider} from 'antd';



const { Text } = Typography;



function Navbar() {
    return (


    <nav   style={{margin:"10px" , padding:'10px' , position : "fixed" ,left:'0px' , top:'0px'}}>
        <a href='/'> <Text code>Home</Text></a>
        <Divider  style={{ backgroundColor:'red' , height:'15px'}}type='vertical'></Divider>
        <a href='/'> <Text code>About</Text></a>
        <Divider style={{ backgroundColor:'red' , height:'15px'}} type='vertical'></Divider>
        <a href='/'>  <Text code>Products</Text> </a>
        <Divider style={{ backgroundColor:'red' , height:'15px'}} type='vertical'></Divider>
        <a href='/'> <Text code>Contact</Text>  </a>
        <Divider style={{ backgroundColor:'red' , height:'15px'}} type='vertical'></Divider>

    </nav>
    )
}

export default Navbar