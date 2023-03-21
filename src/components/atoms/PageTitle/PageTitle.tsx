import React from 'react';
import { Interface } from 'readline';
import { StyledPageTitle } from './Styles';

interface PageTitleProps {
  text: string;
}

export const PageTitle = ({ text }: PageTitleProps) => {
  return <StyledPageTitle>{text}</StyledPageTitle>;
};
