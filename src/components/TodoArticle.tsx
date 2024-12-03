import { Article } from "../interfaces/todoArticle"

interface TodoArticleProps {
    todoArticle: Article,
    toggleEdit: (id: number) => void,
    removeArticle: (id: number) => void 
};

export const TodoArticle: React.FC<TodoArticleProps> = (props) => {

    const {todoArticle,toggleEdit,removeArticle} = props;

    return (
      <tr>
        <td>{todoArticle.task}</td>
        <td>{todoArticle.description}</td>
        <td><button onClick={() => toggleEdit(todoArticle.id)}>edit</button></td>
        <td><button onClick={() => removeArticle(todoArticle.id)}>delete</button></td>
      </tr>
    )
  }