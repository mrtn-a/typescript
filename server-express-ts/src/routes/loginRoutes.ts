import { Router, Request, Response, NextFunction } from 'express';

// custom interface to make sure that there's  a body provided (with property of string)
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('no permitted to access');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(
    `<form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />      
      </div>
      <button>Submit</button>
    </form>
    `
  );
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  // guard
  if (
    email &&
    password &&
    email === 'email@email.com' &&
    password === 'password'
  ) {
    // mark the person as logged in (sessions, cookies)
    req.session = { loggedIn: true };
    // redirect person to the root route
    res.redirect('/');
  } else {
    res.send('invalid email or password');
  }
});

// login
router.get('/', (req: Request, res: Response) => {
  // if the user is logged in (with guard req.session exists, otherwise we get an error)
  if (req.session && req.session.loggedIn) {
    res.send(
      `<div>
        <div>You are logged in!</div>
        <a href="/logout">Logout</a>
      </div>`
    );
  } else {
    res.send(
      `<div>
        <div>You are not logged in!</div>
        <a href="/login">Login</a>
      </div>`
    );
  }
});

// logout
router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route. Logged it:)');
});

export { router };
