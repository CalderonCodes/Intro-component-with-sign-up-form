import React from 'react'

export default function Button(props) {
  return (
    <div onClick={props.onClick} className="btn lg:h-3 line rounded-lg leading-7 hover:bg-[#30ba7f] bg-Green border-none w-full lg:w-11/12 text-base lg:text-base lg:px-10 px-15 text text-neutral-50 font-Poppins font-medium
    shadow-[0px_10px_0px_0px_rgba(48,186,127)] lg:shadow-[0px_5px_0px_0px_rgba(48,186,127)] hover:shadow-none">
        Claim your free trial
    </div>
  )
}
