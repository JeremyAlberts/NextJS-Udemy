export default function handler(req, res) {
    const id = req.query.eventId;

    if(req.method == 'POST') {
        const {email, name, text} = req.body;

        if(!email.includes('@')) {
            res.status(422).json({message: "invalid input"});
            return;
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }

        res.status(201).json({message: 'comment added', comment: newComment})
    }

    if(req.method == 'GET') {
        const list = [
            {id: 'c1', name: 'Jeremy', text: 'Jujutsu kaisen is cool'},
            {id: 'c2', name: 'Gerard', text: 'Jujutsu kaisen is slecht'},
        ];

        res.status(200).json({comments: list})
    }

    return res.status(200).send();
}