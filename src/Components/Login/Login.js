import { Button, Form } from "react-bootstrap";
import "./Login.css";
import "../../firebase.init";
import useFirebase from "../../hooks/useFirebases";

const Login = () => {
  const { signInGoogle } = useFirebase();
  // const [user, setUser] = useState();

  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Button
          className="g-login"
          onClick={signInGoogle}
          variant="warning"
          type="submit"
        >
          {" "}
          Google Sign in{" "}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
