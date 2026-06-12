import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/image/notFound.webp"
        alt="not-found"
        className="object-cover"
        width={600}
        height={600}
      />
      <h1 className="text-foreground font-medium text-4xl">
        Halaman tidak ditemukan
      </h1>
    </div>
  );
}
