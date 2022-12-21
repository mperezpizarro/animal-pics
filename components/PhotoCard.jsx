import Image from "next/image"

function PhotoCard({src}) {
  return (
    <div className="w-full max-w-3xl aspect-[16/10] mx-auto relative">
        <a href={src} target="_blank">
          <Image src={src} fill alt="Foto de perro" className="object-cover object-center rounded-lg" />
        </a>
    </div>
  )
}

export default PhotoCard