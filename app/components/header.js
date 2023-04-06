"use client";

import {
  SignInButton,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
//import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";

const logoImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Header = () => (
    <header className="flex justify-between px-8 whitespace-normal">
      <h1>My App</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
     
        {/* Signed out users get sign in button */}
      <SignInButton mode="modal">
  <button className="btn">
    Sign in
  </button>
</SignInButton>
     
    </header>
  );

export default Header;
