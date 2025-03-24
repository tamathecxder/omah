<script lang="ts">
  import type { BlogPost } from "../types/blog-post";

  export let post: BlogPost;
  export let firstIndex: boolean = false;
</script>

{#if firstIndex}
  <div class="flex flex-col justify-start items-start w-full">
    <div class="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden">
      <img src={post.image_path} class="w-full h-full object-cover" alt={post.title} />

      <div class="absolute bottom-0 left-0 bg-white px-4 py-3 shadow-md flex items-center gap-4">
        <div class="rounded-full p-4 bg-amber-100"></div>
        <div class="flex flex-col text-xs">
          <span class="font-medium">{post.writer_name}</span>
          <span class="text-txt-light">Admin</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 mt-6">
      <h4 class="text-lg sm:text-xl lg:text-2xl font-medium line-clamp-3">{post.title}</h4>
      <h4 class="text-sm sm:text-base text-txt-light line-clamp-2">{post.short_desc}</h4>
    </div>
  </div>
{:else}
  <div class="flex items-start gap-4 lg:gap-6">
    <div class="w-[200px] md:w-[240px] lg:w-[280px] aspect-[16/9] flex-shrink-0 overflow-hidden">
      <img src={post.image_path} class="w-full h-full object-cover" alt={post.title} />
    </div>

    <div class="flex flex-col gap-2 lg:gap-3 max-w-sm md:max-w-md lg:max-w-lg">
      <h4 class="text-sm sm:text-base lg:text-xl font-medium line-clamp-3">{post.title}</h4>
      <h4 class="text-xs sm:text-sm text-txt-light line-clamp-3">{post.writer_name}</h4>
    </div>
  </div>
{/if}
