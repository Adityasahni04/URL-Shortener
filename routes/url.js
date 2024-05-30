const express=require('express');
const shortID=require('shortid')
const URL=require('./../models/urlSchema')
const router=express.Router();


router.post('/', async (req, res) => {
    try {
        const userurl= req.body.url; 
        if (!userurl) {
            return res.status(400).json({ message: 'PLEASE ENTER A URL' });
        }
        const id = shortID.generate();
        const shorturl = new URL({ shortID: id, redirectURL:userurl});
        const response = await shorturl.save();
        res.render('home',{id:response.shortID})
        // res.status(201).json(response.shortID); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR', error });
    }
});

router.get('/:shortid', async (req, res) => {
    try {
        const shortid = req.params.shortid;
        const userData = await URL.findOneAndUpdate(
            { shortID: shortid },
            {
                $push: {
                    visitingHistory: {
                        timeStamp: new Date().toLocaleString(), 
                    },
                },
            }
        );

        if (!userData) {
            return res.status(404).json({ message: 'URL not found' });
        }

        res.status(302).redirect(userData.redirectURL); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR', error });
    }
});






module.exports=router;