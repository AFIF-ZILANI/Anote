/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../../DataStore/Reducers/TodoSlice';

export default function Delete({ id }) {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)

    const handelDelete = () => {
        dispatch(removeTodo(id))
        setModal(false)
    }
    return (
        <div className="">
            {
                modal ? (
                    <div className="w-full h-screen overflow-hidden absolute top-0 left-0 bg-[#000000ce] flex justify-center items-center">
                        <div className="w-[300px] h-[350px]">
                            <div className="">
                                <p
                                className='text-2xl text-center text-[#FF8301]'
                                >Are You Sure?</p>
                                <p
                                className='text-gray-400 text-lg text-center mt-2'
                                >If you Press {`"Delete"`} then your note will delete for permantent!</p>
                            </div>
                            <div className="w-full flex justify-between mt-9">
                                <button
                                    className='p-4 bg-[#1d1c1a] text-lg rounded-lg text-red-600'
                                    onClick={handelDelete}
                                >Delete</button>
                                <button
                                    className='p-4 bg-[#1d1c1a] text-lg rounded-lg text-purple-600'
                                    onClick={() => setModal(false)}
                                >Cancel</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-2"
                        onClick={() => setModal(true)}>
                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={1} y={1} width={30} height={30} rx={4} fill="#1B1A17" stroke="#FF0000" strokeWidth={2} />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0908 12.121C12.823 11.8532 12.3888 11.8532 12.1211 12.121C11.8533 12.3888 11.8533 12.8229 12.1211 13.0907L14.3232 15.2929C14.7138 15.6834 14.7138 16.3166 14.3232 16.7071L12.1211 18.9093C11.8533 19.1771 11.8533 19.6112 12.1211 19.879C12.3889 20.1468 12.8231 20.1468 13.0909 19.879L15.293 17.6769C15.6835 17.2864 16.3167 17.2864 16.7072 17.6769L18.9093 19.879C19.1771 20.1467 19.6112 20.1467 19.879 19.879C20.1468 19.6112 20.1468 19.177 19.879 18.9092L17.6769 16.7071C17.2864 16.3166 17.2864 15.6834 17.6769 15.2929L19.8791 13.0908C20.1469 12.823 20.1469 12.3888 19.8791 12.121C19.6113 11.8533 19.1771 11.8533 18.9093 12.121L16.7072 14.3232C16.3167 14.7137 15.6835 14.7137 15.293 14.3232L13.0908 12.121Z" fill="#FF0000" />
                        </svg>
                    </div>
                )
            }
        </div>
    )
}
