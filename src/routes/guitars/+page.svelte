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
            <h3>The Parlor</h3>
            <h6 class="lighttext">Parlor</h6>
        </a>
    </div>
    <div class="column center">
        <a href="/guitars/000">
            <h3>The "Doc Martin"</h3>
            <h6 class="lighttext">Triple Zero</h6>
        </a>
    </div>
    
</div>
<div in:fade={{duration:1000}} class="row">
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="guitar5.jpeg" alt="Creede Guitar Parlor" width="70%" class="hover" on:click={() => goto('/guitars/parlor')}>
    </div>
    <div class="column center">
       
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="000_1-03.jpg" alt="Creede Guitar 000" width="70%" class="hover" on:click={() => goto('/guitars/000')}>
    </div>
</div>
<br>
<br>
<div in:fade={{duration:1000}} class="row">
<div class="column center">
        <a href="/guitars/dreadnoughtcutaway">
            <h3>Bryan's Legacy</h3>
            <h6 class="lighttext">Dreadnought Cutaway</h6>
        </a>
    </div>

    <div class="column center">
            <a href="/guitars/om12fret">
                <h3>The Blacktail Canyon</h3>
                <h6 class="lighttext">Large Soundhole OM 12 Fret</h6>
            </a>
        </div>
    </div>
<div in:fade={{duration:1000}} class="row">
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="dread-14.jpg" alt="Creede Guitar Dreadnought Cutaway" width="70%" class="hover" on:click={() => goto('/guitars/dreadnoughtcutaway')}>
    </div>
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="om12-02.jpg" alt="Creede Guitar Dreadnought Cutaway" width="70%" class="hover" on:click={() => goto('/guitars/om12fret')}>
    </div>
</div>
<br>
<br>
<div in:fade={{duration:1000}} class="row">

    <div class="column center">
            <a href="/guitars/om12fret">
                <h3>Night in Creede</h3>
                <h6 class="lighttext">OM 14 Fret Cutaway</h6>
            </a>
        </div>
    </div>
<div in:fade={{duration:1000}} class="row">
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="om14cut-18.jpg" alt="Creede Guitar OM 14 Cutaway" width="35%" class="hover" on:click={() => goto('/guitars/omcutaway14')}>
    </div>
</div>

  
<style>
    .lighttext {
        font-style: italic;
    }

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