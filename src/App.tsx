import './App.css'

const supportEmail = 'support@vh-cloud-com'
const privacyEmail = 'support@vh-cloud-com'

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

function LandingPage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Navegación principal">
          <a className="brand" href="#top" aria-label="Ir al inicio de EconoIA">
            <img src="/logo-mark.png" alt="" className="brand-logo" />
            <span>EconoIA</span>
          </a>
          <div className="nav-links">
            <a className="nav-support-link" href="/privacidad">
              Privacidad
            </a>
            <a className="nav-support-link" href="#soporte">
              Soporte
            </a>
          </div>
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

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero" aria-labelledby="privacy-title">
        <nav className="nav" aria-label="Navegación de privacidad">
          <a className="brand" href="/" aria-label="Volver al inicio de EconoIA">
            <img src="/logo-mark.png" alt="" className="brand-logo" />
            <span>EconoIA</span>
          </a>
          <a className="nav-support-link" href="/">
            Volver al inicio
          </a>
        </nav>

        <div className="privacy-hero-content">
          <p className="eyebrow">Privacidad</p>
          <h1 id="privacy-title">Política de privacidad de EconoIA</h1>
          <p className="privacy-updated">Última actualización: 18 de junio de 2026</p>
          <p className="privacy-intro">
            EconoIA ayuda a los usuarios a organizar sus finanzas personales, consultar
            información financiera, gestionar presupuestos, metas, deudas y movimientos, y
            utilizar funciones de asistencia inteligente cuando estén disponibles.
          </p>
          <p className="privacy-intro">
            Esta política explica qué datos recopilamos, para qué los usamos y cómo protegemos
            la información.
          </p>
        </div>
      </section>

      <section className="privacy-section" aria-label="Contenido de la política de privacidad">
        <div className="privacy-card">
          <section className="privacy-policy-section" aria-labelledby="responsable-tratamiento">
            <h2 id="responsable-tratamiento">1. Responsable del tratamiento</h2>
            <p>El responsable de esta aplicación es:</p>
            <p>
              <strong>Daniel Felipe Nunez Moreno</strong>
              <br />
              Correo de contacto: <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
            </p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="datos-recopilados">
            <h2 id="datos-recopilados">2. Datos que recopilamos</h2>
            <p>EconoIA puede recopilar los siguientes tipos de datos:</p>

            <h3>Datos de cuenta</h3>
            <ul>
              <li>Nombre.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Identificadores de usuario o cuenta.</li>
            </ul>
            <p>Estos datos se usan para crear y gestionar la cuenta, iniciar sesión y prestar soporte.</p>

            <h3>Datos financieros</h3>
            <p>
              La app puede tratar información financiera introducida por el usuario o recibida mediante
              conexiones bancarias compatibles, incluyendo:
            </p>
            <ul>
              <li>Cuentas financieras.</li>
              <li>Saldos.</li>
              <li>Ingresos y gastos.</li>
              <li>Transacciones.</li>
              <li>Presupuestos.</li>
              <li>Metas de ahorro.</li>
              <li>Deudas, cuotas e intereses.</li>
              <li>Categorías, notas o descripciones asociadas a movimientos.</li>
            </ul>
            <p>
              Estos datos se utilizan para mostrar el estado financiero del usuario, calcular métricas,
              generar análisis, presupuestos, alertas y funcionalidades principales de la app.
            </p>

            <h3>Contenido generado por el usuario</h3>
            <p>Podemos tratar contenido que el usuario introduce dentro de la app, como:</p>
            <ul>
              <li>Notas.</li>
              <li>Descripciones.</li>
              <li>Mensajes o consultas al asistente.</li>
              <li>Preferencias y configuración.</li>
            </ul>

            <h3>Compras y suscripciones</h3>
            <p>
              Si el usuario accede a funcionalidades de pago, podemos recibir información sobre el estado
              de compra o suscripción a través de Apple App Store o proveedores de gestión de suscripciones.
            </p>
            <p>EconoIA no recopila directamente datos de tarjetas bancarias ni información completa de pago.</p>

            <h3>Datos de uso y diagnóstico</h3>
            <p>Podemos recopilar datos técnicos y de uso para mantener, proteger y mejorar la app, como:</p>
            <ul>
              <li>Eventos de uso de funcionalidades.</li>
              <li>Información de sincronización.</li>
              <li>Registros de errores.</li>
              <li>Datos técnicos de diagnóstico.</li>
              <li>Identificadores necesarios para seguridad, sesión y funcionamiento.</li>
            </ul>
          </section>

          <section className="privacy-policy-section" aria-labelledby="uso-datos">
            <h2 id="uso-datos">3. Para qué usamos los datos</h2>
            <p>Usamos los datos para:</p>
            <ul>
              <li>Crear y gestionar cuentas de usuario.</li>
              <li>Permitir el inicio de sesión y proteger la sesión.</li>
              <li>Mostrar cuentas, saldos, presupuestos, metas, deudas y movimientos.</li>
              <li>Sincronizar datos financieros cuando el usuario conecta servicios compatibles.</li>
              <li>Generar análisis, alertas, informes y recomendaciones.</li>
              <li>Prestar funciones de asistencia inteligente.</li>
              <li>Gestionar compras o suscripciones.</li>
              <li>Prevenir errores, fraude o abuso.</li>
              <li>Mejorar el rendimiento, estabilidad y seguridad de la app.</li>
              <li>Atender solicitudes de soporte.</li>
            </ul>
          </section>

          <section className="privacy-policy-section" aria-labelledby="proveedores-externos">
            <h2 id="proveedores-externos">4. Proveedores externos</h2>
            <p>EconoIA puede utilizar proveedores externos necesarios para operar la app, por ejemplo:</p>
            <ul>
              <li>Servicios de autenticación, base de datos e infraestructura.</li>
              <li>Proveedores de conexión bancaria.</li>
              <li>Servicios de gestión de suscripciones.</li>
              <li>Servicios de inteligencia artificial.</li>
              <li>Servicios de alojamiento y backend.</li>
            </ul>
            <p>
              Estos proveedores actúan para prestar funcionalidades necesarias de la app. No usamos los
              datos para publicidad de terceros ni para seguimiento publicitario entre apps o sitios web.
            </p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="seguimiento-publicidad">
            <h2 id="seguimiento-publicidad">5. Seguimiento y publicidad</h2>
            <p>
              EconoIA no utiliza los datos del usuario para seguimiento publicitario entre aplicaciones o
              sitios web de terceros.
            </p>
            <p>EconoIA no vende datos personales ni comparte datos con brokers de datos.</p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="seguridad">
            <h2 id="seguridad">6. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger los datos del usuario,
              incluyendo almacenamiento seguro de tokens, cifrado cuando corresponde y controles de acceso.
            </p>
            <p>
              Aun así, ningún sistema es completamente infalible. El usuario debe mantener seguras sus
              credenciales y dispositivos.
            </p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="conservacion-datos">
            <h2 id="conservacion-datos">7. Conservación de datos</h2>
            <p>
              Conservamos los datos mientras la cuenta esté activa o mientras sean necesarios para prestar
              el servicio, cumplir obligaciones legales, resolver incidencias, prevenir abuso o mantener la
              seguridad.
            </p>
            <p>
              El usuario puede solicitar la eliminación de su cuenta o datos escribiendo al correo de contacto
              indicado en esta política.
            </p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="derechos-usuario">
            <h2 id="derechos-usuario">8. Derechos del usuario</h2>
            <p>Según la normativa aplicable, el usuario puede solicitar:</p>
            <ul>
              <li>Acceso a sus datos.</li>
              <li>Corrección de datos incorrectos.</li>
              <li>Eliminación de sus datos.</li>
              <li>Limitación u oposición al tratamiento.</li>
              <li>Portabilidad de sus datos, cuando corresponda.</li>
            </ul>
            <p>Para ejercer estos derechos, puede contactar con:</p>
            <p>
              <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
            </p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="menores-edad">
            <h2 id="menores-edad">9. Menores de edad</h2>
            <p>
              EconoIA no está dirigida a menores de 13 años. Si detectamos que hemos recopilado datos de un
              menor sin autorización válida, tomaremos medidas para eliminarlos.
            </p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="cambios-politica">
            <h2 id="cambios-politica">10. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política para reflejar cambios en la app, requisitos legales o mejoras
              del servicio.
            </p>
            <p>La versión actualizada estará disponible en esta página.</p>
          </section>

          <section className="privacy-policy-section" aria-labelledby="contacto">
            <h2 id="contacto">11. Contacto</h2>
            <p>Para consultas sobre privacidad o soporte:</p>
            <p>
              <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

function App() {
  if (window.location.pathname === '/privacidad' || window.location.pathname === '/privacidad/') {
    return <PrivacyPage />
  }

  return <LandingPage />
}

export default App
