<script>
    import { parseVocabDb } from "../func/sql";
    import { READY_STATE, Status } from "../func/stores";

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

        let vocab = await parseVocabDb(buffer);

        console.log('parse vocab', vocab);

        vocab = vocab.map((entry) => ({
            ...entry,
            // @ts-ignore
            frequency: innocent_terms_complete[entry.word]
        }));

        vocab.sort((a, b) => (b.frequency ?? 0) - (a.frequency ?? 0));
        console.log("sorted vocab", vocab);

        Status.set({
            state: READY_STATE,
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
        color: rgb(0, 155, 255);
    }
</style>