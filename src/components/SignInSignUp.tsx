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
      <div
        className="w-full max-w-md bg-black border-2 border-better-green box-shadow-green"
        style={{ boxShadow: "-10px 0 15px -5px rgba(0, 255, 0, 0.3)" }}
      >
        <div className="flex">
          <button
            className={`w-1/2 py-3 text-center border-b-2 border-better-green ${
              isSignIn
                ? "bg-better-green text-black border-better-green"
                : "bg-black text-better-green hover:cursor-pointer"
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 py-3 text-center border-b-2 border-better-green ${
              !isSignIn
                ? "bg-better-green text-black"
                : "bg-black text-better-green hover:cursor-pointer"
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8 text-2xl">
          {isSignIn ? (
            <>
              <h2 className="text-2xl font-bold text-better-green mb-6">
                Welcome Back
              </h2>
              <form onSubmit={handleSignInSubmit}>
                <div className="mb-4">
                  <label className="block text-better-green mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={signInData.email}
                    onChange={handleSignInChange}
                    className="w-full p-3 border-2 border-better-green focus:border-better-green focus:outline-none bg-black text-white"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-better-green mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={signInData.password}
                    onChange={handleSignInChange}
                    className="w-full p-3 border-2 border-better-green focus:border-better-green focus:outline-none bg-black text-white"
                    required
                  />
                </div>

                <div className="flex justify-end mb-6">
                  <a
                    href="#"
                    className="text-better-green hover:underline hover:cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-better-green text-black p-3 hover:bg-white hover:cursor-pointer"
                >
                  SIGN IN
                </button>

                <div className="text-center mt-4">
                  <p>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="text-better-green hover:underline hover:cursor-pointer"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="font-bold text-better-green mb-6">
                Create Account
              </h2>
              <form onSubmit={handleSignUpSubmit}>
                <div className="mb-4">
                  <label className="block text-better-green mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-better-green focus:border-better-green focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-better-green mb-2">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    name="registrationNo"
                    value={signUpData.registrationNo}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-better-green focus:border-better-green focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-better-green mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-better-green focus:border-better-green focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-better-green mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={signUpData.confirmPassword}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-better-green focus:border-better-green focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-better-green mb-2">
                    Instagram Handle{" "}
                    <span className="text-better-green text-lg">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="instagramHandle"
                    value={signUpData.instagramHandle}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border-2 border-better-green focus:border-better-green focus:outline-none"
                    placeholder="@yourusername"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-better-green text-black p-3 hover:bg-white hover:cursor-pointer"
                >
                  SIGN UP
                </button>

                <div className="text-center mt-4">
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="text-better-green hover:text-better-green hover:underline hover:cursor-pointer"
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
