// Use client at the top to ensure this is a client component
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router for app directory

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Use the router for navigation (for app directory in Next.js)
  const router = useRouter();

  // Simple email validation (basic format check)
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Simple password validation (at least 6 characters)
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate email and password manually
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    // Simulating user sign-up (manual check)
    try {
      // Simulate a successful signup process
      console.log("User signed up:", { email, password });

      // After successful signup, simulate success
      setSuccess(true);
      setEmail("");
      setPassword("");

      // Redirect to the "quizz" page
      setTimeout(() => {
        router.push("/quizz"); // This will redirect to the quiz page
      }, 1000); // Delay to show success message before redirect
    } catch (error) {
      setError("An error occurred during sign up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-600">
          Sign Up
        </h2>

        {/* Show success message */}
        {success && (
          <div className="mb-4 text-green-600 text-center">
            Successfully signed up! Redirecting...
          </div>
        )}

        {/* Show error message */}
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        {/* Sign up form */}
        <form onSubmit={handleEmailSignup} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-teal-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
