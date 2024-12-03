import { Article } from "../interfaces/todoArticle";

export const createEditedTodoArticle = (todoArticleList: Article[], id: number) => {

  const articleToEdit = todoArticleList.find(i => i.id === id)!;
  const editedTodoArticle = {...articleToEdit, edit : !articleToEdit.edit};

  return editedTodoArticle;
}