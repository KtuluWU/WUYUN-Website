<template>
    <div class="toast" v-show="show && message">
        <div class="body">
            {{message}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'toast',
    props: {

    },
    data() {
        return {
            show: false,
            message: '',
            timer: null
        }
    },
    methods: {
        setMessage(message, time) {
            clearTimeout(this.timer);

            this.show = true;
            this.message = message;
            this.timer = setTimeout(() => { this.show = false; }, time || 5000);
        },
        close() {
            this.show = false;
            this.message = '';
            clearTimeout(this.timer);

        }
    }
}
</script>

<style scoped lang="scss">
@import "../styles/style";
$height: 20px;

.toast {
    position: fixed;
    left: 0px;
    display: flex;
    right: 0px;
    bottom: 0px;
    z-index: 2900;

    .body {
        margin: 0 auto;
        border-radius: 2px;
        height: $height;
        line-height: $height;
        padding: 12px;
        background: rgba($button-color, 0.8);
        color: $main-color;
    }
}
</style>
