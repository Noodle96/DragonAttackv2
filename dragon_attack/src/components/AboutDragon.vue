<template>
  <section class="about-dragon">
    <div class="about-content">
      <h1>DragonAttack</h1>
      <h2>Tu Aventura Épica en un Mundo Hostil</h2>
      <p>
        Sobrevive en un mundo devastado, rodeado de criaturas peligrosas y enemigos ancestrales. Enfréntate a dragones y bestias oscuras mientras utilizas poderes mágicos y armas legendarias para restaurar la paz en el reino.
      </p>
      <p>
        Eres un guerrero legendario enviado a una tierra asolada por invasores aéreos y terrestres. A medida que avanzas, tus enemigos se vuelven más poderosos, revelando que están bajo el dominio de una antigua fuerza maligna. Sólo tú puedes salvar al reino de la aniquilación total.
      </p>
      <p>
        Derrota a todos los enemigos y supera los desafíos para obtener la victoria, pero recuerda, perderás si tu barra de vida llega a cero.
      </p>
      <button class="learn-more">Explorar Más</button>
    </div>
    <div class="about-image">
      <img src="../assets/portada_dragon.png" alt="Dragon Mascot" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutDragon',
};
</script>

<style scoped>
.about-dragon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e; /* Fondo oscuro */
  color: #e0e0e0; /* Texto claro para contraste */
  width: 100vw;
  height: 90vh;
  padding: 2em;
  box-sizing: border-box;
  border-radius: 10px;
}

.about-content {
  max-width: 50%;
  padding: 2em;
}

.about-content h1 {
  font-size: 3.5em;
  margin-bottom: 0.5em;
  color: #d44b29; /* Color amarillo dorado para darle un estilo épico */
}

.about-content h2 {
  font-size: 2em;
  margin-bottom: 1em;
  color: #ff9900; /* Tono similar pero más oscuro */
}

.about-content p {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 1em;
  color: #dcdcdc;
}

.about-content .learn-more {
  background-color: #ffcc00;
  color: #1e1e1e;
  padding: 0.8em 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

.about-content .learn-more:hover {
  background-color: #ffa500;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
}

.about-image img {
  max-width: 90%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7); /* Sombra para un efecto más dramático */
}
</style>
