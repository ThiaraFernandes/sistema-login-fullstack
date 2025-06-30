import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  FormSection,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./Home.style";

export const Home = () => {
  const navigate = useNavigate();
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post('/usuarios', {
        name: formData.nome,
        age: Number(formData.idade),
        email: formData.email
      });

      console.log('Usuário cadastrado com sucesso:', response.data);
      
      // Limpar formulário após cadastro bem-sucedido
      setFormData({
        nome: '',
        idade: '',
        email: ''
      });
      
      // Focar no primeiro campo
      if (inputName.current) {
        inputName.current.focus();
      }
      
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  const handleViewUsers = () => {
    navigate('/usuarios');
  };

  return (
    <Container>
      <FormSection>
        <Title>Cadastrar Usuário</Title>

        <Form onSubmit={handleRegisterNewUser}>
          <InputGroup>
            <Label htmlFor="nome">Nome<span> *</span> </Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite o nome do usuário"
              value={formData.nome}
              onChange={handleInputChange}
              ref={inputName}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="idade">Idade<span> *</span> </Label>
            <Input
              id="idade"
              name="idade"
              type="number"
              placeholder="Digite a idade"
              value={formData.idade}
              onChange={handleInputChange}
              min="1"
              max="120"
              ref={inputAge}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email<span> *</span> </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite o email"
              value={formData.email}
              onChange={handleInputChange}
              ref={inputEmail}
              required
            />
          </InputGroup>

          <ButtonGroup>
            <PrimaryButton type="submit">
              Cadastrar Usuário
            </PrimaryButton>
            <SecondaryButton type="button" onClick={handleViewUsers}>
              Ver Usuários
            </SecondaryButton>
          </ButtonGroup>
        </Form>
      </FormSection>
    </Container>
  );
};

export default Home;