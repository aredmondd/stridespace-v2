<template>
    <!-- desktop version -->
    <div class="hidden sm:flex items-center justify-center gap-12 mt-24">
        <div class="flex flex-col items-center justify-center font-martian-mono">
            <p class="mb-4 text-3xl">1</p>
            <img src="../assets/ss.png" alt="" width="200" class="border-2 border-white">
            <p class="mt-4">sign up</p>
        </div>
        <div class="arrow"></div>
        <div class="flex flex-col items-center justify-center font-martian-mono">
            <p class="mb-4 text-3xl">2</p>
            <img src="../assets/strava.png" alt="" width="200" class="bg-[#FC4C02]">
            <p class="mt-4">connect your <a href="https://www.strava.com" class="underline underline-offset-2 hover:text-purple transition-all duration-250 ease-in-out" target="_blank">strava</a></p>
        </div>
        <div class="arrow"></div>
        <div class="flex flex-col items-center justify-center font-martian-mono">
            <p class="mb-4 text-3xl">3</p>
            <img src="../assets/art/strava_opp.png" alt="" width="200">
            <p class="mt-4">start using stridespace!</p>
        </div>
    </div>

    <!-- mobile version -->
    <div class="sm:hidden flex flex-col items-center justify-center gap-12 mt-24">
        <div class="flex flex-col items-center justify-center font-martian-mono">
            <img src="../assets/ss.png" alt="" width="200" class="border-2 border-white">
            <p class="mt-4">sign up</p>
        </div>
        <div class="mobile-arrow"></div>
        <div class="flex flex-col items-center justify-center font-martian-mono">
            <img src="../assets/strava.png" alt="" width="200">
            <p class="mt-4">connect your <a href="https://www.strava.com" class="underline underline-offset-2 hover:text-purple transition-all duration-250 ease-in-out" target="_blank">strava</a></p>
        </div>
        <div class="mobile-arrow"></div>
        <div class="flex flex-col items-center justify-center font-martian-mono">
            <img src="../assets/art/strava_opp.png" alt="" width="200">
            <p class="mt-4">start using stridespace!</p>
        </div>
    </div>
</template>

<style scoped>
.arrow {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 6px;
  margin: 26px 0;
  border-radius: 9999px;
  background-color: #fcf7f8;
}

.arrow::before,
.arrow::after {
  content: "";
  position: absolute;
  top: calc(50% - 3px);
  right: 0;
  width: 45px;
  height: 6px;
  border-radius: 9999px;
  background-color: #fcf7f8;
  transform-origin: calc(100% - 3px) 50%;
}

.arrow::before {
  transform: rotate(45deg);
}

.arrow::after {
  transform: rotate(-45deg);
}

.mobile-arrow {
  position: relative;
  display: inline-block;
  width: 6px; /* Vertical arrow */
  height: 100px; /* Adjust height to define arrow size */
  margin: 0 26px;
  border-radius: 9999px;
  background-color: #fcf7f8;
}

.mobile-arrow::before,
.mobile-arrow::after {
  content: "";
  position: absolute;
  left: calc(50% - 3px); /* Center horizontally */
  bottom: 0;
  width: 6px; /* Keep same width */
  height: 45px; /* Adjust height */
  border-radius: 9999px;
  background-color: #fcf7f8;
  transform-origin: 50% calc(100% - 3px);
}

.mobile-arrow::before {
  transform: rotate(45deg);
}

.mobile-arrow::after {
  transform: rotate(-45deg);
}



</style>