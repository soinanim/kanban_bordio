import React, { useState } from 'react';

import {
  StyledSelect,
  StyledTitle,
  StyledContent,
  StyledInput,
  StyledLabel,
} from './styles';

import arrow_up from '../../icons/arrow-up.svg';
import arrows_gray from '../../icons/arrows-gray.svg';

export default function Select({ options, selectedOption }) {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState(selectedOption || options[0].label);

  const handleActive = () => setIsActive((state) => !state);

  const handleTitle = (e) => {
    setTitle(e.target.textContent);
    handleActive();
  };

  return (
    <StyledSelect active={isActive} onClick={handleActive}>
      <StyledTitle>
        <span>{title}</span>
        <img src={`${isActive ? arrow_up : arrows_gray}`} alt='select arrow' />
      </StyledTitle>
      <StyledContent active={isActive}>
        {options.map((option) => (
          <>
            <StyledInput
              id={option.value}
              type='radio'
              name='singleSelect'
              checked={option.label === title}
            />
            <StyledLabel
              id='select__label'
              active={isActive}
              for={option.value}
              onClick={handleTitle}>
              {option.label}
            </StyledLabel>
          </>
        ))}
      </StyledContent>
    </StyledSelect>
  );
}
