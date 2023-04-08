import React,{useState} from 'react'
import "../styles/AppContainer.css"
export default function AppContainer(){
    return(
        <div>
            <Container/>
        </div>
    );
}

function Container(){
    const[task,setTask] = useState("");
    const[taskList,setList]= useState([]);
    function handleTaskOnChange(event){
        setTask(event.target.value)
    }
    function addTask(){
        if(task.length !==0)
      {  setList((prevTask)=>[...prevTask,task]);
        setTask("");}
        else{
            alert("please enter task!!!")
        }
    }
   function handelDelete(deletedTask){
    const updatedTaskList =  taskList.filter((tasks)=> tasks !== deletedTask);
    setList(updatedTaskList);
    console.log("printing update array list"+taskList);
   }
    return(
        <div className="mainContainer">
            <div className="headingStrip">
                To-Do List.
            </div>
            <div className="inputSection">
                <div className="input">
                    <input type='text' 
               onChange={handleTaskOnChange} value={task} placeholder='add task' className='inner-input'/>
                </div>
                <div className='addBtn' onClick={addTask}><button type="button" className='inner-btn'>+</button></div>
            </div>
             <div className="listContainer">
                     <ul className='outer-list-element'>{ taskList.map((items,index)=> <div key={index} className="lists">
                        <li  className="listElement">{items}</li>  <button  className='delete-btn' onClick={()=>handelDelete(items)} >delete</button>
                     </div>)}</ul>
                </div>
              <div className="totalCount">
              <div>
                   <span>Total no of tasks :-</span> {taskList.length}
                </div>
              </div>  
                
        </div>
    )
}


