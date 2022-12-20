import Link from "next/link"

function LinkCard({href, children}) {
  return (
    <div className="h-[150px] aspect-[16/9] py-2 px-4 bg-white rounded-xl shadow flex items-center justify-center">
        <a className="font-bold" href={href}>
            {children}
        </a>
    </div>
  )
}

export default LinkCard