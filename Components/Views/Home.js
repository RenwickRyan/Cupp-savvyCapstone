export default st => `
<div id="home-top"></div>
<div class="home-page">
<img class="home-img" src="https://github.com/RenwickRyan/Cupp---Savvy-Capstone/blob/master/Photos/homepage5.jpeg?raw=true">
</div>

<div class="container">
  <form id="contact" action="mailto:cuppcoffeeinfo@gmail.com" method="post" enctype="text/plain">
    <h3>Contact Cupp</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="0" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="0" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="0" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
`;
