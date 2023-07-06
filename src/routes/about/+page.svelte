<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
</script>

<div in:fade={{duration:1000}} class="row">
    <div class="column">
        <div>
            <h1>About</h1>
        <p>{config.about}</p>
        <br>
        <p>{config.philosophy}</p>
        <br>
        <img src="guitar2.jpeg" alt="Creede Guitar" width="95%">
        </div>
    </div>
    <div class="column columnhide">
        <img src="guitar6.jpeg" alt="Creede Guitar" width="77%">
    </div>
  </div>

  <style>
    .row {
  display: flex;
}

.column {
  flex: 50%;
}

@media (max-width: 1000px) {
		.columnhide {
            display: inline;
        }
	}
  </style>