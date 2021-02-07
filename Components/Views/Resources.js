export default () => `
<main>
    <div class="numbers">
      <button class="btn" onclick="location.reload()">click here</button>
        <h3>Below is some numbers you can use as placeholders for the names of the coffee you are use to keep your cupping 'blind'.</h3>
        <div class="num-display">
          <p class="num" id="num-1"></p>
          <p class="num" id="num-2"></p>
          <p class="num" id="num-3"></p>
          <p class="num" id="num-4"></p>
          <p class="num" id="num-5"></p>
          <p class="num" id="num-6"></p>
          <p class="num" id="num-7"></p>
          <p class="num" id="num-8"></p>
          <p class="num" id="num-9"></p>
          <p class="num" id="num-10"></p>
        </div>
    </div>
  <div class="tasting-wheel">
    <img id="tasting-wheel" src="https://coffee-bike.com/wp-content/uploads/2018/07/flavor-wheel-en-983x800.png" alt="coffee tasting wheel" style="width:1000px;height:auto;">
  </div>
  <div class="cupping-form">
    <img id="cupping-form" src="https://assets.echocommunity.org/presentations/a87a1fed-d2bc-4c55-b50e-12cc5d975e05/scaa-cupping-form__0.jpg" alt="coffee cupping form" style="width:1000px;height:auto;">
  </div>
</main>
`;
