<script lang="ts">
    let { text, type = 'short' } = $props();
</script>

<button class="{type === 'short' ? 'h-[60px]': 'h-[80px]'} px-12 bg-primary text-white font-medium hover:bg-primary/80 cursor-pointer">{text}</button>