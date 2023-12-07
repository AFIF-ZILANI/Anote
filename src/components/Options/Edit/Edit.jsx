/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../../DataStore/Reducers/TodoSlice";


export default function Edit({ id, content }) {

    const [newTodoTitle, SetNewTodoTitle] = useState(content.title)
    const [newTodoAbout, SetNewTodoAbout] = useState(content.about)
    const [modal, setModal] = useState(false)

    const dispatch = useDispatch()

    console.log(modal)

    const handleClick = () => {
        dispatch(updateTodo({
            id, content: {
                title: newTodoTitle,
                about: newTodoAbout
            }
        }))
        setModal(false);
    }

    return (
        <div>
            {
                modal ? (
                    <div className="w-full h-screen bg-[#000000ce] absolute top-0 left-0 overflow-hidden flex justify-center items-center">
                        <div >
                            <div className="font-extrabold text-2xl text-center text-purple-700 relative top-16 "
                            >Edit Your Note</div>
                            <div className="w-full h-screen flex flex-col items-center relative top-24 left-4">
                                <div className="w-[350px]">
                                    <input type="text"
                                        value={newTodoTitle}
                                        onChange={(e) => SetNewTodoTitle(e.target.value)}
                                        className="bg-[#201f1d] w-[310px] outline-none p-1 rounded-lg border-2 border-[#FF8301] text-gray-200 text-[23px] px-2 mb-5"
                                    />
                                    <textarea rows="10"
                                        value={newTodoAbout}
                                        onChange={(e) => SetNewTodoAbout(e.target.value)}
                                        className="bg-[#201f1d] w-[310px] outline-none p-2 rounded-xl border-2 border-[#FF8303] text-gray-500 text-xl"
                                    ></textarea>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-gray-800 text-xl text-[#FF8303] p-2 px-5 rounded-lg mr-2 cursor-pointer"
                                        onClick={handleClick}
                                    >Save</button>
                                    <button
                                        className="text-red-600 bg-gray-800 p-2 text-xl rounded-lg ml-2 cursor-pointer"
                                        onClick={() => setModal(false)}
                                    >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center w-9 h-9 rounded-md border border-[#6d05d4] bg-[#2b2a27]"
                        onClick={() => setModal(true)}>
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_23_320)">
                                <path d="M2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5ZM13.8067 4.69334C14.0667 4.43334 14.0667 4.01334 13.8067 3.75334L12.2467 2.19334C11.9867 1.93334 11.5667 1.93334 11.3067 2.19334L10.0867 3.41334L12.5867 5.91334L13.8067 4.69334Z" fill="#D9D9D9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_23_320">
                                    <rect width={16} height={16} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                )
            }
        </div>
    )
}
