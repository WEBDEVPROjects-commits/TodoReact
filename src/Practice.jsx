const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
function practice() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
console.log(listItems)
  return (<ul>{listItems}</ul>);
}

export default practice