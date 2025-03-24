<script lang="ts">
    import type { Testimonial } from "../types/testimonial";

    export let testimonial: Testimonial;
</script>

<div class="flex flex-col justify-start items-start">
    <div class="flex items-center justify-start w-[570px] h-[400px] relative">
        <img src={testimonial.image_path} class="h-full object-center object-cover" alt="xxx">
        <div class="min-w-[150px] bg-white absolute bottom-0 left-0 p-4 shadow-md flex items-center justify-center">
            <span class="text-base font-medium text-primary">{testimonial.name}</span>
        </div>
    </div> 
    <div class="flex flex-col gap-4 items-start justify-start mt-6">
        <h4 class="max-w-md font-regular text-2xl">{testimonial.testimony}</h4>
    </div>
</div>