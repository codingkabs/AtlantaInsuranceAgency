# Email Setup Guide

## ✅ What's Been Set Up

1. ✅ Resend package installed
2. ✅ API endpoint created at `/api/send-email.ts`
3. ✅ Contact form updated to use API
4. ✅ Loading states and error handling added

## 📋 Setup Steps

### Step 1: Get Resend API Key (FREE)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Copy your API key (starts with `re_`)

### Step 2: Configure Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: `re_your_api_key_here` (paste your actual key)
   - Environment: Production, Preview, Development (select all)

   **Variable 2 (Optional):**
   - Name: `RECIPIENT_EMAIL`
   - Value: `david@tegins.net` (or your preferred email)
   - Environment: Production, Preview, Development (select all)

### Step 3: Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain in Resend:
1. Go to Resend dashboard → **Domains**
2. Add your domain (e.g., `tegins.net`)
3. Add the DNS records they provide
4. Update the `from` field in `api/send-email.ts` to use your verified domain

**For now, you can use the default:** `onboarding@resend.dev` (works for testing)

### Step 4: Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Vercel will automatically detect the `/api` folder and deploy it
3. Or manually deploy: `vercel --prod`

### Step 5: Test the Form

1. Visit your deployed site
2. Fill out the contact form
3. Submit it
4. Check your email inbox (the email specified in `RECIPIENT_EMAIL`)

## 🎯 How It Works

1. User fills out the contact form
2. Form submits to `/api/send-email` endpoint
3. Vercel serverless function receives the data
4. Resend sends the email to your inbox
5. User sees success/error message

## 📧 Email Format

The email you receive will include:
- Name
- Email (reply-to address)
- Phone
- Insurance Type
- Additional Message (if provided)

## 🔧 Troubleshooting

**Email not sending?**
- Check that `RESEND_API_KEY` is set in Vercel
- Check Vercel function logs: Vercel Dashboard → Your Project → Functions → View Logs
- Verify your Resend API key is valid

**Getting errors?**
- Make sure Resend package is installed: `npm install resend`
- Check that the API route is accessible at `/api/send-email`
- Verify environment variables are set correctly

## 💰 Cost

- **Resend Free Tier:** 3,000 emails/month
- **Vercel:** Free tier includes serverless functions
- **Total Cost:** $0/month (as long as you stay under limits)

## 📝 Next Steps

1. Test locally (you'll need to set up local environment variables)
2. Deploy to Vercel
3. Set environment variables in Vercel dashboard
4. Test the live form
5. Verify your domain in Resend (optional, for better deliverability)

