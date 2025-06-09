import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="text-start">
          <p className="mb-1">© {new Date().getFullYear()} NewsMonkey. All rights reserved.</p>
          <p className="mb-0">Developed by Gaurav Mehta</p>
        </div>
        <div className="text-end mt-3 mt-md-0">
          <a href="https://www.instagram.com/gauravvmehtaaa" target="_blank" rel="noreferrer" className="text-white me-3">
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/gaurav-mehta" target="_blank" rel="noreferrer" className="text-white me-3">
            <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://github.com/GAURAVVVVVVVVVVVVV" target="_blank" rel="noreferrer" className="text-white">
            <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
