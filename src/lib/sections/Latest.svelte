<script lang="ts">
    import HouseCard from "../components/HouseCard.svelte";
    import Title from "../components/Title.svelte";
    import ViewAll from "../components/ViewAll.svelte";
    import type { LatestProperty } from "../types/latest-property";

    export let latestItems: LatestProperty[];
</script>

<section class="pb-16 lg:pb-32">
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-14">
        <div class="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto justify-center gap-7 lg:gap-14">
            <div class="hidden lg:block">
                <Title value="The Latest" />
            </div>

            <div class="flex justify-between w-full lg:hidden">
                <Title value="The Latest" />
                <ViewAll />
            </div>

            <div class="flex flex-row gap-8 text-lg lg:text-2xl">
                <button class="text-primary">For Sale</button>
                <button class="text-txt-light">To Rent</button>
            </div>
        </div>
        
        <div class="hidden lg:block">
            <ViewAll />
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {#each latestItems as item}
            <HouseCard {item} />
        {/each}
    </div>
</section>