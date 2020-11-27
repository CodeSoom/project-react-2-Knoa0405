import React from 'react';

function TalentBackEndForm({ backEndCategories, onClick }) {
  return (
    <>
      <ul>
        {backEndCategories.map(({ id, category }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick({ category })}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TalentBackEndForm;
