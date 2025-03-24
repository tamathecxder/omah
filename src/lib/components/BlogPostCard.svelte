<script lang="ts">
    import type { BlogPost } from "../types/blog-post";

    export let post: BlogPost;
    export let firstIndex: boolean = false;
</script>

{#if firstIndex}
    <div class="flex flex-col justify-start items-start">
        <div class="flex items-center justify-start w-full h-[400px] relative">
            <img src={post.image_path} class="w-full h-full object-center object-cover" alt={post.title} />
            <div
                class="min-w-[150px] bg-white absolute bottom-0 left-0 p-4 shadow-md flex items-center justify-center"
            >
                <span class="text-base font-medium text-primary">{post.title}</span>
            </div>
        </div>
        <div class="flex flex-col gap-4 items-start justify-start mt-6">
            <h4 class="max-w-2xl font-regular text-2xl line-clamp-2">{post.short_desc}</h4>
        </div>
    </div>
{:else}
    <div class="flex flex-row-reverse justify-start items-start gap-6">
        <div class="flex items-center justify-start w-[280px] h-[184px] relative">
            <img src={post.image_path} class="w-full h-full object-center object-cover" alt="{post.title}" />
        </div>
        <div class="flex flex-col gap-10 items-start justify-start">
            <h4 class="max-w-xl font-regular text-2xl line-clamp-3">{post.short_desc}</h4>
            <h4 class="max-w-xl font-regular text-base text-txt-light line-clamp-3">{post.writer_name}</h4>
        </div>
    </div>
{/if}
