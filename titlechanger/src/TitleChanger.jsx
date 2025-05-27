import { useEffect,useState } from 'react'
import { GrTextAlignCenter } from 'react-icons/gr';



function TitleChanger() {
  const [count, setCount] = useState(0);


useEffect(() => {
  document.title = `Clicked ${count} times`;
}, [count]);
  return (
    <div>
        <h1>Title Changer</h1>
     <h2>Button click counter</h2>
     <p>you clicked {count} times</p>
     <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default  TitleChanger;
