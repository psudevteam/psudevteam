<script setup>
import Navbar from '../components/Navbar/index.vue'
import Banner from '../components/Banner/index.vue'
</script>
<template>
    <Navbar />
    <Banner>
        <h1 class="text-[100px] text-white font-bold">Wellcome to PSUDevteam</h1>
        <div class="flex space-x-[20px]">
            <button
                class="rounded-lg bg-yellow-300 border-4 border-yellow-100 shadow-md hover:bg-opacity-0 text-white hover:text-yellow-400 hover:border-yellow-300 font-medium w-[200px] h-[60px]"
            >Bergabung Sekarang</button>
            <button
                class="rounded-lg border-4 border-yellow-300 text-yellow-400 shadow-md hover:bg-yellow-300 hover:border-yellow-100 hover:text-white font-medium w-[200px] h-[60px]"
            >Pelajari Lebih Lanjut</button>
        </div>
    </Banner>
</template>