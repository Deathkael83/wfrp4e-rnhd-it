Hooks.once('init', () => {
  if (typeof Babele === "undefined") {
    console.error("Babele non è attivo: impossibile registrare la traduzione RNHD.");
    return;
  }

  Babele.get().register({
    module: 'wfrp4e-rnhd',  // id del modulo ORIGINALE
    lang: 'it',
    dir: 'translations'     // cartella del tuo wfrp4e-rnhd-it
  });
});
