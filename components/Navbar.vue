<template>
  <header class="addTransition w-full xl:max-w-[430px] relative">
    <desktop-navbar class="hidden xl:flex navbarBG fixed w-full"/>
    <div class="navbarBG fixed w-full z-30 xl:hidden">
      <div class="container navbarBG flex justify-between items-center pt-[20px] h-full">
        <div
          class="toggle xl:hidden flex"
          :class="{ active: showMobileMenu == true }"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div @click="showMobileMenu = false">
          <nuxt-link :to="localePath('/')" class="block text-3xl h-min font-semibold">V CACSMGE</nuxt-link>
        </div>
      </div>
    </div>
    <transition duration="550" name="nested">
        <nav v-show="showMobileMenu" class="addTransition navMenu flex flex-col justify-between fixed w-full pt-[90px] h-full">
          <div
            class="navbarBG flex flex-col justify-between relative h-full addTransition"
            
          >
            <div class="languages absolute">
              <div class="flex">
                <img src="~/static/img/eng.svg" alt="langImg" />
                <div @click="showMobileMenu = !showMobileMenu">
                  <nuxt-link :to="switchLocalePath('en')" class="font-medium text-xl md:text-2xl">EN</nuxt-link>
                </div>
              </div>
              <div class="flex">
                <img src="~/static/img/ru.svg" alt="langImg" />
                <div @click="showMobileMenu = !showMobileMenu">
                  <nuxt-link :to="switchLocalePath('ru')" class="font-medium text-xl md:text-2xl">RU</nuxt-link>
                </div>
              </div>
              <div class="flex">
                <img src="~/static/img/uz.svg" alt="langImg" />
                <div @click="showMobileMenu = !showMobileMenu">
                  <nuxt-link :to="switchLocalePath('uz')" class="font-medium text-xl md:text-2xl">UZ</nuxt-link>
                </div>
              </div>
            </div>
              <ul
                class="
                  navbarBG
                  container
                  flex flex-col
                  justify-between
                  text-xl
                  md:text-2xl
                  font-semibold
                  h-full
                "
              >
                <li class="text-center flex justify-center">
                  <div @click="showMobileMenu = !showMobileMenu">
                    <nuxt-link :to="localePath('/main')" class="pageLink">{{ $t("headerLinks.main") }}</nuxt-link>
                  </div>
            </li>
                <li class="text-center">
                  <div @click="showMobileMenu = !showMobileMenu">
                    <nuxt-link :to="localePath('/about')" class="pageLink">
                      {{ $t("headerLinks.about") }}
                    </nuxt-link>
                  </div>
            </li>
                <li class="text-center">
                  <div @click="showMobileMenu = !showMobileMenu">
                    <nuxt-link :to="localePath('/venue')" class="pageLink">
                      {{ $t("headerLinks.venue") }}
                    </nuxt-link>
                  </div>
            </li>
                <li class="text-center">
                  <div @click="showMobileMenu = !showMobileMenu">
                    <nuxt-link :to="localePath('/hotels')" class="pageLink"> 
                      {{ $t("headerLinks.hotels") }}
                    </nuxt-link>
                  </div>
            </li>
                <li class="text-center">
                  <div @click="showMobileMenu = !showMobileMenu">
                    <nuxt-link :to="localePath('/gallery')" class="pageLink">
                      {{ $t("headerLinks.gallery") }}
                    </nuxt-link>
                  </div>
            </li>
                <li
                  class="
                    text-center
                    flex flex-wrap
                    text-80px
                    justify-center
                    min-h-[50px]
                    items-center
                  "
                >
                  <span class="text-[50px] xl:text-[80px] font-medium flex justify-end"
                    >5-7</span
                  >
                  <span class="text-[30px] xl:text-[40px] flex h-[20px]">{{
                    $t("headerLinks.month")
                  }}</span>
                </li>
                <li class="text-center pb-[18px]">
                  <span class="text-[40px]">2022</span>
                </li>
              </ul>
              <div @click="showMobileMenu = !showMobileMenu" class="signUpBtn text-white py-7 w-full text-2xl font-semibold text-center">
                <nuxt-link :to="localePath('/register')" >
              {{ $t("headerLinks.register") }}
            </nuxt-link>
              </div>
          </div>
        </nav>
      </transition>
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
a.pageLink.nuxt-link-active {
  border-bottom: 1px solid black;
}
.pageLink {
  padding-bottom: 10px;
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