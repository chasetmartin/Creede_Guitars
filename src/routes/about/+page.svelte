<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
	import Seo from '../../lib/seo.svelte';
</script>

<Seo 
    type="WebPage"
    title="About | Creede Guitars"
    description="About Creede Guitars: what makes Creede Guitars unique?"
/>

<div in:fade={{duration:1000}} class="row">
    <div class="column">
        <div>
            <h1>About</h1>
        <p>{config.about}</p>
        <br>
        <p>{config.philosophy}</p>
        <br>
        <div class="center">
          <img in:fade={{duration:1000, delay:350}} src="guitar9.jpeg" alt="Creede Guitar" width="95%">
        </div>
      </div>
    </div>
    <div class="column center">
        <img in:fade={{duration:1000, delay:350}} src="000_1-01.jpg" alt="Creede Guitar" width="76%">
    </div>
  </div>

  <style>
    .row {
  display: flex;
  flex-wrap: wrap; /* Allow columns to wrap onto new line */
}
.center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

.column {
  flex: 50%;
  padding: 5px; /* Add some spacing between columns */
  box-sizing: border-box; /* Include padding in column width */
}

@media (max-width: 1000px) {
        .column {
            flex: 100%; /* Make columns take full width on small screens */
        }
    }
  </style>