<script>
    import { parseVocabDb } from "../func/sql";
    import { READY, Status } from "../func/stores";

    let selected = false;

    const handleDragOver = (ev) => {
        ev.preventDefault();
    };

    const handleDrop = async (ev) => {
        selected = true;
        ev.preventDefault();

        const file = ev.dataTransfer.files[0];
        console.log("file name", file.name);
        const buffer = await file.arrayBuffer();

        const vocab = await parseVocabDb(buffer);

        console.log('parse vocab', vocab);

        Status.set({
            state: READY,
            vocab,
        });
    };
</script>

{#if !selected}
    <p>Drag & drop your <span class="vocab">vocab.db</span> file</p>
{:else}
    <p>Loading...</p>
{/if}

<svelte:window 
    on:drop={handleDrop}
    on:dragover={handleDragOver} />

<style>
    .vocab {
        color: slategray;
    }
</style>