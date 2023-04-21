import React ,{useState}from "react";


const Home = () => {
  const [nameVal, setNameVal] = useState("hello")
  return (
    <>
     <form>
      <input type="name" value={nameVal} onChange={ e => {setNameVal(e.target.nodeValue)}}  placeholder="Enter your name" /> name please!
     </form>
    </>
  );
}
export default Home;