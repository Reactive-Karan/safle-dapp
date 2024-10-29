import './Footer.scss'

const Footer = () => {
  const getCurrentDate = () => {
    let date = new Date()
    let year = date.getFullYear()
    return year
  }
  return <div className="footer"> © {getCurrentDate()} Karan Mishra.</div>
}

export default Footer
