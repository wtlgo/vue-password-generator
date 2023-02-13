<style lang="scss">
$primary: #f90bcb;
$secondary: #251929;
$warning: darkorange;

@import "../node_modules/bootstrap/scss/bootstrap";

input[type="checkbox"]:checked {
    background-color: $primary !important;
}

* {
    touch-action: pan-y;
}

html,
body,
div#app {
    min-height: 100vh;
}
</style>

<style lang="scss" scoped>
.background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url("/images/background.png");

    z-index: -1;
    touch-action: none;
}
</style>

<template>
    <div class="background" />
    <router-view />
</template>
