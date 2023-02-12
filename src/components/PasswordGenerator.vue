<template>
    <div align="center">
        <input
            :id="lengthId"
            type="number"
            v-model.number="passwordLength"
            min="1"
            :disabled="loading"
        />
        <label class="ps-1" :for="lengthId"> Length </label>
        <br />

        <input
            :id="uppercaseId"
            type="checkbox"
            v-model="uppercase"
            :disabled="loading"
        />
        <label class="ps-1" :for="uppercaseId"> Uppercase </label>
        <br />

        <input
            :id="numbersId"
            type="checkbox"
            v-model="numbers"
            :disabled="loading"
        />
        <label class="ps-1" :for="numbersId"> Numbers </label>
        <br />

        <input
            :id="specialId"
            type="checkbox"
            v-model="special"
            :disabled="loading"
        />
        <label class="ps-1" :for="specialId"> Special Characters </label>
        <br />

        <button class="btn btn-primary" :disabled="loading" @click="onCreate">
            Generate Password
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useGeneratorStore } from "../store/generator";
import { storeToRefs } from "pinia";

const emit = defineEmits<{
    (e: "new-password", password: string): void;
}>();

const lengthId = crypto.randomUUID();
const uppercaseId = crypto.randomUUID();
const numbersId = crypto.randomUUID();
const specialId = crypto.randomUUID();

const generatorStore = useGeneratorStore();
const { generate } = generatorStore;
const { passwordLength, uppercase, numbers, special } =
    storeToRefs(generatorStore);

const loading = ref(false);

const onCreate = () => {
    loading.value = true;
    emit("new-password", generate());
    loading.value = false;
};
</script>
