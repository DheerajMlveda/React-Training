import React ,{useState ,useEffect} from 'react'

function Example() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(50)
    
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth)
// useEffect(() => {
//   console.log(count1);
//   console.log(count2)
 
  
// }, [count1 , count2])


// const  handlesize = () => {
//   setWindowsWidth(window.innerWidth)
// }
// useEffect(() => {
//   window.addEventListener( 'resize' , handlesize)

  
  
// }, [])
useEffect(() => {
  console.log(count1)

  return ( () => {
    setCount1(prev => prev+ 1)
  })

},[] )



function increment1 (){
setCount1( prev => prev + 1)

}
function increment2 (){
setCount2( prev => prev + 1)

}

  return (
    <div style={{ margin:"20px", display:'flex',justifyContent:'center' ,alignItems:'center'} }>
      <button  onClick={ increment1}>
        {count1}
      </button>
      <button  onClick={ increment2}>
        {count2}
      </button>
      <p>{windowsWidth}</p>
    </div>
  )
}

export default Example