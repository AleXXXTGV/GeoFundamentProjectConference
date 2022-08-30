<template>
    <div class="bg-[#EBBB8C] flex lg:h-screen">
        <div class="container pt-[40px] pb-[40px]">
            <span class="font-semibold">
                {{$t('galleryPage.title')}}
            </span>
            <div class="pt-[40px]">
                <div class="lg:flex lg:justify-between">
                    <div class="xl:w-[45%]">
                        <img src="~/static/img/gallery1.png" alt="gallery1" class="mb-[15px] w-full">
                        <span class="font-medium">{{$t('galleryPage.item1')}}</span>
                    </div>
                    <div class="xl:w-[45%]">
                        <img src="~/static/img/gallery2.png" alt="gallery2" class="mb-[15px] w-full">
                        <span class="font-medium">{{$t('galleryPage.item2')}}</span>
                    </div>
                </div>
                <div class="lg:flex lg:justify-between">
                    <div class="xl:w-[45%]">
                        <img src="~/static/img/gallery3.png" alt="gallery3" class="mb-[15px] w-full">
                        <span class="font-medium">{{$t('galleryPage.item3')}}</span>
                    </div>
                    <div class="xl:w-[45%]">
                        <img src="~/static/img/gallery4.png" alt="gallery4" class="mb-[15px] w-full">
                        <span class="font-medium">{{$t('galleryPage.item4')}}</span>
                    </div>
                </div>
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