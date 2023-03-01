export default {
  mounted(el, binding) {
    console.log(el, binding);
    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    let callback = (e, o) => {
      if (e[0].isIntersecting) {
        binding.value()
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: 'intersection',
};
