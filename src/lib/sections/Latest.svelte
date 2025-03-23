<script lang="ts">
    import HouseCard from "../components/HouseCard.svelte";
    import Title from "../components/Title.svelte";
    import ViewAll from "../components/ViewAll.svelte";
    import type { LatestProperty } from "../types/latest-property";

    export let latestItems: LatestProperty[];
</script>

<section class="pb-32">
    <div class="flex flex-row items-center justify-between mb-14">
        <div class="flex flex-row items-center justify-center gap-14">
            <Title value="The Latest" />

            <div class="flex flex-row gap-8 text-2xl">
                <button class="text-primary">For Sale</button>
                <button class="text-txt-light">To Rent</button>
            </div>
        </div>
        
        <ViewAll />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        {#each latestItems as item}
            <HouseCard {item} />
        {/each}
    </div>
</section>