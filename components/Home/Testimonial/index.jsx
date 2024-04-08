import { CardTestimonial } from "../../UI/Cards";

export const StudentTestimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap items-baseline relative ">
          <div className="w-full  md:w-[30%] mb-4">
            <h2 className="h2-heading text-ujkol-brown">TÉMOIGNAGE</h2>
            <h3>Commentaires des étudiants</h3>
          </div>

          <div className="w-full flex-1 lg:pl-10 flex flex-wrap">
            <CardTestimonial
              role="Etudiant a UJKOL"
              facname="Informatiques"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque"
              photo="/student-life.jpg"
              alt="Frida M."
              name="Frida M."
              date="04 April "
            />
            <CardTestimonial
              role="Etudiant a UJKOL"
              facname="Informatiques"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque"
              photo="/student-life.jpg"
              alt="Frida M."
              name="Frida M."
              date="04 April "
            />
            <CardTestimonial
              role="Etudiant a UJKOL"
              facname="Informatiques"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque"
              photo="/student-life.jpg"
              alt="Frida M."
              name="Frida M."
              date="04 April "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
