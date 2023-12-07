/* eslint-disable react/prop-types */
import { useState } from 'react';
import Delete from './Delete/Delete';
import Options from '../Options/Options'

export default function TodoItem({ id, content }) {
  const [onFocus, SetOnFocus] = useState(false)

  return (
    <div className="my-4 w-full">
      <div className="bg-[#1d1c1a] flex justify-between p-3 rounded-lg"
        onClick={() => SetOnFocus(!onFocus)}>
        <div className="">
          <p className="text-gray-100 font-semibold text-2xl">{content.title}</p>
          <p className=" text-gray-600 break-words">{content.about}</p>
        </div>
        <Delete id={id} />
      </div>
      <div className="">
        {
          onFocus ? (<Options id={id} content={content} />) : null
        }
      </div>
    </div>
  )
}