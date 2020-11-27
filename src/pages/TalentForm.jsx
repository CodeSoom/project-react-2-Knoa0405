import React from 'react';

export default function TalentForm({ onClick }) {
  return (
    <ul>
      <li>
        <button
          type="button"
          onClick={onClick}
          value="backEnd"
        >
          백엔드
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={onClick}
          value="frontEnd"
        >
          프론트엔드
        </button>
      </li>
    </ul>
  );
}
