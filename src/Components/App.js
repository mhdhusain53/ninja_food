import React, { useState } from "react";

const App=()=>{
    const [nav,setNav]=useState(true);
    return(
        <div className="text-gray-500 sm:grid sm:grid-cols-4">
            <div className="sm:col-span-1 sm:flex sm:justify-end ">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-t border-gray-100 hover:text-gray-800">
                            <a href="/">Food Ninja</a>
                        </h1>
                        <div className="md:hidden px-4 cursor-pointer" onClick={()=>setNav(!nav)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
                        </div>
                    </div>
                    <ul className={`${nav?"hidden":""} md:block`} id="menu">
                        <li className="font-bold text-sm mt-6 py-1">
                            <a href="#" className="px-4 flex justify-end border-red-500 border-r-4">
                                <span>Home</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="#" className="px-4 flex justify-end border-white border-r-4">
                                <span>About</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="#" className="px-4 flex justify-end border-white border-r-4">
                                <span>Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <main className="px-16 py-6 bg-gray-100 col-span-3">
                <div className="flex md:justify-end justify-center">
                    <a href="#" className="rounded-full py-2 px-3 mx-2 uppercase text-xs font-bold cursor-pointer tracking-wide text-red-600 border-red-500 md:border-2 hover:text-white hover:bg-red-500 transition ease-out duration-500">Login</a>
                    <a href="#" className="rounded-full py-2 px-3 mx-2 uppercase text-xs font-bold cursor-pointer tracking-wide text-red-600 border-red-500 md:border-2 hover:text-white hover:bg-red-500 transition ease-out duration-500">Sign up</a>
                </div>

                <header>
                    <h2 className="text-5xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold">For Ninjas</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 mb-2 border-b border-gray-200">Latest Recipes</h4>

                    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

                        <div className="mt-4 relative bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden">
                            <img src="images/Butterchicken.jpg" alt="butterchicken" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">5 Bean Chilli Stew</span>
                                <span className="text-gray-500 block text-sm">Recipe by Mario</span>
                            </div>
                            <div className="absolute top-0 bg-gray-200 text-gray-500 rounded-full px-2 py-1 ml-2 mt-2">
                                <span>4.5⭐</span>
                            </div>
                        </div>
                        <div className="mt-4 relative bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden">
                            <img src="images/Butterchicken.jpg" alt="butterchicken" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">5 Bean Chilli Stew</span>
                                <span className="text-gray-500 block text-sm">Recipe by Mario</span>
                            </div>
                            <div className="absolute top-0 bg-gray-200 text-gray-500 rounded-full px-2 py-1 ml-2 mt-2">
                                <span>4.5⭐</span>
                            </div>
                        </div>
                        <div className="mt-4 relative bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden">
                            <img src="images/Butterchicken.jpg" alt="butterchicken" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">5 Bean Chilli Stew</span>
                                <span className="text-gray-500 block text-sm">Recipe by Mario</span>
                            </div>
                            <div className="absolute top-0 bg-gray-200 text-gray-500 rounded-full px-2 py-1 ml-2 mt-2">
                                <span>4.5⭐</span>
                            </div>
                        </div>
                        <div className="mt-4 relative bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden">
                            <img src="images/Butterchicken.jpg" alt="butterchicken" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">5 Bean Chilli Stew</span>
                                <span className="text-gray-500 block text-sm">Recipe by Mario</span>
                            </div>
                            <div className="absolute top-0 bg-gray-200 text-gray-500 rounded-full px-2 py-1 ml-2 mt-2">
                                <span>4.5⭐</span>
                            </div>
                        </div>
                    </div>

                    <h4 className="font-bold mt-12 mb-2 border-b border-gray-200 ">Most Popular</h4>

                    <div>
                        {/* for cards */}
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-gray-200 text-gray-500 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide hover:shadow-lg  transition ease-out duration-500 hover:scale-125">Load More</div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default App;

