export function useScroll() {
    const scrollPosition = ref(0);

    function updateScrollPosition() {
        scrollPosition.value = window.scrollY;
    }

    onMounted(() => {
        window.addEventListener("scroll", updateScrollPosition);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", updateScrollPosition);
    });

    return scrollPosition;
}
