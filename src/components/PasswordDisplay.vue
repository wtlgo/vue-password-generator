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

const onPasswordClick = async () => {
    const { state } = await navigator.permissions.query({
        //@ts-ignore
        name: "clipboard-write",
    });

    if (state != "granted" && state != "prompt") return;

    await navigator.clipboard.writeText(password.value);
    alert("Password was copied to clipboard");
};
</script>
