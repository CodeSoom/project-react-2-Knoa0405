import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import NextButton from './styles/NextButton';

export default function NextButtonContainer({ link, onSubmit }) {
  return (
    <NextButton type="button" onClick={onSubmit}>
      <Link to={`/${link}`}><FontAwesomeIcon icon={faArrowCircleRight} /></Link>
    </NextButton>
  );
}
