export function getCardList() {
  return fetch('/cards').then(res => res.json());
}

export function postCard(newCard) {
  return fetch('/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCard)
  }).then(res => res.json());
}

export function patchCard(data, id) {
  return fetch('/cards/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function getLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch {
    console.log('error');
  }
}

export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
