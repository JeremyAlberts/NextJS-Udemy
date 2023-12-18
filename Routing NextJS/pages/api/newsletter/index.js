export default function newsletter(req, res) {
    if(req.method == "POST") {
        console.log(req.body.email)

        res.status(200).send("ok")
    }
}