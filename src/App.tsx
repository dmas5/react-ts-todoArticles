import { useState } from "react";
import { Article } from "./interfaces/todoArticle";
import { createNewTodoArticle } from "./services/createNewTodoArticle";
import { createEditedTodoArticle } from "./services/createEditedTodoArticle";
import { TodoArticle } from "./components/TodoArticle";
import { TodoArticleEdit } from "./components/TodoArticleEdit";

function App() {

  const [task,setTask] = useState("");
  const [description,setDescription] = useState("");
  const [todoArticleList,setTodoArticleList] = useState<Article[]>([]);

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id == "task") {
        setTask(event.target.value)
    } else if(event.target.id == "description"){
        setDescription(event.target.value)
    }
};

const submitForm = (event: React.FormEvent) => {
  event.preventDefault();
  const newTodoArticle = createNewTodoArticle(task,description);
  setTodoArticleList([...todoArticleList,newTodoArticle]);
};

const toggleEdit = (id:number): void => {
  const editedTodoArticle = createEditedTodoArticle(todoArticleList,id);
  setTodoArticleList(todoArticleList.map(i => i.id !== id ? i: editedTodoArticle));
};

const saveEditedTodoArticle = (todoArticle: Article): void => {
  setTodoArticleList(todoArticleList.map(i => i.id !== todoArticle.id ? i: todoArticle));
};

const removeTodoArticle = (id: number): void => {
  setTodoArticleList(todoArticleList.filter(i => i.id !== id));
};


  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Task: </label>
        <input value={task} id="task" onChange={handleInputChange} />
        <label>Description: </label>
        <input value={description} id="description" onChange={handleInputChange} />
        <button type="submit">add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Edit</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            todoArticleList.map(todoArticle => todoArticle.edit ?
              <TodoArticleEdit 
                key={todoArticle.id}
                todoArticle={todoArticle}
                toggleEdit={toggleEdit}
                saveArticle={saveEditedTodoArticle} /> :
              <TodoArticle
                key={todoArticle.id}
                todoArticle={todoArticle}
                toggleEdit={toggleEdit}
                removeArticle={removeTodoArticle} 
              />
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
