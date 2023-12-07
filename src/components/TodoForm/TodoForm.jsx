import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../DataStore/Reducers/TodoSlice';

export default function TodoForm() {
  const [newTodoTitle, SetNewTodoTitle] = useState('')
  const [newTodoAbout, SetNewTodoAbout] = useState('')
  const [emtyField, setEmptyField] = useState(true)
  const disPatch = useDispatch();

  const handleClick = () => {
    if (newTodoAbout !== "" && newTodoTitle !== "") {
      disPatch(addTodo({ title: newTodoTitle, about: newTodoAbout }))
      SetNewTodoTitle('')
      SetNewTodoAbout('')
    } else {
      setEmptyField(true);
    }
  }

  useEffect(() => {
    if ((newTodoAbout !== '') && (newTodoTitle !== '')) {
      setEmptyField(false);
    } else {
      setEmptyField(true);
    }

  }, [newTodoAbout, newTodoTitle])

  return (

    <div className="flex justify-center items-start gap-2 mb-3">
      <div className="flex flex-col items-start">
        <div className="h-10">
          <input type="text"
            className="flex-shrink-0 w-[16rem] h-10 rounded border border-[#6d05d4] bg-[#1d1c1a] text-[#f0e3ca]/[.64] text-sm leading-[1.125rem] outline-none mb-2 px-2"
            placeholder='Title...'
            value={newTodoTitle}
            onChange={(e) => SetNewTodoTitle(e.target.value)}
          />
          <div className="h-9">
            <input type="text"
              className="flex-shrink-0 w-[16rem] h-9 rounded border border-[#6d05d4] bg-[#1d1c1a] text-[#f0e3ca]/[.64] text-sm leading-[1.125rem] outline-none px-2"
              placeholder='about...'
              value={newTodoAbout}
              onChange={(e) => SetNewTodoAbout(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="cursor-pointer mt-[8px] ml-2"
        onClick={handleClick}>
        <svg width={70} height={70} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x={1} y={1} width={68} height={68} rx={7} fill="#1B1A17" stroke={emtyField ? "#FF8303" : "#6d05d4"} strokeWidth={2} />
          <path fillRule="evenodd" clipRule="evenodd" d="M36.5 24C36.5 23.4477 36.0523 23 35.5 23H34.5C33.9477 23 33.5 23.4477 33.5 24V32.5C33.5 33.0523 33.0523 33.5 32.5 33.5H24C23.4477 33.5 23 33.9477 23 34.5V35.5C23 36.0523 23.4477 36.5 24 36.5H32.5C33.0523 36.5 33.5 36.9477 33.5 37.5V46C33.5 46.5523 33.9477 47 34.5 47H35.5C36.0523 47 36.5 46.5523 36.5 46V37.5C36.5 36.9477 36.9477 36.5 37.5 36.5H46C46.5523 36.5 47 36.0523 47 35.5V34.5C47 33.9477 46.5523 33.5 46 33.5H37.5C36.9477 33.5 36.5 33.0523 36.5 32.5V24Z" fill={emtyField ? "#FF8303" : "#6d05d4"} />
        </svg>
      </div>
    </div>
  );
}
