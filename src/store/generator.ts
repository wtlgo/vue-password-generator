import cryptoRandomString from "crypto-random-string";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useGeneratorStore = defineStore("generator", () => {
    const passwordLengthStorage = ref(12);
    const passwordLength = computed({
        get: () => passwordLengthStorage.value,
        set: (val) => (passwordLengthStorage.value = Math.max(1, val)),
    });

    const uppercase = ref(false);
    const numbers = ref(false);
    const speacial = ref(false);

    const generate = () => {
        let characters = "abcdefghijklmnopqrstuvwxyz";

        if (uppercase.value) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (numbers.value) {
            characters += "0123456789";
        }

        if (speacial.value) {
            characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        }

        const password = cryptoRandomString({
            length: passwordLength.value,
            characters,
        });

        return password;
    };

    return { passwordLength, uppercase, numbers, speacial, generate };
});

export { useGeneratorStore };
