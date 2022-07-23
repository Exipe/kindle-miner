<script>
    import { Status } from "../func/stores";
    $: vocab = $Status.vocab;
</script>

<table>
    <tr>
        <th>Key</th>
        <th>Context</th>
    </tr>

    {#each vocab as entry}
        <tr>
            <td>{entry.key}</td>
            <td>{entry.context}</td>
        </tr>
    {/each}
</table>