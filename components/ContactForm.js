export default function ContactForm() {
  return <form name="contact" action="/success" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label htmlFor="youremail">Email: </label>
      <input type="email" id="youremail" />
    </p>
    <button type="Submit">Submit</button>
  </form>
}