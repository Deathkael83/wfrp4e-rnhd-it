Hooks.once("init", () => {
  if (!game.babele) {
    console.error("Babele non è attivo: impossibile registrare la traduzione RNHD.");
    return;
  }

  const babele = game.babele;

  // Traduzioni per il modulo RNHD
  babele.register({
    module: "wfrp4e-rnhd",     // nome del modulo ORIGINALE
    lang: "it",               // lingua
    dir: "translations"  // cartella che contiene i json di traduzione
  });
});
