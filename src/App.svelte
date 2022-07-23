<script>
    import { INITIAL, READY, Status } from "./func/stores";
    import VocabSelector from "./lib/VocabSelector.svelte";
import VocabTable from "./lib/VocabTable.svelte";

    $: state = $Status.state;
</script>

<main>
    <h1>Kindle Miner</h1>
    <hr />

    <div id="content">
        {#if state == INITIAL}
            <VocabSelector />
        {:else if state == READY}
            <VocabTable />
        {/if}
    </div>
</main>

<style>
    h1 {
        text-align: center;
    }

    #content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
