import "../styles/heading.css";
import { CardsNewsArticles } from "../../UI/Cards";

export const NewsArticles = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full md:flex-1">
            <h2 className="h2-heading-2 text-ujkol-brown text-3xl font-bold uppercase relative">
              Actualite & Articles
            </h2>
            <p className="text-2xl font-normal text-ujkol-text py-10">
              Explorez les programmes de cours de l'université dans diverses
              spécialisations qui provoquent un apprentissage intellectuel et
              intuitif chez les étudiants.
            </p>
          </div>
        </div>

        <div className="flex -mx-2 flex-wrap">
          <CardsNewsArticles
            title="CSE & Environmental Engineering Department"
            btnText="Licence"
            url="#"
          />
          <CardsNewsArticles
            title="CSE & Environmental Engineering Department"
            btnText="Licence"
            url="#"
          />
          <CardsNewsArticles
            title="CSE & Environmental Engineering Department"
            btnText="Licence"
            url="#"
          />
        </div>
      </div>
    </section>
  );
};
