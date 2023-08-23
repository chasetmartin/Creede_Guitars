<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
	import Seo from '../lib/seo.svelte';
</script>

<Seo 
    type="WebSite"
    title="Creede Guitars"
    description="Building custom steel string acoustic guitars at 9,000 feet in the San Juan Mountains of Colorado"
    canonical="https://creedeguitars.com"
/>

<div class="row">
    <div in:fade={{duration:1000}} class="column">
        <div>
            <h1>Creede Guitars</h1>
            <p>{config.oneliner}</p>
            <br>
            <div class="center">
                <img in:fade={{duration:1000, delay:350}} src="000_1-02.jpg" alt="Creede Guitar" width="90%">
            </div>
        </div>
    </div>
    <div class="column columnhide">
        <div class="row">
            <div class="column center">
                <img in:fade={{duration:1000, delay:350}} src="000_1-03.jpg" alt="Creede Guitar" width="88%">
            </div>
            <!-- <div class="column center">
                <img in:fade={{duration:1000, delay:350}} src="000_1-16.jpg" alt="Creede Guitar" width="63%">
             </div> -->
          
        </div>
    </div>
  </div>

  <style>
    .row {
        display: flex;
        flex-wrap: wrap; /* Allow columns to wrap onto new line */
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

    @media (max-width: 1000px) {
        .column {
            flex: 100%; /* Make columns take full width on small screens */
        }
    }
</style>