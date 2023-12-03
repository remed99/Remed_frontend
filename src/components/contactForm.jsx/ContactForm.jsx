import "./style.css";

const ContactForm = () => {
  return (
    <div className="card">
      <form className="form">
        <div className="group">
          <input type="text" />
          <label for="name">Name</label>
        </div>
        <div className="group">
          <input type="email" id="email" name="email" />
          <label for="email">Email</label>
        </div>
        <div class="group">
          <textarea
            placeholder="‎"
            id="message"
            name="message"
            rows="5"
            required=""
          ></textarea>
          <label for="comment">Message</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
