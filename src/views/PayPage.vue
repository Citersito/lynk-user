<template>
  <div class="container">
    <div class="main-content">
      <main>
        <header>
          <h1 class="pagar">Pagar</h1>
          <div class="alerta">
            <p class="apartado">¡Tu pedido está apartado!</p>
            <p class="tienes">
              Tienes hasta el
              <strong>25 Noviembre a las 09:13 A.M.</strong> para completar la
              compra.
            </p>
          </div>
        </header>

        <section class="informacion-personal">
          <h2>Información Personal</h2>
          <div class="info-contenedor">
            <div class="info-item">
              <p class="label">Nombre Completo</p>
              <p class="valor">Ricardo Embriz</p>
            </div>
            <div class="info-item">
              <p class="label">Correo Electrónico</p>
              <p class="valor">filis531@gmail.com</p>
            </div>
            <div class="info-item">
              <p class="label">Número de Teléfono</p>
              <p class="valor">+52 449-124-5526</p>
            </div>
          </div>
          <div class="icono-editar">
            <img src="icono-editar.png" alt="Editar" />
          </div>
        </section>

        <section class="envio">
          <h2>Especificaciones de Envío</h2>
          <form class="form-envio">
            <input type="text" placeholder="Avenida, Calle o Boulevard" />
            <input type="text" placeholder="Número Exterior" />
            <input type="text" placeholder="Número Interior" />
            <select>
              <option value="mexico">País</option>
            </select>
            <input type="text" placeholder="Estado" />
            <input type="text" placeholder="Ciudad" />
            <input type="text" placeholder="Código Postal" />
            <label>¿Entre qué calles está?</label>
            <input type="text" placeholder="Calle 1" />
            <input type="text" placeholder="Calle 2" />
          </form>
        </section>

        <section class="pago">
          <h2>Información de pago</h2>
          <div class="opciones-pago">
            <div class="opcion paypal">Paga con PayPal</div>
            <div class="separador">o</div>
            <div class="opcion stripe">Paga con Stripe</div>
          </div>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="text" placeholder="Numero Tarjeta" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Fecha Expiración" />
          </form>
        </section>
      </main>

      <section class="orden">
        <h2>Tu Orden</h2>

        <div class="producto">
          <div class="producto-info">
            <img src="imagen1.jpg" alt="Sudadera con Capucha" />
            <div class="producto-detalles">
              Sudadera con Capucha
              <span>Variación</span>
            </div>
          </div>
          <div class="producto-precio">$665.00</div>
        </div>

        <div class="producto">
          <div class="producto-info">
            <img src="imagen2.jpg" alt="Tenis deportivos" />
            <div class="producto-detalles">
              Tenis deportivos
              <span>Variación</span>
            </div>
          </div>
          <div class="producto-precio">$224.00</div>
        </div>

        <div class="producto">
          <div class="producto-info">
            <img src="imagen3.jpg" alt="Sudadera de Natae" />
            <div class="producto-detalles">
              Sudadera de Natae
              <span>Variación</span>
            </div>
          </div>
          <div class="producto-precio">$340.00</div>
        </div>

        <div class="resumen">
          <div><span>Subtotal</span><span>$1284.00</span></div>
          <div><span>Descuento</span><span>-$0.00</span></div>
          <div><span>Costo de Envío</span><span>$108.00</span></div>
          <div class="total"><span>Gran Total</span><span>$1403.00</span></div>
          <div class="btn_pagar">
            <button><p>Pagar</p></button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pago",
};
</script>

<style scoped>
/* Estilos de container y flexbox */
.container {
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Faustina", serif;
  display: flex;
  justify-content: center;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

header,
.pago,
.envio,
.informacion-personal,
.orden {
  margin-bottom: 20px;
}

.informacion-personal .info-contenedor {
  display: flex;
  gap: 50px;
}

.envio .form-envio {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.pago .opciones-pago {
  display: flex;
  justify-content: space-between;
}

.orden .producto {
  display: flex;
  justify-content: space-between;
}

.orden .producto-info {
  display: flex;
  align-items: center;
}

/* Responsivo */
@media (max-width: 768px) {
  .envio .form-envio {
    grid-template-columns: 1fr;
  }
}
</style>
