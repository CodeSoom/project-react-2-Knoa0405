import React from 'react';

import { useSelector } from 'react-redux';

function TalentBackEndInputContainer() {
  const { frontEndCategories } = useSelector((state) => ({
    frontEndCategories: state.frontEndCategories,
  }));

  return (
    <>
      <div>
        <p>프론트엔드 항목을 고르세요</p>
        <ul>
          {frontEndCategories.map(({ id, category }) => (
            <li key={id}>{category}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TalentBackEndInputContainer;
