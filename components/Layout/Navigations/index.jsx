"use client";
import { useState } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import "../../styles/navigation.css";
import { TfiAlignRight, TfiAngleDown } from "react-icons/tfi";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative ">
      <nav className="navbar border-b relative border-ujkol-brown shadow-sm">
        <div className="py-6 lg:mt-6 px-5 lg:px-10">
          <div className="w-full lg:w-[90%] mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/">
                  <CldImage
                    width="100"
                    height="80"
                    src="/ujkol-img/ujkol-logo_fv4ytx.png"
                    className="w-auto h-auto"
                    alt="UJKOL, OFM LOGO"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center">
                {InfoBar()}
                <ul className="hidden lg:flex">
                  <li className="list-item">
                    <Link href="/about-ujkol">Universite</Link>
                    <TfiAngleDown className="tfiangledown" />
                  </li>
                  <li className="list-item">
                    <Link href="/formations">Formations</Link>
                    <TfiAngleDown className="tfiangledown" />
                  </li>
                  <li className="list-item">
                    <Link href="/enseignements">Enseignements</Link>
                    <TfiAngleDown className="tfiangledown" />
                  </li>
                  <li className="list-item">
                    <Link href="/recherches">Recherches</Link>
                    <TfiAngleDown className="tfiangledown" />
                  </li>
                  <li className="list-item">
                    <Link href="/medias">Medias</Link>
                    <TfiAngleDown className="tfiangledown" />
                  </li>
                  <li className="list-item">
                    <Link href="/bibliotheque">Bibliotheque</Link>
                  </li>
                  <li className="list-item">
                    <Link href="/etudiant">Etudiant</Link>
                    <TfiAngleDown className="tfiangledown" />
                  </li>
                </ul>

                {isOpen ? (
                  <ul className="flex flex-col absolute top-[100%]  translate-y-[0%] bg-gray-100 w-[100%] shadow-sm px-5 py-8 space-y-3">
                    <li className="list-item">
                      <Link href="/about-ujkol">Universite</Link>
                      <TfiAngleDown className="tfiangledown" />
                    </li>
                    <li className="list-item">
                      <Link href="/formations">Formations</Link>
                      <TfiAngleDown className="tfiangledown" />
                    </li>
                    <li className="list-item">
                      <Link href="/enseignements">Enseignements</Link>
                      <TfiAngleDown className="tfiangledown" />
                    </li>
                    <li className="list-item">
                      <Link href="/recherches">Recherches</Link>
                      <TfiAngleDown className="tfiangledown" />
                    </li>
                    <li className="list-item">
                      <Link href="/medias">Medias</Link>
                      <TfiAngleDown className="tfiangledown" />
                    </li>
                    <li className="list-item">
                      <Link href="/bibliotheque">Bibliotheque</Link>
                    </li>
                    <li className="list-item">
                      <Link href="/etudiant">Etudiant</Link>
                      <TfiAngleDown className="tfiangledown" />
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>

              <button type="button" onClick={toggle}>
                <TfiAlignRight className="flex lg:hidden text-2xl font-bold text-ujkol-text cursor-pointer hover:text-yellow-500 transition-colors duration-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const InfoBar = () => {
  return (
    <div className="hidden md:flex lg:flex-end w-full absolute right-0 top-0 px-3 items-center bg-ujkol-brown lg:w-[60%]">
      <ul className="flex items-center justify-start">
        <li className="info-list-item">
          <Link href="/etudiant">Etudiant actuel</Link>
        </li>
        <li className="info-list-item">
          <Link href="/bibliotheque">Bibliotheque</Link>
        </li>
        <li className="lg:mr-4 mr-2 font-bold text-white text-[10px] lg:text-[12px] ">
          <Link href="+243 997 141 137">+243 997 141 137</Link>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="lg:mr-4 mr-1 font-bold text-white text-[10px] lg:text-[12px]">
          <Link href="mailto:contact@ujkol-ofm.org">contact@ujkol-ofm.org</Link>
        </li>
        <li className="font-bold uppercase text-white text-[10px] lg:text-[12px] bg-ujkol-dark p-2 rounded-0">
          <Link href="/login">My UJKOL Login</Link>
        </li>
        {/* <li className="mr-4 font-bold text-white text-[12px]">
          <Link href="#">F</Link>
          <Link href="#">y</Link>
          <Link href="#">T</Link>
        </li> */}
      </ul>
    </div>
  );
};
