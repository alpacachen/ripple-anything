import './index.css';

export const rippleAnything = (
    e: MouseEvent,
    config?: {
        color?: string;
        duration?: number
    }) => {
    const { width, height, left, top } = (e.target as HTMLElement).getBoundingClientRect();
    const diameter = Math.max(width, height);
    const { clientX, clientY } = e;
    let wrapper = document.createElement('div');
    wrapper.classList.add('ripple-wrapper');
    wrapper.style.cssText = `width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px;`;
    wrapper.onanimationend = () => {
        wrapper.remove();
        wrapper = null;
    };
    const inner = document.createElement('span');
    inner.classList.add('ripple-inner');
    inner.style.cssText = `width: ${diameter}px; height: ${diameter}px; left: ${clientX - left - diameter / 2}px;top: ${clientY - top - diameter / 2}px;`;
    if(config?.color){
        inner.style.backgroundColor = config.color
    }
    if(config?.duration){
        inner.style.animationDuration = config.duration + 'ms'
    }
    wrapper.append(inner);
    document.body.appendChild(wrapper);
};

export default rippleAnything
