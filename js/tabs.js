(function changeTabs(t){
  let tabs = Array.prototype.slice.apply(t.querySelectorAll('.tab__item'));
  let panels = Array.prototype.slice.apply(t.querySelectorAll('.panels__item'));
  t.getElementById('tabs').addEventListener('click', e => {
    if (e.target.classList.contains('tab__item')) {
      let i = tabs.indexOf(e.target);
      panels.map(panel => panel.classList.remove('active'));
      panels[i].classList.add('active');
    }
  });
})(document);

