function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-orange-600 mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Oops! Page Not Found
        </p>
        <p className="text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg text-lg hover:bg-orange-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
export default NotFound;
