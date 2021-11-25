const fetchDitto = async () => {
  const ditto = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return ditto;
};

const mainFunc = () => {
  console.log(ditto);
};

mainFunc();
