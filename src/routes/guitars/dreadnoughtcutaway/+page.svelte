<script>
    import { fade } from 'svelte/transition';
  </script>

  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>Bryan's Legacy</h1>
      <h2>Dreadnought Cutaway</h2>
      <hr class="hrsmall">
      <h6>Courtney La Zier, master guitarist and longtime owner of Big River Music in Creede commissioned a performance acoustic/electric dreadnought cutaway using Brazilian Rosewood aged in Creede for over three decades.</h6>
      <h6>This holy grail of tonewood was a Bryan Anderson contribution.</h6>
      <h6>His iconic legacy now lives on in a Creede Guitar!</h6>
      <hr>
    </div>
    <div class="column center">
      <p>Sitka Spruce/Brazilian Rosewood</p>
      <p>Sonically graded soundboard</p>
      <p>Brazilian Rosewood rosette and fretboard</p>
      <p>Creede Guitars headstock in ebony</p>
      <p>Medium gold fret wire</p>
      <p>25.4” scale length</p>
      <p>GWaverly high ratio gold tuners</p>
      <p>Width at nut 1 3/4”</p>
      <p>2 3/16” bridge pin spacing</p>
      <p>Osmo PolyX satin finish with no pore filler</p>
      <p>Jame May Engineering electronics</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-01.jpg" alt="Creede Guitar" width="95%">
      <br>
      <img in:fade={{duration:1000, delay:350}} src="/dread-07.jpg" alt="Creede Guitar" width="95%">
      <br>
    </div>
    <!-- <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-07.jpg" alt="Creede Guitar" width="95%">
    </div> -->
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-04.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-05.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-06.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-08.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-11.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-09.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>

  <style>
    hr {
      margin-block: var(--size-fluid-3);
      width: 75%;
      border: 1px solid lightgrey;
    }

    .hrsmall {
        margin-block: var(--size-fluid-3);
        width: 50%;
        border: 1px solid lightgrey;
    }

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