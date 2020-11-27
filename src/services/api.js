import { v4 as uuidv4 } from 'uuid';

export async function fetchCategories() {
  const frontUrl = 'http://localhost:4000/frontend';
  const backUrl = 'http://localhost:4000/backend';

  const frontResponse = await fetch(frontUrl);
  const backResponse = await fetch(backUrl);

  const frontEndCategories = await frontResponse.json();
  const backEndCategories = await backResponse.json();

  return { frontEndCategories, backEndCategories };
}

export async function fetchManttoCategories() {
  const url = 'http://localhost:4000/talents';

  const response = await fetch(url);

  const categories = await response.json();

  return { categories };
}

export async function postCategory({
  selectedTalent, selectedTalentToLearn, userInfo,
}) {
  const url = 'http://localhost:4000/talents';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id: uuidv4(),
      nickname: userInfo.nickname,
      talent: {
        ...selectedTalent,
      },
      talentToLearn: {
        ...selectedTalentToLearn,
      },
      email: userInfo.email,
      kakaoID: userInfo.kakaoID,
    }),
  });

  await response.json();
}
