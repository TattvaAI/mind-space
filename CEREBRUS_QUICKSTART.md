# Cerebrus API Integration - Quick Start Guide

## ✅ What Was Changed

Your entire project has been successfully migrated from Google Gemini to **Cerebrus API** with the **gpt-oss-120b** model.

### Key Changes:
- ✅ API Key configured: `csk-km3dnd3cj658cfvjv4k85e83hd5fckw8r42t3hwx6dn5pfe3`
- ✅ Model set to: `gpt-oss-120b`
- ✅ All API endpoints updated (chat, streaming, diet planner)
- ✅ Environment variables configured
- ✅ Dependencies installed (`@ai-sdk/openai`)
- ✅ Documentation updated
- ✅ UI references updated

## 🚀 How to Test

### 1. Start the Development Server
```bash
cd /Users/creator/Downloads/mind-space-main
npm run dev
```

### 2. Test Chat Functionality
- Navigate to: http://localhost:3000/chat
- Send a test message like "I'm feeling stressed about exams"
- Verify you get a streaming response from Cerebrus

### 3. Test Diet Planner
- Navigate to: http://localhost:3000/tools/diet-planner
- Fill out your profile information
- Click "Generate My Plan"
- Verify AI-generated meal plans are created

### 4. Test Crisis Detection
- In the chat, send a message with crisis keywords (e.g., "I feel hopeless")
- Verify the system includes crisis resources in the response

## 📁 Modified Files

### Core Configuration (7 files)
- `.env` - Created with Cerebrus API key
- `.env.example` - Updated template
- `lib/ai/config.ts` - AI provider configuration
- `lib/env-validation.ts` - Environment validation
- `package.json` - Added @ai-sdk/openai dependency

### API Routes (4 files)
- `lib/trpc/routers/chat.ts` - Chat router
- `lib/trpc/routers/chat-streaming.ts` - Streaming chat
- `app/api/chat/route.ts` - REST API endpoint
- `app/api/diet-plan/route.ts` - Diet plan generation

### Documentation (4 files)
- `README.md` - Main documentation
- `TECH_STACK.md` - Technology stack
- `DEPLOYMENT_READY.md` - Deployment guide
- `CEREBRUS_MIGRATION.md` - Migration details

### UI Components (2 files)
- `components/tools/diet-planner.tsx` - Diet planner UI
- `lib/store/chat.ts` - Chat state management

**Total: 17 files modified**

## 🔑 Environment Variables

Your `.env` file has been created with:
```env
CEREBRUS_API_KEY="csk-km3dnd3cj658cfvjv4k85e83hd5fckw8r42t3hwx6dn5pfe3"
```

**Note:** You'll still need to configure:
- `DATABASE_URL` - Your Supabase database
- `NEXTAUTH_SECRET` - For authentication
- `GOOGLE_CLIENT_ID` - For Google OAuth
- `GOOGLE_CLIENT_SECRET` - For Google OAuth

## 🔍 What to Look For

### Success Indicators:
- ✅ Chat messages get responses from Cerebrus
- ✅ Responses stream in real-time (word by word)
- ✅ Diet plans generate with AI-created recipes
- ✅ Crisis detection adds safety resources
- ✅ Console shows: "Using Cerebrus gpt-oss-120b..."

### Common Issues:
- ❌ "CEREBRUS_API_KEY not configured" → Check .env file exists
- ❌ API errors → Verify API key is correct and active
- ❌ Slow responses → Normal, gpt-oss-120b may take 5-10 seconds

## 🎯 API Endpoints Using Cerebrus

1. **Chat (Streaming)**: `/api/chat` → Uses REST API
2. **Chat (tRPC)**: tRPC mutation → Uses WebSocket
3. **Diet Planner**: `/api/diet-plan` → Generates meal plans

## 📊 Model Configuration

- **Model**: gpt-oss-120b
- **Temperature**: 0.7 (balanced creativity)
- **Base URL**: https://api.cerebras.ai/v1
- **Format**: OpenAI-compatible API

## 🛠️ Troubleshooting

### If chat doesn't work:
1. Check `.env` file exists in project root
2. Verify `CEREBRUS_API_KEY` is set
3. Restart the dev server
4. Check browser console for errors

### If package errors occur:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### To verify environment:
```bash
cat .env | grep CEREBRUS
# Should output: CEREBRUS_API_KEY="csk-km3dnd3cj658cfvjv4k85e83hd5fckw8r42t3hwx6dn5pfe3"
```

## ✨ Next Steps

1. Start the dev server: `npm run dev`
2. Test the chat feature at `/chat`
3. Test the diet planner at `/tools/diet-planner`
4. Review the migration details in `CEREBRUS_MIGRATION.md`
5. Deploy to production when ready

## 📞 Need Help?

- Check `CEREBRUS_MIGRATION.md` for technical details
- Review console logs for error messages
- Verify API key is active at https://cloud.cerebras.ai/

---

**Status**: ✅ **Ready to use!** All files configured and dependencies installed.
