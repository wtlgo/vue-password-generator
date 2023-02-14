<style lang="scss">
$primary: #f90bcb;
$secondary: #251929;
$warning: darkorange;

@import "../node_modules/bootstrap/scss/bootstrap";

* {
    touch-action: pan-y;
}

html,
body,
div#app {
    min-height: 100vh;
}

.glow {
    color: #fff;

    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px $primary,
        0 0 40px $primary, 0 0 50px $primary, 0 0 60px $primary,
        0 0 70px $primary;
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
