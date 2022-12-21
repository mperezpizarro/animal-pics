import Image from "next/image"

function PhotoCard({src}) {
  return (
    <div className="w-full max-w-4xl aspect-[16/10] mx-auto relative">
        <Image src={src} fill alt="Foto de perro" className="object-cover object-center rounded-lg" />
    </div>
  )
}

export default PhotoCard