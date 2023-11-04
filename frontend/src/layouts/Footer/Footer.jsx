import './Footer.scss'

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="py-5">
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <div className='d-flex align-items-center'>
            <p>My channels:</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3 social-icon">
                <a className="link-body-emphasis" href="#" target='_blank'>
                  <img src="../../src/assets/images/icons/github.svg" alt="GitHub Icon" />
                  <strong>GitHub</strong>
                </a>
              </li>
              <li className="ms-3 social-icon">
                <a className="link-body-emphasis" href="#" target='_blank'>
                <img src="../../src/assets/images/icons/linkedin.svg" alt="LinkedIn Icon" />
                  <strong>LinkedIn</strong>
                </a>
              </li>
              <li className="ms-3 social-icon">
                <a className="link-body-emphasis" href="#" target='_blank'>
                  <img src="../../src/assets/images/icons/x.svg" alt="X Icon" />
                  <strong>X</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className='felipe-campelo-author'>
            Felipe Campelo - {anoAtual} | Made in <img src="../../src/assets/images/icons/brazil.svg" alt="Brazil flag" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer