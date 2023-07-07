<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
</script>



<div in:fade={{duration:1000}} class="row">
    <div class="column">
        <div>
            <h1>Creede Guitars</h1>
            <p>{config.oneliner}</p>
            <br>
            <img src="guitar9.jpeg" alt="Creede Guitar" width="90%">
        </div>
    </div>
    <div class="column columnhide">
        <div class="row">
            <div class="column center">
                <img src="guitar5.jpeg" alt="Creede Guitar" width="100%">
            </div>
            <div class="column center">
                <img src="headstock.jpg" alt="Creede Guitar" width="63%">
             </div>
          
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