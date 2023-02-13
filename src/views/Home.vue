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
            <div class="col-auto"><h1>Password Generator</h1></div>
            <div class="col" />
        </div>
        <div class="row py-1">
            <div class="col d-flex justify-content-center">
                <password-generator @new-password="onNewPassword" />
            </div>
        </div>
        <div class="row">
            <div class="col" />
            <div class="col-auto">
                <button class="btn btn-warning" @click="onAbout">About</button>
            </div>
            <div class="col" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import PasswordGenerator from "../components/PasswordGenerator.vue";
import { usePasswordStore } from "../store/password";

const router = useRouter();

const { add } = usePasswordStore();

const onNewPassword = (password: string) => {
    const id = add(password);
    router.push({ name: "new-password", params: { id } });
};

const onAbout = () => router.push({ name: "about" });
</script>
