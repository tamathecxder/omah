<script lang="ts">
    import Navbar from "./lib/components/Navbar.svelte";
    import BlogPost from "./lib/sections/BlogPost.svelte";
  import Discount from "./lib/sections/Discount.svelte";
  import Footer from "./lib/sections/Footer.svelte";
    import Hero from "./lib/sections/Hero.svelte";
    import Latest from "./lib/sections/Latest.svelte";
    import Testimonial from "./lib/sections/Testimonial.svelte";
    import data from "./lib/utils/data";
</script>

<div class="container mx-auto px-5">
    <Navbar />
    
    <main class="pt-10">
        <Hero data={data.hero} />
        <Latest latestItems={data.latest} />
        <Testimonial testimonials={data.testimonials} />
        <BlogPost blogPosts={data.blogs} />
        <Discount />
    </main>
</div>

<Footer />

<style></style>