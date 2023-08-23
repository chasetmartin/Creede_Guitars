<script>
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';
</script>
  
  
<div in:fade={{duration:1000}} class="row">
    <div>
        <h1>The Guitars</h1>
        <p>Click on a guitar to learn more about it!</p>
        <br>
    </div>
</div>
<div in:fade={{duration:1000}} class="row">
    <div class="column center">
        <a href="/guitars/parlor">
            <h3>Parlor</h3>
        </a>
    </div>
    <div class="column center">
        <a href="/guitars/000">
            <h3>Triple Zero</h3>
        </a>
    </div>
</div>
<div in:fade={{duration:1000}} class="row">
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="guitar5.jpeg" alt="Creede Guitar" width="70%" class="hover" on:click={() => goto('/guitars/parlor')}>
    </div>
    <div class="column center">
       
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="000_1-03.jpg" alt="Creede Guitar" width="70%" class="hover" on:click={() => goto('/guitars/000')}>
    </div>
</div>

  
<style>

    .row {
        display: flex;
    }
    .column {
        flex: 50%;
        padding: 5px; /* Add some spacing between columns */
        box-sizing: border-box; /* Include padding in column width */
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hover:hover {
        transition: transform .3s; /* Animation */
        transform: scale(1.01);
        cursor: pointer;
    }
</style>