document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));

export default {
  name: "App",
  data() {
    return {
      data: true,
      workspace: true,
      currentSection: "home",
    }
  }
};
