import Link from "next/link"

function LinkCard({href, children}) {
  return (
    <div className="min-w-[300px] aspect-[16/9] py-2 px-4 bg-white rounded-xl shadow flex items-center justify-center">
        <a className="font-bold" href={href}>
            {children}
        </a>
    </div>
  )
}

export default LinkCard