Hooks.once("init", () => {
  const babeleModule = game.modules.get("babele");
  if (!babeleModule || !babeleModule.active) {
    console.error("wfrp4e-rnhd-it | Babele non è attivo: impossibile registrare la traduzione RNHD.");
    return;
  }

  if (typeof Babele === "undefined") {
    console.error("wfrp4e-rnhd-it | Oggetto globale Babele non trovato.");
    return;
  }

  Babele.get().register({
    module: "wfrp4e-rnhd-it", // modulo ORIGINALE
    lang: "it",
    dir: "translations"    // cartella dove sta wfrp4e-rnhd.journals.json
  });

  console.log("wfrp4e-rnhd-it | Traduzioni RNHD registrate per lingua 'it'.");
});
