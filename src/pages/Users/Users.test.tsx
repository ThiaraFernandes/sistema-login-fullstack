
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Users } from './Users';
import api from '../../services/api';
// import userEvent from '@testing-library/user-event';

jest.mock('../../services/api');

const mockApi = api as jest.Mocked<typeof api>;

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Componente Users', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('exibe usuários carregados da API', async () => {
    mockApi.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: 'Maria', age: 25, email: 'maria@email.com' },
        { id: 2, name: 'João', age: 30, email: 'joao@email.com' },
      ],
    });

    renderWithRouter(<Users />);

    expect(screen.getByText(/Carregando usuários/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Maria')).toBeInTheDocument();
      expect(screen.getByText('João')).toBeInTheDocument();
    });
  });

  test('exibe mensagem quando não há usuários', async () => {
    mockApi.get.mockResolvedValueOnce({ data: [] });

    renderWithRouter(<Users />);

    await waitFor(() => {
      expect(screen.getByText(/Nenhum usuário cadastrado ainda/i)).toBeInTheDocument();
    });
  });
});
