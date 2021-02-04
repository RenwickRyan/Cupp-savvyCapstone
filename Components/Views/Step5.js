export default st => `
<div class="start" id="start">
<h3 id="steps">Step 5: Assess the color and aroma of the dry coffee</h3>
<div id="step-imgs">
  <img class="steps" src="https://github.com/RenwickRyan/Cupp---Savvy-Capstone/blob/master/Photos/sml-dry.jpeg?raw=true" style="width:300px;height:300px;">
</div>
  <p id="setupdetail">Take notes with the numbers as placeholders for the coffee's actually name</p>
</div>
<div class="numbers">
      <button class="btn" onclick="location.reload()">click here</button>
        <h3>Below is some numbers you can use as placeholders for the names of the coffee you are use to keep your cupping 'blind'.</h3>
        <div class="num-display">
          <p class="num" id="num1"></p>
          <p class="num" id="num2"></p>
          <p class="num" id="num3"></p>
          <p class="num" id="num4"></p>
          <p class="num" id="num5"></p>
          <p class="num" id="num6"></p>
          <p class="num" id="num7"></p>
          <p class="num" id="num8"></p>
          <p class="num" id="num9"></p>
          <p class="num" id="num10"></p>
        </div>
    </div>
<div class="step-btn">
<a class="step-link" href="/Step4" title="Step4" data-navigo="">prev</a>
<a class="step-link" href="/Step6" title="Step6" data-navigo="">next</a>
</div>
`;
