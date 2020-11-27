import React from 'react';
import { Link } from 'react-router-dom';

function TalentProficiency({ selectedCategory, onClick, onSubmit }) {
  return (
    <>
      <p>해당 재능의 숙련도를 고르세요</p>
      <p>{selectedCategory}</p>
      <ul>
        {['상', '중', '하'].map((level) => (
          <li key={level}>
            <button
              type="button"
              onClick={() => onClick(level)}
            >
              {level}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/talents">
          <button
            type="button"
            onClick={onSubmit}
          >
            다음
          </button>
        </Link>
      </div>
    </>
  );
}

export default TalentProficiency;
