import {Link} from 'react-router-dom'

function Greeting(){
    return (
    <div class="jumbotron text-center">
    <h1 class="display-3">Thank You!</h1>
    <p class="lead"><strong>We will reach out to you via Email</strong></p>
    <p class="lead">
      <Link to="/" class="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to homepage</Link>
    </p>
  </div>
  )
}



export default Greeting;