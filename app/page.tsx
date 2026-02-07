import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6">
        Katrine Rosa Beck
      </h1>

      <p className="text-lg max-w-xl mb-10">
        Illustration, stories and web development.
        Portfolio and blog in progress.
      </p>

      <Link
        href="/blog"
        className="inline-block text-sm underline mb-10"
      >
        Gå til blog
      </Link>

      <section className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-square bg-gray-100"
          >
            <Image
              src={`/images/img${index + 1}.png`}
              alt={`Illustration ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>
    </main>
  );
}