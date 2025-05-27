import { useEffect,useState } from 'react'



function TitleChanger() {
  const [count, setCount] = useState(0);


  useEffect(()=>{
    document.title = 'Clicked ${count} times' ;

  }, [count])

  return (
    <div>
     <h1>Button click counter</h1>
     <p>you clicked {count} times</p>
     <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default  TitleChanger;
