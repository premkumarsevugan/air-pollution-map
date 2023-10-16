import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="min-h-screen flex flex-row bg-gray-800">
                <div class="flex flex-col w-56 bg-gray-800 rounded-r-3xl overflow-hidden">
                    <div class="flex items-center justify-center h-20 border-b-2">
                        <h1 class="text-3xl font-bold text-indigo-500">EnviroVista</h1>
                    </div>
                    <ul class="flex flex-col py-4">
                        <li>
                            <Link to='/' href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white scale-110 px-5">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg transition-transform ease-in duration-200 text-gray-400 hover:text-white"><i class="bx bx-home"></i></span>
                                <span class="text-sm font-medium">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/marker' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white scale-110 px-5">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg transition-transform ease-in duration-200 text-gray-400 hover:text-white"><i class="bx bx-map-pin"></i></span>
                                <span class="text-sm font-medium">Pollution Level</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/navigation' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white scale-110 px-5">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg transition-transform ease-in duration-200 text-gray-400 hover:text-white"><i class="bx bx-navigation"></i></span>
                                <span class="text-sm font-medium">Navigation</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/history' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white scale-110 px-5">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg transition-transform ease-in duration-200 text-gray-400 hover:text-white"><i class="bx bx-history"></i></span>
                                <span class="text-sm font-medium">History Stats</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white scale-110 px-5">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg transition-transform ease-in duration-200 text-gray-400 hover:text-white"><i class="bx bx-phone-call"></i></span>
                                <span class="text-sm font-medium">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
  )
}

export default Navbar