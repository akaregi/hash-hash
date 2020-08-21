<script lang="ts">
    import * as sha from './SHA'

    export let text: string
    export let variant: sha.Variant

    $: digest = sha.hash(variant, text)
</script>

<h2>{ variant }</h2>
<p><code>{ digest }</code></p>

<style scoped>
    h2 {
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
    }
    
    code {
        word-break: break-all;
    }
</style>