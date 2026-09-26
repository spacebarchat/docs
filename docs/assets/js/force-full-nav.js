(function(){
  document.addEventListener('click', function(e){
    const a = e.target.closest && e.target.closest('a');
    if (!a) return;
    if (a.target && a.target !== '_self') return;
    if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;
    try {
      const url = new URL(a.href, location.href);
      if (url.pathname === '/routes/' || url.pathname === '/routes') {
        e.preventDefault();
        location.href = url.href;
      }
    } catch (err) {
      // ignore
    }
  }, true);
})();
