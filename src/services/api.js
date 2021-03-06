import { v4 as uuidv4 } from 'uuid';

import { auth } from './firebase';

export async function fetchCategories() {
  const frontResponse = await fetch(process.env.frontUrl);
  const backResponse = await fetch(process.env.backUrl);

  const frontEndCategories = await frontResponse.json();
  const backEndCategories = await backResponse.json();

  return { frontEndCategories, backEndCategories };
}

export async function fetchManttoCategories() {
  const response = await fetch(process.env.talentsUrl);

  const categories = await response.json();

  return { categories };
}

export async function postCategory({
  selectedTalent, selectedTalentToLearn, userInfo,
}) {
  const response = await fetch(process.env.talentsUrl, {
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
      timeStamp: Date.now(),
    }),
  });

  await response.json();
}

export async function postSignUp({
  username, password,
}) {
  try {
    await auth.createUserWithEmailAndPassword(username, password);
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;

    return { errorCode, errorMessage };
  }
  return {};
}

export async function postSignIn({
  username, password,
}) {
  try {
    await auth.signInWithEmailAndPassword(username, password);
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;

    return { errorCode, errorMessage };
  }
  return {};
}
