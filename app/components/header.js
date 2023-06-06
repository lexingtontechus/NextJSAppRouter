"use client";
import Link from "next/link";
import {
  SignInButton,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
//import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";
import Switch from "./switchtheme";

const logoImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Header = () => (
  <div className="navbar flex justify-between px-8 whitespace-normal">
     <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" href="/">LOGO</Link>
  </div>
  <div  className="mr-3">
  <Switch/>
  </div>
    <SignedIn>
      {/* Mount the UserButton component */}
      <UserButton />
    </SignedIn>
    {/* Signed out users get sign in button */}
    <SignInButton mode="modal">
      <button className="btn glass rounded-md">Sign in</button>
    </SignInButton>
  </div>
);

export default Header;
