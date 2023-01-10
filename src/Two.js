import React,{useState} from 'react'

export const Two = () => {
    const [studentsNames,setstudentsNames] = useState (["Vel","Abu","Moorthi"]);

    const setStudents = ()=>{
        setstudentsNames([...studentsNames ,"prajin","lokesh","vicky"])
    }
  return (
    <>
    <button onClick={setStudents}>add</button>
    <ol>
        {
            studentsNames.map(e=><li key={e}>{e}</li>)
        }
    </ol>
    </>
    )
}

export default Two;