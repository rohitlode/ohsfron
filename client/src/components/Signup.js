import {Link} from 'react-router-dom';
function Signup(){
  return (
  <div className="vh-100 dt w-100 bg-lightest-blue">
    <article class="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow center bg-white">
    <main className="pa4 black-80">
<div className="measure center">
<fieldset
  id="sign_up"
  className="ba b--transparent ph0 mh0"
>
<legend className="f2 fw7 ph0 mh0">
Sign Up
</legend>
<p>Please fill in this form to create an account!</p>
<div className="mt3">
<label
  className="db fw6 lh-copy f6"
  htmlFor="email-address"
>
First Name
</label>
<input
  className="pa2 input-reset ba hover-bg-gray hover-white w-100"
  type="email"
  name="email-address"
  id="email-address"
/>
</div>
<div className="mt3">
<label
  className="db fw6 lh-copy f6"
  htmlFor="email-address"
>
Last Name
</label>
<input
  className="pa2 input-reset ba hover-bg-black hover-white w-100"
  type="email"
  name="email-address"
  id="email-address"
/>
</div>
<div className="mt3">
<label
  className="db fw6 lh-copy f6"
  htmlFor="email-address"
>
E-mail
</label>
<input
  className="pa2 input-reset ba hover-bg-black hover-white w-100"
  type="email"
  name="email-address"
  id="email-address"
/>
</div>
<div className="mv3">
<label
  className="db fw6 lh-copy f6"
  htmlFor="password"
>
Password
</label>
<input
  className="b pa2 input-reset ba hover-bg-black hover-white w-100"
  type="password"
  name="password"
  id="password"
/>
</div>
<div className="mv3">
<label
  className="db fw6 lh-copy f6"
  htmlFor="password"
>
Confirm Password
</label>
<input
  className="b pa2 input-reset ba hover-bg-black hover-white w-100"
  type="password"
  name="password"
  id="password"
/>
</div>
</fieldset>
<div className="tc">
<Link
  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
  type="submit" to="/signin"
> Register </Link>
</div>
</div>
</main>
</article>
<div className="pb3 text-center">Already have an account? <Link to="/signin" href="#">Login here</Link></div>
</div>);
}

export default Signup;
