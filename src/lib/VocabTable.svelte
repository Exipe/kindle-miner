<script>
    import { Hidden, Status } from "../func/stores";
    $: vocab = $Status.vocab;
    $: hidden = new Set($Hidden);

    $: entries = vocab.filter((entry) => !hidden.has(entry.id));

    const formatContext = (entry) => {
        const { context, word } = entry;

        for(let i = 0; i < word.length; i++) {
            const term = word.substring(0, word.length - i);
            if(context.includes(term)) {
                return context.replaceAll(term, `<span class="highlight">${term}</span>`);
            }
        }
    };

    const hide = (entry) => {
        Hidden.update((value) => [...value, entry.id]);
    };
</script>

<table>
    <tr>
        <th>Word</th>
        <th>Context</th>
        <th>Frequency</th>
        <th>Actions</th>
    </tr>

    {#each entries as entry}
        <tr>
            <td>{entry.word}</td>
            <td>
                <div class="context">
                    {@html formatContext(entry)}
                </div>
            </td>
            <td>{entry.frequency ?? "-"}</td>
            <td>
                <div class="actions">
                    <div on:click={() => hide(entry)}>Hide</div>
                </div>
            </td>
        </tr>
    {/each}
</table>

<style>
    .context {
        white-space: normal;
    }

    .actions {
        color: rgb(0, 155, 255);
        width: fit-content;
        display: flex;
        gap: 1em;
    }

    .actions * {
        cursor: pointer;
    }
</style>