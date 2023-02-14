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
        <div class="row justify-content-center">
            <div class="col-auto">
                <h1>About Us</h1>
            </div>
        </div>
        <div class="row py-1 justify-content-center">
            <div class="col-auto">
                <div class="bg-secondary p-4 rounded">
                    Author: <a href="https://github.com/wtlgo">@wtlgo</a> <br />
                    Yada yada yada...
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                <button class="btn btn-secondary" @click="onHome">Home</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const onHome = () => router.push({ name: "home" });
</script>
