import LinkCard from "../components/LinkCard"

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-3xl font-bold">ANIMALS PICS</h1>
      <h2 className="text-xl font-semibold">Descubre fotos adorables de perritos, patitos y gatitos</h2>

      <section className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <LinkCard href="/dogs">
          Ver fotos de perros
        </LinkCard>
        <LinkCard href="/ducks">
          Ver fotos de patos
        </LinkCard>
        <LinkCard href="/cats">
          Ver fotos de gatos
        </LinkCard>
      </section>
    </main>
  )
}
