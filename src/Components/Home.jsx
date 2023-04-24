import React from 'react'
import { Button ,Space ,Typography} from 'antd'
import { useNavigate } from 'react-router-dom'
const {Text} = Typography
function Home() {
 
  const navigation = useNavigate();
  return (
    <div>      <div style={{marginTop:"50px" , marginBottom:'50px' , marginInline:'  150px'}}>
    <Text keyboard>This is the home page</Text>
   </div>
      <div>

      <Space direction='horizontal'>

       <Button onClick={(e) =>{navigation('login')}}type="primary">Login</Button>
      
       <Button onClick={(e) =>{navigation('register')}} type="primary">Register here</Button>
       </Space>
      </div>
    </div>
  )
}

export default Home