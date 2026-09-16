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
        <img in:fade={{duration:1000, delay:350}} src="/guitar5.jpeg" alt="Creede Guitar Parlor" width="70%" class="hover" on:click={() => goto('/guitars/parlor')}>
    </div>
    <div class="column center">
       
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="/000_1-03.jpg" alt="Creede Guitar 000" width="70%" class="hover" on:click={() => goto('/guitars/000')}>
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
        <img in:fade={{duration:1000, delay:350}} src="/dread-14.jpg" alt="Creede Guitar Dreadnought Cutaway" width="70%" class="hover" on:click={() => goto('/guitars/dreadnoughtcutaway')}>
    </div>
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="/om12-02.jpg" alt="Creede Guitar Dreadnought Cutaway" width="70%" class="hover" on:click={() => goto('/guitars/om12fret')}>
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
    <div class="column center">
            <a href="/guitars/000-NB">
                <h3>Blue Eyes</h3>
                <h6 class="lighttext">Norman Blake Inspired 000-12</h6>
            </a>
    </div>
</div>
<div in:fade={{duration:1000}} class="row">
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="/om14cut-18.jpg" alt="Creede Guitar OM 14 Cutaway" width="70%" class="hover" on:click={() => goto('/guitars/omcutaway14')}>
    </div>
    <div class="column center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="/blueeyes-01.jpg" alt="Creede Guitar 000 Norman Blake" width="67%" class="hover" on:click={() => goto('/guitars/000-NB')}>  
    </div>
</div>
<br>
<br>
<div in:fade={{duration:1000}} class="row">
    <div class="column center guitar-card">
        <a href="/guitars/000-DB">
            <h3>The Amethyst Vein</h3>
            <h6 class="lighttext">000-12 Deep Body</h6>
        </a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="/amethyst-01.jpg" alt="Creede Guitar 000-12 Deep Body" width="70%" class="hover" on:click={() => goto('/guitars/000-DB')}>
    </div>
    <div class="column center guitar-card">
        <a href="/guitars/lobito">
            <h3>El Lobito</h3>
            <h6 class="lighttext">Desert Ironwood Parlor</h6>
        </a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="/Lobito-8.webp" alt="El Lobito Desert Ironwood Parlor" width="70%" class="hover" on:click={() => goto('/guitars/lobito')}>
    </div>
</div>
<br>
<br>
<div in:fade={{duration:1000}} class="row">
    <div class="column center guitar-card">
        <a href="/guitars/snowfall">
            <h3>Snowfall</h3>
            <h6 class="lighttext">Creede Guitars Grand Symphony</h6>
        </a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img in:fade={{duration:1000, delay:350}} src="/Snowfall-7.webp" alt="Snowfall Grand Symphony" width="70%" class="hover" on:click={() => goto('/guitars/snowfall')}>
    </div>
    <div class="column center">
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

    .guitar-card {
        flex-direction: column;
        align-items: center;
    }

    .guitar-card img {
        margin-top: 1rem;
    }

    .hover:hover {
        transition: transform .3s; /* Animation */
        transform: scale(1.01);
        cursor: pointer;
    }
</style>