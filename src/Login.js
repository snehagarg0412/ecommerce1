
function Login()
{
    return(
        <div>
    <section id="contact" class="container my-5">
        <div class="row">

            <div class="col-md-8 mx-auto border rounded p-4 shadow-sm">

                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="Name" placeholder="Enter your name"></input>
                    </div>
                    <div class="mb-3">
                        <input type="Password" class="form-control" id="Password" placeholder="Enter your Password"></input>
                    </div>

                    <button type="submit" class="btn btn-warning">Submit</button>
                </form>
            </div>
        </div>
    </section>
        </div>
    )
}
export default Login