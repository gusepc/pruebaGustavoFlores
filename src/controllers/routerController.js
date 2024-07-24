export default function getRoot(req, res) {
  const html = `
<html>
  <head>
    <title>API Endpoints</title>
  </head>
  <body>
    <h1>API Endpoints</h1>
    <h2>Invalid Headers</h2>
    <ul>
      <li><a href="/users">Get All Users</a></li>
      <li><a href="/users/raw">Get All Users (Raw)</a></li>
      <li><a href="/users/1">Get User by ID (Example with ID 1)</a></li>
    </ul>
    <h2>Valid Headers</h2>
    <ul>
      <li><a href="/headers">Get All Users</a></li>
      <li><a href="/headers/raw">Get All Users (Raw)</a></li>
      <li><a href="/headers/1">Get User by ID (Example with ID 1)</a></li>
    </ul>
  </body>
</html>

  `;
  res.send(html);
}
