import React from 'react'

const Counter = () =>{
    const [count,setCount] = React.useState(1)
  

  function changeValue(val){
    setCount(count+val)
  }

//   if( count%2 == 0){
//     return <>
//     <h1>Even:{count}</h1>
//     <button onClick={()=>changeValue(+1)}>Add</button>
//       <button onClick={()=>changeValue(-1)}>Sub</button>

//     </>
//   }
//   else if(count%2 != 0){
//     return<>
//     <h1>Odd : {count}</h1>
//     <button onClick={()=>changeValue(+1)}>Add</button>
//       <button onClick={()=>changeValue(-1)}>Sub</button>

//     </>
//   }
  return (
    <>

      <h1>Counter:{count} - { count%2 == 0 ? "Even" : "odd"}</h1>
      <button onClick={()=>changeValue(+1)}>Add</button>
      <button onClick={()=>changeValue(-1)}>Sub</button>
       
    </>
  );
}

export{Counter}
