import PhotoCard from "../../components/PhotoCard";

async function getData() {
    const response = await fetch(
        "https://shibe.online/api/shibes?count=1",
        { cache: "no-store" }
    )
    return response.json()
}

async function Page() {
    const data = await getData()
    const dogImg = data[0]

    return (
        <PhotoCard src={dogImg} />
    )
}

export default Page