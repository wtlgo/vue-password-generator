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
            <div class="col-auto"><h1>Password Generator</h1></div>
        </div>
        <div class="row py-1 justify-content-center">
            <div class="col-auto">
                <div class="bg-secondary p-4 rounded">
                    <password-generator @new-password="onNewPassword" />
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                <button class="btn btn-secondary" @click="onAbout">
                    About
                </button>
            </div>
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
