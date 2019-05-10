export function getCardList() {
  return fetch('/cards').then(res => res.json());
}
