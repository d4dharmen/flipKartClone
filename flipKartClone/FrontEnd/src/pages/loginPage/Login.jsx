import "./Login.css";
export function LoginPage() {
  return (
    <div className="loginDiv">
      <div className="loginSalutation">
        <h2>welcome to login</h2>
        <p>
          elit. Dolor praesentium quos fugiat excepturi molestiae sit! Nulla,
          fugiat. Perferendis magnam cupiditate error similique necessitatibus
          laboriosam voluptatem, deleniti quos dicta pariatur minus.
        </p>

        <img src="./src/assets/img/sign.jpg" alt="login img" />
      </div>
      <div className="loginFields">
        <form action="">
          <input type="text" placeholder="user name" />
          <input type="password" placeholder="password" />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
}
