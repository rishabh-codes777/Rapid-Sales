import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
export default async function Navbar() {
    const session = await getServerSession(authOption)
    const image = session?.user?.image
    return (
      <nav className="flex md:hidden text-black justify-between items-center p-4 bg-white shadow-sm fixed top-0 w-full z-10">
        <div className="text-xl font-bold">Sprint Earn</div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Link href={"/settings"}>
            <Image src={image} width={20} height={20} alt='profile' className="w-full h-full object-cover" /> 
          </Link>
        </div>
      </nav>
    );
  }
  