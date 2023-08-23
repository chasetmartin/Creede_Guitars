<script>
    import { fade } from 'svelte/transition';
  </script>
  
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <h1>The Parlor</h1>
      <h2>Right handed 0-12 fret parlor</h2>
      <h6>For a guitar its size, this one has nice volume with very rich overtones and a sustain that is impressive.</h6>
      <h6>Really a fun little couch guitar to keep one playing for hours!</h6>
      <h6>This one is not for sale, but it is available to demo both unplugged and amplified.</h6>
    </div>
    <div class="column center">
      <p>Red Cedar/Claro Walnut</p>
      <p>Mahogany neck</p>
      <p>Ebony fretboard and bridge</p>        
      <p>Slotted headstock</p>
      <p>24.9” scale length</p>
      <p>K & K mini pure pickup</p>
      <p>Width at nut 1 3/4”</p>
      <p>2 1/8” bridge pin spacing</p>
      <p>Osmo PolyX satin finish with no pore filler</p>
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/guitar5.jpeg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/guitar6.jpeg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/guitar8.jpeg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/guitar13.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/guitar11.jpg" alt="Creede Guitar" width="95%">
    </div>
  </div>
  <div in:fade={{duration:1000}} class="row">
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/guitar12.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column center">
      <img in:fade={{duration:1000, delay:350}} src="/guitar4.jpeg" alt="Creede Guitar" width="95%">
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
      flex: 1; /* Each column takes an equal amount of space */
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