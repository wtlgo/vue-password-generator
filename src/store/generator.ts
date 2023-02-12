import cryptoRandomString from "crypto-random-string";
import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";
import { z } from "zod";

const generatorKey = "password-generator__generator";
const zgenerator = z.object({
    passwordLength: z.number(),
    uppercase: z.boolean(),
    numbers: z.boolean(),
    special: z.boolean(),
});

const load = () => {
    try {
        return zgenerator.parse(
            JSON.parse(localStorage.getItem(generatorKey) ?? "{}")
        );
    } catch (error) {
        return {
            passwordLength: 12,
            uppercase: false,
            numbers: false,
            special: false,
        };
    }
};

const save = (data: z.infer<typeof zgenerator>) => {
    localStorage.setItem(generatorKey, JSON.stringify(data));
};

const useGeneratorStore = defineStore("generator", () => {
    const data = load();

    const passwordLengthStorage = ref(data.passwordLength);
    const passwordLength = computed({
        get: () => passwordLengthStorage.value,
        set: (val) => (passwordLengthStorage.value = Math.max(1, val)),
    });

    const uppercase = ref(data.uppercase);
    const numbers = ref(data.numbers);
    const special = ref(data.special);

    watchEffect(() => {
        save({
            passwordLength: passwordLength.value,
            uppercase: uppercase.value,
            numbers: numbers.value,
            special: special.value,
        });
    });

    const generate = () => {
        let characters = "abcdefghijklmnopqrstuvwxyz";

        if (uppercase.value) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (numbers.value) {
            characters += "0123456789";
        }

        if (special.value) {
            characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        }

        const password = cryptoRandomString({
            length: passwordLength.value,
            characters,
        });

        return password;
    };

    return { passwordLength, uppercase, numbers, special, generate };
});

export { useGeneratorStore };
