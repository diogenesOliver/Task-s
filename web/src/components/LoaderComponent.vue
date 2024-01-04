<template>
    <div class="loader">
        <div class="dot-pulse" id="loader_race_by">
            <div class="dot-pulse__dot"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { DotPulse } from '@uiball/loaders';

DotPulse({
    size: 80,
    speed: 1.4,
    color: 'black'
})

export default {
    name: "loader"
}
</script>

<style scoped>
.dot-pulse {
    --uib-size: 40px;
    --uib-speed: 1.3s;
    --uib-color: #8257E5;

    position: relative;
    display: none;
    align-items: center;
    justify-content: space-between;
    width: var(--uib-size);
    height: calc(var(--uib-size) * 0.27);
}

.dot-pulse__dot,
.dot-pulse::before,
.dot-pulse::after {
    content: '';
    display: block;
    height: calc(var(--uib-size) * 0.18);
    width: calc(var(--uib-size) * 0.18);
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
}

.dot-pulse::before {
    animation: pulse var(--uib-speed) ease-in-out infinite;
}

.dot-pulse__dot {
    animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * 0.125) infinite both;
}

.dot-pulse::after {
    animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * 0.25) infinite;
}
</style>