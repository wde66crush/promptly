"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'



const Nav = () => {
  return (
    <nav className="flex-between w-full mb-1 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
        src="/assets/images/logo.svg"
        alt="Promptly Logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo_text">Promptly</p>
      </Link>
    </nav>
  )
}

export default Nav