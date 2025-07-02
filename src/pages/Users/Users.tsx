import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import TrashIcon from '../../assets/trash.svg';
import { FaPencil } from "react-icons/fa6";
import {
  Container,
  Header,
  Title,
  BackButton,
  UsersGrid,
  UserCard,
  TrashButton,
  UserInfo,
  UserHeader,
  UserName,
  UserDetail,
  UserEmail,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
  UserIcon,
  EditForm,
  EditButton,
  Input,
  ButtonGroup,
  CancelButton
} from './Users.styles';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

export const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  // Buscar os usuários ao montar o componente
  useEffect(() => {
    fetchUsers();
  }, []);

  // Função para buscar os usuários
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/usuarios');
      setUsers(response.data);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      setError('Erro ao carregar usuários. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Função para excluir um usuário
  const deleteUser = async (id: number) => {
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      alert('Erro ao excluir usuário. Tente novamente.');
    }
  };

  // Função para editar um usuário
  const handleEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      age: String(user.age),
      email: user.email
    });
  };

  // Função para voltar para a página inicial
  const handleGoBack = () => {
    navigate('/');
  };

  // Função para atualizar o usuário
  const updateUser = async (id: number) => {
    try {
      await api.put(`/usuarios/${id}`, {
        name: formData.name,
        age: Number(formData.age),
        email: formData.email,
      });
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, ...formData, age: Number(formData.age) } : u))
      );
      setEditingUser(null);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar. Tente novamente.');
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Carregando usuários...</LoadingMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header>
          <BackButton onClick={handleGoBack}>← Voltar</BackButton>
        </Header>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={handleGoBack}>← Voltar</BackButton>
        <Title>Usuários Cadastrados</Title>
      </Header>

      {users.length === 0 ? (
        <EmptyMessage>Nenhum usuário cadastrado ainda.</EmptyMessage>
      ) : (
        <UsersGrid>
          {users.map((user) => (
            <UserCard key={user.id}>
              <UserIcon>👤</UserIcon>
              {editingUser?.id === user.id ? (
                <UserInfo>
                  <EditForm>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nome"
                    />
                    <Input
                      type="number"
                      value={formData.age}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="Idade"
                    />
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email"
                    />
                    <ButtonGroup>
                      <EditButton onClick={() => updateUser(user.id)}>Salvar</EditButton>
                      <CancelButton onClick={() => setEditingUser(null)} style={{ marginLeft: '8px' }}>Cancelar</CancelButton>
                    </ButtonGroup>
                  </EditForm>
                </UserInfo>
              ) : (
                <UserInfo>
                  <UserHeader>
                    <UserName>{user.name}</UserName>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <FaPencil
                        style={{ cursor: 'pointer', color: '#4a5568', fontSize: '16px' }}
                        onClick={() => handleEdit(user)}
                        title="Editar"
                      />
                      <TrashButton
                        src={TrashIcon}
                        alt="Excluir"
                        onClick={() => deleteUser(user.id)}
                      />
                    </div>
                  </UserHeader>
                  <UserDetail><strong>Idade:</strong> {user.age} anos</UserDetail>
                  <UserEmail>{user.email}</UserEmail>
                </UserInfo>
              )}
            </UserCard>
          ))}
        </UsersGrid>
      )}
    </Container>
  );
};

export default Users;
