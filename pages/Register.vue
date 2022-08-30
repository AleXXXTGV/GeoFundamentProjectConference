<template>
    <div class="bg-[#EBBB8C] h-screen">
        <div class="container pt-[41px]">
            <span class="font-medium">{{$t('registerPage.title')}}</span>
            <div class="flex flex-col justify-between">
                <button @click="downloadMe" class="w-max text-white">{{$t('registerPage.file1')}}</button>
                <button @click="downloadMe2" class="w-max text-white">{{$t('registerPage.file2')}}</button>
                <button @click="downloadMe3" class="w-max text-white">{{$t('registerPage.file3')}}</button>
                <button @click="downloadMe4" class="w-max text-white">{{$t('registerPage.file4')}}</button>
                <button @click="downloadMe5" class="w-max text-white">{{$t('registerPage.file5')}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        downloadMe() {
      const link = document.createElement('a')
      link.href = '/file1.docx'
      link.download = 'file1.docx'
      link.target = '_blank'
      link.click()
    },
        downloadMe2() {
      const link = document.createElement('a')
      link.href = '/file2.docx'
      link.download = 'file2.docx'
      link.target = '_blank'
      link.click()
    },
        downloadMe3() {
      const link = document.createElement('a')
      link.href = '/file3.docx'
      link.download = 'file3.docx'
      link.target = '_blank'
      link.click()
    },
        downloadMe4() {
      const link = document.createElement('a')
      link.href = '/file4.pdf'
      link.download = 'file4.pdf'
      link.target = '_blank'
      link.click()
    },
        downloadMe5() {
      const link = document.createElement('a')
      link.href = '/file5.pdf'
      link.download = 'file5.pdf'
      link.target = '_blank'
      link.click()
    },
    }
}
</script>

<style>

</style>