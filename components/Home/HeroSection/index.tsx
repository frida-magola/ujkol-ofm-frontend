import Link from "next/link";
import "../styles/hero.css";
import "../styles/custom-btn.css";
import "../styles/heading.css";
import Image from "next/image";

import { MdMessage, MdCall } from "react-icons/md";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { CldImage } from "next-cloudinary";

const Hero = () => {
  return (
    <section className="header">
      <div className="hero-img"></div>
      {/* HERO CONTENT */}
      <div className=" pt-32 relative">
        <div className="container">
          <div className="flex justify-between items-center relative">
            <div className="w-full lg:w-1/2">
              <h1 className="big-heading">
                Université Jean XXIII de Kolwezi, ofm
              </h1>
              <p className="text-justify font-medium text-lg py-5 md:text-center lg:text-left">
                Par sa formation universitaire qu’elle offre, cette Université
                franciscaine voudrait se placer au centre des enjeux autour
                desquels gravite l’attention du monde sur Kolwezi « Capitale
                mondiale du Cobalt ».
              </p>

              <Link href="/" className="btn btn-blue mb-5">
                {" "}
                Voir les programmes{" "}
              </Link>
            </div>
            <div className="hidden lg:flex lg:w-1/2 justify-center ">
              <CldImage
                src="/ujkol-img/student1_eidj1e.png"
                alt="ujkol student"
                className="w-auto h-auto object-cover"
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-max top-1/2 right-0 space-y-1">
        <p className="flex items-center border-r-2 border-ujkol-dark">
          <span className="btn-icon-bg">
            <MdCall className="btn-icon" />
          </span>{" "}
          <span className="btn-icon-text">Appeller</span>
        </p>
        <p className="flex items-center border-r-2 border-ujkol-dark">
          <span className="btn-icon-bg">
            <MdMessage className="btn-icon" />
          </span>{" "}
          <span className="btn-icon-text">Contactez nous</span>
        </p>
        <p className="flex items-center border-r-2 border-ujkol-dark">
          <span className="btn-icon-bg">
            <TfiCommentsSmiley className="btn-icon" />
          </span>{" "}
          <span className="btn-icon-text">Envoyer Message</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
