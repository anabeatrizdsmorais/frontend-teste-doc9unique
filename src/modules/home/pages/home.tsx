import { Link } from 'react-router';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-slate-100 p-8">
           
            <div className="mx-auto max-w-5xl">
                <h1 className="text-3xl font-bold text-slate-900">
                Sistema unificado
                </h1>

                <p className="mt-2 text-slate-600">
                Selecione a funcionalidade que deseja acessar.
                </p>

                <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                    Financeiro
                </h2>

                <Link
                    to="/financeiro/contas-a-pagar"
                    className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                    Acessar contas a pagar
                </Link>
                </section>
            </div>
        </main>
    );
}