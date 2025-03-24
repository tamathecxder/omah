<script lang="ts">
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import Title from "../components/Title.svelte";
  import ViewAll from "../components/ViewAll.svelte";
  import type { BlogPost } from "../types/blog-post";

  export let blogPosts: BlogPost[];

  const firstPost = blogPosts[0] ?? [];
  const smallPosts = blogPosts.filter((val, index) => index != 0);
</script>

<section class="pb-32">
  <div class="flex flex-row items-center justify-between mb-14">
    <Title value="Always check our latest blog" />

    <ViewAll />
  </div>

  <div class="grid grid-cols-2 auto-rows-fr gap-8">
    <BlogPostCard firstIndex={true} post={firstPost} />
    <div class="flex flex-col gap-4 my-5">
      {#each smallPosts as post}
        <BlogPostCard {post} />
      {/each}
    </div>
  </div>
</section>
