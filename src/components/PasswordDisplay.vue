<style scoped>
.wrap {
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>

<template>
    <div class="alert alert-success">
        <p class="wrap">{{ password }}</p>
    </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps<{ password: string }>();
const { password } = toRefs(props);
</script>
