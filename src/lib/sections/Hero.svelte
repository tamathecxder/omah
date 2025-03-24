<script lang="ts">
    import jumbotron from "/assets/jumbotron.png";
    import chevronDown from "/assets/chevron-down.svg";
    import Button from "../components/Button.svelte";
    import type { Hero } from "../types/hero";

    export let data: Hero;
</script>

<section class="pb-16 lg:pb-32 relative">
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 z-10 gap-5 lg:gap-10">
        <h1 class="max-w-xs lg:max-w-lg font-medium text-3xl lg:text-6xl leading-snug">
            {data.heading}
        </h1>

        <div class="flex flex-row items-start justify-start gap-x-4">
            <span class="w-8 h-1 bg-primary"></span>

            <p class="max-w-2xs lg:max-w-xs tracking-wide -mt-2 text-sm lg:text-lg text-txt-light text-start">
                {data.description}
            </p>
        </div>
    </div>
    <div class="relative mb-10 z-0 container">
        <img src={jumbotron} alt="Jumbotron" class="h-[480px] w-full object-center object-cover" />
        <div class="static lg:absolute flex flex-col lg:flex-row items-center gap-4 lg:gap-10 right-0 bottom-0 lg:translate-y-1/2 bg-white shadow-md">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-20 p-8 text-sm lg:text-base">
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
    
            <div class="lg:pr-4 w-full lg:w-auto">
                <Button text="Search" type="long" />
            </div>
        </div>
    </div>
</section>
