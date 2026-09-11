<template>
    <main class="promises-page">
        <section class="promises-hero" aria-labelledby="promises-title">
            <div class="promises-hero__overlay" />
            <div class="promises-shell promises-hero__content">
                <div class="promises-hero__left">
                    <h1 id="promises-title">Más que un vehículo.<br />Una promesa.</h1>
                    <p class="promises-hero__description">
                        En OMODA | JAECOO Ecuador nuestro compromiso contigo va más allá de la venta. Dos promesas
                        concretas que protegen tu inversión hoy y en el futuro, respaldadas por un protocolo de
                        ingeniería y entrega sin precedentes.
                    </p>
                </div>

                <div class="promises-hero__right">
                    <div class="promises-hero__item">
                        <strong>10</strong>
                        <span>DÍAS MAX.
                            REPUESTOS</span>
                    </div>
                    <div class="promises-hero__item">
                        <strong>100%</strong>
                        <span>GARANTÍA DE
                            RECOMPRA</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="promises-info promises-shell" aria-labelledby="info-title">
            

            <div class="promises-info__grid">
                <article class="promise-card">
                    <img class="promise-card__logo" src="/icons/clock.svg" alt="" />
                    <h3>OFERTA DE SERVICIO</h3>
                    <p class="promise-card__summary">
                        "Si el repuesto no llega en 10 días, asumimos el costo completo. Tu tiempo y tu tranquilidad son nuestra prioridad."
                    </p>
                    <div class="promise-card__conditions">
                        <h4>Condiciones técnicas del programa</h4>
                        <ul>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Mantenimientos oficiales</strong><span>Realizados exclusivamente en la red de talleres autorizados OMODA | JAECOO.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Máximo 20.000 km anuales</strong><span>Hasta 100.000 km durante los 5 años de vigencia del vehículo.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Vigencia extendida</strong><span>Cobertura garantizada de 5 años desde la fecha de facturación y entrega.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Integridad mecánica</strong><span>Vehículo sin intervenciones o modificaciones no homologadas por terceros.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Cronograma riguroso</strong><span>Los mantenimientos deben ser realizados en nuestra red de talleres autorizados y cumpliendo el cronograma establecido por la marca.</span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="promise-card__legal">
                        <p><strong>Formalización legal:</strong> El convenio PROMISE se formaliza al momento de la entrega del vehículo.<br />Consulta con tu asesor para conocer todos los detalles.</p>
                    </div>
                </article>

                <article class="promise-card">
                    <img class="promise-card__logo" src="/icons/retry.svg" alt="" />
                    <h3>PROMESA DE REVENTA</h3>
                    <p class="promise-card__summary">
                        "Cuando decidas cambiar tu vehículo por uno nuevo de la marca, te garantizamos un precio mínimo de recepción competitivo, sin fricción de mercado."
                    </p>
                    <div class="promise-card__conditions">
                        <h4>Condiciones técnicas de retoma</h4>
                        <ul>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Mantenimientos oficiales</strong><span>Realizados exclusivamente en la red de talleres autorizados OMODA | JAECOO.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Límite de rodaje</strong><span>Máximo 20.000 km anuales — hasta 60.000 km al cumplir los 3 años de vigencia.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Estado estructural óptimo</strong><span>Sin siniestros graves ni modificaciones no autorizadas.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Ventana de activación</strong><span>Solicita tu beneficio de recepción hasta 3 meses antes de completarse los 3 años.</span></p>
                            </li>
                            <li>
                                <img src="/icons/check.svg" alt="" />
                                <p><strong>Cronograma riguroso</strong><span>Los mantenimientos deben ser realizados en nuestra red de talleres autorizados y cumpliendo el cronograma establecido por la marca.</span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="promise-card__legal">
                        <p><strong>Formalización legal:</strong> El acuerdo UPGRADE se formaliza al momento de la entrega del vehículo. Aplica únicamente para la adquisición de un nuevo vehículo OMODA | JAECOO.</p>
                    </div>
                </article>
            </div>
        </section>

        <section class="promises-cta" aria-labelledby="cta-title">
            <div class="promises-shell promises-cta__content">
                <h2 id="cta-title">
                    ¿Listo para experimentar la tranquilidad de OMODA
                    <span class="promises-cta__brand-divider" aria-hidden="true"> | </span>
                    JAECOO?
                </h2>
                <p class="promises-cta__description">
                    Descubre nuestros modelos en el concesionario más cercano y formaliza tu promesa con condiciones preferenciales exclusivas.
                </p>
                <NuxtLink to="/authorized-service?tab=showrooms" class="promises-button">VISÍTANOS</NuxtLink>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
defineOptions({
    name: 'PromisesPage',
});
</script>

<style scoped lang="scss">
.promises-page {
    background: #0d0e0e;
    color: #fff;
    font-family: 'MiSansNormal', sans-serif;
}

.promises-shell {
    width: min(100% - 48px, 1180px);
    margin: 0 auto;
}

.promises-eyebrow {
    margin: 0;
    color: #b9bbba;
    font-family: 'MiSansMedium', sans-serif;
    font-size: 12px;
    letter-spacing: 0.2em;
    line-height: 1.3;
}

.promises-hero {
    position: relative;
    min-height: 320px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    background: url('/images/promises/banner_promises.webp') center / cover no-repeat;
}

.promises-hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(13, 14, 14, 0.72) 0%, rgba(13, 14, 14, 0.1) 62%, rgba(13, 14, 14, 0.28) 100%), linear-gradient(0deg, rgba(13, 14, 14, 0.72), transparent 48%);
}

.promises-hero__content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 48px;
    padding: 0 0 64px;
}

.promises-hero__left h1 {
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 100%;
    text-transform: uppercase;
}

.promises-hero__description {
    max-width: 420px;
    margin: 16px 0 0;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0;
}

.promises-hero__right {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 48px;
  width: max-content;
    padding-bottom: 5px;
    color: #f4f4f2;
}

.promises-hero__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  text-align: left;
}

.promises-hero__item strong {
  flex: 0 0 auto;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  white-space: nowrap;
}

.promises-hero__item span {
  flex: 0 0 80px;
  width: 80px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0;
}

.promises-info {
  width: 100%;
  max-width: none;
  margin: 0;
  box-sizing: border-box;
  padding: 100px 48px;
}

.promises-info__grid,
.promises-info > .promises-section-heading {
  width: 100%;
  max-width: 1180px;
  margin-right: auto;
  margin-left: auto;
}

.promises-section-heading h2,
.promises-cta h2 {
    max-width: 700px;
    margin: 16px 0 0;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 100%;
    text-transform: uppercase;
}

.promises-cta__brand-divider {
  font-size: 17px;
  color: #e60012;
}

.promises-info__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  margin-top: 40px;
}

.promise-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  min-height: 136px;
  padding: 40px;
  background: #131313;
}

.promise-card__logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.promise-card h3 {
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}

.promise-card__summary {
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 24px;
  background-color: #000;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
}

.promise-card__conditions {
  width: 100%;
  margin-top: 16px;
}

.promise-card__conditions h4 {
  margin: 0 0 24px;
  color: #b9b9b9;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.promise-card__conditions ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.promise-card__conditions li {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
}

.promise-card__conditions li img {
  width: 24px;
  height: 24px;
}

.promise-card__conditions li p {
  margin: 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
}

.promise-card__conditions li strong {
  font-weight: 600;
}

.promise-card__conditions li strong::after {
  margin-right: 4px;
  content: ':';
}

.promise-card__conditions li span {
  font-weight: 400;
}

.promise-card__legal {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #222;
}

.promise-card__legal p {
  margin: 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
}

.promise-card__legal strong {
  font-weight: 600;
}

.promises-cta__description {
  margin: 0;
  color: #c5c7c6;
  font-size: 12px;
  line-height: 100%;
}

.promises-cta {
    border-top: 1px solid #292b2b;
    background: #151717;
    text-align: center;
}

.promises-cta__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
}

.promises-cta h2 {
    max-width: 760px;
}

#cta-title {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
}

.promises-cta__description {
    max-width: 520px;
    margin-top: 16px;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
}

.promises-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  padding: 10px;
  border: 1px solid #67b0c4;
  background-color: #67b0c4;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1;
  text-decoration: none;
  transition: filter 180ms ease;
}

.promises-button:hover,
.promises-button:focus-visible {
  filter: brightness(0.92);
}

@media (max-width: 700px) {
    .promises-shell {
        width: min(100% - 48px, 1180px);
    }

    .promises-hero {
        min-height: 320px;
        background-position: 58% center;
    }

    .promises-hero__content {
        display: block;
        padding-bottom: 40px;
    }

    .promises-hero__left {
        text-align: center;
    }

    .promises-hero__description {
        margin-right: auto;
        margin-left: auto;
    }

  .promises-hero__right {
    width: 100%;
    margin-top: 32px;
    grid-template-columns: max-content max-content;
    column-gap: 0;
    justify-content: space-between;
  }

  .promises-info {
    width: auto;
    padding: 40px;
    text-align: center;
  }

  .promises-cta__content {
    padding-top: 50px;
    padding-bottom: 50px;
  }

    .promises-info__grid {
        grid-template-columns: 1fr;
        gap: 24px;
        margin-top: 40px;
        justify-items: center;
    }

    .promise-card {
        min-height: 0;
        padding: 0;
        text-align: center;
    }

    .promise-card h3 {
        font-size: 20px;
        text-align: center;
    }

    .promise-card__summary {
        padding: 8px;
        font-size: 16px;
        text-align: center;
    }

    .promise-card__conditions {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .promise-card__conditions ul {
        width: fit-content;
        max-width: 100%;
        text-align: left;
    }

    .promise-card__legal {
        padding: 8px;
        text-align: center;
    }
}

@media (min-width: 768px) {
    .promises-hero {
        min-height: 520px;
    }

    .promises-hero__content {
        padding-bottom: 96px;
    }

    .promises-hero__left h1 {
        font-size: 36px;
    }

    .promises-hero__description {
        font-size: 16px;
    }

    .promises-hero__right {
        font-size: 16px;
        line-height: 100%;
    }

    .promises-section-heading h2,
    .promises-cta h2 {
        font-size: 36px;
    }

  .promises-info {
    padding: 100px 48px;
  }

  .promises-cta__content {
    padding-top: 100px;
    padding-bottom: 100px;
  }

    .promise-card h3 {
        font-size: 20px;
    }

    .promise-card__summary,
    .promises-cta__description {
        font-size: 16px;
    }

    .promises-button {
        padding: 20px;
        font-size: 20px;
    }
}

@media (min-width: 1280px) {
    .promises-hero {
        min-height: 720px;
    }
}
</style>
