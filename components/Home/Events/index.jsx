import { EventCards } from "../../UI/Cards";
export const Events = () => {
  return (
    <section className="bg-ujkol-brown opacity-85">
      <div className="container">
        <div className="flex flex-wrap items-baseline ">
          <div className="w-full  md:w-[30%] mb-4">
            <h2 className="h2-heading text-white">Events</h2>
          </div>

          <div className="w-full flex-1 lg:pl-10">
            <h2 className="text-6xl font-normal text-white ">
              Récents et évenements a venir
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline text-white">
          <div className="w-full  md:w-[30%] mb-4">
            <ul>
              <li>Culture & Art</li>
              <li>Conference</li>
              <li>Sport</li>
            </ul>
          </div>

          <div className="w-full flex-1 lg:pl-10">
            <div className="flex -mx-2 flex-wrap mt-24">
              <EventCards
                date="Avril 05, 2024"
                url="#"
                btnText="Licence"
                title="The Middle East In The Twentieth Century"
                text="American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group."
                href="#"
              />

              <EventCards
                date="Avril 05, 2024"
                url="#"
                btnText="Licence"
                title="The Middle East In The Twentieth Century"
                text="American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group."
                href="#"
              />
              <EventCards
                date="Avril 05, 2024"
                url="#"
                btnText="Licence"
                title="The Middle East In The Twentieth Century"
                text="American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group."
                href="#"
              />

              <EventCards
                date="Avril 05, 2024"
                url="#"
                btnText="Licence"
                title="The Middle East In The Twentieth Century"
                text="American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group."
                href="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
