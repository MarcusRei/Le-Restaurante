import { Heading } from "./styled/Heading";
import {
  CenteringWrapper,
  GridWrapper,
  HorizontalWrapper,
  Wrapper,
} from "./styled/Wrapper";

export const Menu = () => {
  return (
    <>
      <Wrapper>
        <Heading>Meny</Heading>
        <GridWrapper>
          <p>
            LASAGNE AL FORNO Klassisk lasagne med köttfärssås. //Classic lasagna
            with minced meat sauce. Pris: 170:- • Avhämtning: 170:-
          </p>
          <p>
            PUTTANESCA Pasta med oliver, lök, vitlök, sardeller,
            cocktailtomater, kapris och persilja. //Pasta with olives, onion,
            garlic, anchovise, cocktail tomatoes, caper and parsley. Pris: 195:-
            • Avhämtning: 195:-
          </p>
          <p>
            PASTA FUNGHI Skogschampinjoner, grädde, lök, vitlök, salladslök,
            parmaskinka och parmesanost. //Mushroom, cream, onion, garlic, green
            onion, parma ham and parmesan cheese. Pris: 225:- • Avhämtning:
            225:-
          </p>
          <p>
            PASTA POLLO Kyckling, grädde, lök, vitlök, soltorkade tomater,
            grönkål och citron. Toppas med parmesanost och pinjenötter.
            //Chicken fillet, cream, onion, garlic, sun-dried tomatoes, kale and
            lemon. Topped with parmesan cheese and pine nuts. Pris: 225:- •
            Avhämtning: 225:-
          </p>
        </GridWrapper>
      </Wrapper>
    </>
  );
};
