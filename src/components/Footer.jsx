function Footer() {
  return (
    <div className="bg-slate-800 mt-4 text-white p-4 grid place-items-center">
      <p className="text-xs">
        Copyright © {new Date().getFullYear()} | All Right Reserved | Design by{" "}
        <strong>
          <a
            className="hover:text-red-700"
            href="https://ankitsoni.in"
            target="_blank"
          >
            {" "}
            Ankit Soni.
          </a>
        </strong>
      </p>
    </div>
  );
}
export default Footer;
