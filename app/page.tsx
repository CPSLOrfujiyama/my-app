import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Welcome to My First Next.js + Tailwind Page!
      </h1>
      <p className="text-lg text-gray-700 mb-6">That is a picture of me.</p>
      <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-blue-700 transition">
        CLICK IF YOU'VE SAID "6 7" IN THE PAST 6-7 DAYS
      </button>
      <section className="mt-16 w-full max-w-4xl px-6 py-12 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Hi, I'm Rodney and I have a lot of allergies D:
        </h2>
        <p className="text-gray-600"></p>

        <Image
          src="/example.jpg"
          alt="Example"
          width={600}
          height={400}
          className="rounded-lg shadow mt-6"
        />
      </section>
    </main>
  );
}
