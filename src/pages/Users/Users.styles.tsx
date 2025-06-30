import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const UserCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const UserIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

export const UserName = styled.h3`
  color: #2d3748;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  word-break: break-word;
`;

export const TrashButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;


export const UserDetail = styled.p`
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0.25rem 0;
  font-weight: 500;

  strong {
    color: #2d3748;
  }
`;

export const UserEmail = styled.p`
  color: #667eea;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
  font-weight: 500;
  word-break: break-all;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #fed7d7;
  background: rgba(254, 178, 178, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(254, 178, 178, 0.3);
  border-radius: 20px;
  padding: 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  max-width: 500px;
  margin: 2rem auto;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  max-width: 500px;
  margin: 2rem auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EditButton = styled.button`
  background-color: #667eea;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background-color: #5a67d8;
  }
`;

export const CancelButton = styled.button`
  background-color: #e2e8f0;
  color: #2d3748;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background-color: #cbd5e0;
  }
`;
