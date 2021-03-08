export default st => `
<div class="home-page">
  <div class="home-top">
  <img class="home-img" src="https://github.com/RenwickRyan/Cupp-forcoffeeexplorers/blob/master/Photos/machine&me.JPEG?raw=true">
  </div>
  <div class="home-container">
    <div class="home-about">
      <h1 class="about">About.</h1>
        <p id="about">Cupp was conceived as a place for curious coffee drinkers to find out more about cupping and what is needed for them to get started cupping on there own.</p>
        <p id="about">Cupping coffee is a very specific way to experience a roasted coffee in its base form. Each coffee is prepared with the same set of meticulous parameters and standards.</p>
        <p id="about">The goal of this project is to allow folks to engage with one another and provide tools to organize and implement cuppings at home, coffee shops and virtually.</p>
        <p id="about">Please use the contact form on this page to reach out to me with any questions or updates on the progress of this project </p>
        <p id="about">Future state for this project will include: </p>
        <ul>
          <li> a community board where folks can discuss, compare coffee experiences through the unique lense of a coffee cuppings. </li>
          <br>
          <li> an interactive cupping sheet keep detailed notes during your cuppings directly on your mobile device </li>
          <br>
          <li> user accounts that will provide the ability to communicate with fellow users, as well as keep track of there past cuppings</li>
        </ul>
    </div>
    <div class="form-container">
      <form id="contact" action="https://formspree.io/f/xbjpjapz" method="post">
        <h3 id="contact-cupp">Sign up for the newsletter<br>for updates on this project.</h3>
          <fieldset id="fieldset">
            <input placeholder="your name" type="text"  name="name" required autofocus>
          </fieldset>
          <fieldset id="fieldset">
            <input placeholder="your email address" type="email" name="replyto" required>
          </fieldset>

          <fieldset id="contact-btn" id="fieldset">
            <button name="submit" type="submit" >Submit</button>
          </fieldset>
      </form>
    </div>
  </div>
  <img class="home-img" src="https://github.com/RenwickRyan/Cupp-forcoffeeexplorers/blob/master/Photos/closeup.JPEG?raw=true">
</div>
`;
