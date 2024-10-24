import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    <header className="flex justify-between items-center py-6 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold">Goa Villas</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-600">Home</a>
        <a href="#" className="hover:text-gray-600">About us</a>
        <a href="#" className="hover:text-gray-600">Villas</a>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-brown-800">
          Schedule a call
        </button>
      </nav>
    </header>

    <main className="text-center py-20 px-4 md:px-20">
      <h1 className="text-5xl font-bold mb-4">Your Dream Home Awaits</h1>
      <h1 className="text-[120px] font-bold mb-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 text-transparent bg-clip-text shadow-text">
  Coming Soon
</h1>
      <p className="text-gray-600 text-lg mb-6">
      &quot; Stay tuned for the ultimate property search experience &quot;
      </p>
      
      <div className="max-w-md mx-auto flex items-center space-x-4 mb-6">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
        />
        <button className="bg-red-300 w-[140px] flex text-white px-6 py-2 rounded-lg hover:bg-brown-800">
          Notify Me
        </button>
      </div>

      <div className="flex justify-center">

      
      <a href="tel:+919873344942" className="block bg-gray-300 rounded-full px-2 py-2 w-[500px] items-center justify-center text-gray-500 mb-16">
        Call/WhatsApp us at +91 9873344942
      </a>
      </div>

      <section className="px-8 py-4 bg-[#FBF8F4] mx-0  md:px-0">
        <h2 className="text-3xl font-semibold mb-8">Luxury Living in the Heart of Goa</h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-600">
          Discover the perfect blend of modern comforts and tropical charm at Goa Villas. Our premium villas are designed to provide you with an unparalleled living experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Replace the src with actual image URLs */}
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/image1.jpg"
              alt="Villa 1"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/image2.jpg"
              alt="Villa 2"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/image3.jpg"
              alt="Villa 3"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>

    <footer className="py-8 text-center text-gray-500">
      <div className="flex justify-center items-center">
      <p>instagram</p> <p> twitter</p> <p>facebook</p>
        
      </div>
      &copy; 2024 Goa Villas. All rights reserved.
    </footer>
  </div>

  );
}
