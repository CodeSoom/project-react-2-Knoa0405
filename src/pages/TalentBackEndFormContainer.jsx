import React from 'react';

import { useSelector } from 'react-redux';

function TalentBackEndFormContainer() {
  const { backEndCategories } = useSelector((state) => ({
    backEndCategories: state.backEndCategories,
  }));

  return (
    <>
      <div>
        <p>백엔드 항목을 고르세요</p>
        <ul>
          {backEndCategories.map(({ id, category }) => (
            <li key={id}><button type="button">{category}</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TalentBackEndFormContainer;
