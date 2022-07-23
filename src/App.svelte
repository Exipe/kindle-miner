<script>
    import { INITIAL_STATE, READY_STATE, Status } from "./func/stores";
    import VocabSelector from "./lib/VocabSelector.svelte";
    import VocabTable from "./lib/VocabTable.svelte";

    $: state = $Status.state;
</script>

<main>
    <h1>Kindle Miner</h1>
    <hr />

    <div id="content">
        {#if state == INITIAL_STATE}
            <VocabSelector />
        {:else if state == READY_STATE}
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
