import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { english } from '../commons/testWords';
import Char from './Char';

const Typer = () => {
  const typingInputRef = useRef();
  const [testText, setTestText] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [focusedChar, setFocusedChar] = useState([0, 0]);

  const generateRandomText = () => {
    const text = selectedLanguage === 'en' ? english : english;
    const randomOrderWords = text.split(' ').sort(() => Math.random() - 0.5);
    setTestText(randomOrderWords);
    console.log(randomOrderWords);
  };

  useEffect(() => {
    generateRandomText();
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        console.log(typingInputRef);
      }
    });
  }, []);

  const handleUserTyping = (e) => {
    const userInputValue = e.target.value;
    const wordIndex = userInputValue.split(' ').length - 1;
    const charIndex = userInputValue.split(' ')[wordIndex].split('').length;
    setFocusedChar([wordIndex, charIndex]);
    console.log(wordIndex, charIndex);
  };

  return (
    <TyperContainer>
      <HiddenInput
        id='typing-input'
        ref={typingInputRef}
        autoFocus
        autoComplete='off'
        onChange={(e) => handleUserTyping(e)}
      />
      <TextContainer>
        {testText.map((word, wordIndex) => (
          <Word key={wordIndex}>
            {word.split('').map((char, charIndex) => (
              <Char
                key={charIndex}
                isFocused={
                  focusedChar[0] === wordIndex && focusedChar[1] === charIndex
                }
              >
                {char}
              </Char>
            ))}
            <EmptySpace
              isFocused={
                focusedChar[0] === wordIndex &&
                focusedChar[1] === testText[wordIndex].length
              }
            >
              x
            </EmptySpace>
          </Word>
        ))}
      </TextContainer>
    </TyperContainer>
  );
};

export default Typer;

const TyperContainer = styled.div`
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.secondary};
`;
const HiddenInput = styled.input`
  border: none;
  height: 0;
  width: 0;
`;
const TextContainer = styled.div`
  font-size: 1.4em;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
`;

const Word = styled.div`
  display: flex;
`;
const EmptySpace = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ isFocused, theme }) =>
    isFocused ? `-3px 0  ${theme.colors.accent}` : 'none'};
`;
