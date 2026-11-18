import { Link } from "react-router";

export default function FinanceiroContasApagar() {
	return (
		<>
			<h2 className="text-3xl font-bold underline">Contas a Pagar</h2>
			<Link to="/">Voltar para o início</Link>

			<div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-lg dark:shadow-none">
				<img className="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
				<div>
					<div className="text-xl font-medium text-card-foreground">ChitChat</div>
					<p className="text-muted-foreground">You have a new message!</p>
				</div>
			</div>
			<div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
				<img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
				<div className="space-y-2 text-center sm:text-left">
					<div className="space-y-0.5">
					<p className="text-lg font-semibold text-foreground">Erin Lindford</p>
					<p className="font-medium text-muted-foreground">Product Engineer</p>
					</div>
					<button className="rounded-lg border border-ring bg-primary px-3 py-1.5 text-primary-foreground hover:bg-primary/80 dark:border-transparent">
					Message
					</button>
				</div>
			</div>
		</>
	)
}
