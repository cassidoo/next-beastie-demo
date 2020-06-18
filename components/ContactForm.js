export default function ContactForm() {
  return <form name="contact" action="/" method="POST" data-netlify="true">
    <p>
      <label htmlFor="youremail">Email: </label>
      <input type="email" id="youremail" />
    </p>
    <button type="Submit">Submit</button>
  </form>
}