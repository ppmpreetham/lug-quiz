import React, { useState } from "react";

interface SignInFormData {
  email: string;
  password: string;
}

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  registrationNo: string;
  instagramHandle?: string;
}

const SignInSignUp: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [signInData, setSignInData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState<SignUpFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    registrationNo: "",
    instagramHandle: "",
  });

  const handleToggle = (): void => {
    setIsSignIn(!isSignIn);
  };

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSignInData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignInSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Sign In:", signInData);
    // sign-in
  };

  const handleSignUpSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Sign Up:", signUpData);
    // sign-up
  };

  return (
    <div className="flex justify-center min-h-screen text-2xl w-full items-start uppercase">
      <div className="w-full max-w-md bg-black border-2 border-green-500">
        <div className="flex">
          <button
            className={`w-1/2 py-3 text-center ${
              isSignIn
                ? "bg-green-500 text-white border-green-500"
                : "bg-black text-green-500 hover:cursor-pointer"
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 py-3 text-center ${
              !isSignIn
                ? "bg-green-500 text-white "
                : "bg-black text-green-500 hover:cursor-pointer"
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8 text-2xl">
          {isSignIn ? (
            <>
              <h2 className="text-2xl font-bold text-green-700 mb-6">
                Welcome Back
              </h2>
              <form onSubmit={handleSignInSubmit}>
                <div className="mb-4">
                  <label className="block text-green-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={signInData.email}
                    onChange={handleSignInChange}
                    className="w-full p-3 border-2 border-green-500 focus:border-green-700 focus:outline-none bg-black text-white"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-green-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={signInData.password}
                    onChange={handleSignInChange}
                    className="w-full p-3 border-2 border-green-500 focus:border-green-700 focus:outline-none bg-black text-white"
                    required
                  />
                </div>

                <div className="flex justify-end mb-6">
                  <a href="#" className="text-green-700 hover:text-green-800">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-3 hover:bg-green-700 hover:cursor-pointer"
                >
                  Sign In
                </button>

                <div className="text-center mt-4">
                  <p>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="text-green-700 hover:text-green-800"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="font-bold text-green-700 mb-6">Create Account</h2>
              <form onSubmit={handleSignUpSubmit}>
                <div className="mb-4">
                  <label className="block text-green-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-green-500 focus:border-green-700 focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-green-700 mb-2">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    name="registrationNo"
                    value={signUpData.registrationNo}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-green-500 focus:border-green-700 focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-green-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-green-500 focus:border-green-700 focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-green-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={signUpData.confirmPassword}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-green-500 focus:border-green-700 focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-green-700 mb-2">
                    Instagram Handle{" "}
                    <span className="text-green-500 text-lg">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="instagramHandle"
                    value={signUpData.instagramHandle}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-green-500 focus:border-green-700 focus:outline-none"
                    placeholder="@yourusername"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-3 hover:bg-green-700 hover:cursor-pointer"
                >
                  Sign Up
                </button>

                <div className="text-center mt-4">
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="text-green-700 hover:text-green-500 hover:underline hover:cursor-pointer"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
