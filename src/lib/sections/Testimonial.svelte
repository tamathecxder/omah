<script lang="ts">
    import TestimonialCard from "../components/TestimonialCard.svelte";
    import Title from "../components/Title.svelte";
    import ViewAll from "../components/ViewAll.svelte";
    import type { Testimonial } from "../types/testimonial";

    export let testimonials: Testimonial[];
</script>

<section class="pb-32">
    <div class="flex flex-row items-center justify-between mb-14">
        <Title value="Some people are very satisfied buying a house here" />
        
        <ViewAll />
    </div>
    
    <div class="flex flex-row overflow-x-auto">
        {#each testimonials as testimonial}
          <div class="flex-none w-1/2 md:w-2/5 pb-10"> <!-- Mengatur lebar item -->
            <TestimonialCard {testimonial} />
          </div>
        {/each}
      </div>
</section>