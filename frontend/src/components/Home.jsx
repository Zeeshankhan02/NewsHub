import { ArrowRight } from "lucide-react"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"


function Home(){
  return<>
  <Navbar/>
  {/* Hero Section */}
  <section className="bg-[linear-gradient(90deg,_rgba(42,123,155,1)_0%,_rgba(198,221,136,1)_68%,_rgba(237,221,83,1)_100%)] text-black border-b border-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stay Informed with <span className="text-gray-300">Breaking News</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Your trusted source for comprehensive coverage of global events, 
                technology breakthroughs, and in-depth analysis from around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to={'/signup'} className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                  Explore Latest News
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
                
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(42,123,155,1)_0%,_rgba(198,221,136,1)_68%,_rgba(237,221,83,1)_100%)] rounded-2xl transform rotate-6"></div>
              <img
                src="https://placehold.co/600x400/1e40af/ffffff?text=Breaking+News"
                alt="Breaking News"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
  {/* Newsletter Section */}
  <section className="py-16 bg-[linear-gradient(90deg,_rgba(42,123,155,1)_0%,_rgba(198,221,136,1)_68%,_rgba(237,221,83,1)_100%)] text-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter for the latest news and updates delivered to your inbox.
          </p>
          
          <p className="mt-4 text-sm text-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

  
</>
}

export default Home