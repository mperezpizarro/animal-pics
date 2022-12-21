"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

function PicLinks({ children, className }) {
    const r = useRouter()

    const refresh = e => {
        e.preventDefault()
        r.refresh()
    }

    return (
        <Link href="#" onClick={refresh} className={className}>{children}</Link>
    )
}

export default PicLinks