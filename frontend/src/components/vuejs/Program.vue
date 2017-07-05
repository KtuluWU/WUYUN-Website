<template>
    <div class="program">
        <div class="content">
            <div class="title bold">{{$t("vuejsMenu5")}}</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'program',
    components: {

    },
    data() {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';

.content {
    .title {
        font-size: 30px;
        text-align: left;
        margin: 30px 0;
    }
}
</style>
