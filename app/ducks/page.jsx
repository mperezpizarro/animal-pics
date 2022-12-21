import PhotoCard from "../../components/PhotoCard";

async function getData() {
    const response = await fetch(
        "https://random-d.uk/api/v2/quack",
        { cache: "no-store" }
    )
    return response.json()
}

async function Page() {
    const data = await getData()
    const duckImg = data.url

    return (
        <PhotoCard src={duckImg} />
    )
}

export default Page