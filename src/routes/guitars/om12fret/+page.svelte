<script>
    import { fade } from 'svelte/transition';
  </script>

  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>The Blacktail Canyon</h1>
      <h2>Large Soundhole OM-12 Fret</h2>
      <hr class="hrsmall">
      <h6>A guitar inspired by Blacktail Canyon in the Grand Canyon, where dark schist meets golden sandstone in a contrasting contact representing 1.2 billion years of missing time. A unique dark soundboard, a large ebony bound sound hole, and opposing maples harmonize to mimic the grotto. The tonal projection pays homage to the impeccable acoustics of this iconic sanctuary.</h6>
      <hr>
    </div>
    <div class="column center">
      <p>Float log sinker Sitka soundboard</p>
      <p>Bastogne walnut back and sides</p>
      <p>Birdseye maple rosette and pickguard</p>
      <p>Flamed maple binding</p>
      <p>Brian Anderson Ceylon ebony bridge</p>
      <p>Creede Guitars headstock in ebony</p>
      <p>1 3/4” nut width, 25.4” scale length</p>
      <p>Gotoh 150 smoke black tuners</p>
      <p>Open pore oil/wax finish</p>
      <p>D’Addario light strings</p>
      <p>Molded  polymer Hiscox case</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-02.jpg" alt="Creede Guitar" width="100%">
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
      <img in:fade={{duration:1000, delay:350}} src="/om12-03.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-04.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-06.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-05.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-10.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-01.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-07.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om12-11.jpg" alt="Creede Guitar" width="95%">
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