# Happy Birthday Gullu Veena

## Message to Us Email Setup (EmailJS)

The `Message to Us` page sends visitor messages directly to `thepinkcity2026@gmail.com` using EmailJS.

### 1) Create EmailJS configuration

- Create an account on [EmailJS](https://www.emailjs.com/).
- Add one email service (Gmail or other provider).
- Create an email template with variables:
  - `from_name`
  - `from_email`
  - `message`
  - `reply_to`
  - `to_email`
- In your template, set receiver to `thepinkcity2026@gmail.com` (or use `to_email` variable in recipient field).

### 2) Add environment variables

Create a `.env` file in project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3) Run the app

```bash
npm install
npm run dev
```

Open `http://localhost:5173/message-us` and test by submitting the form.
