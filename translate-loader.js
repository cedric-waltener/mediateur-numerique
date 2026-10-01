// Google Traduction n'est charge qu'a la demande du visiteur : tant qu'il n'a pas clique
// sur "Choisir une langue", aucune donnee (adresse IP, contenu de la page) n'est envoyee
// a Google (RGPD). La page doit definir googleTranslateElementInit() avant ce script.
(function () {
  var box = document.getElementById('google_translate_element');
  if (!box) return;
  var btn = null;

  function load() {
    if (window.__translateLoaded) return;
    window.__translateLoaded = true;
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.onload = function () { if (btn && btn.parentNode) btn.parentNode.removeChild(btn); };
    s.onerror = function () { if (btn) { btn.disabled = false; btn.textContent = 'Réessayer'; } window.__translateLoaded = false; };
    document.body.appendChild(s);
  }

  // Une langue a deja ete choisie sur une autre page (cookie pose par Google Traduction) :
  // le visiteur a deja donne son accord, on garde la traduction d'une page a l'autre.
  if (/(^|;\s*)googtrans=\/fr\/(?!fr)/.test(document.cookie)) { load(); return; }

  btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'translate-load-btn';
  btn.textContent = 'Choisir une langue';
  btn.title = 'Active le service Google Traduction (votre adresse IP sera transmise à Google)';
  btn.addEventListener('click', function () { btn.disabled = true; btn.textContent = 'Chargement…'; load(); });
  box.appendChild(btn);
})();
