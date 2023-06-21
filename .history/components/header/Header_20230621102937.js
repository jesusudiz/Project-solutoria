import React from "react";
import Image from 'next/image'

export default async function Navigation() {
    return (
        <header>
            <nav>
                <div className="ui icon input">
                    <input type="text" placeholder="Search..."/>
                    <i className="search icon"></i>
                </div>
                <div class="flex -space-x-2 overflow-hidden">
                    <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/solutoria.jpg" alt="logo de solutoria" />
                </div>
            </nav>
        </header>
    )
}