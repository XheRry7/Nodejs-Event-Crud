const {Event} = require('../models/Event')
const express = require('express')
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { name, description, category, createDate, dueDate } = req.body
    const data = {
      name,
      description,
      category,
      createDate,
      dueDate
    }

    let event = new Event(data)
    event = await event.save();
    console.log("evenets", event);
    return res.status(200).json({
      message: "200",
      data: event
    });
  } catch (e) {
    return res.status(400).json({ message: 'Event not found', statusCode: 400 });
  }
});

router.get('/getevent', async (req, res) => {
  try {
    const event = await Event.find();
    if (event) {
      return res.status(200).json({
        message: "200",
        data: event
      });
    }
    else {
      return res
        .status(404)
        .json({ message: 'Event not found', statusCode: 404 });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message, statusCode: 400 });
  }
});


router.get('/:id', async (req, res) => {
  try {
      const event = await Event.findById({ _id: req.params.id });
      if (event) {
          return res.status(200).json({
              message: "200",
              data: event
          });
      }
      else {
          return res
              .status(404)
              .json({ message: 'Event not found', statusCode: 404 });
      }
  } catch (e) {
      return res.status(400).json({ message: e.message, statusCode: 400 });
  }
});


router.put('/:id', async (req, res) => {
  try {
      const event = await Event.findByIdAndUpdate(req.params.id, { name: req.body.name });
      if (!event) return res.status(404).send('The Event with the given ID was not found.');
      return res.status(200).json({
          message: "200",
          data: event
      });
  } catch (e) {
      return res.status(400).json({ message: 'Event not found', statusCode: 400 });
  }
});
router.delete('/:id', async (req, res) => {
  try {
      const event = await Event.findByIdAndRemove(req.params.id);
      if (!event) return res.status(404).send('The Event with the given ID was not found.');
      return res.status(200).json({
          message: "200",
          data: event
      });
  } catch (e) {
      return res.status(400).json({ message: 'Event not found', statusCode: 400 });
  }
});




module.exports = router;




