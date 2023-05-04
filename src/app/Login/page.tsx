export default function Login() {
  return (
    <div className="bg-white bg-opacity-60 border-4 border-black m-10 p-10">
      <form>
        <label htmlFor="userBar">Username</label>
        <input type="text" id="userBar" />
        <label htmlFor="passBar">Password</label>
        <input type="password" id="passBar" />
      </form>
    </div>
  );
}
