import './App.css'

const supportEmail = 'soporte@econoia.app'

const features = [
  {
    title: 'Controla tu dinero en un solo lugar',
    description:
      'Visualiza cuentas, ingresos, gastos y movimientos para entender qué ocurre con tu economía diaria.',
  },
  {
    title: 'Planifica con más claridad',
    description:
      'Da seguimiento a presupuestos, metas de ahorro y deudas sin depender de hojas de cálculo.',
  },
  {
    title: 'Decisiones con contexto',
    description:
      'EconoIA combina organización financiera y asistencia inteligente para ayudarte a mirar tus números con criterio.',
  },
]

const supportGuidelines = [
  'Cuéntanos qué estabas intentando hacer.',
  'Incluye el mensaje de error si aparece.',
  'No compartas contraseñas, tokens, códigos de verificación ni datos bancarios completos.',
]

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Navegación principal">
          <a className="brand" href="#top" aria-label="Ir al inicio de EconoIA">
            <img src="/logo-mark.png" alt="" className="brand-logo" />
            <span>EconoIA</span>
          </a>
          <a className="nav-support-link" href="#soporte">
            Soporte
          </a>
        </nav>

        <div className="hero-content" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Finanzas personales con claridad</p>
            <h1 id="hero-title">Entiende tu dinero. Organiza tus decisiones.</h1>
            <p className="hero-description">
              EconoIA te ayuda a ordenar cuentas, revisar movimientos, crear presupuestos,
              dar seguimiento a metas y tener una lectura más simple de tu vida financiera.
            </p>
            <div className="hero-actions" aria-label="Acciones principales">
              <a className="primary-button" href="#soporte">
                Necesito soporte
              </a>
              <a className="secondary-button" href="#funciones">
                Conocer la app
              </a>
            </div>
          </div>

          <div className="phone-card" aria-label="Vista previa conceptual de EconoIA">
            <div className="phone-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="balance-card">
              <p>Balance estimado</p>
              <strong>€ 2.840</strong>
              <span>+12% este mes</span>
            </div>
            <div className="metric-row">
              <div>
                <span>Ingresos</span>
                <strong>€ 3.200</strong>
              </div>
              <div>
                <span>Gastos</span>
                <strong>€ 1.480</strong>
              </div>
            </div>
            <div className="insight-card">
              <span className="sparkle" aria-hidden="true">✦</span>
              <p>Tu gasto en ocio subió esta semana. Revisá tu presupuesto antes del cierre.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="funciones" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">Qué ofrece</p>
          <h2 id="features-title">Una app para mirar tus finanzas sin ruido</h2>
          <p>
            Diseñada para que la información importante sea visible, útil y fácil de
            revisar desde el móvil.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon" aria-hidden="true">✓</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="support-section" id="soporte" aria-labelledby="support-title">
        <div className="support-card">
          <div>
            <p className="eyebrow">Soporte</p>
            <h2 id="support-title">¿Necesitas ayuda con EconoIA?</h2>
            <p className="support-description">
              Si tienes problemas de acceso, sincronización bancaria, movimientos, presupuestos o
              cualquier funcionalidad de la app, escríbenos y revisaremos tu caso.
            </p>
          </div>

          <a className="email-link" href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>

          <div className="safe-support" aria-labelledby="safe-support-title">
            <h3 id="safe-support-title">Para ayudarte mejor y proteger tus datos</h3>
            <ul>
              {supportGuidelines.map((guideline) => (
                <li key={guideline}>{guideline}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
