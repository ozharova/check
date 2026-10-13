function FinanceBroLogo() {
  return (
    <div className="receipt-brand">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 28 28" role="img">
          <path d="M7.5 20.5V7.5h7.3c3 0 4.8 1.5 4.8 3.7 0 1.5-.8 2.6-2.2 3.2 1.8.5 2.8 1.7 2.8 3.5 0 2.5-2 4.1-5.2 4.1H9" />
          <path d="M11 12h3.6c.9 0 1.5-.4 1.5-1.1s-.6-1.1-1.5-1.1H11V12Zm0 5.7h4c1.1 0 1.7-.5 1.7-1.3 0-.8-.6-1.3-1.7-1.3h-4v2.6Z" />
        </svg>
      </span>
      <span className="brand-name">Finance Bro</span>
    </div>
  )
}

function Receipt() {
  return (
    <article className="receipt" aria-label="Чек об оплате подписки">
      <div className="paper-depth" aria-hidden="true" />
      <div className="paper" aria-hidden="true">
        <i className="paper-fiber fiber-one" />
        <i className="paper-fiber fiber-two" />
        <i className="paper-fiber fiber-three" />
        <i className="paper-crease crease-one" />
        <i className="paper-crease crease-two" />
        <i className="paper-curl" />
      </div>
      <div className="receipt-watermark" aria-hidden="true">
        FB
      </div>
      <div className="receipt-sheen" aria-hidden="true" />
      <div className="receipt-content">
        <header>
          <FinanceBroLogo />
          <p className="receipt-kicker">ЛИЧНАЯ ПОКУПКА</p>
        </header>

        <div className="receipt-meta">
          <span>Покупка #0427</span>
          <span>25.09.26 · 09:41</span>
        </div>

        <div className="divider" aria-hidden="true" />

        <div className="receipt-items">
          <div className="receipt-row">
            <span className="receipt-item-copy">
              <strong>Finance Bro Pro</strong>
              <small>Подписка · 1 месяц</small>
            </span>
            <span className="receipt-item-price">4 990 ₸</span>
          </div>
        </div>

        <div className="divider" aria-hidden="true" />

        <div className="receipt-summary">
          <div className="receipt-total">
            <span>Итого</span>
            <strong>4 990 ₸</strong>
          </div>
          <div className="receipt-payment">
            <span>Карта · •• 2148</span>
            <span className="approved">
              <i aria-hidden="true" />
              ОДОБРЕНО
            </span>
          </div>
        </div>

        <div className="receipt-bottom">
          <div className="barcode" aria-hidden="true" />
          <p className="receipt-footer">ЧЕК СОХРАНЁН В ИСТОРИИ</p>
          <div className="receipt-signature">
            <span>financebro.app</span>
            <span>FB · 0427 · KZ</span>
          </div>
        </div>
      </div>
    </article>
  )
}

function PaymentButton() {
  return (
    <div className="payment-wrap">
      <div className="printer-light" />
      <div className="success-glow" />
      <div className="success-ring ring-one" />
      <div className="success-ring ring-two" />
      <div className="success-sparks" aria-hidden="true">
        <i className="spark spark-one" />
        <i className="spark spark-two" />
        <i className="spark spark-three" />
        <i className="spark spark-four" />
        <i className="spark spark-five" />
        <i className="spark spark-six" />
      </div>
      <div className="click-ripple" />
      <div className="payment-button">
        <div className="button-hover" />
        <div className="button-progress" />
        <div className="button-shine" />
        <div className="pay-label">Оплатить 4 990 ₸</div>
        <div className="success-label">
          <span className="check" aria-hidden="true">
            <svg viewBox="0 0 30 22">
              <path d="M2.33 11.83 10 19.5 27.33 2.33" pathLength="1" />
            </svg>
          </span>
          <span>Готово</span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section
        className="animation-stage"
        aria-label="Анимация успешной покупки"
      >
        <div className="printer-window">
          <div className="receipt-slot">
            <Receipt />
          </div>
        </div>
        <PaymentButton />

        <i className="paper-crumb crumb-one" />
        <i className="paper-crumb crumb-two" />
        <i className="paper-crumb crumb-three" />

        <svg className="cursor" viewBox="0 0 67 87" aria-hidden="true">
          <path d="M13.7 8.7v51l12.75-11.9 8.5 20.4 8.5-3.4-8.5-19.55H52.8L13.7 8.7Z" />
        </svg>
      </section>

      <p className="demo-caption">Безопасная оплата · Finance Bro</p>
    </main>
  )
}
