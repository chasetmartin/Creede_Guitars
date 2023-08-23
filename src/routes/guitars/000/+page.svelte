<script>
  import { fade } from 'svelte/transition';
</script>

<div in:fade={{duration:1000}} class="row">
  <div class="column center">
    <h1>The Triple Zero</h1>
    <h2>Left handed 000-12fret</h2>
    <h6>A commission for Beth Morris, a long time local favorite Creede musician.</h6>
    <h6>This one is the first to feature the  new headstock design, cliffs that mimic the real Creede canyon walls.</h6>
    <h6>Thank you to Fiddleback Woodshack and Old Standard Wood for the phenomenal tonewoods that went into this.</h6>
    <h6>Yes, this one sounds amazing as the Walnut-Adirondack tone combination is phenomenal and perfect for a guitar this size!</h6>
  </div>
  <div class="column center">
    <p>Adirondack Spruce/Claro Walnut</p>
    <p>3 piece Walnut/curly maple/walnut/neck</p>
    <p>Rosewood fretboard, bridge, and suspended pickguard</p>        
    <p>Creede Guitars headstock design</p>
    <p>Medium gold fret wire</p>
    <p>24.9” scale length</p>
    <p>Gold Gotoh 510 tuners</p>
    <p>K & K mini pure pickup</p>
    <p>Width at nut 1 11/16”</p>
    <p>2 3/16” bridge pin spacing</p>
    <p>Osmo PolyX satin finish with no pore filler</p>
  </div>
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-16.jpg" alt="Creede Guitar" width="84.2%">
  </div>
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-13.jpg" alt="Creede Guitar" width="95%">
  </div>
</div>
<div in:fade={{duration:1000}} class="row">
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-04.jpg" alt="Creede Guitar" width="95%">
  </div>
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-05.jpg" alt="Creede Guitar" width="95%">
  </div>
</div>
<div in:fade={{duration:1000}} class="row">
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-07.jpg" alt="Creede Guitar" width="95%">
  </div>
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-09.jpg" alt="Creede Guitar" width="95%">
  </div>
</div>
<div in:fade={{duration:1000}} class="row">
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-14.jpg" alt="Creede Guitar" width="95%">
  </div>
  <div class="column center">
    <img in:fade={{duration:1000, delay:350}} src="/000_1-03.jpg" alt="Creede Guitar" width="95%">
  </div>
</div>

<style>
  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  p {
    padding: 2px;
    padding-bottom: 2vw;
  }

  h6 {
    padding-bottom: 1vh;
    line-height: 1.5;
  }

  h1 {
    padding-bottom: 3vw;
  }

  .column {
    flex: 25%; /* Each column takes an equal amount of space */
    padding: 5px; /* Add some spacing between columns */
    box-sizing: border-box; /* Include padding in column width */
  }

  .column:first-child {
    padding-right: 2.5px; /* Space between columns */
  }

  .column:last-child {
    padding-left: 2.5px; /* Space between columns */
  }

  .center {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
        .column {
            flex: 100%; /* Make columns take full width on small screens */
        }
    }
</style>