import React, {useEffect} from 'react'

const ChildFun = () => {
    useEffect(()=>{
        console.log("componentDidMount");
        const interval =setInterval(()=>{
            console.log("setInterval");
        },2000)
        return () =>{
            console.log("componentWillUnmount");
            clearInterval (interval)
        }
    },[])
  return (
    <div>ChildFun</div>
  )
}

export default ChildFun