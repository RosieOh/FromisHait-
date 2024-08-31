import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #ec4899;
  color: white;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;

  li a {
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #e5e7eb;
    }
  }
`;

export const MobileButton = styled.button`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  li a {
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #e5e7eb;
    }
  }
`;
