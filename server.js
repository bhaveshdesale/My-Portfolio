// // api/index.js
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();

// // Email and App password (⚠️ hardcoded – not recommended for production)
// const EMAIL_USER = "bhaveshdesale16@gmail.com";
// const EMAIL_PASS = "mnxu hxce wxyt txyv"; // Gmail App Password

// app.use(cors());
// app.use(express.json());

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });

// contactEmail.verify((error, success) => {
//   if (error) {
//     console.log("❌ Email setup error:", error);
//   } else {
//     console.log("✅ Email server ready to send messages");
//   }
// });

// app.post("/contact", (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;
//   const fullName = `${firstName} ${lastName}`;

//   const mailOptions = {
//     from: fullName,
//     to: EMAIL_USER,
//     subject: "Portfolio Contact Form Submission",
//     html: `
//       <h3>New Contact Message</h3>
//       <p><strong>Name:</strong> ${fullName}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Message:</strong><br/>${message}</p>
//     `,
//   };

//   contactEmail.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log("❌ Email failed:", error);
//       res.status(500).json({ code: 500, status: "Message not sent" });
//     } else {
//       console.log("✅ Email sent:", info.response);
//       res.status(200).json({ code: 200, status: "Message sent successfully" });
//     }
//   });
// });

// app.get("/", (req, res) => {
//   res.send("✅ Contact API is running!");
// });




// module.exports = app;
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Serve frontend static files
app.use(express.static(path.join(__dirname, 'client/build')));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error, success) => {
  if (error) {
    console.log("❌ Email setup error:", error);
  } else {
    console.log("✅ Email server is ready to take messages");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: fullName,
    to: "bhaveshdesale16@gmail.com",
    subject: "Portfolio Contact Form Submission",
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("❌ Email sending failed:", error);
      res.status(500).json({ code: 500, status: "Message not sent" });
    } else {
      console.log("✅ Email sent:", info.response);
      res.status(200).json({ code: 200, status: "Message sent successfully" });
    }
  });
});

// ✅ Redirect other routes to frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
