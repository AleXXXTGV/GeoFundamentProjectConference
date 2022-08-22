<template>
  <header class="addTransition w-full xl:max-w-[430px]">
    <desktop-navbar class="hidden xl:flex navbarBG"/>
    <nav class="addTransition flex flex-col justify-between xl:hidden fixed w-full navbarBG">
      <div class="navbarBG">
        <div class="container navbarBG flex justify-between items-center pt-[20px]">
          <div
            class="toggle xl:hidden flex z-30"
            :class="{ active: showMobileMenu == true }"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="block text-3xl h-min font-semibold">V CACSMGE</span>
        </div>
      </div>
      <transition duration="550" name="nested">
          <div
            class="navbarBG flex flex-col justify-between relative h-full addTransition"
            v-show="showMobileMenu"
          >
            <div class="languages absolute">
              <div class="flex">
                <img src="~/static/img/eng.svg" alt="langImg" />
                <nuxt-link :to="switchLocalePath('en')" class="font-medium text-2xl">EN</nuxt-link>
              </div>
              <div class="flex">
                <img src="~/static/img/ru.svg" alt="langImg" />
                <nuxt-link :to="switchLocalePath('ru')" class="font-medium text-2xl">RU</nuxt-link>
              </div>
              <div class="flex">
                <img src="~/static/img/uz.svg" alt="langImg" />
                <nuxt-link :to="switchLocalePath('uz')" class="font-medium text-2xl">UZ</nuxt-link>
              </div>
            </div>
              <ul
                class="
                  navbarBG
                  container
                  flex flex-col
                  justify-center
                  text-2xl
                  font-semibold
                "
              >
                <li class="text-center mt-8 flex justify-center">
                  <span>{{ $t("headerLinks.main") }}</span>
                </li>
                <li class="text-center mt-8">{{ $t("headerLinks.about") }}</li>
                <li class="text-center mt-8">{{ $t("headerLinks.venue") }}</li>
                <li class="text-center mt-8">{{ $t("headerLinks.hotels") }}</li>
                <li class="text-center mt-8">{{ $t("headerLinks.gallery") }}</li>
                <li
                  class="
                    text-center
                    mt-8
                    flex flex-wrap
                    text-80px
                    justify-center
                    mih-h-150px
                    items-center
                  "
                >
                  <span class="text-[80px] w-1/2 font-medium flex justify-end"
                    >5-7</span
                  >
                  <span class="text-[40px] w-1/2 flex">{{
                    $t("headerLinks.month")
                  }}</span>
                  <span class="text-[40px]">2022</span>
                </li>
              </ul>
              <button
                class="
                  signUpBtn
                  text-white
                  py-7
                  w-full
                  text-2xl
                  font-semibold
                "
              >
                {{ $t("headerLinks.register") }}
              </button>
          </div>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>

<style scoped>
.mih-h-150px {
  min-height: 150px;
}

.addTransition {
  transition: 300ms ease-in-out;
}


.navbarBG {
  background-color: #f9f1f1;
}

.toggle {
  position: relative;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.toggle span {
  position: absolute;
  width: 40px;
  height: 4px;
  background: black;
  border-radius: 4px;
  transition: 0.5s;
}

.toggle span:nth-child(1) {
  transform: translateY(-15px);
  width: 25px;
  left: 15px;
}

.toggle.active span:nth-child(1) {
  width: 40px;
  transform: translateY(0px) rotate(45deg);
  transition-delay: 0.125s;
}

.toggle span:nth-child(2) {
  transform: translateY(15px);
  width: 15px;
  left: 15px;
}

.toggle.active span:nth-child(2) {
  width: 40px;
  transform: translateY(0px) rotate(315deg);
  transition-delay: 0.125s;
}

.toggle.active span:nth-child(3) {
  transform: translateX(60px);
}

.nested-enter-active,
.nested-leave-active {
  transition: all opacity 0.3s ease-in-out;
  height: 100%;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
  height: 100%;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  height: 100%;
  opacity: 0;
}
.signUpBtn {
  background-color: #fe7575;
}
</style>