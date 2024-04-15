import Image from "next/image";
import Link from "next/link";
import "../styles/heading.css";
import { Cards3ColsLink } from "../../UI/Cards";

export const AproposDeUjkol = () => {
  return (
    <section className="w-full bg-gray-50 relative">
      <svg
        width="483"
        height="667"
        viewBox="0 0 483 667"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-[9%]"
      >
        <g opacity="0.2">
          <path
            d="M302.635 610.047C308.93 575.013 335.831 490.716 393.075 433.798C419.882 407.144 467.002 383.274 430.207 476.605C416.402 506.226 374.854 573.501 319.096 605.636C292.986 619.927 242.046 628.548 247.171 548.705C248.268 531.608 251.833 522.211 257.883 500.894"
            stroke="#2b0202"
            strokeWidth="2"
          />
          <path
            d="M248.628 537.309C254.923 502.275 281.824 417.978 339.068 361.06C365.875 334.406 412.995 310.535 376.2 403.866C362.396 433.487 320.847 500.763 265.089 532.898C238.979 547.189 188.039 555.809 193.164 475.967C194.262 458.87 197.827 449.473 203.877 428.156"
            stroke="#2b0202"
            strokeWidth="2"
          />
          <path
            d="M194.516 465.053C200.812 430.02 227.713 345.722 284.957 288.804C311.763 262.15 358.883 238.28 322.089 331.611C308.284 361.232 266.736 428.508 210.977 460.643C184.867 474.933 133.928 483.554 139.052 403.712C140.15 386.615 143.715 377.217 149.765 355.901"
            stroke="#2b0202"
            strokeWidth="2"
          />
          <path
            d="M140.405 392.798C146.7 357.764 173.601 273.467 230.845 216.549C257.652 189.895 304.772 166.025 267.977 259.356C254.173 288.977 212.624 356.252 156.866 388.387C130.756 402.678 79.8162 411.298 84.941 331.456C86.0384 314.359 89.6036 304.962 95.6536 283.645"
            stroke="#2b0202"
            strokeWidth="2"
          />
          <path
            d="M86.4016 318.95C92.6966 283.917 119.598 199.619 176.842 142.701C203.648 116.047 250.768 92.177 213.974 185.508C200.169 215.129 158.621 282.405 102.862 314.54C76.7526 328.83 25.8127 337.451 30.9375 257.609C32.0349 240.512 35.6002 231.114 41.6501 209.798"
            stroke="#2b0202"
            strokeWidth="2"
          />
          <path
            d="M32.5938 245.833C38.8889 210.799 65.79 126.502 123.034 69.5842C149.841 42.9301 196.961 19.0599 160.166 112.391C146.361 142.012 104.813 209.288 49.0546 241.422C22.9448 255.713 -27.995 264.334 -22.8702 184.491C-21.7728 167.394 -18.2076 157.997 -12.1576 136.68"
            stroke="#2b0202"
            strokeWidth="2"
          />
        </g>
      </svg>
      <div className="container relative">
        <div className="flex flex-wrap items-baseline ">
          <div className="w-full  md:w-[30%] mb-4">
            <h2 className="h2-heading text-ujkol-brown">A propos de l'UJKOL</h2>
          </div>

          <div className="w-full flex-1 lg:pl-10">
            <h2 className="text-5xl font-normal text-ujkol-brown ">
              L'éducation n'est pas la préparation à la vie; l'éducation, c'est
              la vie elle-même
            </h2>
          </div>
        </div>

        <div className="flex -mx-2 flex-wrap mt-24">
          <div className="w-full md:w-1/3 mb-4"></div>
          <Cards3ColsLink
            url="/enseignements"
            img="/teacher.jpg"
            alt="Enseignement"
            height={400}
            width={500}
            title="Enseignements"
          />
          <Cards3ColsLink
            url="/about-ujkol"
            img="/ujkol-ouverture-2022-2023.jpg"
            alt="Universite Jean 23 de Kolwezi"
            height={400}
            width={500}
            title="Découvrez U.J.KOL"
          />
          <Cards3ColsLink
            url="/formations"
            img="/campus-life3.jpg"
            alt="Activités académiques"
            height={400}
            width={500}
            title="Activités académiques"
          />
          <Cards3ColsLink
            url="/bibliotheque"
            img="/img-bibliotheque-1.jpg"
            alt="Bibliothèque"
            height={400}
            width={500}
            title="Bibliothèque"
          />
          <Cards3ColsLink
            url="/inscription"
            img="/student-uj.jpg"
            alt="Inscription en ligne"
            height={250}
            width={500}
            title="Inscription"
          />
        </div>
      </div>
    </section>
  );
};

export const AproposPage = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex justify-between ">
          <h2 className="text-3xl font-medium uppercase">
            A propos de l'UJKOL
          </h2>
        </div>
        <h2 className="uppercase">
          L'ÉDUCATION N'EST PAS PRÉPARATION À LA VIE ; L'ÉDUCATION, C'EST LA VIE
          ELLE-MÊME
        </h2>
      </div>
      <div className="container">
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
              Science va-t-elle mener à l'amour de la patrie et du prochain ? La
              Société attend de notre Université la qualité de l'homme qui
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
  );
};
