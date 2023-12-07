import TodoForm from "./components/TodoForm/TodoForm";
import { useSelector } from "react-redux";
import TodoItem from "./components/TodoItem/TodoItem";


export default function App() {
  const currentTodos = useSelector((state) => state.todos);
  
  // 
  return (
    <div className="w-full min-h-screen dark:bg-black flex items-center flex-col">
    <div className='heading text-purple-700 font-bold text-4xl relative top-10'>-- AnOtE --</div>
      <div className="mt-20 w-[20rem]">
        <TodoForm />
      </div>
      <div className="w-full px-5">
        {
          currentTodos.map((eachItem) => (<TodoItem id={eachItem.id} content={eachItem.content} key={eachItem.id} />))
        } 
      </div>
    </div>
  )
}
