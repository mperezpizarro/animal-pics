import Link from "next/link"
import PicLinks from "../../components/PicLinks"

async function Layout({children}) {
    return (
        <main className="w-full max-w-4xl mx-auto py-2 px-4">
            <h2 className="font-bold text-xl md:text-3xl text-center mb-4">¡Alegra tu día con un bonito shiba!</h2>
            {children}
            <div className="my-6 flex justify-center gap-x-4">
                <Link href="/" className="text-white font-bold bg-amber-500 py-4 px-6 rounded-xl">
                    Volver al inicio
                </Link>
                <PicLinks className="text-white font-bold bg-amber-500 py-4 px-6 rounded-xl">
                    Ver otro shiba
                </PicLinks>
            </div>
        </main>
    )
}

export default Layout