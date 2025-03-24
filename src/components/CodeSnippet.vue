<template>
  <div class="flex flex-col gap-4 mb-24 text-sm sm:text-lg">
    <h2 class="font-martian-mono">
      noise_scale<span class="text-vs-red"> = </span> <span class="text-vs-blue">max(10</span>,
      <span class="text-vs-blue">int</span><span class="text-vs-yellow"> (</span
      ><span class="text-vs-blue">20 </span> <span class="text-vs-red"> + </span>
      <span class="text-vs-purple">(</span><span class="text-vs-green">pace </span>
      <span class="text-vs-red">- </span> <span class="text-vs-blue">10</span
      ><span class="text-vs-purple">)</span> <span class="text-vs-red"> * </span>
      <span class="text-vs-blue">2</span><span class="text-vs-yellow">)</span
      ><span class="text-vs-blue">)</span>
    </h2>
    <h2 class="font-martian-mono">
      displacement_scale<span class="text-vs-red"> = </span> <span class="text-vs-blue">5</span>
      <span class="text-vs-red"> + </span> <span class="text-vs-blue">(</span
      ><span class="text-vs-green">duration</span> <span class="text-vs-red"> / </span>
      <span class="text-vs-blue">30)</span>
    </h2>
    <h2 class="font-martian-mono">
      gaussian_sigma<span class="text-vs-red"> = </span> <span class="text-vs-blue">0.005</span>
      <span class="text-vs-red"> + </span> <span class="text-vs-blue">(</span
      ><span class="text-vs-green">distance </span> <span class="text-vs-red">/ </span>
      <span class="text-vs-blue">10) </span> <span class="text-vs-red">* </span>
      <span class="text-vs-blue">0.001</span>
    </h2>
  </div>
</template>
