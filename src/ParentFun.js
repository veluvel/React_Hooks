import React,{useEffect, useState} from 'react' //lifecycle method use pandrathuku useEffect use pannikalam
import ChildFun from './ChildFun'

const ParentFun = () => {

    const [name, setName] = useState("LifeCycle");
    const [age, setAge] = useState(25);
    const [show, setShow] = useState(true);

    useEffect(() => {
        //componentDidMount,only once call aagum
        console.log("ComponentDidMount-console");
    }, []) 

    useEffect(() => {
        //componentDidMount,only once call aagum
        console.log("ComponentDidUpdate-console",name);
    }, [name,age])

  return (
    <div>
        {/* Function Lifecycle  */}
        {name}
        <button onClick={()=>setName('Functional Components')}>Update</button>
        <button onClick={()=>setShow(!show)}>show/hide</button>
        { show ? <ChildFun /> : null}
    </div>
  )
}

export default ParentFun