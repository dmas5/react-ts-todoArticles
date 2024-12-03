import { generateId } from "./idGenerate";

export const createNewTodoArticle = ( task: string, desc: string ) => {

    const newArticle = {
        id: generateId(),
        task:task,
        description: desc,
        edit:false
      };

      return newArticle;

};