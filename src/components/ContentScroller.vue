<script setup>
const images = import.meta.glob('../assets/art/*.png', { eager: true });

const imageList = Object.values(images).map((image) => ({ src: image.default }));

// Shuffle function (Fisher-Yates algorithm)
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

shuffleArray(imageList); // Shuffle images on load

console.log(imageList);
</script>

<template>
    <h2 class="mt-48 font-martian-mono text-xl opacity-75 mb-6 mx-12 text-center sm:text-4xl">recently generated art</h2>
    <div class="flex-grow flex items-center mb-4">
        <div class="w-full inline-flex flex-nowrap overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,white,black,transparent_100%)] group">
            <ul class="flex animate-loop-fast-scroll sm:animate-loop-scroll">
                <li v-for="(image, index) in imageList" :key="index" class="w-40 sm:w-64 mr-3 sm:mr-4 h-full">
                    <img
                        :src="image.src"
                        :alt="'Image ' + (index + 1)"
                        class="w-full h-full object-cover"
                    />
                </li>
            </ul>
            <ul class="flex animate-loop-fast-scroll sm:animate-loop-scroll" aria-hidden="true">
                <li v-for="(image, index) in imageList" :key="'duplicate-' + index" class="w-40 sm:w-64 mr-3 sm:mr-4 h-full">
                    <img
                        :src="image.src"
                        :alt="'Image ' + (index + 1)"
                        class="w-full h-full object-cover"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>