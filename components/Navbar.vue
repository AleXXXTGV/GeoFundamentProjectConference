<template>
    <header class="navbar w-full h-screen">
        <nav class="flex flex-col justify-between h-full">
            <div class="container top flex justify-between items-center">
                <div class="toggle md:hidden flex z-30" :class="{'active': showMobileMenu == true}" @click="showMobileMenu = !showMobileMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span class="block text-3xl h-min font-semibold">V CACSMGE</span>
            </div>
            <transition name="slide-fade">
                <ul v-show="showMobileMenu" class="container flex flex-col justify-center text-2xl font-semibold" >
                    <li class="text-center mt-8">{{ $t('headerLinks.main') }}</li>
                    <li class="text-center mt-8">{{ $t('headerLinks.about') }}</li>
                    <li class="text-center mt-8">{{ $t('headerLinks.venue') }}</li>
                    <li class="text-center mt-8">{{ $t('headerLinks.hotels') }}</li>
                    <li class="text-center mt-8">{{ $t('headerLinks.gallery') }}</li>
                    <li class="text-center mt-8">
                        <span>5-7</span>
                        <span>{{ $t('headerLinks.month') }}</span>
                        <span>2022</span>
                    </li>
                </ul>
            </transition>
            <transition name="slide-fade">
                <button v-show="showMobileMenu" class="signUpBtn text-white py-7 w-full mt-4">{{ $t('headerLinks.register') }}</button>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false
        }
    },
}
</script>

<style scoped>
.container {
    width: 90%;
    margin: 0 auto;
}

.navbar {
    background-color: #F9F1F1;
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

.slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.signUpBtn {
    background-color: #FE7575;
}
</style>