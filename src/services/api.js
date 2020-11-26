export async function fetchCategories() {
  const frontUrl = 'http://localhost:4000/frontend';
  const backUrl = 'http://localhost:4000/backend';

  const frontResponse = await fetch(frontUrl);
  const backResponse = await fetch(backUrl);

  const frontEndCategories = await frontResponse.json();
  const backEndCategories = await backResponse.json();

  return { frontEndCategories, backEndCategories };
}

// TODO : delete this!
export async function XXX() {
  //
}
