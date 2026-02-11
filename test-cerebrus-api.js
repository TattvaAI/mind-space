#!/usr/bin/env node

/**
 * Test script to verify Cerebrus API key
 */

const API_KEY = 'csk-km3dnd3cj658cfvjv4k85e83hd5fckw8r42t3hwx6dn5pfe3'
const BASE_URL = 'https://api.cerebras.ai/v1'

async function testCerebrusAPI() {
  console.log('🔍 Testing Cerebrus API Key...\n')
  console.log(`API Key: ${API_KEY.substring(0, 10)}...${API_KEY.substring(API_KEY.length - 4)}`)
  console.log(`Base URL: ${BASE_URL}\n`)

  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-oss-120b',
        messages: [
          {
            role: 'user',
            content: 'Hello! Please respond with a simple greeting to confirm the API is working.',
          },
        ],
        max_tokens: 50,
        temperature: 0.7,
      }),
    })

    console.log(`📡 Response Status: ${response.status} ${response.statusText}\n`)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ API Request Failed!')
      console.error('Error Details:', errorText)

      if (response.status === 401) {
        console.error('\n🔑 Authentication Error: The API key is invalid or expired.')
      } else if (response.status === 403) {
        console.error(
          '\n🚫 Forbidden: The API key does not have permission to access this resource.',
        )
      } else if (response.status === 429) {
        console.error('\n⏱️  Rate Limit: Too many requests. Please try again later.')
      }

      return false
    }

    const data = await response.json()

    console.log('✅ API Key is WORKING!\n')
    console.log('Response Data:')
    console.log(JSON.stringify(data, null, 2))

    if (data.choices && data.choices[0] && data.choices[0].message) {
      console.log('\n💬 AI Response:', data.choices[0].message.content)
    }

    return true
  } catch (error) {
    console.error('❌ Error testing API:')
    console.error(error.message)

    if (error.code === 'ENOTFOUND') {
      console.error(
        '\n🌐 Network Error: Could not reach the API endpoint. Check your internet connection.',
      )
    }

    return false
  }
}

// Run the test
testCerebrusAPI()
  .then((success) => {
    process.exit(success ? 0 : 1)
  })
  .catch((error) => {
    console.error('Unexpected error:', error)
    process.exit(1)
  })
