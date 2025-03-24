<script>
    import { onMount } from "svelte";
    import Button from "./Button.svelte";
    import omah from "/assets/omah.svg";
    
    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    };

    onMount(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) isOpen = false;
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });
</script>

<nav class="flex flex-col lg:flex-row lg:items-center items-start justify-between py-5 lg:py-10 gap-4 lg:gap-0">
    <!-- Logo -->
    <div class="w-full flex justify-between items-center lg:w-auto">
        <a href="/" aria-label="Omah">
            <img src={omah} alt="Omah Logo" />
        </a>

        <!-- Hamburger Button -->
        <button
            class="lg:hidden p-2 rounded-md focus:outline-none focus:ring-0 focus:ring-transparent text-2xl"
            on:click={toggleMenu}
        >
            {#if isOpen}
                ✖️
            {:else}
                ☰
            {/if}
        </button>
    </div>

    <!-- Mobile Menu -->
    <ul
        class="max-sm:w-full flex flex-col lg:flex-row items-start lg:items-center justify-start gap-8 lg:gap-16 text-sm lg:text-base
               transition-all duration-300 ease-in-out 
               {isOpen ? 'block' : 'hidden'} lg:flex"
    >
        <li>
            <a href="/" aria-label="Home">Home</a>
        </li>
        <li>
            <a href="/" aria-label="To Rent">To Rent</a>
        </li>
        <li>
            <a href="/" aria-label="For Sale">For Sale</a>
        </li>
        <li>
            <a href="/" aria-label="Blog">Blog</a>
        </li>
        <li class="max-sm:w-full">
            <Button text="Log In" />
        </li>
    </ul>
</nav>
