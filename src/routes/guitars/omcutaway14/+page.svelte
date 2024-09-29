<script>
    import { fade } from 'svelte/transition';
  </script>

  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>Night in Creede</h1>
      <h2>OM-14 Fret Cutaway</h2>
      <hr class="hrsmall">
      <h6>A guitar inspired by long winter nights and moonlight on nearby canyon cliffs. New headstock design and dark soundboard bring to mind the fading lines of Cy Warman’s classic 1892 poem, “Creede”.</h6>
<p><em>“It's day all day in the day-time<br>
And there is no night in Creede”</em></p>
<h6>Like a star-filled night, this one’s tonal clarity and projection can be described as “super crisp”!</h6>
      <hr>
    </div>
    <div class="column center">
      <p>Float log sinker Sitka soundboard</p>
      <p>Claro walnut back and sides</p>
      <p>Flamed maple binding</p>
      <p>Creede night/cliffs/moon headstock </p>
      <p>Lidia Moroz artwork label</p>
      <p>1 3/4” nut width, 25.4” scale length</p>
      <p>Waverly ebony/nickel tuners</p>
      <p>Open pore oil/wax finish</p>
      <p>D’Addario XS light strings</p>
      <p>Molded  polymer Hiscox case</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-18.jpg" alt="Creede Guitar" width="90%">
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
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-02.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-05.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-10.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-11.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-14.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-16.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-04.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/om14cut-15.jpg" alt="Creede Guitar" width="95%">
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