import Card from "../Card/Card";

// NOTAÇÃO DOS CARDS
// destructuring
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const CardList = ({ cards }) => {
  console.log(cards);

  return (
    <div className="container">
      {cards.map((card) => (
        <Card name={card.name} />
      ))}
    </div>
  );
};

//function CardList () {

//}

export default CardList;
