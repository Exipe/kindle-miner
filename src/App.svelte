<script>
    import { INITIAL, READY, Status } from "./func/stores";
    import VocabSelector from "./lib/VocabSelector.svelte";
import VocabTable from "./lib/VocabTable.svelte";

    $: state = $Status.state;
</script>

<main>
    <h1>Kindle Miner</h1>

    {#if state == INITIAL}
        <VocabSelector />
    {:else if state == READY}
        <VocabTable />
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
