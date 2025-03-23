<script lang="ts">
    import type { LatestProperty } from "../types/latest-property";
    import displayTotalRoom from "../utils/helper";

    export let item: LatestProperty;
</script>

<div class="flex flex-col justify-start items-start">
    <div class="flex items-center justify-center w-full h-full bg-amber-200 relative">
        <img src={item.image_path} class="h-full object-center object-contain" alt="xxx">
        <div class="h-10 w-10 bg-white absolute rounded-full top-0 right-0 p-6 m-6 flex items-center justify-center cursor-pointer hover:bg-primary/10">
            <img src="/assets/love.svg" class="absolute w-6 h-6 object-center" alt="Love">
        </div>
        <div class="min-w-[100px] bg-white absolute bottom-0 left-0 p-4 shadow-md flex items-center justify-center cursor-pointer hover:bg-primary/10">
            <span class="text-base font-medium text-primary">{displayTotalRoom(item.total_rooms)}</span>
        </div>
    </div> 
    <div class="flex flex-col gap-4 items-start justify-start mt-6">
        <h3 class="font-medium text-3xl">{item.name}</h3>
        <span class="font-regular text-base">{item.address}</span>
        <span class="text-xl text-primary">{item.price}</span>
    </div>
</div>