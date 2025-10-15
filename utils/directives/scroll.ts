// Add this interface declaration at the top of the file
interface ExtendedHTMLElement extends HTMLElement {
    _onScroll?: () => void; // Optional property for the scroll event handler
}

const scrollDirective = {
    mounted(el: ExtendedHTMLElement) {
        // el.style.willChange = 'transform';
        const updateScale = () => {
            const { innerHeight } = window;
            const itemTop = el.getBoundingClientRect().top - innerHeight;
            const top = Math.abs(itemTop);
            const totalHeight = innerHeight * 4 / 5;
            const perUnit = 30 / totalHeight;
            const addSize = perUnit * top;
            const totalSize = addSize + 70 > 100 ? 100 : addSize + 70;
            const scale = (totalSize / 100).toFixed(5);
            el.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;
        };

        const onScroll = () => {
            requestAnimationFrame(updateScale); // 使用 requestAnimationFrame 优化性能
        };

        window.addEventListener('scroll', onScroll); // 添加滚动事件监听

        el._onScroll = onScroll;
    },
    unmounted(el: ExtendedHTMLElement) {
        if (el._onScroll) {
            window.removeEventListener('scroll', el._onScroll); // 移除滚动事件监听
        }
    }
};

export default scrollDirective;