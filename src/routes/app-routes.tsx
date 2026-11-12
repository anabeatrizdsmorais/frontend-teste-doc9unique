import { Link, Route, Routes } from 'react-router';

import HomePage from '../modules/home/pages/home';
import FinanceiroContasAPagar from '../modules/financeiro/pages/financeiro_contas_apagar';
import LoginPage from '../modules/autenticacao/pages/login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />

      <Route
        path="/financeiro/contas-a-pagar"
        element={<FinanceiroContasAPagar />}
      />

      <Route
        path="*"
        element={
          <main>
            <h1>Página não encontrada</h1>
            <Link to="/login">Voltar para o início</Link>
          </main>
        }
      />
    </Routes>
  );
}