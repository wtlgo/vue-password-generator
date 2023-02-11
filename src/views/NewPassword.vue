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
            <password-display class="col-auto" :password="password" />
            <div class="col" />
        </div>
        <div class="row">
            <div class="col" />
            <div class="col-auto">
                <button class="btn btn-warning" @click="onHome">Home</button>
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

const router = useRouter();
const onHome = () => router.push({ name: "home" });

const props = defineProps<{ id: number }>();
const { id } = toRefs(props);

const { get } = usePasswordStore();
const password = computed(() => {
    const res = get(id.value);
    if (res) return res;
    onHome();
    return "";
});
</script>
