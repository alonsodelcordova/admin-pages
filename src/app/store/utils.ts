export function select(el: any, all = false) {
  el = el.trim();
  if (all) {
    return [...(document.querySelectorAll(el) as any)];
  } else {
    return document.querySelector(el);
  }
};
