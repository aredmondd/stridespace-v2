<script setup>
import FAQ from '@/components/FAQ.vue';
import MarginBlock from '@/components/MarginBlock.vue';
</script>

<template>
    <div class="flex border-b-1 border-white/15">
        <div class="flex flex-col  border-white/15 p-4">
            <div class="flex shrink items-end ">
                <div class="font-martian-mono text-purple text-8xl">ABOUT</div>
                <p class="opacity-25 ml-2 mb-1 text-sm">stride = most effective natural pace <br>space = distance? extent of a dimension? period of time?</p>
            </div>
            <div class="flex">
                <div class="font-martian-mono text-purple text-8xl ">STRIDESPACE</div>
            </div>
        </div>
        <div class="border-l-1 border-white/15 flex grow gap-4 p-4">
            <img src="../assets/red_running_cropped.JPG" alt="" class="h-48 w-40 object-cover">
            <div class="flex flex-col justify-between gap-4">
                <h3 class="opacity-50">hi, i'm aiden!</h3>
                <p class="opacity-50">i made stridespace to keep things fresh for me as an athlete and challenge me as a web developer.</p>
                <p class="opacity-50">you can see <span class="italic">exactly</span> how stridespace works and other things i'm up to <a href="https://github.com/aredmondd" target="_blank" class="underline underline-offset-2">here</a>.</p>
            </div>

        </div>
    </div>

    <MarginBlock />

    <div class="border-t-1 border-white/15">

        <FAQ title="1. why is stridespace?">
            <p>i've been thinking about making generative art based on runs for a while now. <br>it just so happened i had to make a website for a class.</p>
        </FAQ>

        <FAQ title="2. how was stridespace built?">
            <p>stridespace was built, designed, and implemented by aiden redmond for ART3510 at florida southern college.</p>
            <p>technically... stridespace was built using vue, tailwind, and python.</p>
        </FAQ>

        <FAQ title="3. why is everything in lower case or upper case?">
            <p>i'm obsessed with consistency. mixed case tends to obstruct that consistency. that's also why the main font is <a href="https://martians-font.webflow.io/" target="_blank" class="underline underline-offset-2">martian mono</a>.</p>
            <p>see more about <a href="https://stephango.com/style" target="_blank" class="underline underline-offset-2">consistent constraints</a>.</p>
        </FAQ>

        <FAQ title="4. are you secretly judging my runs?">
            <p>no. stridespace doesn't store ANY of your run's data on any server anywhere. your run is completely yours.</p>
        </FAQ>

        <FAQ title="5. you aren't making art. it's an algorithm.">
            <p>i struggled with this alot. i actually partially agree.</p>
            <p>read more about my dillema: 
                <a href="https://en.wikipedia.org/wiki/Generative_art" target="_blank" class="underline underline-offset-2">generative art wikipedia</a>, 
                <a href="https://plato.stanford.edu/entries/art-definition/" target="_blank" class="underline underline-offset-2">stanford's definition of art</a>, and
                <a href="https://www.corralldesign.com/writing/ai-harm-hypocrisy" target="_blank" class="underline underline-offset-2">the harm & hypocrisy of ai art</a>, 
            </p>
        </FAQ>

        <FAQ title="6. what if i don't have strava?">
            <p>you can make custom art based on your runs by inputting your data yourself. don't lie - the algorithm can tell when you're lying.</p>
        </FAQ>

        <FAQ title="7. what if i don't want my art to be seen by others?">
            <p>in your profile's settings, you can ask for your art not to be uploaded to the mega art :)</p>
        </FAQ>

        <FAQ title="8. my question/comment wasn't on here.">
            <p>if you have more questions, you can email me at <a href="mailto:aidenredmondd@gmail.com" class="underline underline-offset-2">aidenredmondd@gmail.com</a></p>

        </FAQ>
    </div>

    <MarginBlock />
</template>
