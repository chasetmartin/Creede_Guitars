<script>
    import { fade } from 'svelte/transition';
  </script>

  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>Blue Eyes</h1>
      <h2>Norman Blake Inspired 000-12</h2>
      <hr class="hrsmall">
      <h6>A guitar inspired by Norman Blake’s signature setup - 12 frets and a short scale for warmth and sustain. His preferred 14 fret body was built instead with a 12 fret body, and the bridge was crafted with additional weight of Buckeye Burl for exceptional tone and resonance. The blue-eyed burl adds beauty in every detail. This one hits a home run in playability and tone!</h6>
      <hr>
    </div>
    <div class="column center">
      <p>Western Red Cedar soundboard</p>
      <p>Claro walnut back and sides</p>
      <p>Creede cliffs headstock </p>
      <p>Buckeye Burl appointments</p>
      <p>Gotoh 510 tuners with hand crafted ebony buttons</p>
      <p>Medium gold fret wire</p>
      <p>Lidia Moroz artwork label</p>
      <p>1 13/16” nut width, 24.5” scale length</p>
      <p>103 mm sound hole diameter </p>
      <p>Open pore oil/wax satin finish</p>
      <p>D’Addario XS light strings</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-01.jpg" alt="Creede Guitar" width="90%">
      <br>
      <!-- <img in:fade={{duration:1000, delay:350}} src="/om12-03.jpg" alt="Creede Guitar" width="95%">
      <br> -->
    </div>
    <!-- <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-07.jpg" alt="Creede Guitar" width="95%">
    </div> -->
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-04.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-05.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-06.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-07.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-08.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-09.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-02.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/blueeyes-10.jpg" alt="Creede Guitar" width="95%">
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