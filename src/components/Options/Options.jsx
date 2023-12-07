/* eslint-disable react/prop-types */
import Edit from "./Edit/Edit";

export default function Options({ id, content }) {


  return (
    <div className="flex w-full justify-end p-2">
      <div className="flex w-[160px] justify-evenly">
        <div className="flex justify-center items-center w-9 h-9 rounded-md border border-[#6d05d4] bg-[#2b2a27]">
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5556 10.9511C11.9645 10.9511 11.4356 11.1844 11.0311 11.55L5.48558 8.32222C5.52447 8.14333 5.55558 7.96444 5.55558 7.77778C5.55558 7.59111 5.52447 7.41222 5.48558 7.23333L10.9689 4.03667C11.3889 4.42556 11.9411 4.66667 12.5556 4.66667C13.8467 4.66667 14.8889 3.62444 14.8889 2.33333C14.8889 1.04222 13.8467 0 12.5556 0C11.2645 0 10.2222 1.04222 10.2222 2.33333C10.2222 2.52 10.2534 2.69889 10.2922 2.87778L4.80892 6.07444C4.38892 5.68556 3.83669 5.44444 3.22225 5.44444C1.93114 5.44444 0.888916 6.48667 0.888916 7.77778C0.888916 9.06889 1.93114 10.1111 3.22225 10.1111C3.83669 10.1111 4.38892 9.87 4.80892 9.48111L10.3467 12.7167C10.3078 12.88 10.2845 13.0511 10.2845 13.2222C10.2845 14.4744 11.3034 15.4933 12.5556 15.4933C13.8078 15.4933 14.8267 14.4744 14.8267 13.2222C14.8267 11.97 13.8078 10.9511 12.5556 10.9511Z" fill="#D9D9D9" />
          </svg>
        </div>
        <Edit id={id} content={content} />
        <div className="flex w-9 h-9 rounded-md border border-[#6d05d4] bg-[#2b2a27] justify-center items-center" >
          <p className="text-white text-center font-['Roboto'] font-bold leading-[1.125rem]">i</p>
        </div>
      </div>
    </div>
  )
}
