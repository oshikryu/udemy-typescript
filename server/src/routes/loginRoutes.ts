import express, { Router, Request, Response, NextFunction } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    // middleware functions are not supposed to return anything
    next();
    return;
  }

  res.status(403);
  res.send('Permission Denied');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
      <h1>You are logged in</h1>
      <a href="/logout">Logout</a>
      </div>
    `);

  } else {
    res.send(`
      <div>
      <h1>You are NOT logged in</h1>
      <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
           <form method="POST">
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

           `)
});

router.post('/login', (req: Request, res: Response) => {
  // request does not usually have a body or a session
  // middleware adds in special properties defined

  const { email, password } = req.body;
  // hardcode email/pass creds
  if (email && password) {
    if (email === 'hi@hi.com' && password === 'hunter2') {
      // mark this person as logged in
      req.session = { loggedIn: true };

      // redirect to the root route
      res.redirect('/');
    }
  } else {
    res.send('Invalid email or password');
  }

  //res.send(`${email} ${password}`);
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = { loggedIn: null };

  // redirect to the root route
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };
