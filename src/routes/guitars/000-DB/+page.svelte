<script>
    import { fade } from 'svelte/transition';
  </script>

  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>The Amethyst Vein</h1>
      <h2>000-12 Deep Body</h2>
      <hr class="hrsmall">
      <h6>She's a tapestry of tone and grain, with an unusual combination of tonewoods—Marbled Redwood top and Curly Cherry back and sides, featuring "Bryan Legacy" Brazilian Rosewood fretboard/bridge. Rich, deep, complex resonane... and named after Creede's founding claim stake!</h6>
      <hr>
    </div>
    <div class="column center">
      <p>Amethyst Box Elder/White Maple accents</p>
      <p>Amethyst Creede Cliffs headstock</p>
      <p>25.4" scale, 1 ¾" nut, 2 ⅛" bridge spacing</p>
      <p>Cosmos Gotoh 510 tuners</p>
      <p>D'Addario XS light strings</p>
      <p>James May Engineering pickup</p>
      <p>Crossrock tweed case</p>
      <p>Built "dry" at 27% RH to live in dryer parts of the West</p>
      <p>Climate protective interior finish</p>
      <p>Oil/wax satin exterior finish</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-01.jpg" alt="The Amethyst Vein Guitar" width="90%">
      <br>
      <!-- <img in:fade={{duration:1000, delay:350}} src="/amethyst-02.jpg" alt="The Amethyst Vein Guitar" width="95%">
      <br> -->
    </div>
    <!-- <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/dread-07.jpg" alt="Creede Guitar" width="95%">
    </div> -->
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-02.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-10.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-04.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-05.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-06.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-07.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-08.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-09.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/amethyst-03.jpg" alt="The Amethyst Vein Guitar" width="95%">
    </div>
    <div class="column center">
      <!-- Empty column for layout balance -->
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