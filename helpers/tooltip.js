export function addToolTip(element, makes, shots) {
  element.addEventListener("mouseover", () => {
    const cursorX = event.pageX + 10;
    const cursorY = event.pageY + 5;

    const tooltip = document.createElement("div");
    tooltip.style.cssText = `
                    color: white;
                    width: 100px;
                    height: 40px;
                    background-color: grey;
                    position: fixed;
                    left: ${cursorX}px;
                    top: ${cursorY}px;
                    `;

    tooltip.textContent = `${makes} / ${shots} = ${Math.round(
      (100 * makes) / shots
    )}%`;

    document.body.append(tooltip);

    element.addEventListener("mousemove", () => {
      const cursorX = event.pageX + 10;
      const cursorY = event.pageY + 5;
      tooltip.style.cssText = `
                    color: white;
                    width: 100px;
                    height: 40px;
                    background-color: grey;
                    position: fixed;
                    left: ${cursorX}px;
                    top: ${cursorY}px;
                    `;
    });

    element.addEventListener("mouseout", () => {
      tooltip.remove();
    });
  });
}
