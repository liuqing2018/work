<template>
    <div class="c-main">
        <hr>
        <h3 class="c-headline">折线图</h3>
        <div class="p-10">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            this.chartSettings = {};
            this.chartColors = ['#f00', '#0f0', '#f00'];
            return {
                chartData: {}
            };
        },
        created () {
        }
    };
</script>
