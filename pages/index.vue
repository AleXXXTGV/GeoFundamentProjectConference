<template>
  <div class="xl:flex xl:flex-col xl:justify-between 2xl:h-screen">
    <div class="bg-[#EBBB8C] logo">
      <div class="container items-center pt-[15px] flex flex-col xl:flex-row xl:justify-between xl:py-[16px]">
        <h1 class="max-w-[552px] font-bold text-2xl text-[#663333] flex flex-col items-center text-center xl:flex-row xl:text-left xl:justify-between ">
          <img src="~/static/img/RomanFive.svg" alt="romanFive" class="max-w-[94.5px] max-h-[97.5px] mr-[10px]">
          {{$t("indexPage.logo")}}
        </h1>
        <img src="~/static/img/ConferenceLogo.png" alt="logo" class="w-full ssm:w-1/2 max-w-[243px] max-h-[174px] xl:max-w-[209px]">
      </div>
    </div>
    <div class="city text-center bg-white">
      <div class="container py-[30px]">
        <span class="text-5xl font-bold text-[#BD9060]">{{$t("indexPage.city")}}</span>
      </div>
    </div>
    <div class="bg-index-pattern bg-cover bg-center bg-no-repeat xl:h-full xl:flex">
      <div class="container dates py-[56px] text-center flex flex-col xl:items-center xl:py-[36px] xl:justify-evenly xl:h-full">
        <span class="font-semibold text-[50px] xl:text-[64px] xl:max-h-[60px]">
          {{$t("indexPage.importantDates")}}
        </span>
        <div class="flex flex-col justify-between min-h-[250px] mt-[45px] xl:h-[116px] xl:text-left">
          <span class="font-semibold text-xl xl:text-2xl 2xl:text-4xl">{{$t("indexPage.importantDateOne")}}</span>
          <span class="font-semibold text-xl xl:text-2xl 2xl:text-4xl">{{$t("indexPage.importantDateTwo")}}</span>
          <span class="font-semibold text-xl xl:text-2xl 2xl:text-4xl">{{$t("indexPage.importantDateThree")}}</span>
        </div>
      </div>
    </div>
    <div class="partners bg-[#EBBB8C]">
      <div class="container flex justify-between flex-wrap xl:flex-nowrap py-[30px] items-center">
        <img class="w-1/3 max-h-[60px] max-w-[75px] ssm:w-1/5 xl:max-h-[100px] xl:max-w-[139px]" src="~/static/img/SIMSgLogo.png" alt="partnerLog">
        <img class="w-1/3 max-h-[98px] max-w-[162px] ssm:w-1/5 xl:max-h-[100px] xl:max-w-[139px]" src="~/static/img/UzGsLogo.png" alt="partnerLog">
        <img class="w-1/3 max-h-[105px] max-w-[114px] ssm:w-1/5 xl:max-h-[100px] xl:max-w-[139px]" src="~/static/img/SamGasiLogo.png" alt="partnerLog">
        <img class="w-1/3 max-h-[107px] max-w-[128px] ssm:w-1/5 xl:max-h-[100px] xl:max-w-[139px]" src="~/static/img/SamDuLogo.png" alt="partnerLog">
        <img class="w-1/3 max-h-[110px] max-w-[123px] ssm:w-1/5 xl:max-h-[100px] xl:max-w-[139px]" src="~/static/img/TshGASiLogo.png" alt="partnerLog">
        <img class="w-1/3 max-h-[105px] max-w-[106px] ssm:w-1/5 xl:max-h-[100px] xl:max-w-[139px]" src="~/static/img/TTtLogo.png" alt="partnerLog">
        <img class="w-1/3 max-h-[87px] max-w-[144px] ssm:w-1/5 xl:max-h-[100px] xl:max-w-[139px]" src="~/static/img/GFpLogo.png" alt="partnerLog">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
