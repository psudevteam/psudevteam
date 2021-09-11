<script setup>
import Logo from '../../assets/img/logo/logo.png'
</script>
<template>
    <nav class="flex bg-[#62cdf3] justify-between items-center px-[20px] h-[60px]">
        <div class="flex space-x-[10px] items-center">
            <img class="w-[45px]" :src="Logo" alt />
            <h1 class="text-[18px] font-medium text-white">PSU Devteam</h1>
        </div>
        <ul class="flex text-white font-medium text-[16px] space-x-[16px]">
            <li class="flex hover:border-b-2">Home</li>
            <li class="flex hover:border-b-2">About</li>
            <li class="flex hover:border-b-2">Contact</li>
            <li class="flex hover:border-b-2">Gathering</li>
            <li class="flex hover:border-b-2">How its work</li>
        </ul>
        <ul class="flex space-x-[10px]">
            <li
                class="flex rounded-lg h-10 items-center justify-center font-bold hover:bg-blue-400 text-white bg-blue-500 w-20"
            >Login</li>
            <li
                class="flex rounded-lg justify-center items-center font-bold text-white hover:bg-blue-500 bg-blue-400 w-20"
            >Register</li>
        </ul>
    </nav>
</template>