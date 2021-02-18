export default st => `
<div class="home-page">
  <div class="home-top">
  <img class="home-img" src="https://github.com/RenwickRyan/Cupp---Savvy-Capstone/blob/master/Photos/homepage5.jpeg?raw=true">
  </div>
  <div class="home-container">
    <div class="home-about">
      <h1 class="about">About.</h1>
        <p id="about">Cupp was conceived as a place for curious coffee drinkers to come together virtually. A place where folks can discuss, compare coffee experiences through the unique lense of a coffee cuppings. <br><br> Cupping coffee is a very specific way to experience a roasted coffee in its base form. Each coffee is prepared with the same set of meticulous parameters and standards.<br><br> The goal of this project is to allow folks to engage with one another and provide tools to organize and implement cuppings at home, coffee shops and virtually.<p>
    </div>
    <div class="form-container">
      <form id="contact" action="https://formspree.io/f/xbjpjapz" method="post">
        <h3 id="contact-cupp">Contact Cupp.</h3>
          <fieldset id="fieldset">
            <input placeholder="your name" type="text"  name="name" required autofocus>
          </fieldset>
          <fieldset id="fieldset">
            <input placeholder="your email address" type="email" name="replyto" required>
          </fieldset>
          <fieldset id="fieldset">
            <textarea placeholder="type your message here...." type="text" name="message" required></textarea>
          </fieldset>
          <fieldset id="contact-btn" id="fieldset">
            <button name="submit" type="submit" >Submit</button>
          </fieldset>
      </form>
    </div>
  </div>
</div>
`;
