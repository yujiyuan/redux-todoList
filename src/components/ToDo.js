import React,{useState} from 'react'
import ToDoItem from "./ToDoItem";
import "./ToDo.css";


const ToDo = (props) =>{
    const {list,redux_add,redux_delete} = props;
    const [todo,setTodo] = useState("");
    const generateId = ()=>{
        if(list&&list.length>1) {
            return Math.max(...list.map((t) =>t.id))+1;
        }else{
            return 1;
        }
    };

    const createNewToDoItem = ()=>{
        if(!todo){
            return alert("please enter a todo!");
            
        }
        const newId = generateId();
        redux_add({id:newId,text:todo});
        setTodo("");
    }
    const handleKeyPress = (e) =>{
        if(e.key === "Enter") {
            createNewToDoItem();
        }
    }
    const handleInput = (e) =>{
        setTodo(e.target.value);
    }
    const deleteItem = (todo) =>{
        redux_delete(todo.id)
    }

    const ss = ()=>{
      const data = [{"name":"jkzId","value":"350"},{"name":"jkzh","value":"213213213"},{"name":"fzjg","value":"厦门市"},{"name":"yxq","value":"20170625-20180624"},{"name":"zp","value":"/20191105/ae7f9e68a6e86a314efcb4a23e0a1fa0.jpg,/20191105/ae7f9e68a6e86a314efcb4a23e0a1fa0.jpg"},{"name":"jkzId","value":"351"},{"name":"jkzh","value":"33333333"},{"name":"fzjg","value":"厦门市1"},{"name":"yxq","value":"20170625-20180622"},{"name":"zp","value":"/20191105/ae7f9e68a6e86a314efcb4a23e0a1fa0.jpg,/20191105/ae7f9e68a6e86a314efcb4a23e0a1fa0.jpg"}];
      
      const result = [];
for(let i=0,len=data.length;i<len;i+=3){
   result.push(data.slice(i,i+5));
}
const data2 = result.map((item,index)=>{
        item.map((it)=>{
          return {
          [it.name]:it.value
        }
        })
      })
      console.log(result,data2)
    }
    return (
        <div className="ToDo">
      <h1 className="ToDo-Header" onClick={ss}>Redux To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list &&
            list.map((item) => {
              return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
            })}
        </div>

        <div className="ToDoInput">
          <input type="text" value={todo} onChange={handleInput} onKeyPress={handleKeyPress} />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
    )
}

export default ToDo;