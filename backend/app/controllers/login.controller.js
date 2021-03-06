exports.check = (req, res) => {
    const r = req.r;
    r.table('user')
        .getAll([req.query.user, r.uuid(req.query.password)], { index: 'userAndPassword' })
        .run()
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            return res.status(500).send(err.message);
        })
}

exports.provider = (req, res) => {
    const r = req.r;
    r.table('user')
        .getAll([req.body.uid, req.body.providerData[0].providerId], { index: 'uidAndProvider' })
        .run()
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            return res.status(500).send(err.message);
        })
}

