<template>
    <div class="max-w-[430px] flex flex-col justify-between h-full">
        <div class="">
          <div class="container navbarBG flex justify-center items-center pt-[20px]">
            <nuxt-link :to="localePath('/')" class="block text-3xl h-min font-semibold">V CACSMGE</nuxt-link>
          </div>
        </div>
        <div
          class="navbarBG flex flex-col justify-between relative addTransition xl:h-full xl:justify-center"
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
              2xl:text-4xl
            "
          >
            <li class="text-center mt-8 flex justify-center">
              <nuxt-link :to="localePath('/main')" class="pageLink">{{ $t("headerLinks.main") }}</nuxt-link>
            </li>

            <li class="text-center mt-8">
              <nuxt-link :to="localePath('/about')" class="pageLink">
                {{ $t("headerLinks.about") }}
              </nuxt-link>
            </li>

            <li class="text-center mt-8">
              <nuxt-link :to="localePath('/venue')" class="pageLink">
                {{ $t("headerLinks.venue") }}
              </nuxt-link>
            </li>

            <li class="text-center mt-8">
              <nuxt-link :to="localePath('/hotels')" class="pageLink">
                {{ $t("headerLinks.hotels") }}
              </nuxt-link>
            </li>

            <li class="text-center mt-8">
              <nuxt-link :to="localePath('/gallery')" class="pageLink">
                {{ $t("headerLinks.gallery") }}
              </nuxt-link>
            </li>
            
            <li
              class="
                text-center
                mt-8
                flex flex-wrap
                text-80px
                justify-center
                min-h-[150px]
                items-center
              "
            >
              <span class="text-[80px] w-1/2 font-medium flex justify-center">5-7</span>
              <span class="text-[40px] w-1/2 flex h-[20px]">{{ $t("headerLinks.month") }}</span>
            </li>
            <li class="flex justify-center pb-[12px]">
              <span class="text-[40px]">2022</span>
            </li>
          </ul>
        </div>
          <nuxt-link :to="localePath('/register')" class="signUpBtn text-white py-7 w-full text-2xl font-semibold text-center">
            {{ $t("headerLinks.register") }}
          </nuxt-link>
    </div>
</template>

<script>
export default {};
</script>

<style>
a.pageLink.nuxt-link-active {
  border-bottom: 1px solid black;
}
.pageLink {
  padding-bottom: 10px;
}

.addTransition {
  transition: 300ms ease-in-out;
}
.container {
  width: 90%;
  margin: 0 auto;
}

.navbarBG {
  background-color: #f9f1f1;
}

.signUpBtn {
  background-color: #fe7575;
}
</style>