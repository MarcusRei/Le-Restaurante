export const Menu = () => {
  return (
    <>
      <article className="flex-row justify-center full-width">
        <h1>Meny</h1>
      </article>

      <section className="flex-column align-center">
        <p className="menu-item">
          <div>LASAGNE AL FORNO</div>
          <div>
            Klassisk lasagne med köttfärssås. // Classic lasagna with minced
            meat sauce.
          </div>
          Pris: 170:- Avhämtning: 170:-
        </p>

        <p className="menu-item">
          <div>PUTTANESCA</div>
          <div>
            Pasta med oliver, lök, vitlök, sardeller, cocktailtomater, kapris
            och persilja. // Pasta with olives, onion, garlic, anchovise,
            cocktail tomatoes, caper and parsley.
          </div>
          Pris: 195:- Avhämtning: 195:-
        </p>

        <p className="menu-item">
          <div>PASTA FUNGHI</div>
          <div>
            Skogschampinjoner, grädde, lök, vitlök, salladslök, parmaskinka och
            parmesanost. // Mushroom, cream, onion, garlic, green onion, parma
            ham and parmesan cheese.
          </div>
          Pris: 225:- Avhämtning: 225:-
        </p>

        <p className="menu-item">
          <div>PASTA POLLO</div>
          <div>
            Kyckling, grädde, lök, vitlök, soltorkade tomater, grönkål och
            citron. Toppas med parmesanost och pinjenötter. //Chicken fillet,
            cream, onion, garlic, sun-dried tomatoes, kale and lemon. Topped
            with parmesan cheese and pine nuts.
          </div>
          Pris: 225:- Avhämtning: 225:-
        </p>
      </section>
    </>
  );
};
