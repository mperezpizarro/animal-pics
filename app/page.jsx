import LinkCard from "../components/LinkCard"

export default function Home() {
  return (
    <main className="text-center">
      <section className="py-2 px-4">
        <h1 className="text-3xl font-bold">ANIMALS PICS</h1>
        <h2 className="text-xl font-semibold">Descubre fotos adorables de shibas, patos y zorros</h2>
      </section>

      <section className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 px-4">
        <LinkCard href="/dogs">
          Ver fotos de shibas
        </LinkCard>
        <LinkCard href="/ducks">
          Ver fotos de patos
        </LinkCard>
        <LinkCard href="/foxes">
          Ver fotos de zorros
        </LinkCard>
      </section>
    </main>
  )
}
