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
                <h1>Your password is:</h1>
            </div>
            <div class="col" />
        </div>
        <div class="row">
            <div class="col" />
            <div class="col-auto">
                <password-display :password="password" />
            </div>
            <div class="col" />
        </div>
        <div class="row">
            <div class="col" />
            <div class="col-auto">
                <button class="btn btn-secondary m-1" @click="onRegenerate">
                    Re-generate
                </button>
                <button class="btn btn-warning m-1" @click="onHome">
                    Home
                </button>
            </div>
            <div class="col" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { usePasswordStore } from "../store/password";
import PasswordDisplay from "../components/PasswordDisplay.vue";
import { useRouter } from "vue-router";
import { computed, toRefs } from "vue";
import { useGeneratorStore } from "../store/generator";

const router = useRouter();
const onHome = () => router.push({ name: "home" });

const props = defineProps<{ id: number }>();
const { id } = toRefs(props);

const { get, add } = usePasswordStore();
const password = computed(() => {
    const res = get(id.value);
    if (res) return res;
    onHome();
    return "";
});

const { generate } = useGeneratorStore();
const onRegenerate = () => {
    const password = generate();
    const id = add(password);
    router.push({ name: "new-password", params: { id } });
};
</script>
