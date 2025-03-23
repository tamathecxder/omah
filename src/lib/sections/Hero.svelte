<script lang="ts">
    import jumbotron from "/assets/jumbotron.png";
    import chevronDown from "/assets/chevron-down.svg";
    import Button from "../components/Button.svelte";
    import type { Hero } from "../types/hero";

    export let data: Hero;
</script>

<section class="pb-32 relative">
    <div class="flex flex-col lg:flex-row items-center justify-between mb-10 z-10">
        <h1 class="max-w-lg font-medium text-6xl leading-snug">
            {data.heading}
        </h1>

        <div class="flex flex-row items-start justify-start gap-x-4">
            <span class="w-8 h-1 bg-primary"></span>

            <p class="max-w-xs tracking-wide -mt-2 text-lg text-txt-light text-start">
                {data.description}
            </p>
        </div>
    </div>
    <div class="relative mb-10 z-0 container">
        <img src={jumbotron} alt="Jumbotron" class="h-[480px] w-full object-center object-cover" />
        <div class="absolute flex items-center gap-10 right-0 bottom-0 translate-y-1/2 bg-white shadow-md">
            <div class="flex flex-row gap-20 p-8">
                <div class="flex flex-col gap-1">
                    <span class="inline-flex gap-2 font-medium"
                        >Select City <img src={chevronDown} alt="Chevron Down" /></span
                    >
                    <span class="text-txt-light">{data.selected_city}</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="inline-flex gap-2 font-medium"
                        >Price <img src={chevronDown} alt="Chevron Down" /></span
                    >
                    <span class="text-txt-light">{data.selected_price}</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="inline-flex gap-2 font-medium"
                        >Rooms <img src={chevronDown} alt="Chevron Down" /></span
                    >
                    <span class="text-txt-light">{data.selected_rooms}</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="inline-flex gap-2 font-medium"
                        >Footage <img src={chevronDown} alt="Chevron Down" /></span
                    >
                    <span class="text-txt-light">{data.selected_footage}</span>
                </div>
            </div>
    
            <div class="pr-4">
                <Button text="Search" type="long" />
            </div>
        </div>
    </div>
</section>
