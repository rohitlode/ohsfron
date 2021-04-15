import {Link} from 'react-router-dom';
function SignIn({ onRouteChange, props }){
  return (
    <div className="vh-100 dt w-100 bg-lightest-blue">
    <div class=" pa5 modal-dialog modal-login">
		<div class="modal-content">
			<div class="modal-header">
				<div class="avatar">
					<img src="https://www.materiell.com/wp-content/uploads/2015/04/deven-full1.png" alt="Avatar"/>
				</div>				
				<h4 class="modal-title">Member Login</h4>	
			</div>
			<div class="modal-body">
					<div class="form-group">
						<input type="text" class="form-control" name="username" placeholder="Username" required="required"/>		
					</div>
					<div class="form-group">
						<input type="password" class="form-control" name="password" placeholder="Password" required="required"/>	
					</div>        
					<div class="form-group">
						<button type="submit" class="btn btn-primary btn-lg btn-block login-btn">Login</button>
					</div>
			</div>
			<div class="modal-footer flex flex-column">
        <div className="">
					Don't have an account?<Link to="/signup">Sign Up</Link>
				</div>
        <div className="">
				  <a href="#">Forgot Password?</a>
        </div>
			</div>
		</div>
	</div>


    </div>
);
}

export default SignIn;
