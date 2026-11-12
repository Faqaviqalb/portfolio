// Fades in every `.reveal` element on the current page as it scrolls into view.
export function useReveal() {
  const instantReveal = useState('instant-reveal', () => false)
  onMounted(() => {
    // Right after a language switch: show everything at once.
    if (instantReveal.value) {
      instantReveal.value = false
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    onBeforeUnmount(() => io.disconnect())
  })
}
