<template>
    <form>
        <div class="row mb-3">
            <label class="col-sm-3 col-form-label" :for="lengthId">
                Length
            </label>
            <div class="col">
                <input
                    class="form-control"
                    :id="lengthId"
                    type="number"
                    v-model.number="passwordLength"
                    min="1"
                    :disabled="loading"
                    aria-label="Password Length"
                    :aria-describedby="lengthId"
                    inputmode="numeric"
                    pattern="[0-9]*"
                />
            </div>
        </div>
        <div class="row">
            <div class="col offset-sm-3">
                <div class="form-check form-switch">
                    <input
                        class="form-check-input"
                        :id="uppercaseId"
                        type="checkbox"
                        v-model="uppercase"
                        :disabled="loading"
                    />
                    <label class="form-check-label mx-1" :for="uppercaseId">
                        Uppercase
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col offset-sm-3">
                <div class="form-check form-switch">
                    <input
                        class="form-check-input"
                        :id="numbersId"
                        type="checkbox"
                        v-model="numbers"
                        :disabled="loading"
                    />
                    <label class="form-check-label mx-1" :for="numbersId">
                        Numbers
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col offset-sm-3">
                <div class="form-check form-switch">
                    <input
                        class="form-check-input"
                        :id="specialId"
                        type="checkbox"
                        v-model="special"
                        :disabled="loading"
                    />
                    <label class="form-check-label mx-1" :for="specialId">
                        Special Characters
                    </label>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <button
                class="col-auto btn btn-primary"
                :disabled="loading"
                @click="onCreate"
            >
                Generate Password
            </button>
        </div>
    </form>
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
