import React from 'react'
import Button from './Button'

export default function Header() {
    return (
        <header class="absolute w-full z-50 px-4">
            <div class="container mx-auto py-5">
                <div class="flex flex-stretch items-center">
                    

                    <div class="w-full"></div>

                    <div class="">
                        <ul
                            class="fixed bg-white inset-0 flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex">
                            <li class="mx-3 pl-5 py-6 md:py-0">
                                <a href="#" class="text-black md:text-white hover:underline">Portfolio</a>
                            </li>
                            <li class="mx-3 pl-5 py-6 md:py-0">
                                <a href="#" class="text-black md:text-white hover:underline">About</a>
                            </li>

                            <li class="x-5 pl-5 py-6 md:py-0">
                                <Button text="Contact Me" href="#"></Button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
    );
}
