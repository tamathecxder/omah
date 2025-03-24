<script lang="ts">
    import Navbar from "./lib/components/Navbar.svelte";
    import Hero from "./lib/sections/Hero.svelte";
    import Latest from "./lib/sections/Latest.svelte";
    import Testimonial from "./lib/sections/Testimonial.svelte";
    import data from "./lib/utils/data";
</script>

<div class="container mx-auto">
    <Navbar />
    
    <main class="py-10">
        <Hero data={data.hero} />
        <Latest latestItems={data.latest} />
        <Testimonial testimonials={data.testimonials} />
    </main>
</div>

<style></style>