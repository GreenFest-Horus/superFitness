const video = document.querySelector('[data-video-container]');
const link = document.querySelector('[data-video-link]');
const button = document.querySelector('[data-video-button]');
const iframeBlock = video.querySelector('[data-video-frame]');
link.removeAttribute('href');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('width', 364);
  iframe.setAttribute('height', 228);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

button.addEventListener('click', () => {
  if (video && iframeBlock) {
    button.remove();
    link.remove();
    const newIframe = createIframe(iframeBlock);
    iframeBlock.append(newIframe);
  }
});
