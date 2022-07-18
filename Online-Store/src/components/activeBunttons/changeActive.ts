export function changeActive(name: string[], buttons: NodeListOf<HTMLInputElement>, className: string) {
  name.forEach((item): void => {
    buttons.forEach((elem): void => {
      if (item.toLowerCase() === elem.textContent?.toLowerCase()) {
        elem.classList.add(className);
      }
    });
  });
}
