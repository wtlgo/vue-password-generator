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

    <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
        ref="modalRef"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Info
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">Password was copied to clipboard</div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { toRefs, ref } from "vue";
import { Modal } from "bootstrap";

const props = defineProps<{ password: string }>();
const { password } = toRefs(props);

const modalRef = ref<HTMLDivElement | null>(null);

const onPasswordClick = async () => {
    try {
        const { state } = await navigator.permissions.query({
            //@ts-ignore
            name: "clipboard-write",
        });

        if (state == "denied") return;
    } catch (error) {}

    await navigator.clipboard.writeText(password.value);

    if (modalRef.value) {
        const modal = new Modal(modalRef.value);
        modal.show();
    }
};
</script>
