<style scoped>
.pointer {
    cursor: pointer;
}
.wrap {
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>

<template>
    <div class="alert alert-success pointer" @click="onPasswordClick">
        <p class="wrap">{{ password }}</p>
    </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps<{ password: string }>();
const { password } = toRefs(props);

const onPasswordClick = () =>
    //@ts-ignore
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(password.value);
            alert("Password was copied to clipboard");
        }
    });
</script>
