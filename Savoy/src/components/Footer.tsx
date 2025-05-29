export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-auto dark:bg-[rgb(16_24_32)] bg-opacity-50">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Savoy Residence. All rights reserved.
      </p>
    </footer>
  );
}
