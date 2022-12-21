import PhotoCard from "../../components/PhotoCard";

async function getData() {
    const response = await fetch(
        "https://randomfox.ca/floof/",
        { cache: "no-store" }
    )
    return response.json()
}

async function Page() {
    const data = await getData()
    const duckImg = data.image

    return (
        <PhotoCard src={duckImg} />
    )
}

export default Page