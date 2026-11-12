import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent, SyntheticEvent } from 'react';

// Define quais campos existem e quais valores eles aceitam.
type LoginForm = {
  email: string;

  senha: string;
};

// O status só pode receber um destes valores.
type LoginStatus = 'idle' | 'loading' | 'error' | 'success';

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    senha: '',
  });


  useEffect(() => {

  }, []);

  const [status, setStatus] = useState<LoginStatus>('idle');
  const [mensagem, setMensagem] = useState<string>('');
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

  function atualizarCampo(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;

    if (name !== 'email' && name !== 'senha') return;

    setForm((atual) => ({
      ...atual,
      [name]: value,
    }));

    setStatus('idle');
    setMensagem('');
  }

  async function entrar(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.email.trim() || !form.senha) {
      setStatus('error');
      setMensagem('Preencha o e-mail e a senha.');
      return;
    }

    setStatus('loading');
    setMensagem('');

    try {
      // Demonstração: substitua pela chamada à sua API.
      // Não registre a senha no console.
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 800);
      });

      setStatus('success');
      setMensagem(
        'Formulário validado! Conecte sua API para realizar o login.',
      );
    } catch {
      setStatus('error');
      setMensagem('Não foi possível entrar. Tente novamente.');
    }
  }

  const carregando = status === 'loading';

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-40 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/20">
            Doc9Unique
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Bem-vindo(a)
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Acesse sua conta no sistema unificado.
          </p>
        </div>

        <section
          aria-label="Acesso ao sistema"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <form onSubmit={entrar} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="voce@empresa.com.br"
                value={form.email}
                onChange={atualizarCampo}
                disabled={carregando}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="senha"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Senha
              </label>

              <div className="relative">
                <input
                  id="senha"
                  name="senha"
                  type={mostrarSenha ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  value={form.senha}
                  onChange={atualizarCampo}
                  disabled={carregando}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-4 pr-24 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setMostrarSenha((atual) => !atual)}
                  aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  aria-controls="senha"
                  disabled={carregando}
                  className="absolute inset-y-0 right-0 rounded-r-lg px-4 text-sm font-medium text-blue-600 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-blue-600 disabled:opacity-60"
                >
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            <div aria-live="polite" aria-atomic="true">
              {mensagem && (
                <p
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status === 'error'
                      ? 'bg-red-50 text-red-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {mensagem}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {carregando && (
                <span
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                />
              )}

              {carregando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </section>

        <p className="mt-6 text-center text-xs text-slate-500">
          Precisa de acesso? Entre em contato com o administrador.
        </p>
      </div>
    </main>
  );
}