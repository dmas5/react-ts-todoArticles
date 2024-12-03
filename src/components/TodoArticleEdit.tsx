import { useState } from "react";
import { Article } from "../interfaces/todoArticle";

interface TodoArticleEditProps {
    todoArticle: Article,
    toggleEdit: (id: number)=> void,
    saveArticle: (article: Article) => void
};

export const TodoArticleEdit: React.FC<TodoArticleEditProps> = (props) => {

    const {todoArticle,toggleEdit,saveArticle} = props;

    const [taskitem,setTask] = useState(todoArticle.task);
    const [description,setDescription] = useState(todoArticle.description);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id == "taskitem") {
            setTask(event.target.value)
        } else if(event.target.id == "description"){
            setDescription(event.target.value)
        }
    };
  
    const onSave = () => {
  
      const articleToSave = {
        id: todoArticle.id,
        task: taskitem,
        description: description,
        edit: !todoArticle.edit
      };
  
      saveArticle(articleToSave);
  
    }
  
    return (
      <tr>
        <td><input value={taskitem} id="taskitem" onChange={handleInputChange} /></td>
        <td><input value={description} id="description" onChange={handleInputChange} /></td>
        <td><button onClick={() => toggleEdit(todoArticle.id)}>cancel</button></td>
        <td><button onClick={onSave}>save</button></td>
      </tr>
    )
  }