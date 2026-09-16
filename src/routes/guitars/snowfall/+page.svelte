<script>
    import { fade } from 'svelte/transition';
  </script>

  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>Snowfall</h1>
      <h2>Creede Guitars Grand Symphony</h2>
      <hr class="hrsmall">
      <h6>Redwood top and Claro Walnut back and sides, featuring "Bryan Legacy" Brazilian Rosewood fretboard, bridge, and headstock veneer. Rich powerful projection, named for a Rivertown Folk favorite cover song. "When Winter rolls around, I'll be half way home to my Creedetown, where the snow falls down."</h6>
      <hr>
    </div>
    <div class="column center specs">
      <p>Oregon Redwood and Fiddleback Walnut</p>
      <p>"Bryan Legacy" Brazilian Rosewood fretboard, bridge, and headstock veneer</p>
      <p>Spalted Maple accents with curly maple bindings</p>
      <p>25.4" scale, 1 11/16" nut, 2 ⅛" bridge spacing</p>
      <p>Gotoh 510 1:21 tuners, black with rosewood knobs</p>
      <p>Thalia Brazilian Cherry pickguard</p>
      <p>Lidia Moroz soundhole label</p>
      <p>D'Addario XS light strings</p>
      <p>James May Engineering pickup</p>
      <p>Built "dry" at 27% RH to live in dryer parts of the West</p>
      <p>Climate protective interior and exterior finish</p>
      <p>Crossrock tweed case</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-10.webp" alt="Snowfall Guitar" width="90%">
      <br>
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-7.webp" alt="Snowfall Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-9.webp" alt="Snowfall Guitar" width="95%">
    </div>
  </div>
  <br>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-5.webp" alt="Snowfall Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-6.webp" alt="Snowfall Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-4.webp" alt="Snowfall Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-8.webp" alt="Snowfall Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-11.webp" alt="Snowfall Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-3.webp" alt="Snowfall Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-1.webp" alt="Snowfall Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/Snowfall-2.webp" alt="Snowfall Guitar" width="95%">
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
