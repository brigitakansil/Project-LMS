import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

    {/* Hero Section */}
    <section className="min-h-screen flex items-center bg-white px-6 gap-x-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">

    {/* Kiri: Text */}
    <div className="flex-1 text-left pl-6 md:pl-16 lg:pl-24">

      <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900 mb-4 leading-tight">
        EDUVIA
      </h1>

  <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
    Learning Management System
  </h2>

  <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
    Platform pembelajaran berbasis web untuk mengelola kelas, materi,
    tugas, dan penilaian secara terstruktur dan efisien.
  </p>

  <div className="flex gap-6">
  <a
    href="/register"
    className="inline-block px-10 py-4 bg-yellow-400 text-white text-lg font-semibold rounded-full hover:bg-yellow-500 transition"
  >
    Get Started
  </a>

  <a
    href="/login"
    className="inline-block px-9 py-4 bg-yellow-400 text-white text-lg font-semibold rounded-full hover:bg-yellow-500 transition"
  >
    Login
  </a>
</div>

    </div>
    </div>

    {/* Kanan: Image */}
    <div className="relative mt-24 w-full h-[600px] ml-0 md:ml-16">
  <Image
    src="/hero_sec.png"
    alt="LMS Illustration"
    fill
    priority
    className="object-contain"
  />
</div>

  
</section>

    {/* Fitur */}
    <section className="h-screen flex flex-col  px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-20 tracking-wide">
        FITUR
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/*card 1*/}
        <div className="border-2 border-yellow-400 rounded-[40px] p-10 text-cemter">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
            Manajemen Kelas
          </h3>
          <p className="text-gray-600 text-center">
            Membuat dan mengelola kelas pembelajaran secara online
          </p>
        </div>

        {/* Card 2 (highlight biru) */}
    <div className="border-2 border-blue-900 rounded-[40px] p-10 text-center">
      <h3 className="text-xl font-semibold text-yellow-500 mb-4">
        Materi & Tugas
      </h3>
      <p className="text-gray-600">
        Upload materi pembelajaran dan pengumpulan tugas secara digital
      </p>
    </div>

    {/* Card 3 */}
    <div className="border-2 border-yellow-400 rounded-[40px] p-10 text-center">
      <h3 className="text-xl font-semibold text-blue-900 mb-4">
        Penilaian
      </h3>
      <p className="text-gray-600">
        Sistem penilaian untuk memantau perkembangan peserta didik
      </p>
    </div>
      </div>
    </section>

    {/* Target User */}
    <section className="bg-white text-white py-20 px-6 text-center h-screen">
      <h2 className="text-3xl font-semibold mb-4 text-blue-900">
        Digunakan untuk
      </h2>
      <p className="max-w-2xl mx-auto text-blue-900">
        Sekolah, perguruan tinggi, lembaga kursus, dan pelatihan yang membutuhkan sistem pembelajaran digital yang mudah digunakan
      </p>
    </section>

    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

  <h2 className="text-4xl font-bold text-blue-800 mb-12">
    Dikembangkan oleh
  </h2>

  <div className="w-64 h-64 mb-8">
    <img
      src="/Brigita.png"
      alt="Developer"
      className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
    />
  </div>

  <h3 className="text-xl font-semibold">
    Brigita K.
  </h3>

</section>
    {/* Footer */}
    <footer className="py-6 text-center text-gray-500 bg-white">
      © 2026 Learning Management System
    </footer>


    </main>
  );
}