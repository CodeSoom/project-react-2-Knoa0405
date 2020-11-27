import React from 'react';

function TalentFrontEndForm({ frontEndCategories, onClick }) {
  return (
    <>
      <ul>
        {frontEndCategories.map(({ id, category }) => (
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

export default TalentFrontEndForm;
