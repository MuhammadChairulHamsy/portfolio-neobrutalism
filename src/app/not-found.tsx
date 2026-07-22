import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/image/notFound.webp"
        alt="not-found"
        loading="eager"
        width={600}
        height={600}
        className="w-full h-auto object-cover max-w-[600px]"
      />
      <h1 className="text-foreground font-medium text-4xl">
        Halaman tidak ditemukan
      </h1>
    </div>
  );
}
