//Subscription form for the mailing list
//Provided by MailOctopus
import React from 'react';

class Subscribe extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div class="email-octopus-form-wrapper text-center">
          <h2 class="email-octopus-heading">Subscribe to newsletter</h2>
          <p class="email-octopus-success-message"></p>
          <p class="email-octopus-error-message"></p>

          <form method="post"
            action="https://emailoctopus.com/lists/edb527e9-506a-11e8-a3c9-06b79b628af2/members/embedded/1.1/add"
            class="email-octopus-form"
          >

              <div class="email-octopus-form-row">
                  <label for="field_0">Email address</label>
                  <input id="field_0" name="embedded_form_subscription[field_0]" type="email" placeholder=""/>
              </div>


              <div class="email-octopus-form-row-hp" aria-hidden="true">
                  <input type="text" name="hpedb527e9-506a-11e8-a3c9-06b79b628af2"
                     tabindex="-1"
                     autocomplete="nope"/>
              </div>

              <div class="email-octopus-form-row-subscribe">
                  <input type="hidden"
                     name="successRedirectUrl"
                     value=""/>
                  <button type="submit">Subscribe</button>
              </div>
          </form>


          <div class="email-octopus-rewards">
              Powered by <a href="https://emailoctopus.com/?urli=vsPdK&amp;utm_medium=user_referral&amp;utm_source=builder" target="_blank">EmailOctopus</a>
          </div>

      </div>

    );
  }
}

export default Subscribe;
