document.addEventListener("DOMContentLoaded", () => {
  let base_image = document.getElementsByClassName("shoe-image")[0];
  let zoom_image = document.getElementsByClassName("shoe-image")[1];
  let container = document.getElementsByClassName("container")[0];

  base_image.addEventListener("mousemove", (event) => {
    zoom_image.style.opacity = 1;
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const normalizedX = mouseX / containerWidth;
    const normalizedY = mouseY / containerHeight;

    zoom_image.style.setProperty("--zoom-x", `${normalizedX * 100}%`);
    zoom_image.style.setProperty("--zoom-y", `${normalizedY * 100}%`);
  });

  base_image.addEventListener("mouseout", (evt) => {
    zoom_image.style.opacity = 0;
  });
});
