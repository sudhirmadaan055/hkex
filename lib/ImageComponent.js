/**
 * Creates a responsive image element with different resolutions
 * @param {Object} props Component properties
 * @param {string} props.src Main image source URL
 * @param {string} props.alt Image alt text
 * @param {string} props.className CSS class names
 * @param {string} props.asImageName Image Type
 * @param {Object} [props.breakpoints] Breakpoint configurations
 * @param {boolean} [props.lazy=true] Whether to use lazy loading
 * @returns {string} HTML string for the responsive image
 */
export default function ImageComponent({
  src,
  alt,
  className = '',
  breakpoints = {
    mobile: { width: 767, src: '', smartCrop: '' },
    tablet: { width: 1024, src: '', smartCrop: '' },
    desktop: { width: 1920, src: '', smartCrop: '' },
  },
  lazy = true,
}) {

  return `
    <picture>
      <source media="(min-width: 1024px)" 
              srcset="${breakpoints.desktop.src}">
      <source media="(min-width: 768px)" 
              srcset="${breakpoints.tablet.src}">
      <source media="(min-width: 320px)" 
              srcset="${breakpoints.mobile.src}">             
      <img src="${src}" 
           alt="${alt}" 
           title="${alt}"
           class="${className}"
           ${lazy ? 'loading="lazy"' : ''}
      />
    </picture>
  `;
}
