import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { z } from "zod";

const passwordsKey = "password-generator__passwords";
const zpasswords = z.array(z.string());

// TODO: Remove later
localStorage.removeItem(passwordsKey);

const load = () => {
    try {
        return zpasswords.parse(
            JSON.parse(sessionStorage.getItem(passwordsKey) ?? "[]")
        );
    } catch (error) {
        return [];
    }
};

const save = (passwords: string[]) => {
    sessionStorage.setItem(passwordsKey, JSON.stringify(passwords));
};

const usePasswordStore = defineStore("password", () => {
    const passwords = ref(load());

    watchEffect(() => {
        save(passwords.value);
    });

    const add = (password: string) => {
        passwords.value.push(password);
        return passwords.value.length - 1;
    };

    const get = (id: number) => {
        if (0 <= id && id < passwords.value.length) {
            return passwords.value[id];
        }
        return undefined;
    };

    return { add, get };
});

export { usePasswordStore };
