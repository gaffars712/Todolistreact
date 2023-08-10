import { useState } from "react";
const Todolist = () =>{
const [inputedata, setinputedata] = useState('')
const [items, setitems] = useState([])

const additem =()=>{
    if(!inputedata){

    }else{
    setitems([...items,inputedata])
}
setinputedata("")

}

const delet = (ind)=>{
    const updateddata = items.filter((evlement,id)=>{
        return(
            id != ind
           
        )
    } )
   

    setitems(updateddata)
}
const clearalll =()=>{
    setitems([])
}

    return(


        <>
        <div style={{textAlign:"center",marginTop:"5rem"}}>
        
        
        <figure>
            <img style={{width:"5rem"}} src="https://img.freepik.com/premium-vector/list-icon-with-hand-drawn-text-checklist-task-list-vector-illustration-flat-style-white-background_157943-819.jpg" alt="todolist" />
            <figcaption>To Do LIst</figcaption>
        </figure>
        <form >
            <input type="text" name='todolist' placeholder="Inter Your's" style={{textAlign:"center"}} onChange={(e)=>{setinputedata(e.target.value)}} value={inputedata} />
                <i style={{cursor:"pointer",borderStyle:"solid" ,borderColor:"gray",borderWidth:"2px"}} className="fa-solid fa-plus" onClick={additem}></i>
                    </form>
                    {items.map((event,ind)=>{
                        return(
                            <>
                            <div style={{textAlign:"center",margin:" 1rem"}} key={ind}>
                  <span> {event} </span> <button><i onClick={()=>delet(ind)} className="fa-solid fa-trash"></i></button>
                   </div>
                            
                            </>
                        )
                    })}

                    <button onClick={clearalll}>Clear All</button>
                    
        </div>
        
        
        
        
        
        
        
        
        
        
        </>
    )
};
export default Todolist;