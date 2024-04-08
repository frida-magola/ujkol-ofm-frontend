import Image from "next/image";
import Link from "next/link";
import "../styles/heading.css";
import "../styles/custom-btn.css";
import { TfiArrowTopRight } from "react-icons/tfi";

const Faculty = () => {
  return (
    <>
      <section className="w-full bg-ujkol-blue">
        <div className="container">
          <div className="flex flex-wrap items-baseline ">
            <div className="w-full  md:w-[30%] mb-4">
              <h2 className="h2-heading text-ujkol-brown">Facultés</h2>
            </div>

            <div className="w-full flex-1 lg:pl-10">
              <h2 className="text-5xl font-normal text-ujkol-brown ">
                Nos facultés compétentes aident les étudiants à de nombreuses
                disciplines
              </h2>
            </div>
          </div>

          <div className="flex -mx-2 flex-wrap mt-24">
            <div className="w-full md:w-1/2 pr-2 mb-4">
              <div className="w-full h-96 overflow-hidden">
                <Image
                  src="/campus-life2.jpg"
                  height={100}
                  width={600}
                  className="h-full rounded-2xl shadow-md"
                  alt="Ecologie integrale"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 mb-4 pl-2">
              <div className="w-full h-[350px] rounded-2xl shadow-md bg-card px-6 py-5 space-y-10">
                <span className="py-2 px-6 w-max inline-block border border-ujkol-brown rounded-lg">
                  Licence
                </span>
                <h2 className="font-normal text-ujkol-brown text-3xl ">
                  Faculté des Sciences informatiques
                </h2>
                <p className="font-normal text-lg ">
                  À l'heure actuelle, la Faculté compte deux départements :
                  Département des sytèmes informatiques et génie logiciel.
                </p>
              </div>
            </div>

            <div className="w-full order-2 md:order-1  md:w-1/2 mb-4 md:pr-2">
              <div className="w-full h-[350px] rounded-2xl shadow-md bg-card px-6 py-5 space-y-10">
                <span className="py-2 px-6 w-max inline-block border border-ujkol-brown rounded-lg">
                  Licence
                </span>
                <h2 className="font-normal text-ujkol-brown text-3xl ">
                  Faculté des Sciences économiques et de gestion
                </h2>
                <p className="font-normal text-lg ">
                  À l'heure actuelle, la Faculté compte cinq départements :
                  Département d'économie minière, comptabilité et finance,
                  Science de gestion, management, informatique de gestion.
                </p>
              </div>
            </div>

            <div className="w-full order-1 md:order-2  md:w-1/2 md:pr-1 mb-4">
              <div className="w-full h-96 overflow-hidden">
                <Image
                  src="/student-activity.jpg"
                  height={100}
                  width={600}
                  alt="Sciences economiques et de gest"
                  className="h-full rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link
              href="#"
              className="py-4 px-6 border rounded-md border-white inline-block font-medium uppercase"
            >
              {" "}
              Voir toutes les facultés{" "}
              <TfiArrowTopRight
                width={20}
                height={20}
                className="text-ujkol-brown inline-block"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section className="bg-gray-50 relative">
        <div className="container relative">
          <Image
            src="/img_group-ye.png"
            height={200}
            width={250}
            alt="campus's life group"
            className="h-auto w-auto hidden md:flex absolute  md:top-[40%] left-[20%] "
          />
          <div className="flex flex-wrap items-baseline relative ">
            <div className="w-full  md:w-[30%] mb-4">
              <h2 className="h2-heading text-ujkol-brown">La vie a UJKOL</h2>
            </div>

            <div className="w-full flex-1 lg:pl-10 space-y-10">
              <h2 className="text-5xl font-normal text-ujkol-brown ">
                L'université est le meilleur moment de votre vie.
              </h2>
              <p className="lowercase first-letter:uppercase text-2xl font-normal text-ujkol-brown pt-5">
                les enseignements DE L'UNIVERSITÉ DANS DIVERSES SPÉCIALISATIONS
                QUI PROVOQUENT UN APPRENTISSAGE INTELLECTUEL ET INTUITIF CHEZ
                LES ÉTUDIANTS
              </p>
            </div>
          </div>
        </div>

        <div className="container relative mt-16">
          <div className="">
            <div className="flex justify-center flex-wrap items-center relative">
              <div className="w-full md:flex-1 bg-blue-600 h-auto md:h-[600px] px-6 py-14  campus-life">
                <div className="relative h-full w-full z-10 space-y-10 md:space-y-16">
                  <h3 className="h2-heading text-white">
                    PUBLICATION & RECHERCHE
                  </h3>
                  <p className="w-full md:w-4/5 lowercase first-letter:uppercase text-2xl font-normal text-ujkol-brown pt-5">
                    EXPLORE UNIVERSITY'S 10+ COURSES ACROSS VARIOUS
                    SPECIALISATIONS THAT PROVOKE INTELLECTUAL AND INTUITIVE
                    LEARNING AMONG STUDENTS.
                  </p>
                  <Link
                    href="#"
                    className="py-4 px-6 border rounded-md border-white inline-block font-medium uppercase"
                  >
                    {" "}
                    Voir plus{" "}
                    <TfiArrowTopRight
                      width={20}
                      height={20}
                      className="text-ujkol-brown inline-block"
                    />
                  </Link>
                </div>
              </div>

              <div className="w-full md:flex-1  md:-mt-0 md:-mx-2 flex-wrap flex md:-ml-28 relative">
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/campus-life1.jpg"
                    alt="student campus life"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/ecologie.jpg"
                    alt="student campus life trois"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/economiste.jpg"
                    alt="student campus life deux"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/student-busy.jpg"
                    alt="student campus life trois"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/campus-life4.jpg"
                    alt="student campus life trois"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/student-life.jpg"
                    alt="student campus life trois"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/student-life.jpg"
                    alt="student campus life trois"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/student-life.jpg"
                    alt="student campus life trois"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 h-40 mb-2 px-1 shadow-lg">
                  <Image
                    src="/student-life.jpg"
                    alt="student campus life trois"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
