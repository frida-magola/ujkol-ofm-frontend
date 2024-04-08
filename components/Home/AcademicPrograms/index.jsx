import "../styles/heading.css";
import { CardsDefault } from "../../UI/Cards";

const AcademicPrograms = () => {
  return (
    <section className="w-full bg-white">
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full md:flex-1">
            <h2 className="h2-heading-2 text-ujkol-brown text-3xl font-bold uppercase relative">
              Programmes académiques
            </h2>
            <p className="text-2xl font-normal text-ujkol-text py-10">
              Explorez les programmes de cours de l'université dans diverses
              spécialisations qui provoquent un apprentissage intellectuel et
              intuitif chez les étudiants.
            </p>

            <ul className="uppercase text-4xl font-medium flex space-x-5 mb-5">
              <li>/Licence</li>
              <li>/Master</li>
            </ul>
          </div>
        </div>

        <div className="flex -mx-2 flex-wrap">
          <CardsDefault
            title="CSE & Environmental Engineering Department"
            btnText="Licence"
            url="#"
          />
          <CardsDefault
            title="CSE & Environmental Engineering Department"
            btnText="Licence"
            url="#"
          />
          <CardsDefault
            title="CSE & Environmental Engineering Department"
            btnText="Licence"
            url="#"
          />
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
