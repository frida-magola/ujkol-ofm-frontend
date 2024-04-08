"use client";
import Link from "next/link";
import {
  TfiFacebook,
  TfiYoutube,
  TfiInstagram,
  TfiTwitter,
} from "react-icons/tfi";
import CustomLink from "../../UI/CustomLink";
import { CldImage } from "next-cloudinary";

const Footer = (props: any) => {
  const date = new Date();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container space-y-5 py-10">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-stretch space-y-4 md:space-y-0 md:space-x-5">
          <div className="w-full md:w-1/4 flex justify-between md:flex-col items-center md:items-start md:space-y-4">
            <CldImage
              src="/ujkol-img/LOGO-OFFICIEL-UJKOL-1_hsoccq.png"
              alt="Ujkol Logo footer"
              width={70}
              height={60}
            />
            <p className="flex space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 ">
              <CustomLink
                href="/inscription"
                style="rounded-lg py-2 px-2 w-max  md:px-3  border border-white"
                text="Inscription"
                onClick={props.onclick}
              />

              <CustomLink
                href="/login"
                style="rounded-lg py-2 px-2 w-max bg-white text-ujkol-brown  md:px-3  border border-white"
                text="My ujkol login "
                onClick={props.onclick}
              />
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="font-black italic">Liens Rapides</h3>
            <div className="flex flex-wrap">
              <ul className="flex-1">
                <li className=" mr-3 underline ">
                  <CustomLink
                    href="/about-ujkol"
                    text="Universite"
                    onClick={props.onClick}
                  />
                </li>

                <li className=" mr-3 text- underline">
                  <CustomLink
                    href="/formations"
                    text="Formations"
                    onClick={props.onClick}
                  />
                </li>
                <li className=" mr-3 text- underline">
                  <CustomLink
                    href="/enseignements"
                    text="Enseignements"
                    onClick={props.onClick}
                  />
                </li>
                <li className=" mr-3 text- underline">
                  <CustomLink
                    href="/recherches"
                    text="Recherches"
                    onClick={props.onClick}
                  />
                </li>
                <li className=" mr-3 text- underline">
                  <CustomLink
                    href="/medias"
                    text="Medias"
                    onClick={props.onClick}
                  />
                </li>
              </ul>
              <ul className="flex-1">
                <li className=" mr-3 text- underline">
                  <CustomLink
                    href="/bibliotheque"
                    text="Bibliotheque"
                    onClick={props.onClick}
                  />
                </li>
                <li className=" mr-3 text-sm underline">
                  <CustomLink
                    href="/etudiant"
                    text="Etudiant Actuel"
                    onClick={props.onClick}
                  />
                </li>
                <li className=" mr-3 text-sm underline">
                  <CustomLink
                    href="/blog"
                    text="Articles"
                    onClick={props.onClick}
                  />
                </li>
                <li className=" mr-3 text-sm underline">
                  <CustomLink
                    href="/events"
                    text="Evenements"
                    onClick={props.onClick}
                  />
                </li>
                <li className=" mr-3 text- underline">
                  <CustomLink
                    href="/contactus"
                    text="Contactez-nous"
                    onClick={props.onClick}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-black italic">Contact Info</h4>
            <ul>
              <li>
                <Link href="mailto:contact@ujkol-ofm.org">
                  contact@ujkol-ofm.org
                </Link>
              </li>
              <li>
                <Link href="+243 997 141 137">+243 997 141 137</Link>
              </li>
              <li>
                01 Av. de l’Eglise Quartier Biashara, Commune de Dilala, ville
                de Kolwezi
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="font-black italic">
              Soyez informer en temps reel des toutes nos activites
            </h3>
            <h4
              className="text-semibold font-black
            pb-2"
            >
              Souscrivez aux news letters
            </h4>
            <form method="post" className="space-y-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@exemple.com"
                className="border border-ujkol-blue outline-none py-3 px-2 mr-2 rounded-sm"
              />
              <input
                type="submit"
                value="Souscrivez!"
                className="bg-yellow-500 text-gray-600 py-3 px-3 rounded-sm cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="border-t text-gray-500 text-[12px] flex flex-col items-center justify-center py-3 md:flex-row space-y-3 md-space-y-0">
          <p className=" w-full md:flex-grow order-2 md:order-1">
            Copyright © {date.getFullYear()} Université Jean 23 de Kolwezi. All
            right reserved. Developed by
            <em className="font-bold pl-1">
              <Link href="www.stowerinvests.com">STI-SOFTDEV</Link>
            </em>
          </p>
          <div className="w-full md:flex-1 pb-4 flex order-1 md:order-2 space-x-2 items-center text-center justify-center md:justify-end">
            <Link href="#">
              <TfiFacebook
                className="text-white font-bold text-lg"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#">
              <TfiYoutube
                className="text-white font-bold text-lg"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#">
              <TfiInstagram
                className="text-white font-bold text-lg"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
