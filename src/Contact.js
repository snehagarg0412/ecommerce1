function Contact()
{
    return(
        <div>
    <section id="contact" class="container my-5">
        <div class="row">
            <div class="col-12 mb-4">
                <h2 class="text-center">Contact Us</h2>
            </div>
            <div class="col-md-8 mx-auto border rounded p-4 shadow-sm">

                <form>
                    <div class="mb-3">
                        <label for="contactName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="contactName" placeholder="Enter your name"></input>
                    </div>
                    <div class="mb-3">
                        <label for="contactEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="contactEmail" placeholder="Enter your email"></input>
                    </div>
                    <div class="mb-3">
                        <label for="contactMessage" class="form-label">Message</label>
                        <textarea class="form-control" id="contactMessage" rows="3" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-warning">Submit</button>
                </form>
            </div>
        </div>
    </section>
        </div>
    )
}
export default Contact