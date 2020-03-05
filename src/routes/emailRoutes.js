const { Router } = require('express');
const sgMail = require('@sendgrid/mail');
const router = Router();

router.post('/', (req, res, next) => {
  const { name, email, subject, message } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  if (name && email && subject && message) {
    const msg = {
      to: process.env.EMAIL_LIST,
      from: 'info@leanjunio.com',
      subject: subject,
      text: message,
      html: `<strong>${name} - ${email}</strong>
      <p>${message}</p>`,
    };

    sgMail
      .send(msg)
      .then(() => res.status(200).send('email success'))
      .catch(err => res.status(500).send(err));
  }
});

module.exports = router;
