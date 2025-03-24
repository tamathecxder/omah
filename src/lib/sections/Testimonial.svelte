<script lang="ts">
    import TestimonialCard from "../components/TestimonialCard.svelte";
    import Title from "../components/Title.svelte";
    import ViewAll from "../components/ViewAll.svelte";
    import type { Testimonial } from "../types/testimonial";

    export let testimonials: Testimonial[];
</script>

<section class="pb-16 lg:pb-32">
    <div class="flex flex-row items-center justify-between mb-14">
        <Title value="Some people are very satisfied buying a house here" />
        <ViewAll />
    </div>
    
    <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {#each testimonials as testimonial}
          <div class="flex-none w-full sm:w-1/2 md:w-2/5 lg:w-1/4 snap-start">
            <TestimonialCard {testimonial} />
          </div>
        {/each}
    </div>
</section>
