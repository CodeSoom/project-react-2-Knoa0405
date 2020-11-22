async function fetchCategories() {
  const frontUrl = 'http://localhost:4000/FrontEnd';
  const backUrl = 'http://localhost:4000/BackEnd';

  const frontResponse = await fetch(frontUrl);
  const backResponse = await fetch(backUrl);

  const frontEndCategories = await frontResponse.json();
  const backEndCategories = await backResponse.json();

  return { frontEndCategories, backEndCategories };
}

export { fetchCategories };
