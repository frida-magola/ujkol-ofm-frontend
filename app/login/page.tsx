import Layout from "../../components/Layout";
import Link from "next/link";

function AboutPage() {
  return (
    <Layout>
      <section className="mt-28">
        <div className="container">
          <h1>Apropos de l'UJKOL Page entiere</h1>
          <h2>Ce qui nous identifie</h2>
          <ul>
            <li>
              <h3>Notre Devise</h3>
              <p>Science, beauté dans l'amour.</p>
            </li>
            <li>
              <h3>Nos Valeurs</h3>
              <p>Objectivité, intégrité, discipline, Conscience.</p>
            </li>
            <li>
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

        <div className="container">
          <div>
            <div>
              <h2>NOUS SOMMES LA MEILLEURE DES SOLUTIONS</h2>
              <p>Disponible dès maintenant</p>
              <Link href="#">Explorer Plus</Link>
            </div>

            <div>
              <h2>Notre Institution</h2>
              <p>Disposée à vous rendre un service de bonne qualité</p>
              <ul>
                <li>
                  <span>Icon</span>
                  <p>organisée</p>
                </li>
                <li>
                  <span>Icon</span>
                  <p>créative</p>
                </li>
                <li>
                  <span>Icon</span>
                  <p>Informatisée</p>
                </li>
                <li>
                  <span>Icon</span>
                  <p>Archivée</p>
                </li>
                <li>
                  <span>Icon</span>
                  <p>Ordonnée</p>
                </li>
                <li>
                  <span>Icon</span>
                  <p>Visionnaire</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="conatainer">
          <div>
            <picture>
              <caption>Galerie</caption>
            </picture>
            <picture>
              <caption>Communication</caption>
            </picture>
            <picture>
              <caption>Publication</caption>
            </picture>
            <picture>
              <caption>Bibliotheque</caption>
            </picture>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
