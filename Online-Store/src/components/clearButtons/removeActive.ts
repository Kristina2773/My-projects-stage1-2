export function removeActive(buttons: NodeListOf<HTMLInputElement>, className: string) {
  buttons.forEach((item) => {
    item.classList.remove(className);
  });
}
