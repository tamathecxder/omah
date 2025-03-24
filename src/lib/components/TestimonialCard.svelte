<script lang="ts">
    import type { Testimonial } from "../types/testimonial";

    export let testimonial: Testimonial;
</script>

<div class="flex flex-col justify-start items-start w-full">
    <div class="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
        <img src={testimonial.image_path} class="w-full h-full object-cover" alt={testimonial.name} />
        
        <div class="absolute bottom-0 left-0 bg-white px-4 py-2">
            <span class="text-sm sm:text-base font-medium text-primary">{testimonial.name}</span>
        </div>
    </div> 

    <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg sm:text-xl font-regular leading-relaxed">{testimonial.testimony}</h4>
    </div>
</div>
