import { v4 as uuidv4 } from 'uuid';

export async function fetchCategories() {
  const frontResponse = await fetch(process.env.frontUrl);
  const backResponse = await fetch(process.env.backUrl);

  const frontEndCategories = await frontResponse.json();
  const backEndCategories = await backResponse.json();

  return { frontEndCategories, backEndCategories };
}

export async function fetchManttoCategories() {
  const url = process.env.talentsUrl;

  const response = await fetch(url);

  const categories = await response.json();

  return { categories };
}

export async function postCategory({
  selectedTalent, selectedTalentToLearn, userInfo,
}) {
  const url = process.env.talentsUrl;

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
