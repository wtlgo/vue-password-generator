<style scoped>
.container-full {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

<template>
    <div class="container container-full">
        <div class="row justify-content-center">
            <div class="col-auto">
                <h1 class="glow">Your password is:</h1>
            </div>
        </div>
        <div class="row py-1 justify-content-center">
            <div class="col-auto">
                <div class="bg-secondary p-4 rounded conainer-flex">
                    <div class="row">
                        <div class="col">
                            <password-display :password="password" />
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-auto">
                            <button
                                class="btn btn-primary"
                                @click="onRegenerate"
                            >
                                Re-generate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                <button class="btn btn-secondary m-1" @click="onHome">
                    Home
                </button>
            </div>
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
