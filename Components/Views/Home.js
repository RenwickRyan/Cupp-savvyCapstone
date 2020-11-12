export default st => `
<div id="home-top"></div>
<div class="home-page">
<img class="home-img" src="https://github.com/RenwickRyan/Cupp---Savvy-Capstone/blob/master/Photos/Roasting2.jpg?raw=true">
</div>
s
<div class="home-bottom">
</div>
<div class="container">
  <form id="contact" action="https://formspree.io/f/xbjpjapz" method="post">
    <h3>Contact Cupp.</h3>
    <fieldset>
      <input placeholder="your name" type="text"  name="name" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="your email address" type="email" name="replyto" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="type your message here...." type="text" name="message" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Submit</button>
    </fieldset>
  </form>
</div>
</div>
`;
