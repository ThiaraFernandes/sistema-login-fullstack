import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #171e36 0%, #1a1f38 50%, #1d2440 100%);
  padding: 2rem;
  gap: 4rem;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;

  @media (max-width: 968px) {
    max-width: 300px;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  max-width: 450px;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 968px) {
    padding: 2rem;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span{
    color: #ef4f45;
    font-size: 0.875rem;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  color: #b8c1d6;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
    border-color: #4facfe;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  &[type="number"] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  color: #4facfe;
  border: 2px solid #4facfe;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 172, 254, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;