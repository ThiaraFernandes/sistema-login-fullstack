// src/pages/Home/Home.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Componente Home', () => {
  test('renderiza título e campos do formulário', () => {
    renderWithRouter(<Home />);

    expect(screen.getByRole('heading', { name: /Cadastrar Usuário/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Idade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar Usuário/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ver Usuários/i })).toBeInTheDocument();
  });

  test('preenche os inputs do formulário', () => {
    renderWithRouter(<Home />);

    const nomeInput = screen.getByLabelText(/Nome/i);
    const idadeInput = screen.getByLabelText(/Idade/i);
    const emailInput = screen.getByLabelText(/Email/i);

    fireEvent.change(nomeInput, { target: { value: 'João' } });
    fireEvent.change(idadeInput, { target: { value: '30' } });
    fireEvent.change(emailInput, { target: { value: 'joao@email.com' } });

    expect(nomeInput).toHaveValue('João');
    expect(idadeInput).toHaveValue(30);
    expect(emailInput).toHaveValue('joao@email.com');
  });
});
