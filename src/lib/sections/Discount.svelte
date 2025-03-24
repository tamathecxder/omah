<script lang="ts">
  import Button from "../components/Button.svelte";
</script>  

<section class="pb-16 lg:pb-32">
    <div class="flex flex-col items-center justify-center bg-primary px-5 py-20 gap-10">
        <h2 class="max-w-xl font-medium text-white text-2xl lg:text-5xl text-center leading-tight">Subscribe to get a discount of 30%</h2>

        <div class="min-w-full lg:min-w-[740px] flex flex-col lg:flex-row items-center justify-between bg-white p-4 gap-5">
            <input type="text" class="border border-transparent h-[60px] w-full p-2 text-sm focus:outline-none focus:ring-0 focus:border-primary/100" placeholder="Enter your email address">
            <Button text="Subscribe" />
        </div>
    </div>
</section>