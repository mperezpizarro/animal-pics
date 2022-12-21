import Link from "next/link"
import PicLinks from "../../components/PicLinks"

async function Layout({children}) {
    return (
        <main className="w-full max-w-4xl mx-auto py-2 px-4">
            <h2 className="font-bold text-xl md:text-3xl text-center mb-4">Fotos de patos</h2>
            <div className="text-center">
                <small>Powered by <a className="underline" href="https://random-d.uk">random-d.uk API</a></small>
            </div>
            {children}
            <div className="my-6 flex justify-center gap-x-4">
                <Link href="/" className="text-white font-bold bg-cyan-600 py-4 px-6 rounded-xl">
                    Volver al inicio
                </Link>
                <PicLinks className="text-white font-bold bg-cyan-600 py-4 px-6 rounded-xl">
                    Ver otro pato
                </PicLinks>
            </div>
        </main>
    )
}

export default Layout