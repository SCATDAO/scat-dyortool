<template>
  <div class="css-8c943">
    <div class="css-h7ek">
      <button @click="changeTab('dyor')">DYOR</button>
      <button @click="changeTab('library')">Library</button>
      <button @click="changeTab('info')">AUDIT platform</button>
    </div>
    <Transition>
      <template v-if="navTab === 'dyor'">
        <div class="css-h7832">
          - Designed to give you the knowledge and resources to holistically
          assess a project. Useful for all investors who want to methodically
          research a project and share the results with others. $7.7 billion was
          stolen in crypto scams in 2021. Do Your Own Research so this doesn’t
          happen to you.
        </div>
      </template>
    </Transition>

    <Transition>
      <template v-if="navTab === 'library'">
        <div class="css-h7832">a</div>
      </template>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navTab: "dyor",
      library: "library",
    };
  },
  methods: {
    changeTab(e) {
      this.navTab = e;
    },
  },
};
</script>

<style scoped>
.css-h7ek button {
  padding: 0.75rem 50px;
  background: transparent;
  border: none;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.css-h7ek button:hover {
  background: #303437;
}
.css-h7ek {
  width: 100%;
  height: 50px;
  display: flex;
  border: 1px solid #3a3b3c;
}

.css-8c943 {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #23272a;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
}

.css-h7832 {
  color: #ffffff;
  padding: 3%;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>