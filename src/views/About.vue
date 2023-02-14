<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col" />
            <div class="col-auto">
                <h1>ABOUT US</h1>
            </div>
            <div class="col" />
        </div>
        <div class="row py-1">
            <div class="col d-flex justify-content-center">
                <div class="bg-secondary p-4 rounded">
                    Author: <a href="https://github.com/wtlgo">@wtlgo</a> <br />
                    Yada yada yada...
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col" />
            <div class="col-auto">
                <button class="btn btn-secondary" @click="onHome">Home</button>
            </div>
            <div class="col" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const onHome = () => router.push({ name: "home" });
</script>
