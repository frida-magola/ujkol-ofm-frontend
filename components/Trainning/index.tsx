import Link from "next/link";

const CentreFormation = () => {
  return (
    <section className="mt-10 bg-ujkol-dark py-32 ">
      <div className="container">
        <h2>Notre centre de formation</h2>
        <h4>Para-académique</h4>
        <p>
          Partant de son souci qui n’est autre que celui de former des
          compétences qui répondent aux besoins des Sociétés tant minières,
          commerciales, …
        </p>
        <Link href="#">Savoir plus</Link>
      </div>
    </section>
  );
};

export default CentreFormation;
