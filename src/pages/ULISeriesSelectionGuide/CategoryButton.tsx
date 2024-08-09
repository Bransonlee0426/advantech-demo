import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CategoryButton: React.FC<CategoryButtonProps> = ({ image, title, subtitle, route }) => {
  return (
    <ButtonContainer to={route}>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ButtonContainer>
  );
};

export default CategoryButton;

interface CategoryButtonProps {
  image: string;
  title: string;
  subtitle: string;
  route: string;
}

const ButtonContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  padding: 0.5rem;
  &:hover {
    background-color: #f8f8f8;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &.active {
    color: #0056b3;
    font-weight: bold;
    background-color: #e6f2ff;
    border-color: #0056b3;
  }
`;

const Image = styled.img`
  max-width: 180px;
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  height: 3.5rem;
  width: 10rem;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--second-text-color);
`;
