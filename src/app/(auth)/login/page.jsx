import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/components/LoginForm/LoginForm"
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Login</h2>
        <form>
          <button
            onClick={handleGithubLogin}
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
          >
            Login with Github
          </button>
        </form>
       <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;
