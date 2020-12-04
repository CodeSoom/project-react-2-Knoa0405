import React from 'react';

import List from '../components/styles/List';

import Item from '../components/styles/Item';

import CategoryButton from '../components/styles/CategoryButton';

import NextButtonContainer from '../components/NextButtonContainer';

function CategoriesForm({
  categories = [], talentOrPassion, onClick, onSubmit,
}) {
  return (
    <>
      <List>
        {categories.map(({ id, category: item }) => (
          <Item key={id}>
            <CategoryButton
              type="button"
              onClick={() => onClick({ item })}
            >
              #
              {item}
            </CategoryButton>
          </Item>
        ))}
      </List>
      <div>
        {talentOrPassion === 'talent'
          ? <NextButtonContainer link="talent/proficiency" />
          : <NextButtonContainer link="talents" onSubmit={onSubmit} />}
      </div>
    </>
  );
}

export default CategoriesForm;
