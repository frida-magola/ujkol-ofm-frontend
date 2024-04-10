import Layout from "../../components/Layout";
import "./about.css";
import Image from "next/image";

function AboutPage() {
  return (
    <Layout>
      <section className="bg-hero ">
        <div className="container">
          <div className="flex -mx-2 justify-between items-center flex-wrap">
            <div className="w-full md:w-[40%] py-32 space-y-10">
              <h3 className="font-normal text-ujkol-brown ">
                Apropos de l'UJKOL
              </h3>
              <h1 className="font-extrabold text-2xl leading-8">
                Universite Jean XXIII de Kolwezi, ofm. La meilleure des
                solutions pour l'education en province du Lualaba
              </h1>
              <p className="">
                UJKOL est disposée à vous rendre un service de bonne qualité des
                part son organisation, discipline, innovations, etc.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/ujkol-ouverture-2022-2023.jpg"
                width={800}
                height={900}
                alt="UJKOL image"
                className="rounded-lg shadow-lg mt-28"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white mt-20">
        <div className="container">
          <h2>Ce qui nous identifie</h2>
          <ul className="flex flex-wrap">
            <li className="w-full md:flex-1">
              <h3>Notre Devise</h3>
              <p>Science, beauté dans l'amour.</p>
            </li>
            <li className="w-full md:flex-1">
              <h3>Nos Valeurs</h3>
              <p>Objectivité, intégrité, discipline, Conscience.</p>
            </li>
            <li className="w-full md:flex-1">
              <h3>Notre Vision et Mission</h3>
              <p>
                Nous avons en vue une société innovée où il fait beau vivre. La
                Science va-t-elle mener à l'amour de la patrie et du prochain ?
                La Société attend de notre Université la qualité de l'homme qui
                travaille à la transformation de son milieu de vie où il partage
                son amour. L'UJKOL base sa mission sur la trilogie :
                Philosophie-Économie-Technologie.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
