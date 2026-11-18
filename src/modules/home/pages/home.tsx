import { Link } from 'react-router';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background p-8">
           
            <div className="mx-auto max-w-5xl">
                <h1 className="text-3xl font-bold">
                Sistema unificado
                </h1>

                <p className="mt-2 text-muted-foreground">
                Selecione a funcionalidade que deseja acessar.
                </p>

                <section className="mt-8 rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
                <h2 className="text-xl font-semibold">
                    Financeiro
                </h2>

                <Link
                    to="/financeiro/contas-a-pagar"
                    className="mt-4 inline-flex rounded-lg border border-ring bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/80 dark:border-transparent"
                >
                    Acessar contas a pagar
                </Link>
                </section>
            </div>
        </main>
    );
}