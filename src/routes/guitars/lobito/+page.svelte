<script>
    import { fade } from 'svelte/transition';
  </script>

  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>El Lobito</h1>
      <h2>Desert Ironwood Parlor</h2>
      <hr class="hrsmall">
      <h6>Can you find a Mexican Gray Wolf in this Desert Ironwood guitar featuring woods from the Sonoran Desert and the sky islands of Southern Arizona? This beauty produces a remarkable lingering resonance from the magical musical qualities of distinctive deep-rooted Sonoran wood.</h6>
      <hr>
    </div>
    <div class="column center specs">
      <p>Engelmann Spruce and Desert Ironwood</p>
      <p>Desert Ironwood fretboard, bridge, headstock, and back</p>
      <p>Zebrawood binding and sides</p>
      <p>Rosette and accents with blue box elder</p>
      <p>24.5" scale, 1 ¾" nut, 2 3/16" bridge spacing</p>
      <p>510 antique nickel tuners</p>
      <p>Lidia Moroz soundhole label</p>
      <p>D'Addario XS light strings</p>
      <p>Built "dry" at 27% RH to live in dryer parts of the West</p>
      <p>Climate protective interior and exterior finish</p>
      <p>Gator parlor case</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-8.webp" alt="El Lobito Guitar" width="90%">
      <br>
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-4.webp" alt="El Lobito Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-10.webp" alt="El Lobito Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-5.webp" alt="El Lobito Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-11.webp" alt="El Lobito Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-7.webp" alt="El Lobito Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-6.webp" alt="El Lobito Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-9.webp" alt="El Lobito Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-1.webp" alt="El Lobito Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-3.webp" alt="El Lobito Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-2.webp" alt="El Lobito Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-12.webp" alt="El Lobito Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Lobito-13.webp" alt="El Lobito Guitar" width="95%">
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

    .specs p {
      padding: 0;
      margin: 0;
      padding-bottom: 1.25vw;
      line-height: 1.45;
    }

    h6 {
      padding-bottom: 1vh;
      line-height: 1.5;
    }

    h1 {
      padding-bottom: 3vw;
    }

    .column {
      flex: 25%;
      padding: 5px;
      box-sizing: border-box;
    }

    .column:first-child {
      padding-right: 2.5px;
    }

    .column:last-child {
      padding-left: 2.5px;
    }

    .center {
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 1000px) {
          .column {
              flex: 100%;
          }
      }
  </style>
