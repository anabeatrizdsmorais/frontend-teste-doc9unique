import { useState } from "react"
import { ArrowRight, Eye, EyeOff, Layers3, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import logo from "../../../assets/image/logo-astra.png"
import "./login.css"

export default function LoginPage() {
  const [recovering, setRecovering] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState("")

  function changeView(next: boolean) {
    setRecovering(next)
    setShowPassword(false)
    setNotice("")
  }

  return (
    <main className="app-login">
      <section className="app-login-access" aria-labelledby="login-title">
        <div className="app-login-content">
          <img className="mx-auto block" src={logo} alt="Astra Doc9" width={250} />

          <form
            className="mt-7 grid gap-4"
            onSubmit={(event) => {
              event.preventDefault()
              setNotice(recovering ? "O envio do link ainda não está disponível." : "O acesso por senha ainda não está disponível.")
            }}
          >
            <Field>
              <FieldLabel htmlFor="login-email">E-mail</FieldLabel>
              <Input id="login-email" className="h-11" type="email" autoComplete="email" placeholder="nome@empresa.com" required />
            </Field>

            {!recovering && (
              <Field>
                <FieldLabel htmlFor="login-password">Senha</FieldLabel>
                <div className="relative">
                  <Input
                    id="login-password"
                    className="h-11 pr-12"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Digite sua senha"
                    required
                  />
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    type="button"
                    className="absolute inset-y-0 right-2 my-auto text-muted-foreground"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                  </Button>
                </div>
                <button type="button" className="app-login-recover" onClick={() => changeView(true)}>
                  Esqueci minha senha
                </button>
              </Field>
            )}

            <Button type="submit" className="mt-1 h-11 w-full font-semibold">
              {recovering ? "Enviar link de recuperação" : "Entrar"}
              <ArrowRight aria-hidden="true" />
            </Button>
          </form>

          {!recovering && (
            <>
              <div className="app-login-divider">ou entre com</div>
              <div className="grid grid-cols-2 gap-3">
                <Button type="button" variant="outline" className="h-11">
                  <span aria-hidden="true" className="app-login-google">G</span>
                  Google
                </Button>
                <Button type="button" variant="outline" className="h-11">
                  <span aria-hidden="true" className="app-login-microsoft"><i /><i /><i /><i /></span>
                  Outlook
                </Button>
              </div>
            </>
          )}

          <p role="status" className="mt-4 text-sm text-muted-foreground empty:mt-0">{notice}</p>
        </div>
      </section>

      <aside className="app-login-astra" aria-labelledby="login-astra-title">
        <div className="app-login-visual" aria-hidden="true">
          <div className="app-login-orbit" />
          <div className="app-login-core">A</div>
          <span className="app-login-node app-login-node-finance"><Layers3 /></span>
          <span className="app-login-node app-login-node-flow"><Workflow /></span>
        </div>
        <div className="app-login-intro">
          <h2 id="login-astra-title">Seu trabalho, em um só lugar.</h2>
          <p>O Astra é o portal da Doc9 para acessar os módulos internos, como o financeiro e as contas a pagar.</p>
        </div>
      </aside>
    </main>
  )
}
