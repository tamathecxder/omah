<script>
    import Button from "./Button.svelte";
    import omah from "/assets/omah.svg";
</script>

<nav class="flex items-center justify-between py-10">
    <a href="/" aria-label="Omah">
        <img src={omah} alt="Omah Logo" />
    </a>
    <ul class="flex items-center justify-start gap-16 text-base">
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
        <li>
            <Button text="Log In" />
        </li>
    </ul>
</nav>
