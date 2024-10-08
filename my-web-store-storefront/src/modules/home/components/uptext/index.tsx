import React from "react"

type Props = {
  children?: React.ReactNode
  title: string
  subtitle: string
}

const Uptext = ({ children, title, subtitle }: Props) => {
  return (
    <div className="flex mt-8 lg:pb-10 md:pb-6 sm:pb-4 pb-2 w-full flex-col text-center lg:gap-5 md:gap-3 sm:gap-2 gap-1 flex-wrap  ">
      <p className="font-extrabold lg:text-6xl md:text-4xl sm:text-3xl text-xl text-slate-900 text-center">{title}</p>
      <p className="lg:text-xl md:text-lg sm:text-base font-semibold  text-slate-600 text-center">{subtitle}</p>{" "}
    </div>
  )
}

export default Uptext;