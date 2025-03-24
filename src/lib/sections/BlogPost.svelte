<script lang="ts">
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import Title from "../components/Title.svelte";
  import ViewAll from "../components/ViewAll.svelte";
  import type { BlogPost } from "../types/blog-post";

  export let blogPosts: BlogPost[];

  const firstPost = blogPosts[0] ?? [];
  const smallPosts = blogPosts.filter((_, index) => index != 0);
</script>

<section class="pb-16 lg:pb-32">
  <div class="flex flex-col md:flex-row items-center justify-between mb-10">
    <Title value="Always check our latest blog" />
    <ViewAll />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <BlogPostCard firstIndex={true} post={firstPost} />

    <div class="flex flex-col gap-6">
      {#each smallPosts as post}
        <BlogPostCard {post} />
      {/each}
    </div>
  </div>
</section>
