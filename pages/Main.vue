<template>
  <div class="bg-[#EBBB8C] h-auto xl:h-auto pb-[28px]">
    <div class="min-h-[30vh] w-full">
        <img src="~/static/img/mainBg.png" alt="mainBg" class="object-cover object-center min-h-[30vh] w-full">
    </div>
    <div>
        <div class="container flex flex-col text-center max-w-[710px]">
            <span class="font-bold block mb-[16px] mt-[29px] 2xl:text-2xl">{{$t('mainPage.title')}}</span>
            <span class="block 2xl:text-2xl leading-8 xl:text-left">{{$t('mainPage.info')}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>