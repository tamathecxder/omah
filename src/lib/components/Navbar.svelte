<script>
    import Button from "./Button.svelte";
    import omah from "/assets/omah.svg";
</script>

<nav class="flex flex-col lg:flex-row lg:items-center items-start justify-between py-5 lg:py-10 gap-4 lg:gap-0">
    <a href="/" aria-label="Omah">
        <img src={omah} alt="Omah Logo" />
    </a>
    <ul class="max-sm:w-full flex flex-col lg:flex-row items-start lg:items-center justify-start gap-8 lg:gap-16 text-sm lg:text-base">
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
